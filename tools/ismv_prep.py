#!/usr/bin/env python3
"""Preproducción de artes para Ismael Studio.

Convierte las imágenes generadas (fondo liso verde/magenta o con alfa) en piezas listas
para Remotion: recorte de croma, registro contra una base, estabilización de cuadros de
sprite, parches de expresión, intermedios opcionales, capas de fondo, previsualización
y tiempos de voz por palabra.

Método completo: docs/technical/ANIMACION-POR-CAPAS.md
Uso:             python tools/ismv_prep.py <comando> --help
"""
from __future__ import annotations

import argparse
import fnmatch
import json
import math
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

IMG_EXT = {".png", ".webp", ".jpg", ".jpeg"}
DARK = np.array([0.07, 0.08, 0.12], np.float32)


# ------------------------------------------------------------------ E/S básica
def natural_key(p: Path):
    return [int(t) if t.isdigit() else t for t in re.split(r"(\d+)", p.stem)]


def list_images(folder: Path) -> list[Path]:
    return sorted((p for p in folder.iterdir() if p.suffix.lower() in IMG_EXT), key=natural_key)


def read_rgba(path: Path) -> tuple[np.ndarray, bool]:
    """RGBA recto en 0..1 y si el archivo trae canal alfa."""
    im = Image.open(path)
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    arr = np.asarray(im.convert("RGBA")).astype(np.float32) / 255.0
    return arr, has_alpha


def premultiply(rgba: np.ndarray) -> np.ndarray:
    P = rgba.copy()
    P[..., :3] *= P[..., 3:4]
    return P


def read_premult(path: Path) -> np.ndarray:
    rgba, _ = read_rgba(path)
    return premultiply(rgba)


def write_rgba(path: Path, P: np.ndarray) -> None:
    """Guarda un RGBA premultiplicado como PNG recto."""
    path.parent.mkdir(parents=True, exist_ok=True)
    a = np.clip(P[..., 3:4], 0, 1)
    rgb = np.where(a > 1e-4, P[..., :3] / np.maximum(a, 1e-4), 0)
    out = np.dstack([np.clip(rgb, 0, 1), a])
    Image.fromarray((out * 255 + 0.5).astype(np.uint8), "RGBA").save(path, compress_level=6)


def write_rgb(path: Path, rgb: np.ndarray) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray((np.clip(rgb, 0, 1) * 255 + 0.5).astype(np.uint8), "RGB").save(path, compress_level=6)


def composite(P: np.ndarray, bg) -> np.ndarray:
    bg = np.asarray(bg, np.float32)
    return P[..., :3] + (1 - P[..., 3:4]) * bg


def resize(P: np.ndarray, size: tuple[int, int]) -> np.ndarray:
    w, h = size
    if (P.shape[1], P.shape[0]) == (w, h):
        return P
    up = w > P.shape[1]
    out = cv2.resize(P, (w, h), interpolation=cv2.INTER_LANCZOS4 if up else cv2.INTER_AREA)
    return np.clip(out, 0, 1)


# ------------------------------------------------------------------ fondo y recorte
def border_pixels(rgb: np.ndarray, frac: float = 0.01) -> np.ndarray:
    h, w = rgb.shape[:2]
    b = max(3, int(min(h, w) * frac))
    return np.concatenate([
        rgb[:b].reshape(-1, 3), rgb[-b:].reshape(-1, 3),
        rgb[:, :b].reshape(-1, 3), rgb[:, -b:].reshape(-1, 3),
    ])


def analyze_bg(rgb255: np.ndarray) -> dict:
    """Clasifica el fondo por el borde: chroma (verde/magenta/azul), neutral (blanco/gris/tablero) o none."""
    ring = border_pixels(rgb255)
    med = np.median(ring, axis=0)
    uniform = float(np.mean(np.abs(ring - med).max(axis=1) < 40))
    sat = float(med.max() - med.min())
    if uniform < 0.55:
        kind = "none"
    elif sat > 110:
        kind = "chroma"
    else:
        kind = "neutral"
    chroma_frac = None
    if kind != "chroma":
        # Capas de fondo: el croma cubre solo parte del borde (cielo, ventana, puerta), así que la
        # mediana del borde no lo ve. Si hay una mancha de verde o magenta puro, el fondo es croma.
        s = rgb255[::4, ::4].reshape(-1, 3)
        r, g, b = s[:, 0], s[:, 1], s[:, 2]
        cands = [((g > 170) & (g - np.maximum(r, b) > 120)),
                 ((r > 170) & (b > 170) & (np.minimum(r, b) - g > 120))]
        best = max(cands, key=lambda m: m.mean())
        if best.mean() >= 0.004:
            kind, med, chroma_frac = "chroma", np.median(s[best], axis=0), round(float(best.mean()), 3)
    checker = False
    if kind != "chroma":
        v = ring.mean(axis=1)
        s = ring.max(axis=1) - ring.min(axis=1)
        light = (v > 200) & (s < 14)
        if light.mean() > 0.6:
            vals = v[light]
            checker = bool(np.percentile(vals, 80) - np.percentile(vals, 20) >= 6)
    out = {"kind": kind, "color": [int(round(c)) for c in med], "uniform": round(uniform, 3), "checker": checker}
    if chroma_frac is not None:
        out["chromaFrac"] = chroma_frac
    return out


def key_chroma(rgb: np.ndarray, bg: np.ndarray):
    hi = bg > 127
    if hi.all() or (~hi).all():
        return key_neutral(rgb, bg)
    prim = rgb[..., hi].min(axis=-1)
    sec = rgb[..., ~hi].max(axis=-1)
    d = prim - sec
    dbg = float(bg[hi].min() - bg[~hi].max())
    top, low = 0.92 * dbg, max(10.0, 0.06 * dbg)
    a = np.clip((top - d) / (top - low), 0, 1)
    fg = (rgb - (1 - a)[..., None] * bg) / np.maximum(a, 0.03)[..., None]
    fg = np.clip(fg, 0, 255)
    if hi.sum() == 1:  # verde o azul: despill solo en el borde
        c = int(np.argmax(hi))
        o1, o2 = [i for i in range(3) if i != c]
        band = cv2.dilate((a < 0.995).astype(np.uint8), np.ones((5, 5), np.uint8)) > 0
        # En lo semitransparente (halos de luz, humo, bordes suaves) el verde se limita al promedio de
        # los otros dos canales: un halo cálido pintado sobre verde queda naranja y no amarillo limón.
        lim = np.where(a < 0.97, (fg[..., o1] + fg[..., o2]) / 2, np.maximum(fg[..., o1], fg[..., o2]))
        fg[..., c] = np.where(band, np.minimum(fg[..., c], lim), fg[..., c])
    return a, fg


