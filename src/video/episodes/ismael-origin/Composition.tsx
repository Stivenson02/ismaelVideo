import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  random,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { IsmaelOutro, ISMAEL_OUTRO_FRAMES } from '../../brand/IsmaelOutro';
import { cameraAt, clampToCover, worldTransform } from '../../stage/camera';
import { beats, captions, NARRATION_FRAMES } from './story';
import { MESSENGER, shots, type FigurePlacement, type Keyframes, type Shot } from './shots';

const NARRATION = 'assets/audio/narration/01-ismail-origin-reference.wav';
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

const valueAt = (frame: number, keys: Keyframes | undefined, fallback = 0) => {
  if (!keys || keys.length === 0) return fallback;
  if (keys.length === 1) return keys[0][1];
  return interpolate(frame, keys.map(([f]) => f), keys.map(([, v]) => v), clamp);
};

/** Geometría de una figura recortada a partir de su punto de apoyo en el mundo. */
const figureBox = (fig: FigurePlacement) => {
  const { bbox, size } = fig.art;
  const scale = fig.height / (bbox.bottom - bbox.top);
  const footX = ((bbox.left + bbox.right) / 2) * scale;
  const footY = bbox.bottom * scale;
  return {
    left: fig.x - footX,
    top: fig.y - footY,
    width: size.width * scale,
    height: size.height * scale,
    origin: `${footX}px ${footY}px`,
  };
};

const Figure: React.FC<{ fig: FigurePlacement; frame: number; duration: number; backlight: number }> = ({
  fig,
  frame,
  duration,
  backlight,
}) => {
  const box = figureBox(fig);
  const phase = fig.x / 97;
  let transform: string;
  if (fig.motion === 'walk') {
    // Caminata limitada: deriva + rebote leve, sin ciclo de piernas.
    const dx = (fig.driftX ?? 0) * (frame / Math.max(1, duration));
    const bob = -Math.abs(Math.sin((Math.PI * frame) / 15)) * 3;
    const tilt = Math.sin((Math.PI * frame) / 15) * 0.7;
    transform = `translate(${dx}px, ${bob}px) rotate(${tilt}deg)`;
  } else {
    // Pose sostenida: respiración y balanceo de peso muy sutiles.
    const breathe = 1 + Math.sin((2 * Math.PI * frame) / 96 + phase) * 0.006;
    const sway = Math.sin((2 * Math.PI * frame) / 150 + phase) * 0.35;
    transform = `rotate(${sway}deg) scaleY(${breathe})`;
  }
  const rim = fig.art === MESSENGER && backlight > 0
    ? `drop-shadow(0 0 ${14 * backlight}px rgba(255, 206, 140, ${0.75 * backlight}))`
    : 'none';
  return (
    <Img
      src={staticFile(fig.art.src)}
      style={{
        position: 'absolute',
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
        transformOrigin: box.origin,
        transform,
        opacity: valueAt(frame, fig.opacity, 1),
        filter: rim,
      }}
    />
  );
};

/** Sombra estilizada del mensajero: su silueta oscurecida, aplanada sobre el suelo. */
const MessengerShadow: React.FC<{ fig: FigurePlacement; length: number }> = ({ fig, length }) => {
  if (length <= 0) return null;
  const box = figureBox(fig);
  return (
    <Img
      src={staticFile(fig.art.src)}
      style={{
        position: 'absolute',
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
        transformOrigin: box.origin,
        transform: `skewX(-50deg) scaleY(${-0.34 * length})`,
        filter: 'brightness(0) blur(3px)',
        opacity: 0.42,
      }}
    />
  );
};

const Backlight: React.FC<{ fig: FigurePlacement; intensity: number }> = ({ fig, intensity }) => {
  if (intensity <= 0) return null;
  const r = fig.height * 1.05;
  return (
    <div
      style={{
        position: 'absolute',
        left: fig.x - r,
        top: fig.y - fig.height * 0.6 - r,
        width: r * 2,
        height: r * 2,
        borderRadius: '50%',
        opacity: intensity,
        mixBlendMode: 'screen',
        background: 'radial-gradient(circle, rgba(255, 214, 140, 0.75) 0%, rgba(255, 190, 110, 0.32) 38%, rgba(255, 170, 90, 0) 70%)',
      }}
    />
  );
};

