import Link from 'next/link';

const requests = [
  ['01', 'Agar', 'Cuerpo entero 3/4, manto sencillo y expresión cansada pero digna. Si puede ser por capas: cabeza, torso y brazos.', 'public/assets/characters/agar/agar.png'],
  ['02', 'Mensajero', 'Figura serena en ropa antigua, dirigida hacia Agar. No necesitamos alas; prioricemos que se vea sobrio y consistente.', 'public/assets/characters/angel/messenger.png'],
  ['03', 'Desierto y fuente', 'Fondo vertical 9:16 con camino, montes y pozo. Por capas si quieres movimiento de profundidad.', 'public/assets/backgrounds/shur-spring-*.png'],
  ['04', 'Logo oficial', 'Versión transparente SVG o PNG de la marca Ismael para el cierre. Este sí es necesario para dar por final el MP4.', 'public/assets/brand/ismael-logo.svg'],
];

export default function ArtsGuide() {
  return <main className="guide-page"><Link className="back-link" href="/">← Volver al estudio</Link><p className="section-kicker">EPISODIO 01 · GÉNESIS 16</p><h1>Los primeros artes<br/><em>que necesitamos.</em></h1><p className="guide-intro">Con Agar, el mensajero y el desierto ya podemos montar un animatic. El logo oficial queda para el render final.</p><div className="guide-list">{requests.map(([number,title,description,path])=><article className="guide-item" key={number}><span className="guide-number">{number}</span><div><h2>{title}</h2><p>{description}</p><code>{path}</code></div></article>)}</div><div className="guide-note"><strong>Para empezar sin enredarnos</strong><p>PNG con transparencia funciona perfecto para personajes. Una sola imagen está bien para el primer animatic; luego separamos las piezas que queramos mover.</p></div><p className="guide-document">La guía completa está en <code>docs/ARTS-NEEDED.md</code>.</p></main>;
}