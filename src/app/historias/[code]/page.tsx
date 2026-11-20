import { notFound } from 'next/navigation';
import Link from 'next/link';
import Storyboard from './storyboard';
import { storyboardCodes } from './storyboards';
import { extractScript, getStory, getVideos, readRepoFile, statusLabel } from '@/lib/stories';

const views = [
  { id: 'guion', label: 'Guion' },
  { id: 'storyboard', label: 'Storyboard' },
  { id: 'video', label: 'Video' },
] as const;
type View = (typeof views)[number]['id'];

const storyboards = new Set(storyboardCodes);

export default async function StoryPage({ params, searchParams }: PageProps<'/historias/[code]'>) {
  const { code } = await params;
  const query = await searchParams;
  const story = await getStory(code);
  if (!story) notFound();

  const videos = await getVideos(code);
  const requested = typeof query.vista === 'string' ? query.vista : '';
  const view: View = (views.find((v) => v.id === requested)?.id ?? (videos.length ? 'video' : 'guion')) as View;
  const selectedFile = typeof query.v === 'string' ? query.v : undefined;
  const video = videos.find((item) => item.file === selectedFile) ?? videos[0];
  const href = (vista: View, extra = '') => `/historias/${code}?vista=${vista}${extra}`;

  const document = await readRepoFile(story.document);
  const script = extractScript(document);

  return (
    <main className="board-shell">
      <header className="board-topbar">
        <Link href="/" className="brand"><span className="brand-mark">i.</span><span>ismael<span className="brand-muted"> studio</span></span></Link>
        <span className="local-badge"><i /> FICHA LOCAL</span>
      </header>

      <div className="story-detail">
        <Link className="back-link" href="/">← Todas las historias</Link>
        <div className="story-detail-head">
          <div>
            <div className="board-eyebrow">{story.code} <span>·</span> {statusLabel(story.status).toUpperCase()}</div>
            <h1>{story.name}</h1>
            <p>Objetivo: {story.objective}</p>
          </div>
          <nav className="story-tabs" aria-label="Detalles de la historia">
            {views.map((item) => {
              const disabled = (item.id === 'storyboard' && !storyboards.has(code)) || (item.id === 'video' && videos.length === 0);
              const count = item.id === 'video' && videos.length ? ` · ${videos.length}` : '';
              return disabled ? (
                <span key={item.id} className="story-tab story-tab-disabled">{item.label}</span>
              ) : (
                <Link key={item.id} href={href(item.id)} className={`story-tab ${view === item.id ? 'story-tab-active' : ''}`}>{item.label}{count}</Link>
              );
            })}
          </nav>
        </div>

        {view === 'guion' && (
          <section className="story-panel">
            <div className="section-heading"><div><span className="section-kicker">TEXTO NARRADO</span><h2>Guion</h2></div><Link className="source-note" href={`/documento/episodio/${code}`}>Abrir documento completo ↗</Link></div>
            {script ? (
              <div className="script-text">
                {script.map((line, i) => {
                  if (/^###\s+/.test(line)) return <h3 key={i}>{line.replace(/^###\s+/, '')}</h3>;
                  if (/^##\s+/.test(line)) return <p key={i} className="script-kicker">{line.replace(/^##\s+/, '')}</p>;
                  if (!line.trim()) return null;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            ) : (
              <p className="empty-state">No se encontró el bloque «Guion narrado» en el documento del episodio.</p>
            )}
            <div className="story-links">
              <Link href={`/documento/episodio/${code}`}>Historia y guion completos ↗</Link>
              {story.plan !== '—' && <Link href={`/documento/plan/${code}`}>Plan de producción ↗</Link>}
            </div>
          </section>
        )}

        {view === 'storyboard' && storyboards.has(code) && (
          <div className="embedded-board"><Storyboard code={code} /></div>
        )}

        {view === 'video' && (
          <section className="story-panel">
            <div className="section-heading"><div><span className="section-kicker">RENDER LOCAL</span><h2>Video</h2></div><span className="source-note">Animatic de revisión · voz temporal · no es el video final</span></div>
            {video ? (
              <div className="video-layout">
                <div className="video-frame">
                  <video key={video.file} controls preload="metadata" playsInline src={video.url} />
                </div>
                <aside className="video-side">
                  <span className="stage-label">VERSIÓN</span>
                  <div className="video-versions">
                    {videos.map((item) => (
                      <Link key={item.file} href={href('video', `&v=${item.file}`)} className={`video-version ${item.file === video.file ? 'video-version-active' : ''}`}>
                        <b>{item.label}</b><small>{item.file}</small>
                      </Link>
                    ))}
                  </div>
                  <p className="video-note">Se reproduce desde <code>public/videos/</code>. Los MP4 no se suben a Git. Antes de publicar, confirma los derechos de la voz.</p>
                </aside>
              </div>
            ) : (
              <p className="empty-state">Aún no hay un video renderizado para {code}. Aparecerá aquí cuando exista un MP4 en public/videos/ con el nombre ismael-{code.replace('HIST-', '')}-….</p>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
