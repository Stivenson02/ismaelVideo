import { Easing, interpolate } from 'remotion';

/**
 * Cámara 2D virtual (SPIKE-001). Las coordenadas `x`/`y` son el punto del mundo
 * —en píxeles del arte de fondo— que queda en el centro de la ventana; `zoom`
 * es cuántos píxeles de pantalla ocupa un píxel del arte.
 */
export type Camera = { x: number; y: number; zoom: number };

/** Clave de cámara; `frame` es relativo al inicio del plano. */
export type CameraKey = Camera & { frame: number };

export type Size = { width: number; height: number };

const smooth = Easing.inOut(Easing.cubic);

/** Interpola las claves de cámara para un fotograma, con easing suave por tramo. */
export const cameraAt = (frame: number, keys: CameraKey[]): Camera => {
  if (keys.length === 0) {
    throw new Error('cameraAt necesita al menos una clave');
  }
  if (keys.length === 1) {
    const [{ x, y, zoom }] = keys;
    return { x, y, zoom };
  }
  const frames = keys.map((k) => k.frame);
  const opts = { easing: smooth, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
  return {
    x: interpolate(frame, frames, keys.map((k) => k.x), opts),
    y: interpolate(frame, frames, keys.map((k) => k.y), opts),
    zoom: interpolate(frame, frames, keys.map((k) => k.zoom), opts),
  };
};

/** Zoom mínimo para que el arte cubra toda la ventana. */
export const coverZoom = (world: Size, viewport: Size) =>
  Math.max(viewport.width / world.width, viewport.height / world.height);

/**
 * Ajusta la cámara para que nunca revele bordes vacíos: sube el zoom hasta el
 * mínimo de cobertura y limita el centro a la zona que el arte puede cubrir.
 */
export const clampToCover = (camera: Camera, world: Size, viewport: Size): Camera => {
  const zoom = Math.max(camera.zoom, coverZoom(world, viewport));
  const halfW = viewport.width / 2 / zoom;
  const halfH = viewport.height / 2 / zoom;
  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
  return {
    zoom,
    x: clamp(camera.x, halfW, world.width - halfW),
    y: clamp(camera.y, halfH, world.height - halfH),
  };
};

/**
 * Transformación CSS del contenedor del mundo (con `transform-origin: 0 0`).
 * Este animatic usa un único plano compuesto; el parallax por capas queda para
 * cuando existan fondos con alfa real, registro común y solape.
 */
export const worldTransform = (camera: Camera, viewport: Size) => {
  const tx = viewport.width / 2 - camera.x * camera.zoom;
  const ty = viewport.height / 2 - camera.y * camera.zoom;
  return `translate(${tx}px, ${ty}px) scale(${camera.zoom})`;
};

/** Tamaño mínimo de una capa para un recorrido dado (fórmula de SPIKE-001, sección 3). */
export const minLayerSize = (o: {
  viewport: Size;
  depth: number;
  dx: number;
  dy: number;
  zMin: number;
  zMax: number;
  margin?: number;
}): Size => {
  const m = o.margin ?? 48;
  const s = (z: number) => 1 + (z - 1) * o.depth;
  const k = Math.max(1, s(o.zMax));
  const round8 = (v: number) => Math.ceil(v / 8) * 8;
  return {
    width: round8(k * (o.viewport.width / s(o.zMin) + o.depth * Math.abs(o.dx) + 2 * m)),
    height: round8(k * (o.viewport.height / s(o.zMin) + o.depth * Math.abs(o.dy) + 2 * m)),
  };
};
