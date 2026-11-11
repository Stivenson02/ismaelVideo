import { PreviewPlayer } from '@/video/PreviewPlayer';

const assets = [
  { title: 'Agar', detail: 'Personaje principal · rig por capas', status: 'Pendiente', icon: 'AG' },
  { title: 'El mensajero', detail: 'Ángel del Señor · diseño sobrio', status: 'Pendiente', icon: 'AN' },
  { title: 'Pozo y desierto', detail: 'Fondo modular · camino de Shur', status: 'Pendiente', icon: 'DS' },
  { title: 'Marca Ismael', detail: 'Logo para cierre de cada Reel', status: 'Pendiente', icon: 'IS' },
];

export default function Home() {
  return (
    <main className="studio-shell">
      <aside className="sidebar">
        <a className="brand" href="#inicio"><span className="brand-mark">i.</span><span>ismael<span className="brand-muted"> studio</span></span></a>
        <p className="side-label">ESPACIO DE TRABAJO</p>
        <a className="nav-item nav-active" href="#proyecto"><span>◫</span> Proyecto</a>
        <a className="nav-item" href="#guion"><span>▤</span> Guion y escenas</a>
        <a className="nav-item" href="#biblioteca"><span>◇</span> Biblioteca de artes</a>
        <a className="nav-item" href="#audio"><span>♫</span> Audio</a>
        <div className="sidebar-bottom"><span className="local-dot" /> Todo se guarda en este computador</div>
      </aside>

      <section className="workspace" id="inicio">
        <header className="topbar"><span>ESTUDIO DE CONTENIDO <span className="slash">/</span> PRIMERA SERIE</span><span className="local-badge"><i /> LOCAL</span></header>
        <div className="content">
          <div className="eyebrow"><span className="eyebrow-line" /> PRIMERA PRUEBA · GÉNESIS 16</div>
          <div className="hero-row" id="proyecto">
            <div><h1>Una historia<br /><em>que merece ser contada.</em></h1><p className="intro">El instante en que Agar escucha el nombre de su hijo: Ismael, porque Dios oyó su aflicción.</p></div>
            <div className="project-number"><span>EPISODIO</span><strong>01</strong><small>EN PREPARACIÓN</small></div>
          </div>

          <div className="overview-grid">
            <div className="preview-card">
              <div className="preview-sky"><span className="preview-scene-label">VISTA PREVIA · ARTES POR DEFINIR</span><div className="preview-phone"><PreviewPlayer /></div></div>
              <div className="preview-footer"><span>FORMATO REEL <b>1080 × 1920</b></span><span>40 SEG <b>·</b> 30 FPS</span></div>
            </div>
            <div className="episode-card" id="guion"><div className="card-top"><span className="section-kicker">EL RELATO</span><span className="script-ref">GÉNESIS 16:7–14</span></div><h2>Del desierto<br />al nombre.</h2><p className="episode-copy">Huyendo de Sarai, Agar se encuentra con el mensajero de Dios junto a una fuente. Allí recibe una promesa y el nombre de su hijo.</p><div className="key-quote">“Lo llamarás Ismael,<br />porque el Señor ha oído.”</div><div className="episode-meta"><span>6 escenas</span><span>·</span><span>Adaptación narrativa RVR1960</span></div></div>
          </div>

          <div className="section-heading" id="biblioteca"><div><span className="section-kicker">ANTES DE ANIMAR</span><h2>Biblioteca de artes</h2></div><a href="/guia-artes">Ver guía de entrega ↗</a></div>
          <div className="asset-grid">{assets.map((asset) => <article className="asset-card" key={asset.title}><div className="asset-icon">{asset.icon}</div><div className="asset-info"><strong>{asset.title}</strong><span>{asset.detail}</span></div><span className="asset-status"><i />{asset.status}</span></article>)}</div>

          <div className="workflow-bar" id="audio"><div><span className="workflow-icon">♫</span><span><strong>Voz y ambiente</strong><small>Sin audios todavía · Voz en español por definir</small></span></div><div className="workflow-steps"><span className="step-done">Guion</span><i>—</i><span>Artes</span><i>—</i><span>Animación</span><i>—</i><span>MP4</span></div></div>
          <footer className="footer"><span>ISMAEL STUDIO <i>·</i> CREADO PARA CONTAR CON CUIDADO</span><span>Los archivos y renders permanecen en tu equipo.</span></footer>
        </div>
      </section>
    </main>
  );
}




