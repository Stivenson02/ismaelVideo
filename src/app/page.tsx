import Link from 'next/link';
import { getStories, getVideos, statusLabel } from '@/lib/stories';

export default async function Home() {
  const stories = await getStories();
  const videos = Object.fromEntries(await Promise.all(stories.map(async (story) => [story.code, await getVideos(story.code)] as const)));
  const ready = stories.filter((story) => story.status.includes('ready-for-plan') || story.status.includes('plan-draft') || story.status.includes('plan-approved')).length;
  return (
    <main className="studio-shell">
      <aside className="sidebar">
        <Link className="brand" href="/"><span className="brand-mark">i.</span><span>ismael<span className="brand-muted"> studio</span></span></Link>
        <p className="side-label">ESPACIO DE TRABAJO</p>
        <Link className="nav-item nav-active" href="/"><span>◫</span> Historias</Link>
        <a className="nav-item" href="#producciones"><span>▤</span> Producciones</a>
        <Link className="nav-item" href="/guia-artes"><span>◇</span> Guía de artes</Link>
        <div className="sidebar-bottom"><span className="local-dot" /> Archivos locales · sin base de datos</div>
      </aside>

      <section className="workspace">
        <header className="topbar"><span>ESTUDIO DE CONTENIDO <span className="slash">/</span> ISMAEL</span><span className="local-badge"><i /> LOCAL · :3007</span></header>
        <div className="content dashboard-content">
          <div className="eyebrow"><span className="eyebrow-line" /> TALLER DE HISTORIAS · PRODUCCIÓN LOCAL</div>
          <div className="dashboard-hero">
            <div><h1>Las historias,<br /><em>en cada etapa.</em></h1><p className="intro">Guiones, recursos y previas visuales organizados antes de pasar a animación y render.</p></div>
            <div className="dashboard-count"><strong>{stories.length.toString().padStart(2, '0')}</strong><span>HISTORIAS</span><i /> <small>{ready} en planificación</small></div>
          </div>

          <section id="producciones" className="production-section">
            <div className="section-heading"><div><span className="section-kicker">SEGUIMIENTO EDITORIAL</span><h2>Producciones</h2></div><span className="source-note">Estados leídos desde docs/episodes/INDEX.md</span></div>
            <div className="production-list">
              {stories.map((story) => {
                const storyVideos = videos[story.code] ?? [];
                return <article className="production-card" key={story.code}>
                  <div className="production-index">{story.code.replace('HIST-', '')}</div>
                  <div className="production-main"><div className="production-title-row"><span className="production-code">{story.code}</span><span className={`status-pill ${story.status.includes('ready-for-plan') ? 'status-ready' : ''}`}>{statusLabel(story.status)}</span>{storyVideos.length > 0 && <span className="status-pill status-video">▶ {storyVideos.length} {storyVideos.length === 1 ? 'video' : 'videos'}</span>}</div><h3>{story.name}</h3><p>{story.status}</p><div className="production-meta"><span>Objetivo <b>{story.objective}</b></span><span>Plan <b>{story.plan === '—' ? 'Pendiente' : story.plan}</b></span></div></div>
                  <div className="production-actions"><Link className="button-primary" href={`/historias/${story.code}`}>Ver detalles <span>→</span></Link>{storyVideos.length > 0 ? <Link href={`/historias/${story.code}?vista=video`}>▶ Reproducir video ↗</Link> : <Link href={`/documento/episodio/${story.code}`}>Abrir guion ↗</Link>}</div>
                </article>;
              })}
              {stories.length === 0 && <p className="empty-state">No hay historias registradas todavía. Añade una fila a `docs/episodes/INDEX.md`.</p>}
            </div>
          </section>
          <section className="workflow-note"><span className="workflow-note-icon">✳</span><div><strong>Revisa antes de producir</strong><p>Cada historia reúne su guion, su storyboard y los videos renderizados en una sola ficha. El storyboard no genera MP4 ni modifica el plan; tus notas quedan guardadas en este navegador.</p></div><span className="workflow-route">PLAN <i>→</i> PREVIA <i>→</i> EJECUCIÓN</span></section>
          <footer className="footer"><span>ISMAEL STUDIO <i>·</i> HECHO PARA CONTAR CON CUIDADO</span><span>Los archivos y notas permanecen en tu equipo.</span></footer>
        </div>
      </section>
    </main>
  );
}
