import { AbsoluteFill, Audio, Easing, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';

/** Duración fija de la placa común de marca (3 s a 30 fps). */
export const ISMAEL_OUTRO_FRAMES = 90;

const SYMBOL = 'assets/brand/ismael-symbol-light-variant.png';
const STING = 'assets/audio/sfx/ismael-outro-sting.wav';

/**
 * Cierre común de todos los Reels de Ismael (docs/DIRECCION-VISUAL.md):
 * fondo oscuro cálido, resplandor discreto, símbolo oficial claro con fundido
 * y acercamiento leve, pausa final y el sting de marca sincronizado con la entrada.
 * Sin narración ni CTA variable. Colocarlo en una <Sequence> de 90 cuadros.
 */
export const IsmaelOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

  const background = interpolate(frame, [0, 10], [0, 1], clamp);
  const glow = interpolate(frame, [4, 40], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const symbolOpacity = interpolate(frame, [3, 27], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const symbolScale = interpolate(frame, [3, 60], [0.94, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <AbsoluteFill
        style={{
          opacity: background,
          background: 'radial-gradient(ellipse 80% 55% at 50% 47%, #3a2419 0%, #22150f 55%, #140c09 100%)',
        }}
      />
      <AbsoluteFill
        style={{
          opacity: glow * 0.85,
          background: 'radial-gradient(circle 420px at 50% 47%, rgba(232, 182, 112, 0.32) 0%, rgba(232, 182, 112, 0.08) 55%, rgba(232, 182, 112, 0) 100%)',
        }}
      />
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Img
          src={staticFile(SYMBOL)}
          style={{
            width: 340,
            height: 'auto',
            marginTop: -110,
            opacity: symbolOpacity,
            transform: `scale(${symbolScale})`,
          }}
        />
      </AbsoluteFill>
      <Audio src={staticFile(STING)} />
    </AbsoluteFill>
  );
};
