import { AbsoluteFill, Audio, Easing, interpolate, Sequence, staticFile, useCurrentFrame } from 'remotion';
import { IsmaelSting, ISMAEL_STING_FRAMES } from '../../brand/IsmaelSting';
import { LayeredShotView } from '../../stage/layered';
import { captions, clips, highlights, onScreen, quotes, SCENE_FRAMES } from './story';
import { shots } from './shots';

// HIST-004 · animatic por capas (docs/plans/HIST-004-plan.md). Zonas seguras (docs/DIRECCION-VISUAL.md):
// ~250 px arriba, ~670 px abajo y ~120 px a la derecha libres; subtítulos por encima de y ≈ 1250.

const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
const ACCENT = '#e6c58c';
const SHADOW = '0 2px 18px rgba(10, 6, 4, 0.9)';

const fade = (frame: number, from: number, to: number, fadeIn = 6, fadeOut = 6) =>
  Math.min(interpolate(frame, [from, from + fadeIn], [0, 1], clamp), interpolate(frame, [to - fadeOut, to], [1, 0], clamp));

const bare = (word: string) => word.toLowerCase().replace(/[^\p{L}]/gu, '');

/** Subtítulo con las palabras de la garantía resaltadas desde que se nombran. */
const CaptionText: React.FC<{ text: string; frame: number }> = ({ text, frame }) => (
  <>
    {text.split(' ').map((word, i) => {
      const mark = highlights.find((h) => h.word === bare(word));
      const on = mark !== undefined && frame >= mark.from;
      return (
        <span key={i} style={on ? { color: ACCENT, fontWeight: 700 } : undefined}>
          {i ? ' ' : ''}
          {word}
        </span>
      );
    })}
  </>
);

const Bubbles: React.FC<{ frame: number }> = ({ frame }) => {
  if (frame >= onScreen.bubblesTo) return null;
  const visible = onScreen.bubbles.filter((b) => frame >= b.from);
  if (visible.length === 0) return null;
  // Al salir el título, la pila sube para no tapar el rostro.
  const top = interpolate(frame, [84, 96], [410, 290], clamp);
  const out = interpolate(frame, [onScreen.bubblesTo - 6, onScreen.bubblesTo], [1, 0], clamp);
  return (
    <div style={{ position: 'absolute', right: 130, top, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14, opacity: out }}>
      {visible.map((b, i) => {
        const pop = interpolate(frame, [b.from, b.from + 5], [0.7, 1], { ...clamp, easing: Easing.out(Easing.back(1.6)) });
        const blame = b.date === '';
        return (
          <div
            key={i}
            style={{
              transform: `scale(${pop})`,
              transformOrigin: '100% 100%',
              opacity: interpolate(frame, [b.from, b.from + 3], [0, 1], clamp),
              maxWidth: 640,
              padding: '16px 28px 18px',
              borderRadius: '30px 30px 8px 30px',
              background: blame ? 'rgba(255, 234, 228, 0.97)' : 'rgba(246, 244, 240, 0.95)',
              color: blame ? '#7a1d12' : '#1d1d1f',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
            }}
          >
            {b.date ? <div style={{ font: '700 21px Arial, sans-serif', letterSpacing: 1.5, textTransform: 'uppercase', color: '#8a8a8e', marginBottom: 4 }}>{b.date}</div> : null}
            <div style={{ font: `${blame ? 700 : 500} 37px/1.25 Arial, sans-serif` }}>{b.text}</div>
          </div>
        );
      })}
    </div>
  );
};

const TextLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const caption = captions.find((c) => frame >= c.from && frame < c.to);
  const quote = quotes.find((q) => frame >= q.from && frame < q.to);
  const label = onScreen.labels.find((l) => frame >= l.from && frame < l.to);
  const { title, lesson } = onScreen;
  const showTitle = frame >= title.from && frame < title.to;
  const showLesson = frame >= lesson.from && frame < lesson.to;

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {caption ? (
        <AbsoluteFill style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(14, 8, 6, 0.55) 63%, rgba(14, 8, 6, 0.25) 100%)' }} />
      ) : null}
      {quote || showLesson ? (
        <AbsoluteFill style={{ background: 'linear-gradient(180deg, rgba(14, 8, 6, 0.55) 0%, rgba(14, 8, 6, 0.35) 22%, rgba(0,0,0,0) 40%)' }} />
      ) : null}

      {showTitle ? (
        <div style={{ position: 'absolute', top: 280, left: 90, right: 120, textAlign: 'center', font: '700 78px/1.1 Georgia, serif', color: '#fff8ec', textShadow: SHADOW, opacity: interpolate(frame, [title.to - 8, title.to], [1, 0], clamp) }}>
          {title.text}
        </div>
      ) : null}

      <Bubbles frame={frame} />

      {label ? (
        <div style={{ position: 'absolute', top: 300, left: 90, right: 120, textAlign: 'center', font: '700 34px Arial, sans-serif', letterSpacing: 8, textTransform: 'uppercase', color: ACCENT, textShadow: SHADOW, opacity: fade(frame, label.from, label.to, 8, 8) }}>
          {label.text}
        </div>
      ) : null}

      {quote ? (
        <div style={{ position: 'absolute', top: 290, left: 90, right: 130, textAlign: 'center', color: '#fff8ec', textShadow: SHADOW, opacity: fade(frame, quote.from, quote.to, 8, 6) }}>
          <p style={{ margin: '0 0 18px', font: '700 24px Arial, sans-serif', letterSpacing: 4, textTransform: 'uppercase', color: ACCENT }}>{quote.reference}</p>
          <p style={{ margin: 0, font: 'italic 400 64px/1.18 Georgia, serif' }}>«{quote.text}»</p>
        </div>
      ) : null}

      {showLesson ? (
        <div style={{ position: 'absolute', top: 320, left: 110, right: 130, textAlign: 'center', font: '400 64px/1.2 Georgia, serif', color: '#fff8ec', textShadow: SHADOW, opacity: fade(frame, lesson.from, lesson.to, 10, 8) }}>
          {lesson.text}
        </div>
      ) : null}

      {caption ? (
        <div style={{ position: 'absolute', left: 90, right: 120, bottom: 680, textAlign: 'center', font: '400 54px/1.2 Georgia, serif', color: '#fff8ec', textShadow: SHADOW, opacity: fade(frame, caption.from, caption.to, 5, 4) }}>
          <CaptionText text={caption.text} frame={frame} />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

const AnimaticLabel: React.FC = () => (
  <div style={{ position: 'absolute', top: 64, width: '100%', textAlign: 'center', font: '700 22px Arial, sans-serif', letterSpacing: 3, color: 'rgba(255, 248, 236, 0.55)' }}>
    ANIMATIC DE REVISIÓN · VOZ TEMPORAL
  </div>
);

/** `review`: muestra la etiqueta de animatic. La versión de publicación (`JudaTamarPublicacion`) va sin ella. */
export const JudaTamar: React.FC<{ review?: boolean }> = ({ review = true }) => (
  <AbsoluteFill style={{ backgroundColor: '#000' }}>
    {shots.map((shot) => (
      <Sequence key={shot.id} name={`shot:${shot.id}`} from={shot.from} durationInFrames={shot.to - shot.from}>
        <LayeredShotView shot={shot} />
      </Sequence>
    ))}
    {clips.map((clip) => (
      <Sequence key={clip.file} name={clip.file} from={clip.from} durationInFrames={clip.frames}>
        <Audio src={staticFile(`assets/audio/narration/${clip.file}`)} />
      </Sequence>
    ))}
    <Sequence name="textos" durationInFrames={SCENE_FRAMES}>
      <TextLayer />
    </Sequence>
    <Sequence name="sting de marca" from={SCENE_FRAMES} durationInFrames={ISMAEL_STING_FRAMES}>
      <IsmaelSting />
    </Sequence>
    {review ? <AnimaticLabel /> : null}
  </AbsoluteFill>
);