def key_neutral(rgb: np.ndarray, bg: np.ndarray, tol: float = 26.0):
    """Blanco, gris o tablero pintado: solo es fondo lo conectado al borde."""
    dist = np.abs(rgb - bg).max(axis=-1)
    cand = (dist < tol).astype(np.uint8)
    _, lab = cv2.connectedComponents(cand, connectivity=4)
    edge = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    edge = edge[edge != 0]
    bgm = np.isin(lab, edge) & (cand > 0)
    a = (~bgm).astype(np.float32)
    band = (cv2.dilate(bgm.astype(np.uint8), np.ones((5, 5), np.uint8)) > 0) & ~bgm
    soft = np.clip((dist - tol * 0.35) / (tol * 1.6), 0, 1)
    a = np.where(band, soft, a)
    fg = (rgb - (1 - a)[..., None] * bg) / np.maximum(a, 0.03)[..., None]
    return a, np.clip(fg, 0, 255)


def clean_alpha(a: np.ndarray) -> np.ndarray:
    a = np.clip((a - 0.10) / 0.82, 0, 1)
    m = (a > 0.5).astype(np.uint8)
    n, lab, stats, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
    min_area = a.size * 0.0002
    small = [i for i in range(1, n) if stats[i, cv2.CC_STAT_AREA] < min_area]
    if small:
        a[np.isin(lab, small)] = 0
    a[a < 0.02] = 0
    return a


def key_image(rgba: np.ndarray, has_alpha: bool, mode: str = "auto") -> tuple[np.ndarray, dict]:
    """Devuelve RGBA premultiplicado y cómo se obtuvo el alfa."""
    if mode in ("auto", "alpha", "layer") and has_alpha and rgba[..., 3].min() < 0.98:
        return premultiply(rgba), {"source": "alpha"}
    rgb = rgba[..., :3] * 255.0
    bg = analyze_bg(rgb)
    kind = bg["kind"] if mode in ("auto", "alpha", "layer") else mode
    if mode == "layer" and kind == "neutral" and not bg["checker"]:
        kind = "opaque"  # una capa de escenario sin croma es opaca (cielo o pared lisa no son fondo)
    if kind in ("none", "opaque"):
        P = premultiply(np.dstack([rgba[..., :3], np.ones(rgb.shape[:2], np.float32)]))
        return P, {"source": "opaque", "bg": bg}
    color = np.array(bg["color"], np.float32)
    if kind == "green":
        color = np.array([0, 255, 0], np.float32) if bg["kind"] != "chroma" else color
        kind = "chroma"
    if kind == "magenta":
        color = np.array([255, 0, 255], np.float32) if bg["kind"] != "chroma" else color
        kind = "chroma"
    a, fg = key_chroma(rgb, color) if kind == "chroma" else key_neutral(rgb, color)
    a = clean_alpha(a)
    P = np.dstack([fg / 255.0 * a[..., None], a]).astype(np.float32)
    return P, {"source": f"key-{kind}", "bg": bg}


def load_keyed(path: Path, mode: str = "auto", scale: float = 1.0, size=None):
    rgba, has_alpha = read_rgba(path)
    P, info = key_image(rgba, has_alpha, mode)
    if size is not None:
        P = resize(P, size)
    elif scale != 1.0:
        P = resize(P, (round(P.shape[1] * scale), round(P.shape[0] * scale)))
    return P, info


# ------------------------------------------------------------------ registro y cambios
def gray(P: np.ndarray, bgv: float = 0.5) -> np.ndarray:
    comp = composite(P, [bgv] * 3)
    return cv2.cvtColor((np.clip(comp, 0, 1) * 255).astype(np.uint8), cv2.COLOR_RGB2GRAY)


def register(ref: np.ndarray, mov: np.ndarray, mask: np.ndarray | None = None,
             limit: float = 0.06, min_cc: float = 0.8):
    """Afín que lleva coordenadas de `ref` a `mov` (ECC). Devuelve (warp, correlación o None).

    Una edición fiel solo se corre unos píxeles: si el resultado se desplaza o escala más
    que `limit` (fracción del lienzo) o correlaciona poco, se descarta y se usa la identidad.
    """
    h, w = ref.shape[:2]
    s = min(1.0, 900.0 / max(h, w))
    sz = (max(8, int(w * s)), max(8, int(h * s)))
    g0 = cv2.resize(gray(ref), sz, interpolation=cv2.INTER_AREA).astype(np.float32)
    g1 = cv2.resize(gray(mov), sz, interpolation=cv2.INTER_AREA).astype(np.float32)
    m = None if mask is None else cv2.resize(mask.astype(np.uint8) * 255, sz, interpolation=cv2.INTER_NEAREST)
    warp = np.eye(2, 3, dtype=np.float32)
    crit = (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 300, 1e-6)
    try:
        cc, warp = cv2.findTransformECC(g0, g1, warp, cv2.MOTION_AFFINE, crit, m, 5)
    except cv2.error:
        return np.eye(2, 3, dtype=np.float32), None
    warp[:, 2] /= s
    sc = math.sqrt(abs(np.linalg.det(warp[:, :2])))
    if (abs(sc - 1) > limit or abs(warp[0, 2]) > limit * w or abs(warp[1, 2]) > limit * h
            or cc < min_cc):
        return np.eye(2, 3, dtype=np.float32), None
    return warp, float(cc)


def apply_warp(P: np.ndarray, warp: np.ndarray) -> np.ndarray:
    h, w = P.shape[:2]
    return cv2.warpAffine(P, warp, (w, h), flags=cv2.INTER_LINEAR | cv2.WARP_INVERSE_MAP,
                          borderMode=cv2.BORDER_REPLICATE)


def describe_warp(warp: np.ndarray, cc) -> dict:
    return {
        "dx": round(float(warp[0, 2]), 2), "dy": round(float(warp[1, 2]), 2),
        "scale": round(math.sqrt(abs(np.linalg.det(warp[:, :2]))), 4),
        "rotDeg": round(math.degrees(math.atan2(warp[1, 0], warp[0, 0])), 3),
        "cc": None if cc is None else round(cc, 4),
    }


def ellipse(r: int):
    return cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r + 1, 2 * r + 1))


