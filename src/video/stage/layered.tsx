import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { cameraAt, clampToCover, worldTransform, type CameraKey, type Size } from './camera';

// Planos en dos capas (fondo + figuras en coordenadas de pantalla). El fondo usa la cámara
// de camera.ts; cada figura tiene su propio encuadre (x, y, k) para poder acercarse a
// medio cuerpo o rostro sin ampliar ni ablandar el escenario. Todo se deriva del cuadro.

export type Keys = Array<[frame: number, value: number]>;

const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

export const valueAt = (frame: number, keys: Keys | undefined, fallback = 0) => {
  if (!keys || keys.length === 0) return fallback;
  if (keys.length === 1) return keys[0][1];
  return interpolate(frame, keys.map(([f]) => f), keys.map(([, v]) => v), clamp);
};

export type BgSpec = {
  src: string;
  size: Size;
  camera: CameraKey[];
  /** Desenfoque del fondo en px de pantalla. */
  blur?: Keys;
  /** Oscurecimiento 0–1. */
  dim?: Keys;
};

/** Variante de una figura: `anchor` y `scale` ya incluyen la corrección de registro. */
export type FigureArt = {
  src: string;
  anchor: { x: number; y: number };
  scale?: number;
  size?: Size;
};

export type FigureLayer = {
  kind: 'figure';
  arts: Record<string, FigureArt>;
  /** [cuadro relativo, id de variante]; el último con cuadro <= actual manda. */
  cuts: Array<[number, string]>;
  /** Posición en pantalla del punto ancla (centro de la cabeza). */
  x: Keys;
  y: Keys;
  /** Píxeles de pantalla por píxel del PNG. */
  k: Keys;
  flip?: boolean;
  rot?: Keys;
  opacity?: Keys;
  breathe?: boolean;
};

export type PropLayer = {
  kind: 'prop';
  src: string;
  size: Size;
  crop: { x: number; y: number; w: number; h: number };
  x: Keys;
  y: Keys;
  k: Keys;
  rot?: Keys;
  opacity?: Keys;
};

export type Layer = FigureLayer | PropLayer;

export type Tint = { color: string; opacity: Keys; blend?: 'screen' | 'multiply' | 'normal' };

export type LayeredShot = {
  id: string;
  from: number;
  to: number;
  /** Entrada superpuesta con el plano anterior; sin pasar por negro. */
  crossfadeIn?: number;
  bg: BgSpec;
  layers: Layer[];
  tints?: Tint[];
  /** Sombra que sube desde abajo (0–1). */
  shade?: Keys;
  /** Haz de luz sobre la pared (0–1). */
  shaft?: Keys;
  /** Cuadros relativos con un dip oscuro de 3 cuadros (cambio de variante). */
  dips?: number[];
  /** Fundido desde negro al entrar, en cuadros. */
  fadeIn?: number;
  /** Fundido a negro al salir, en cuadros. */
  fadeOut?: number;
  /** Atenuación breve al entrar (corte con dip de 3 cuadros). */
  dipIn?: boolean;
  label?: string;
};

const FigureView: React.FC<{ layer: FigureLayer; frame: number }> = ({ layer, frame }) => {
  const cut = [...layer.cuts].filter(([f]) => f <= frame).pop() ?? layer.cuts[0];
  const art = layer.arts[cut[1]];
  const k = valueAt(frame, layer.k, 1) * (art.scale ?? 1);
  const size = art.size ?? { width: 1024, height: 1536 };
  const X = valueAt(frame, layer.x);
  const Y = valueAt(frame, layer.y);
  const ox = art.anchor.x * k;
  const oy = art.anchor.y * k;
  const rot = valueAt(frame, layer.rot) + (layer.breathe ? Math.sin((2 * Math.PI * frame) / 150) * 0.3 : 0);
  const breathe = layer.breathe ? 1 + Math.sin((2 * Math.PI * frame) / 96) * 0.004 : 1;
  return (
    <Img
      src={staticFile(art.src)}
      style={{
        position: 'absolute',
        left: X - ox,
        top: Y - oy,
        width: size.width * k,
        height: size.height * k,
        transformOrigin: `${ox}px ${oy}px`,
        transform: `rotate(${rot}deg) scale(${layer.flip ? -1 : 1}, ${breathe})`,
        opacity: valueAt(frame, layer.opacity, 1),
      }}
    />
  );
};

