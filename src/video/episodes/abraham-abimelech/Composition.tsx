import { AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame } from 'remotion';
import { IsmaelOutro, ISMAEL_OUTRO_FRAMES } from '../../brand/IsmaelOutro';
import { LayeredShotView } from '../../stage/layered';
import { beats, captions, clips, NARRATION_FRAMES } from './story';
import { shots } from './shots';

const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const caption = captions.find((c) => frame >= c.from && frame < c.to);
  const beat = beats.find((b) => frame >= b.from && frame < b.to);
  if (!caption || !beat) return null;
  const big = beat.id === 'hook' || beat.id === 'final-question';
  const finalQuestion = beat.id === 'final-question';
  const opacity = Math.min(
    interpolate(frame, [caption.from, caption.from + 6], [0, 1], clamp),
    interpolate(frame, [caption.to - 4, caption.to], [1, 0], clamp),
  );
  const refOpacity = Math.min(
    interpolate(frame, [beat.from, beat.from + 10], [0, 1], clamp),
    interpolate(frame, [beat.to - 6, beat.to], [1, 0], clamp),
  );

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <AbsoluteFill
        style={{
          background: finalQuestion
            ? 'linear-gradient(180deg, rgba(0,0,0,0) 72%, rgba(14, 8, 6, 0.45) 82%, rgba(14, 8, 6, 0.58) 100%)'
            : big
              ? 'linear-gradient(180deg, rgba(0,0,0,0) 38%, rgba(14, 8, 6, 0.5) 52%, rgba(14, 8, 6, 0) 66%)'
              : 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(14, 8, 6, 0.62) 78%, rgba(14, 8, 6, 0.4) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 90,
          right: 90,
          top: finalQuestion ? 1630 : big ? 880 : 1250,
          textAlign: 'center',
          color: '#fff8ec',
          textShadow: '0 2px 18px rgba(10, 6, 4, 0.9)',
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
              opacity: refOpacity * 0.9,
            }}
          >
            {beat.reference}
          </p>
        ) : null}
        <p style={{ margin: 0, opacity, font: finalQuestion ? '400 54px/1.16 Georgia, serif' : big ? '400 72px/1.16 Georgia, serif' : '400 54px/1.2 Georgia, serif' }}>
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

export const AbrahamAbimelech: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#000' }}>
    {shots.map((shot) => {
      const transitionFrames = shot.crossfadeIn ?? 0;
      return (
        <Sequence key={shot.id} name={`shot:${shot.id}`} from={shot.from - transitionFrames} durationInFrames={shot.to - shot.from + transitionFrames}>
          <LayeredShotView shot={shot} frameOffset={transitionFrames} transitionFrames={transitionFrames} />
        </Sequence>
      );
    })}
    <Sequence name="narración y subtítulos" durationInFrames={NARRATION_FRAMES}>
      {clips.map((clip) => (
        <Sequence key={clip.file} name={clip.file} from={clip.from} durationInFrames={clip.frames}>
          <Audio src={staticFile(`assets/audio/narration/${clip.file}`)} />
        </Sequence>
      ))}
      <Captions />
      <AnimaticLabel />
    </Sequence>
    <Sequence name="cierre de marca" from={NARRATION_FRAMES} durationInFrames={ISMAEL_OUTRO_FRAMES}>
      <IsmaelOutro />
    </Sequence>
  </AbsoluteFill>
);