def change_mask(ref: np.ndarray, mov: np.ndarray, thr: float = 0.11, grow: int = 10, feather: float = 6.0,
                close: int = 8, min_area: float = 0.0004):
    """Máscara suave (0..1) de lo que cambió entre dos RGBA premultiplicados ya registrados.

    `close` une rasgos cercanos (cejas, ojos, boca) en una sola zona; `min_area` descarta
    ruido de compresión, como fracción del lienzo.
    """
    h, w = ref.shape[:2]
    d = np.abs(composite(ref, [0.5] * 3) - composite(mov, [0.5] * 3)).max(axis=-1)
    d = cv2.GaussianBlur(d, (0, 0), 1.2)
    m = (d > thr).astype(np.uint8)
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, ellipse(1))
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, ellipse(close))
    n, lab, stats, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
    keep = np.zeros(n, bool)
    keep[1:] = stats[1:, cv2.CC_STAT_AREA] >= h * w * min_area
    m = keep[lab].astype(np.uint8)
    inv = (1 - m).astype(np.uint8)  # rellenar huecos interiores
    flood = inv.copy()
    cv2.floodFill(flood, np.zeros((h + 2, w + 2), np.uint8), (0, 0), 2)
    m[(flood == 1)] = 1
    if grow > 0:
        m = cv2.dilate(m, ellipse(grow))
    mf = cv2.GaussianBlur(m.astype(np.float32), (0, 0), feather) if feather > 0 else m.astype(np.float32)
    ys, xs = np.nonzero(m)
    bbox = [int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1] if len(xs) else None
    return np.clip(mf, 0, 1), {"changed": round(float(m.mean()), 4), "bbox": bbox}


def region_mask(shape, boxes, feather: float = 12.0) -> np.ndarray:
    """Cajas normalizadas [x0, y0, x1, y1] (0..1) → máscara suave."""
    h, w = shape[:2]
    m = np.zeros((h, w), np.float32)
    for x0, y0, x1, y1 in boxes:
        m[int(y0 * h):int(math.ceil(y1 * h)), int(x0 * w):int(math.ceil(x1 * w))] = 1
    return cv2.GaussianBlur(m, (0, 0), feather) if feather > 0 else m


def align_to(ref: np.ndarray, mov: np.ndarray, limit: float = 0.06):
    """Registro en dos pasadas: global y luego solo con las zonas que no cambiaron."""
    if mov.shape[:2] != ref.shape[:2]:
        mov = resize(mov, (ref.shape[1], ref.shape[0]))
    warp, cc = register(ref, mov, limit=limit)
    aligned = apply_warp(mov, warp)
    m, _ = change_mask(ref, aligned)
    stable = ((ref[..., 3] > 0.5) | (aligned[..., 3] > 0.5)) & (m < 0.05)
    stable = cv2.erode(stable.astype(np.uint8), ellipse(4)) > 0
    if stable.mean() > 0.05:
        w2, cc2 = register(ref, mov, stable, limit=limit)
        if cc2 is not None:
            warp, cc = w2, cc2
            aligned = apply_warp(mov, warp)
    return aligned, warp, cc


# ------------------------------------------------------------------ QA y vídeo
def draw_label(img_u8: np.ndarray, text: str) -> None:
    text = text.encode("ascii", "replace").decode()
    cv2.rectangle(img_u8, (0, 0), (img_u8.shape[1], 26), (0, 0, 0), -1)
    cv2.putText(img_u8, text, (6, 18), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (235, 235, 235), 1, cv2.LINE_AA)


