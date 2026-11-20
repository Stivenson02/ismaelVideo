import { AbsoluteFill, Audio, Easing, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';

/** Duración del sting integrado (1 s a 30 fps). */
export const ISMAEL_STING_FRAMES = 30;

const SYMBOL = 'assets/brand/ismael-symbol-light-variant.png';
const STING = 'assets/audio/sfx/ismael-outro-sting-short.wav';

/**
 * Cierre corto de marca para Reels en bucle (estructura de retención, docs/FLUJO-DE-TRABAJO.md):
 * el símbolo oficial entra sobre el último cuadro de la escena, sin pasar por negro, con el sting
 * de ~1 s derivado del original de Mixkit. La placa común de 3 s (IsmaelOutro) sigue igual para
 * los episodios que la usan. Colocarlo en una <Sequence> de 30 cuadros encima de la escena.
 */
export const IsmaelSting: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
  const veil = interpolate(frame, [0, 10], [0, 0.55], { ...clamp, easing: Easing.out(Easing.cubic) });
  const glow = interpolate(frame, [2, 18], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const symbolOpacity = interpolate(frame, [2, 14], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const symbolScale = interpolate(frame, [2, ISMAEL_STING_FRAMES], [0.92, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <AbsoluteFill
        style={{ opacity: veil, background: 'radial-gradient(ellipse 80% 55% at 50% 30%, rgba(34, 21, 15, 0.7) 0%, rgba(14, 9, 7, 0.95) 100%)' }}
      />
      <AbsoluteFill
        style={{
          opacity: glow * 0.85,
          background: 'radial-gradient(circle 360px at 50% 22%, rgba(232, 182, 112, 0.34) 0%, rgba(232, 182, 112, 0.08) 55%, rgba(232, 182, 112, 0) 100%)',
        }}
      />
      {/* En la franja alta (debajo de los 250 px seguros), por encima del rostro del plano final. */}
      <Img
        src={staticFile(SYMBOL)}
        style={{ position: 'absolute', top: 290, left: '50%', width: 280, height: 'auto', marginLeft: -140, opacity: symbolOpacity, transform: `scale(${symbolScale})` }}
      />
      <Audio src={staticFile(STING)} />
    </AbsoluteFill>
  );
};