/** Polvo del desierto determinista (sin Math.random). */
const Dust: React.FC<{ frame: number }> = ({ frame }) => {
  const { width, height } = useVideoConfig();
  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {Array.from({ length: 28 }, (_, i) => {
        const sx = random(`dust-x-${i}`);
        const sy = random(`dust-y-${i}`);
        const ss = random(`dust-s-${i}`);
        const span = width + 120;
        const x = ((sx * span + frame * (0.5 + ss * 1.3)) % span) - 60;
        const y = sy * height + Math.sin(frame / 38 + i) * 14;
        const size = 2 + ss * 4;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: '#f3d6a4',
              opacity: 0.12 + ss * 0.22,
              filter: 'blur(1px)',
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

const ShotView: React.FC<{ shot: Shot }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const viewport = useVideoConfig();
  const duration = shot.to - shot.from;
  const camera = clampToCover(cameraAt(frame, shot.camera), shot.scene.size, viewport);
  const messenger = shot.figures.find((f) => f.art === MESSENGER);
  const shadow = valueAt(frame, shot.messengerShadow);
  const backlight = valueAt(frame, shot.backlight);
  const warmth = valueAt(frame, shot.warmth);
  const fadeIn = shot.crossfade > 0 ? interpolate(frame, [0, shot.crossfade], [0, 1], clamp) : 1;
  const fadeOut = shot.fadeOut ? interpolate(frame, [duration - shot.fadeOut, duration], [1, 0], clamp) : 1;

  return (
    <AbsoluteFill style={{ opacity: fadeIn, backgroundColor: '#000', overflow: 'hidden' }}>
      <AbsoluteFill style={{ opacity: fadeOut }}>
        <div
          style={{
            position: 'absolute',
            width: shot.scene.size.width,
            height: shot.scene.size.height,
            transformOrigin: '0 0',
            transform: worldTransform(camera, viewport),
          }}
        >
          <Img
            src={staticFile(shot.scene.src)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
          {messenger ? <MessengerShadow fig={messenger} length={shadow} /> : null}
          {messenger ? <Backlight fig={messenger} intensity={backlight} /> : null}
          {shot.figures.map((fig) => (
            <Figure key={fig.art.src} fig={fig} frame={frame} duration={duration} backlight={backlight} />
          ))}
        </div>
        {warmth > 0 ? (
          <AbsoluteFill
            style={{
              opacity: warmth,
              mixBlendMode: 'screen',
              background: 'radial-gradient(ellipse 90% 60% at 72% 38%, rgba(255, 190, 110, 0.38) 0%, rgba(255, 170, 90, 0) 70%)',
            }}
          />
        ) : null}
        {shot.dust ? <Dust frame={frame} /> : null}
        <AbsoluteFill
          style={{ background: 'radial-gradient(ellipse 85% 70% at 50% 45%, rgba(0,0,0,0) 55%, rgba(12, 6, 4, 0.55) 100%)' }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const caption = captions.find((c) => frame >= c.from && frame < c.to);
  const beat = beats.find((b) => frame >= b.from && frame < b.to);
  if (!caption || !beat) return null;
  const opacity = Math.min(
    interpolate(frame, [caption.from, caption.from + 6], [0, 1], clamp),
    interpolate(frame, [caption.to - 4, caption.to], [1, 0], clamp),
  );
  const isHook = beat.id === 'hook';
  const referenceOpacity = Math.min(
    interpolate(frame, [beat.from, beat.from + 10], [0, 1], clamp),
    interpolate(frame, [beat.to - 6, beat.to], [1, 0], clamp),
  );

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {!isHook ? (
        <AbsoluteFill
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(14, 8, 6, 0.62) 78%, rgba(14, 8, 6, 0.4) 100%)' }}
        />
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: 90,
          right: 90,
          ...(isHook ? { top: 330 } : { top: 1250 }),
          textAlign: 'center',
          color: '#fff8ec',
          textShadow: '0 2px 18px rgba(10, 6, 4, 0.85)',
        }}
      >
        {beat.reference ? (
          <p
            style={{
              margin: '0 0 18px',
              font: '700 24px Arial, sans-serif',
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#e6c58c',
              opacity: referenceOpacity * 0.9,
            }}
          >
            {beat.reference}
          </p>
        ) : null}
        <p
          style={{
            margin: 0,
            opacity,
            font: isHook ? '400 70px/1.16 Georgia, serif' : '400 54px/1.2 Georgia, serif',
          }}
        >
          {caption.text}
        </p>
      </div>
    </AbsoluteFill>
  );
};

const AnimaticLabel: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: 64,
      width: '100%',
      textAlign: 'center',
      font: '700 22px Arial, sans-serif',
      letterSpacing: 3,
      color: 'rgba(255, 248, 236, 0.55)',
    }}
  >
    ANIMATIC DE REVISIÓN · VOZ TEMPORAL
  </div>
);

export const IsmaelOrigin: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#000' }}>
    {shots.map((shot, i) => {
      const next = shots[i + 1];
      const overlap = next ? next.crossfade : 0;
      return (
        <Sequence key={shot.id} name={`shot:${shot.id}`} from={shot.from} durationInFrames={shot.to - shot.from + overlap}>
          <ShotView shot={shot} />
        </Sequence>
      );
    })}
    <Sequence name="narración y subtítulos" durationInFrames={NARRATION_FRAMES}>
      <Audio src={staticFile(NARRATION)} />
      <Captions />
      <AnimaticLabel />
    </Sequence>
    <Sequence name="cierre de marca" from={NARRATION_FRAMES} durationInFrames={ISMAEL_OUTRO_FRAMES}>
      <IsmaelOutro />
    </Sequence>
  </AbsoluteFill>
);