const PropView: React.FC<{ layer: PropLayer; frame: number }> = ({ layer, frame }) => {
  const k = valueAt(frame, layer.k, 1);
  const { crop } = layer;
  return (
    <div
      style={{
        position: 'absolute',
        left: valueAt(frame, layer.x) - (crop.w * k) / 2,
        top: valueAt(frame, layer.y) - (crop.h * k) / 2,
        width: crop.w * k,
        height: crop.h * k,
        overflow: 'hidden',
        transform: `rotate(${valueAt(frame, layer.rot)}deg)`,
        opacity: valueAt(frame, layer.opacity, 1),
      }}
    >
      <Img
        src={staticFile(layer.src)}
        style={{
          position: 'absolute',
          left: -crop.x * k,
          top: -crop.y * k,
          width: layer.size.width * k,
          height: layer.size.height * k,
          maxWidth: 'none',
        }}
      />
    </div>
  );
};

export const LayeredShotView: React.FC<{ shot: LayeredShot; frameOffset?: number; transitionFrames?: number }> = ({ shot, frameOffset = 0, transitionFrames = 0 }) => {
  const sequenceFrame = useCurrentFrame();
  const frame = sequenceFrame - frameOffset;
  const viewport = useVideoConfig();
  const duration = shot.to - shot.from;
  const camera = clampToCover(cameraAt(frame, shot.bg.camera), shot.bg.size, viewport);
  const blur = valueAt(frame, shot.bg.blur);
  const dim = valueAt(frame, shot.bg.dim);
  const shade = valueAt(frame, shot.shade);
  const shaft = valueAt(frame, shot.shaft);

  const dipNow = (shot.dips ?? []).reduce((m, d) => Math.max(m, 1 - Math.abs(frame - d) / 2), 0);
  const dipIn = shot.dipIn ? interpolate(frame, [0, 3], [0.6, 0], clamp) : 0;
  const black = Math.min(
    1,
    Math.max(
      Math.max(0, dipNow),
      dipIn,
      shot.fadeIn ? interpolate(frame, [0, shot.fadeIn], [1, 0], clamp) : 0,
      shot.fadeOut ? interpolate(frame, [duration - shot.fadeOut, duration], [0, 1], clamp) : 0,
    ),
  );

  const opacity = transitionFrames > 0 ? interpolate(sequenceFrame, [0, transitionFrames], [0, 1], clamp) : 1;
  return (
    <AbsoluteFill style={{ backgroundColor: transitionFrames > 0 ? 'transparent' : '#000', overflow: 'hidden', opacity }}>
      <AbsoluteFill style={{ filter: `blur(${blur}px) brightness(${1 - dim})` }}>
        <div
          style={{
            position: 'absolute',
            width: shot.bg.size.width,
            height: shot.bg.size.height,
            transformOrigin: '0 0',
            transform: worldTransform(camera, viewport),
          }}
        >
          <Img src={staticFile(shot.bg.src)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        </div>
      </AbsoluteFill>

      {shaft > 0 ? (
        <AbsoluteFill
          style={{
            opacity: shaft,
            mixBlendMode: 'screen',
            clipPath: 'polygon(8% 0%, 46% 0%, 92% 100%, 40% 100%)',
            background: 'linear-gradient(180deg, rgba(255,214,150,0.55) 0%, rgba(255,190,110,0.18) 100%)',
          }}
        />
      ) : null}

      {shot.layers.map((layer, i) =>
        layer.kind === 'figure' ? (
          <FigureView key={i} layer={layer} frame={frame} />
        ) : (
          <PropView key={i} layer={layer} frame={frame} />
        ),
      )}

      {(shot.tints ?? []).map((t, i) => (
        <AbsoluteFill
          key={i}
          style={{ backgroundColor: t.color, opacity: valueAt(frame, t.opacity), mixBlendMode: t.blend ?? 'normal' }}
        />
      ))}

      {shade > 0 ? (
        <AbsoluteFill
          style={{
            background: `linear-gradient(to top, rgba(8,4,3,0.96) 0%, rgba(8,4,3,0.92) ${shade * 100}%, rgba(8,4,3,0) ${Math.min(100, shade * 100 + 35)}%)`,
          }}
        />
      ) : null}

      <AbsoluteFill
        style={{ background: 'radial-gradient(ellipse 85% 70% at 50% 45%, rgba(0,0,0,0) 55%, rgba(12, 6, 4, 0.5) 100%)' }}
      />

      {shot.label ? (
        <div
          style={{
            position: 'absolute',
            top: 760,
            width: '100%',
            textAlign: 'center',
            font: '700 34px Arial, sans-serif',
            letterSpacing: 4,
            color: 'rgba(255, 236, 200, 0.8)',
            textShadow: '0 2px 12px rgba(0,0,0,0.9)',
          }}
        >
          {shot.label}
        </div>
      ) : null}

      <AbsoluteFill style={{ backgroundColor: '#000', opacity: black }} />
    </AbsoluteFill>
  );
};
