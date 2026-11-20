import { AbsoluteFill, Img, staticFile } from 'remotion';

// Portada vertical de HIST-004 (Instagram Reels; sirve como miniatura de YouTube si se puede subir).
// Compone la imagen guía aprobada con el título y el símbolo oficial; el arte no lleva texto propio.
// El texto queda dentro del recorte 3:4 de la cuadrícula de Instagram (y 240–1680) y sobre el cielo libre.

const GUIDE = 'assets/concepts/episodes/juda-tamar/instagram-cover-guide.png';
const SYMBOL = 'assets/brand/ismael-symbol-light-variant.png';
const SHADOW = '0 3px 22px rgba(6, 8, 20, 0.85)';

export const JudaTamarCover: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#0b1030' }}>
    <Img src={staticFile(GUIDE)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    <AbsoluteFill style={{ background: 'linear-gradient(180deg, rgba(6, 8, 24, 0.55) 0%, rgba(6, 8, 24, 0.25) 30%, rgba(0,0,0,0) 40%)' }} />
    <Img src={staticFile(SYMBOL)} style={{ position: 'absolute', top: 232, left: 495, width: 90, height: 'auto' }} />
    <div style={{ position: 'absolute', top: 345, left: 80, right: 80, textAlign: 'center', font: '700 30px Arial, sans-serif', letterSpacing: 8, color: '#e6c58c', textShadow: SHADOW }}>
      GÉNESIS 38
    </div>
    <div style={{ position: 'absolute', top: 392, left: 70, right: 70, textAlign: 'center', font: '700 92px/1.04 Georgia, serif', color: '#fff8ec', textShadow: SHADOW }}>
      Las pruebas que
      <br />
      no pudo negar
    </div>
  </AbsoluteFill>
);