def qa_sheet(items, path: Path, tile_h: int = 420, cols: int = 6) -> None:
    """items: (etiqueta, RGBA premultiplicado, máscara de cambio o None)."""
    tiles = []
    for label, P, m in items:
        comp = composite(P, DARK)
        u8 = (np.clip(comp, 0, 1) * 255).astype(np.uint8)
        if m is not None:
            cnts, _ = cv2.findContours((m > 0.5).astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            cv2.drawContours(u8, cnts, -1, (255, 0, 200), max(2, P.shape[0] // 300))
        th = tile_h
        tw = int(round(u8.shape[1] * th / u8.shape[0]))
        t = cv2.resize(u8, (tw, th), interpolation=cv2.INTER_AREA)
        draw_label(t, label)
        tiles.append(t)
    if not tiles:
        return
    tw = max(t.shape[1] for t in tiles)
    rows = math.ceil(len(tiles) / cols)
    sheet = np.full((rows * tile_h, min(cols, len(tiles)) * tw, 3), 20, np.uint8)
    for i, t in enumerate(tiles):
        r, c = divmod(i, cols)
        sheet[r * tile_h:(r + 1) * tile_h, c * tw:c * tw + t.shape[1]] = t
    write_rgb(path, sheet.astype(np.float32) / 255.0)


def ffmpeg_writer(path: Path, w: int, h: int, fps: int):
    import imageio_ffmpeg

    path.parent.mkdir(parents=True, exist_ok=True)
    return subprocess.Popen(
        [imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
         "-s", f"{w}x{h}", "-r", str(fps), "-i", "-", "-c:v", "libx264", "-crf", "16", "-preset", "medium",
         "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(path)],
        stdin=subprocess.PIPE,
    )


def background(kind: str, w: int, h: int) -> np.ndarray:
    if kind == "green":
        return np.zeros((h, w, 3), np.float32) + np.array([0, 1, 0], np.float32)
    if kind == "checker":
        yy, xx = np.mgrid[0:h, 0:w]
        c = (((xx // 32) + (yy // 32)) % 2).astype(np.float32)
        return np.repeat((0.35 + 0.15 * c)[..., None], 3, axis=2)
    y = np.linspace(0, 1, h, dtype=np.float32)[:, None, None]
    top, bot = np.array([0.10, 0.12, 0.21], np.float32), np.array([0.03, 0.04, 0.08], np.float32)
    return np.broadcast_to(top * (1 - y) + bot * y, (h, w, 3)).copy()


# ------------------------------------------------------------------ comandos
def cmd_audit(args) -> None:
    paths: list[Path] = []
    for p in map(Path, args.paths):
        paths += [q for q in p.rglob("*") if q.suffix.lower() in IMG_EXT] if p.is_dir() else [p]
    for p in paths:
        rgba, has_alpha = read_rgba(p)
        h, w = rgba.shape[:2]
        notes = []
        if has_alpha and rgba[..., 3].min() < 0.98:
            a = rgba[..., 3]
            corners = [a[0, 0], a[0, -1], a[-1, 0], a[-1, -1]]
            notes.append(f"alfa real (esquinas {min(corners):.2f}, interior max {a.max():.2f})")
            status = "alfa"
        else:
            bg = analyze_bg(rgba[..., :3] * 255)
            if bg["checker"]:
                status = "TABLERO PINTADO"
                notes.append("el gris/blanco es píxel, no transparencia: recortar o regenerar")
            elif bg["kind"] == "chroma":
                status = "croma"
                notes.append(f"fondo liso {bg['color']} → recortable")
                P, _ = key_image(rgba, False)
                inside = P[..., 3] > 0.9
                if inside.any():
                    c = np.argmax(bg["color"])
                    rgb = P[..., :3] / np.maximum(P[..., 3:4], 1e-4) * 255
                    others = [i for i in range(3) if i != c]
                    risk = float(np.mean((rgb[..., c] - rgb[..., others].max(axis=-1) > 25)[inside]))
                    if risk > 0.01:
                        notes.append(f"OJO: {risk:.1%} del sujeto tiene el color del fondo")
            elif bg["kind"] == "neutral":
                status = "fondo neutro"
                notes.append(f"fondo {bg['color']}: recortable solo por borde; revisar halos")
            else:
                status = "opaca"
                notes.append("sin fondo uniforme (escena completa o capa opaca)")
        print(f"{p}\n    {w}x{h}  {status}  " + " | ".join(notes))


def cmd_key(args) -> None:
    out = Path(args.out)
    for src in map(Path, args.inputs):
        P, info = load_keyed(src, args.mode, args.scale)
        dst = out / (src.stem + ".png")
        write_rgba(dst, P)
        print(f"{src.name} → {dst}  ({info['source']}, {P.shape[1]}x{P.shape[0]})")


def matches(name: str, cfg_map: dict) -> list:
    boxes = []
    for pattern, bxs in (cfg_map or {}).items():
        if fnmatch.fnmatch(name, pattern):
            boxes += bxs
    return boxes


def set_manifest(base: np.ndarray, prefix: str, src: Path, scale: float, base_name: str, base_key: str) -> dict:
    H, W = base.shape[:2]
    ys, xs = np.nonzero(base[..., 3] > 0.5)
    bbox = [int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1] if len(xs) else [0, 0, W, H]
    return {
        "set": prefix, "source": str(src).replace("\\", "/"), "generated": date.today().isoformat(),
        "canvas": {"width": W, "height": H}, "scale": scale,
        "anchor": {"x": round((bbox[0] + bbox[2]) / 2), "y": bbox[3], "note": "centro inferior de la figura"},
        "bbox": bbox, "base": {"name": base_name, "file": f"{prefix}-{base_name}.png", "key": base_key},
        "poses": [], "patches": [], "warnings": [],
    }


def stabilize_sequence(base, base_name, frames, cfg, thr, stabilize, out, prefix, align_limit, big_change_msg):
    """Registra cada cuadro contra la base y fija lo que no cambió al cuadro anterior (o a la base).

    frames: [(nombre, RGBA premultiplicado, info)]. Escribe los PNG y devuelve
    (entradas del manifiesto, elementos de QA, {nombre: cuadro estabilizado}).
    """
    entries, qa_items, done = [], [], {base_name: base}
    prev_name, prev = base_name, base
    for name, mov, info in frames:
        aligned, warp, cc = align_to(base, mov, limit=align_limit)
        ref = prev if cfg.get("chain", True) else base
        m, st = change_mask(ref, aligned, thr)
        boxes = matches(name + ".png", cfg.get("regions"))
        if boxes:
            m = m * region_mask(m.shape, boxes)
        S = ref * (1 - m[..., None]) + aligned * m[..., None] if stabilize else aligned
        write_rgba(out / f"{prefix}-{name}.png", S)
        _, vs_base = change_mask(base, S, thr)
        entry = {"name": name, "file": f"{prefix}-{name}.png", "key": info["source"],
                 "pinnedTo": base_name if ref is base else prev_name,
                 "changedVsPrev": st["changed"], "changedVsBase": vs_base["changed"], "bbox": vs_base["bbox"],
                 "align": describe_warp(warp, cc), "warnings": []}
        if cc is None:
            entry["warnings"].append("registro fallido: se usó la imagen sin alinear")
        if st["changed"] > 0.30:
            entry["warnings"].append(big_change_msg)
        entries.append(entry)
        qa_items.append((f"{name} ({st['changed']:.0%})", S, m))
        done[name] = S
        prev_name, prev = name, S
    return entries, qa_items, done


def print_set_summary(manifest: dict, out: Path, qa_path: Path) -> None:
    c = manifest["canvas"]
    print(f"Set '{manifest['set']}': {c['width']}x{c['height']}, {len(manifest['poses'])} cuadros, "
          f"{len(manifest['patches'])} parches → {out}")
    for e in manifest["poses"] + manifest["patches"]:
        flag = ("  ⚠ " + "; ".join(e["warnings"])) if e["warnings"] else ""
        ch = e.get("changedVsPrev", e.get("changed"))
        print(f"  {e['name']:<22} cambio {ch:.1%}  registro dx={e['align']['dx']} dy={e['align']['dy']} "
              f"esc={e['align']['scale']}{flag}")
    for wmsg in manifest["warnings"]:
        print("  ⚠", wmsg)
    print(f"QA: {qa_path}")


def cmd_set(args) -> None:
    src, out = Path(args.src), Path(args.out)
    prefix = args.prefix or out.name
    qa_dir = Path(args.qa) if args.qa else src / "_qa"
    cfg_path = src / "config.json"
    cfg = json.loads(cfg_path.read_text("utf-8")) if cfg_path.exists() else {}
    scale = args.scale or cfg.get("scale", 1.0)
    thr = cfg.get("threshold", 0.11)
    files = [p for p in list_images(src) if not p.stem.startswith("_")]
    base_f = next((p for p in files if p.stem == "base"), None)
    if base_f is None:
        sys.exit(f"Falta base.png en {src}")
    poses = sorted((p for p in files if p.stem.startswith("pose-")), key=natural_key)
    patches = [p for p in files if p is not base_f and p not in poses
               and p.stem != "reference" and not p.stem.startswith("sprite-")]

    base, base_info = load_keyed(base_f, cfg.get("key", "auto"), scale)
    H, W = base.shape[:2]
    manifest = set_manifest(base, prefix, src, scale, "base", base_info["source"])
    write_rgba(out / f"{prefix}-base.png", base)
    stabilize = cfg.get("stabilize", True) and not args.no_stabilize
    loaded = []
    for p in poses:
        mov, info = load_keyed(p, cfg.get("key", "auto"), size=(W, H))
        loaded.append((p.stem, mov, info))
    entries, pose_qa, frames = stabilize_sequence(
        base, "base", loaded, cfg, thr, stabilize, out, prefix, 0.06,
        "cambia más del 30 % de la imagen: no parece una edición fiel de la base; "
        "se verá como dibujo distinto (revisar o regenerar)")
    manifest["poses"] = entries
    qa_items = [("base", base, None)] + pose_qa

    for p in patches:
        stem = p.stem
        on = "base"
        if "@" in stem:
            stem, on = stem.split("@", 1)
        if on not in frames:
            manifest["warnings"].append(f"{p.name}: no existe la pose '{on}'; se omitió")
            continue
        ref = frames[on]
        mov, info = load_keyed(p, cfg.get("key", "auto"), size=(W, H))
        aligned, warp, cc = align_to(ref, mov)
        m, st = change_mask(ref, aligned, thr, grow=8, feather=5, close=14, min_area=0.0001)
        boxes = matches(p.name, cfg.get("regions"))
        if boxes:
            m = m * region_mask(m.shape, boxes, feather=8)
        patch = aligned * m[..., None]
        suffix = "" if on == "base" else f"-on-{on}"
        fname = f"{prefix}-{stem}{suffix}.png"
        write_rgba(out / fname, patch)
        entry = {"name": stem, "on": on, "file": fname, "key": info["source"], "changed": st["changed"],
                 "bbox": st["bbox"], "align": describe_warp(warp, cc), "warnings": []}
        if st["changed"] > 0.2:
            entry["warnings"].append("el parche abarca mucho más que la cara: limitar con 'regions' en config.json o regenerar la edición")
        if cc is None:
            entry["warnings"].append("registro fallido")
        manifest["patches"].append(entry)
        shown = patch + ref * (1 - patch[..., 3:4])
        qa_items.append((f"{stem}@{on}", shown, m))

    (out / f"{prefix}.set.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), "utf-8")
    qa_sheet(qa_items, qa_dir / f"{prefix}-qa.png")
    print_set_summary(manifest, out, qa_dir / f"{prefix}-qa.png")


def split_grid(P: np.ndarray, cols: int, rows: int) -> list[np.ndarray]:
    """Corta una hoja en celdas iguales (orden de lectura) del mismo tamaño."""
    H, W = P.shape[:2]
    cells = []
    for r in range(rows):
        for c in range(cols):
            y0, y1 = round(r * H / rows), round((r + 1) * H / rows)
            x0, x1 = round(c * W / cols), round((c + 1) * W / cols)
            cells.append(P[y0:y1, x0:x1])
    ch = min(c.shape[0] for c in cells)
    cw = min(c.shape[1] for c in cells)
    return [c[:ch, :cw].copy() for c in cells]


def isolate_main(P: np.ndarray) -> np.ndarray:
    """Quita de una celda los trozos que asoman de las celdas vecinas."""
    a = P[..., 3]
    m = (a > 0.3).astype(np.uint8)
    n, lab, stats, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
    if n <= 2:
        return P
    h, w = a.shape
    big = stats[1:, cv2.CC_STAT_AREA].max()
    keep = np.zeros(n, bool)
    for i in range(1, n):
        x, y, bw, bh, area = stats[i]
        touches_side = x == 0 or y == 0 or x + bw >= w
        keep[i] = area >= 0.25 * big or (area >= 0.03 * big and not touches_side)
    km = cv2.dilate(keep[lab].astype(np.uint8), ellipse(2)) > 0
    return P * km[..., None]


def cmd_sprites(args) -> None:
    src, out = Path(args.sheet), Path(args.out)
    prefix = args.prefix or out.name
    qa_dir = Path(args.qa) if args.qa else src.parent / "_qa"
    cols, rows = map(int, args.grid.lower().split("x"))
    sheet, info = load_keyed(src, args.mode)
    cells = [isolate_main(c) for c in split_grid(sheet, cols, rows)]
    n = args.count or len(cells)
    cells = cells[:n]
    names = args.names.split(",") if args.names else [f"f{i + 1:02d}" for i in range(n)]
    if len(names) != n:
        sys.exit(f"--names tiene {len(names)} nombres y la hoja {n} cuadros")
    if args.scale != 1.0:
        cells = [resize(c, (round(c.shape[1] * args.scale), round(c.shape[0] * args.scale))) for c in cells]
    ch, cw = cells[0].shape[:2]
    cfg = {"chain": True}
    manifest = set_manifest(cells[0], prefix, src, args.scale, names[0], info["source"])
    manifest["sheet"] = {"file": src.name, "grid": f"{cols}x{rows}", "frames": names}
    if ch < 1100:
        manifest["warnings"].append(
            f"cada cuadro mide {cw}x{ch}: se verá blando a pantalla completa; amplía la hoja ×2 en el generador "
            "antes de entregarla o usa --scale 2 (más blando)")
    write_rgba(out / f"{prefix}-{names[0]}.png", cells[0])
    entries, qa_items, _ = stabilize_sequence(
        cells[0], names[0], [(names[i], cells[i], info) for i in range(1, n)], cfg, args.threshold,
        not args.no_stabilize, out, prefix, 0.10,
        "cambia más del 30 % respecto del cuadro anterior: el salto se verá brusco o el generador "
        "redibujó la figura (revisar)")
    manifest["poses"] = entries
    (out / f"{prefix}.set.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), "utf-8")
    qa_sheet([(names[0], cells[0], None)] + qa_items, qa_dir / f"{prefix}-qa.png")
    print_set_summary(manifest, out, qa_dir / f"{prefix}-qa.png")


def cmd_sheet(args) -> None:
    src, out = Path(args.sheet), Path(args.out)
    prefix = args.prefix or src.stem
    P, _ = load_keyed(src, args.mode)
    m = (P[..., 3] > 0.5).astype(np.uint8)
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, ellipse(8))
    n, lab, stats, cent = cv2.connectedComponentsWithStats(m, connectivity=8)
    comps = [i for i in range(1, n) if stats[i, cv2.CC_STAT_AREA] > m.size * 0.02]
    rowh = np.median([stats[i, cv2.CC_STAT_HEIGHT] for i in comps]) if comps else 1
    comps.sort(key=lambda i: (round(cent[i][1] / rowh), cent[i][0]))
    names = args.names.split(",") if args.names else [f"{k + 1:02d}" for k in range(len(comps))]
    pad = 16
    boxes = [stats[i, :4] for i in comps]
    cw = max(b[2] for b in boxes) + 2 * pad
    ch = max(b[3] for b in boxes) + 2 * pad
    for k, (i, (x, y, w, h)) in enumerate(zip(comps, boxes)):
        cell = np.zeros((ch, cw, 4), np.float32)
        own = cv2.dilate((lab[y:y + h, x:x + w] == i).astype(np.uint8), ellipse(3))
        crop = P[y:y + h, x:x + w] * own[..., None]
        ox, oy = (cw - w) // 2, ch - h - pad
        cell[oy:oy + h, ox:ox + w] = crop
        name = names[k] if k < len(names) else f"{k + 1:02d}"
        write_rgba(out / f"{prefix}-{name}.png", cell)
    print(f"{len(comps)} celdas de {cw}x{ch} → {out} (alineadas abajo al centro)")


def cmd_inbetween(args) -> None:
    A, B = read_premult(Path(args.a)), read_premult(Path(args.b))
    if A.shape != B.shape:
        sys.exit("Los dos cuadros deben tener el mismo lienzo (procésalos con 'set').")
    m, st = change_mask(A, B, grow=14, feather=8)
    dis = cv2.DISOpticalFlow_create(cv2.DISOPTICAL_FLOW_PRESET_MEDIUM)
    dis.setPatchSize(24)
    dis.setPatchStride(6)
    dis.setVariationalRefinementIterations(8)
    ga, gb = gray(A), gray(B)
    f_ab = cv2.GaussianBlur(dis.calc(ga, gb, None), (0, 0), 7)
    f_ba = cv2.GaussianBlur(dis.calc(gb, ga, None), (0, 0), 7)
    h, w = A.shape[:2]
    gx, gy = np.meshgrid(np.arange(w, dtype=np.float32), np.arange(h, dtype=np.float32))

    def warp(P, f, s):
        return cv2.remap(P, gx - s * f[..., 0], gy - s * f[..., 1], cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)

    out = Path(args.out)
    prefix = args.prefix or f"{Path(args.a).stem}-to-{Path(args.b).stem.split('-')[-1]}"
    for i in range(1, args.n + 1):
        t = i / (args.n + 1)
        wmix = float(np.clip((t - 0.2) / 0.6, 0, 1))
        wmix = wmix * wmix * (3 - 2 * wmix)
        mid = (1 - wmix) * warp(A, f_ab, t) + wmix * warp(B, f_ba, 1 - t)
        P = A * (1 - m[..., None]) + mid * m[..., None]
        write_rgba(out / f"{prefix}-{i:02d}.png", P)
    print(f"{args.n} intermedios ({st['changed']:.0%} del cuadro cambia) → {out}")


def parse_item(item: str):
    holds = 3
    head, _, tail = item.rpartition(":")
    if head and tail.isdigit():
        item, holds = head, int(tail)
    return [Path(p) for p in item.split("+")], holds


def cmd_preview(args) -> None:
    cache: dict[Path, np.ndarray] = {}

    def get(p: Path) -> np.ndarray:
        if p not in cache:
            cache[p] = read_premult(p)
        return cache[p]

    items = [parse_item(i) for i in args.items]
    first = get(items[0][0][0])
    H, W = first.shape[:2]
    W2, H2 = W + W % 2, H + H % 2
    bg = background(args.bg, W2, H2)
    writer = ffmpeg_writer(Path(args.out), W2, H2, args.fps)
    f = 0
    for paths, holds in items:
        P = np.zeros_like(first)
        for p in paths:
            L = get(p)
            P = L + P * (1 - L[..., 3:4])
        for _ in range(holds):
            Q = P
            if args.breathe:
                s = 1.004 + 0.004 * math.sin(f / args.fps * 2 * math.pi * 0.3)
                M = np.array([[s, 0, (1 - s) * W / 2], [0, s, (1 - s) * H]], np.float32)
                Q = cv2.warpAffine(P, M, (W, H), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
            canvas = np.zeros((H2, W2, 4), np.float32)
            canvas[:H, :W] = Q
            frame = composite(canvas, 0) + bg * (1 - canvas[..., 3:4])
            writer.stdin.write((np.clip(frame, 0, 1) * 255).astype(np.uint8).tobytes())
            f += 1
    writer.stdin.close()
    writer.wait()
    print(f"{f} cuadros ({f / args.fps:.2f} s) → {args.out}")


def cmd_layers(args) -> None:
    src, out = Path(args.src), Path(args.out)
    prefix = args.prefix or out.name
    qa_dir = Path(args.qa) if args.qa else src / "_qa"
    full_f = next((p for p in list_images(src) if p.stem == "full"), None)
    if full_f is None:
        sys.exit(f"Falta full.png (escena completa de referencia) en {src}")
    full, _ = load_keyed(full_f, "opaque")
    tw, th = map(int, args.size.lower().split("x"))
    fh, fw = full.shape[:2]
    if abs(fw / fh - tw / th) > 0.03:
        print(f"⚠ proporción distinta: arte {fw}x{fh} ({fw / fh:.3f}) vs pedido {tw}x{th} ({tw / th:.3f}); se recorta al centro")

    def cover(P):
        s = max(tw / P.shape[1], th / P.shape[0])
        R = resize(P, (math.ceil(P.shape[1] * s), math.ceil(P.shape[0] * s)))
        y0, x0 = (R.shape[0] - th) // 2, (R.shape[1] - tw) // 2
        return R[y0:y0 + th, x0:x0 + tw]

    layers = sorted((p for p in list_images(src) if re.fullmatch(r"l\d+", p.stem)), key=natural_key)
    stack = np.zeros((th, tw, 4), np.float32)
    meta = {"set": prefix, "source": str(src).replace("\\", "/"), "generated": date.today().isoformat(),
            "size": {"width": tw, "height": th}, "layers": []}
    outs = []
    for p in layers:
        with Image.open(p) as im:
            lw, lh = im.size
        if abs(lw / lh - fw / fh) > 0.02:
            print(f"⚠ {p.name}: proporción {lw}x{lh} distinta de full {fw}x{fh}; se deforma al registrarla (pedirla como edición de full)")
        L, info = load_keyed(p, "layer", size=(fw, fh))
        mask = L[..., 3] > 0.5
        warp, cc = register(full, L, mask if mask.mean() < 0.98 else None, limit=0.03, min_cc=0.85)
        L = cover(apply_warp(L, warp))
        write_rgba(out / f"{prefix}-{p.stem}.png", L)
        a = L[..., 3]
        entry = {"file": f"{prefix}-{p.stem}.png", "key": info["source"], "opaque": bool(a.min() > 0.99),
                 "coverage": round(float((a > 0.5).mean()), 3), "align": describe_warp(warp, cc), "depth": None}
        if cc is None:
            entry["warning"] = "no se pudo registrar contra full (¿no es una edición de la escena?): se usó sin mover"
            print(f"⚠ {p.name}: {entry['warning']}")
        meta["layers"].append(entry)
        stack = L + stack * (1 - L[..., 3:4])
        outs.append((p.stem, L))
    F = cover(full)
    write_rgba(out / f"{prefix}-full-reference.png", F)
    diff = float(np.abs(composite(stack, DARK) - composite(F, DARK)).mean())
    meta["stackVsFull"] = round(diff, 4)
    if layers and meta["layers"][0]["opaque"] is False:
        meta["warning"] = "la capa más lejana no es opaca: quedarán huecos"
        print(f"⚠ {meta['warning']} ({layers[0].name})")
    (out / f"{prefix}.layers.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), "utf-8")
    qa_sheet([(n, L, None) for n, L in outs] + [("apiladas", stack, None), ("referencia", F, None)],
             qa_dir / f"{prefix}-qa.png", tile_h=520)
    if args.depths:
        depths = [float(d) for d in args.depths.split(",")]
        vw, vh = 1080, 1920
        writer = ffmpeg_writer(qa_dir / f"{prefix}-parallax.mp4", vw, vh, 30)
        n = 90
        for i in range(n):
            t = i / (n - 1)
            cam = (t - 0.5) * args.pan
            frame = np.zeros((vh, vw, 3), np.float32)
            frame += np.array([1, 0, 1], np.float32)  # magenta = hueco sin arte
            for (_, L), d in zip(outs, depths):
                s = max(vw / tw, vh / th) * args.zoom
                M = np.array([[s, 0, vw / 2 - s * tw / 2 - cam * d], [0, s, vh / 2 - s * th / 2]], np.float32)
                Lw = cv2.warpAffine(L, M, (vw, vh), flags=cv2.INTER_LINEAR, borderValue=(0, 0, 0, 0))
                frame = Lw[..., :3] + frame * (1 - Lw[..., 3:4])
            writer.stdin.write((np.clip(frame, 0, 1) * 255).astype(np.uint8).tobytes())
        writer.stdin.close()
        writer.wait()
        print(f"Prueba de parallax → {qa_dir / (prefix + '-parallax.mp4')}")
    print(f"Capas '{prefix}' {tw}x{th}: {len(layers)} → {out} (diferencia apiladas vs referencia {diff:.3f})")


def cmd_voz(args) -> None:
    """Tiempos por palabra de uno o varios audios (uno por frase o tramo del guion)."""
    import imageio_ffmpeg
    from faster_whisper import WhisperModel

    model = WhisperModel(args.model, device="cpu", compute_type="int8")
    total = 0.0
    rows = []
    for audio_path in map(Path, args.audios):
        # Decodificar con el ffmpeg incluido (evita depender de la versión de PyAV).
        raw = subprocess.run(
            [imageio_ffmpeg.get_ffmpeg_exe(), "-loglevel", "error", "-i", str(audio_path),
             "-f", "f32le", "-ac", "1", "-ar", "16000", "-"],
            stdout=subprocess.PIPE, check=True,
        ).stdout
        audio = np.frombuffer(raw, np.float32).copy()
        duration = len(audio) / 16000
        segments, info = model.transcribe(audio, language=args.lang, word_timestamps=True, beam_size=5)
        words = []
        for seg in segments:
            for w in seg.words or []:
                words.append({"word": w.word.strip(), "start": round(w.start, 3), "end": round(w.end, 3),
                              "from": int(round(w.start * args.fps)), "to": int(round(w.end * args.fps))})
        pauses = []
        for a, b in zip(words, words[1:]):
            gap = b["start"] - a["end"]
            if gap >= args.pause:
                pauses.append({"after": a["word"], "start": a["end"], "end": b["start"], "dur": round(gap, 3)})
        data = {"audio": str(audio_path).replace("\\", "/"), "model": args.model, "language": info.language,
                "duration": round(duration, 3), "fps": args.fps, "frames": int(math.ceil(duration * args.fps)),
                "speechStart": words[0]["start"] if words else None, "speechEnd": words[-1]["end"] if words else None,
                "text": " ".join(w["word"] for w in words), "words": words, "pauses": pauses}
        dst = (Path(args.out_dir) if args.out_dir else audio_path.parent) / f"{audio_path.stem}.words.json"
        dst.parent.mkdir(parents=True, exist_ok=True)
        dst.write_text(json.dumps(data, ensure_ascii=False, indent=2), "utf-8")
        total += duration
        rows.append((audio_path.name, duration, data["speechStart"], data["speechEnd"], len(words), data["text"]))
        pz = ", ".join(f"{p['start']:.2f}s ({p['dur']:.2f}) tras «{p['after']}»" for p in pauses) or "sin pausas"
        print(f"{audio_path.name}: {duration:.2f} s, {len(words)} palabras, voz {data['speechStart']}–{data['speechEnd']} s; {pz} → {dst.name}")
        print(f"    «{data['text']}»")
    if len(rows) > 1:
        print(f"Total de voz: {total:.2f} s en {len(rows)} audios ({int(math.ceil(total * args.fps))} cuadros a {args.fps} fps, sin contar pausas entre audios)")


def parse_time(s: str) -> float:
    """'83.4', '1:23.4' o '0:01:23.4' → segundos."""
    parts = [float(p) for p in s.strip().replace(",", ".").split(":")]
    t = 0.0
    for p in parts:
        t = t * 60 + p
    return t


def read_cuts(path: Path) -> list[dict]:
    """Archivo de cortes: una línea por fragmento 'inicio - fin  # nota' o 'pausa 0.5'."""
    items = []
    for n, raw in enumerate(path.read_text("utf-8").splitlines(), 1):
        line, _, note = raw.partition("#")
        line = line.strip()
        if not line:
            continue
        if line.lower().startswith("pausa"):
            items.append({"pause": float(line.split()[1].replace(",", "."))})
            continue
        m = re.match(r"^\s*([\d:.,]+)\s*[-–]\s*([\d:.,]+)\s*$", line)
        if not m:
            sys.exit(f"{path.name}, línea {n}: no entiendo «{raw.strip()}» (usa 'inicio - fin  # nota' o 'pausa 0.5')")
        a, b = parse_time(m.group(1)), parse_time(m.group(2))
        if b <= a:
            sys.exit(f"{path.name}, línea {n}: el fin debe ser mayor que el inicio")
        items.append({"start": a, "end": b, "note": note.strip()})
    return items


def cmd_montar(args) -> None:
    """Corta y une fragmentos de una grabación (p. ej. un testimonio leído en una toma) con fundidos cortos y volumen normalizado."""
    import imageio_ffmpeg

    ff = imageio_ffmpeg.get_ffmpeg_exe()
    sr = 48000
    pre = ["-af", "highpass=f=80,afftdn=nf=-25"] if args.limpiar else []
    raw = subprocess.run([ff, "-loglevel", "error", "-i", str(args.grabacion), *pre,
                          "-f", "f32le", "-ac", "1", "-ar", str(sr), "-"],
                         stdout=subprocess.PIPE, check=True).stdout
    audio = np.frombuffer(raw, np.float32)
    src_dur = len(audio) / sr
    cuts = read_cuts(Path(args.cortes))
    fade = int(args.fundido * sr)
    pieces, timeline, t = [], [], 0.0
    prev_was_cut = False
    for it in cuts:
        if "pause" in it:
            pieces.append(np.zeros(int(it["pause"] * sr), np.float32))
            t += it["pause"]
            prev_was_cut = False
            continue
        if it["end"] > src_dur + 0.05:
            sys.exit(f"El corte {it['start']:.2f}-{it['end']:.2f} pasa del final de la grabación ({src_dur:.2f} s)")
        if prev_was_cut and args.gap > 0:
            pieces.append(np.zeros(int(args.gap * sr), np.float32))
            t += args.gap
        seg = audio[int(it["start"] * sr):int(it["end"] * sr)].copy()
        f = min(fade, len(seg) // 4)
        if f > 0:
            ramp = np.linspace(0, 1, f, dtype=np.float32)
            seg[:f] *= ramp
            seg[-f:] *= ramp[::-1]
        pieces.append(seg)
        d = len(seg) / sr
        timeline.append({"source": [round(it["start"], 3), round(it["end"], 3)],
                         "output": [round(t, 3), round(t + d, 3)], "note": it["note"]})
        t += d
        prev_was_cut = True
    y = np.concatenate(pieces) if pieces else np.zeros(1, np.float32)
    out = Path(args.salida)
    out.parent.mkdir(parents=True, exist_ok=True)
    p = subprocess.Popen([ff, "-y", "-loglevel", "error", "-f", "f32le", "-ac", "1", "-ar", str(sr), "-i", "-",
                          "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", str(sr), str(out)], stdin=subprocess.PIPE)
    p.stdin.write(y.tobytes())
    p.stdin.close()
    p.wait()
    meta = {"grabacion": str(args.grabacion).replace("\\", "/"), "cortes": str(args.cortes).replace("\\", "/"),
            "salida": str(out).replace("\\", "/"), "generated": date.today().isoformat(),
            "duracion": round(len(y) / sr, 3), "limpieza": bool(args.limpiar), "fragmentos": timeline}
    out.with_name(out.stem + ".cortes.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), "utf-8")
    print(f"{len(timeline)} fragmentos de {Path(args.grabacion).name} ({src_dur:.1f} s) → {out.name}: {len(y) / sr:.2f} s")
    for f_ in timeline:
        print(f"  {f_['source'][0]:>8.2f}–{f_['source'][1]:<8.2f} → {f_['output'][0]:>6.2f}–{f_['output'][1]:<6.2f} {f_['note']}")
    print(f"Siguiente: python tools/ismv_prep.py voz {out}")


def main() -> None:
    for stream in (sys.stdout, sys.stderr):  # consolas de Windows en cp1252
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except (AttributeError, ValueError):
            pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("audit", help="Revisa tamaño, alfa, tablero pintado y fondo recortable")
    s.add_argument("paths", nargs="+")
    s.set_defaults(fn=cmd_audit)

    s = sub.add_parser("key", help="Recorta el fondo liso (verde/magenta/blanco) y guarda PNG con alfa")
    s.add_argument("inputs", nargs="+")
    s.add_argument("--out", required=True)
    s.add_argument("--mode", default="auto", choices=["auto", "green", "magenta", "neutral", "opaque"])
    s.add_argument("--scale", type=float, default=1.0)
    s.set_defaults(fn=cmd_key)

    s = sub.add_parser("set", help="Procesa un set de personaje: base + poses + parches de expresión")
    s.add_argument("src", help="carpeta con base.png, pose-NN*.png y face-*.png (opcional config.json)")
    s.add_argument("out", help="carpeta de salida en public/assets")
    s.add_argument("--prefix")
    s.add_argument("--qa", help="carpeta de QA (por defecto <src>/_qa)")
    s.add_argument("--scale", type=float, help="reescala todo el set (p. ej. 1.5 para primeros planos)")
    s.add_argument("--no-stabilize", action="store_true", help="no fijar a la base lo que no cambió")
    s.set_defaults(fn=cmd_set)

    s = sub.add_parser("sprites", help="Hoja de sprites (movimiento en una imagen) → cuadros alineados y estabilizados")
    s.add_argument("sheet", help="imagen con los cuadros en cuadrícula sobre verde liso")
    s.add_argument("out", help="carpeta de salida en public/assets")
    s.add_argument("--grid", required=True, help="columnas x filas, p. ej. 3x2")
    s.add_argument("--names", help="nombres de los cuadros en orden de lectura, separados por coma")
    s.add_argument("--count", type=int, help="cuántas celdas usar si sobran (p. ej. 5 en una cuadrícula 3x2)")
    s.add_argument("--prefix")
    s.add_argument("--qa", help="carpeta de QA (por defecto <carpeta de la hoja>/_qa)")
    s.add_argument("--scale", type=float, default=1.0, help="reescalar cada cuadro (2 = doble, más blando)")
    s.add_argument("--threshold", type=float, default=0.11)
    s.add_argument("--mode", default="auto")
    s.add_argument("--no-stabilize", action="store_true")
    s.set_defaults(fn=cmd_sprites)

    s = sub.add_parser("sheet", help="Separa una hoja de expresiones en celdas iguales con alfa")
    s.add_argument("sheet")
    s.add_argument("out")
    s.add_argument("--names", help="nombres en orden de lectura, separados por coma")
    s.add_argument("--prefix")
    s.add_argument("--mode", default="auto")
    s.set_defaults(fn=cmd_sheet)

    s = sub.add_parser("inbetween", help="Genera intermedios entre dos cuadros procesados del mismo set")
    s.add_argument("a")
    s.add_argument("b")
    s.add_argument("out")
    s.add_argument("--n", type=int, default=1)
    s.add_argument("--prefix")
    s.set_defaults(fn=cmd_inbetween)

    s = sub.add_parser("preview", help="MP4 rápido de revisión: item = archivo[+parche...][:cuadros]")
    s.add_argument("out")
    s.add_argument("items", nargs="+")
    s.add_argument("--fps", type=int, default=30)
    s.add_argument("--bg", default="dark", choices=["dark", "green", "checker"])
    s.add_argument("--breathe", action="store_true")
    s.set_defaults(fn=cmd_preview)

    s = sub.add_parser("layers", help="Procesa capas de fondo: full.png + l0.png, l1.png…")
    s.add_argument("src")
    s.add_argument("out")
    s.add_argument("--size", required=True, help="lienzo final, p. ej. 1920x2400")
    s.add_argument("--prefix")
    s.add_argument("--qa")
    s.add_argument("--depths", help="profundidades p por capa para la prueba de parallax, p. ej. 0.3,1,1.3")
    s.add_argument("--pan", type=float, default=300.0, help="recorrido de cámara de la prueba (px)")
    s.add_argument("--zoom", type=float, default=1.0)
    s.set_defaults(fn=cmd_layers)

    s = sub.add_parser("montar", help="Corta y une fragmentos de una grabación (p. ej. lectura en una toma) según un archivo de cortes")
    s.add_argument("grabacion", help="audio o video original (mp3, wav, m4a, mp4…)")
    s.add_argument("cortes", help="texto con una línea por fragmento: 'inicio - fin  # nota' o 'pausa 0.5'")
    s.add_argument("salida", help="audio montado (.mp3 o .wav) en public/assets/audio/narration/")
    s.add_argument("--limpiar", action="store_true", help="quita graves de fondo y ruido constante")
    s.add_argument("--gap", type=float, default=0.12, help="silencio entre fragmentos seguidos (s)")
    s.add_argument("--fundido", type=float, default=0.015, help="fundido en cada corte (s)")
    s.set_defaults(fn=cmd_montar)

    s = sub.add_parser("voz", help="Tiempos por palabra de uno o varios audios (Fish o testimonio montado)")
    s.add_argument("audios", nargs="+", help="un audio por frase o tramo; escribe <audio>.words.json")
    s.add_argument("--out-dir", help="carpeta para los .words.json (por defecto, junto a cada audio)")
    s.add_argument("--model", default="small")
    s.add_argument("--lang", default="es")
    s.add_argument("--fps", type=int, default=30)
    s.add_argument("--pause", type=float, default=0.3)
    s.set_defaults(fn=cmd_voz)

    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
