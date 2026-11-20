'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { storyboards, type Figure, type Scene } from './storyboards';

const base = '/assets/';

function figureStyle(figure: Figure, finalPose: boolean) {
  const flip = finalPose ? figure.endFlip ?? figure.flip : figure.flip;
  return { left: `${finalPose ? figure.endX : figure.x}%`, top: `${finalPose ? figure.endY : figure.y}%`, height: `${finalPose ? figure.endHeight ?? figure.height : figure.height}%`, opacity: finalPose ? figure.endOpacity ?? 1 : figure.opacity ?? 1, transform: `translate(-50%,-100%) scaleX(${flip ? -1 : 1})` };
}

function backgroundStyle(scene: Scene, finalPose: boolean) {
  const scale = finalPose ? scene.endBackgroundScale ?? 1 : scene.backgroundScale ?? 1;
  const origin = finalPose ? scene.endBackgroundOrigin ?? 'center center' : scene.backgroundOrigin ?? 'center center';
  return { transform: `scale(${scale})`, transformOrigin: origin };
}

export default function Storyboard({ code }: { code: string }) {
  const board = storyboards[code];
  const scenes = board?.scenes ?? [];
  const total = scenes.length;
  const storageKey = `ismael-storyboard-${code}-notes`;
  const [active, setActive] = useState(0);
  const [finalPose, setFinalPose] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [notes, setNotes] = useState<Record<number, string>>({});
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setNotes(JSON.parse(saved));
  }, [storageKey]);
  useEffect(() => { if (playing && total) { const timer = window.setInterval(() => setActive((current) => (current + 1) % total), 3200); return () => window.clearInterval(timer); } }, [playing, total]);
  if (!board || !total) return null;
  const scene = scenes[active];
  const updateNote = (value: string) => { const next = { ...notes, [scene.id]: value }; setNotes(next); localStorage.setItem(storageKey, JSON.stringify(next)); };
  const goTo = (index: number) => { setActive(index); setFinalPose(false); };
  const count = String(total).padStart(2, '0');

  return <div className="storyboard-page">
    <div className="storyboard-heading"><div><Link className="back-link" href="/">← Todas las historias</Link><div className="board-eyebrow">{code} <span>·</span> {board.version}</div><h1>{board.titleLead} <em>{board.titleEm}</em></h1><p>{board.subtitle}</p></div><div className="draft-badge"><i /> {board.badge}</div></div>
    <div className="storyboard-layout">
      <aside className="scene-rail"><div className="rail-heading"><span>SECUENCIA</span><b>{total} cuadros</b></div><div className="scene-list">{scenes.map((item, index) => <button key={item.id} className={`scene-row ${active === index ? 'scene-row-active' : ''}`} onClick={() => goTo(index)}><span className="scene-number">{String(item.id).padStart(2,'0')}</span><span className="scene-row-copy"><strong>{item.beat}</strong><small>{item.seconds}</small></span>{notes[item.id]?.trim() && <i className="note-marker" />}</button>)}</div><div className="rail-foot">Selecciona una escena para revisar su composición.</div></aside>
      <section className="stage-column">
        <div className="stage-toolbar"><div><span className="stage-label">ESCENA {String(scene.id).padStart(2,'0')} / {count}</span><h2>{scene.beat}</h2></div><div className="stage-actions"><button onClick={() => setFinalPose((value) => !value)} className="pose-toggle">{finalPose ? 'Ver inicio' : 'Ver final'}</button><button onClick={() => setPlaying((value) => !value)} className="play-storyboard">{playing ? 'Ⅱ Pausar' : '▶ Recorrer'}</button></div></div>
        <div className={`mock-stage ${scene.kind === 'hook' ? 'stage-hook' : ''} ${scene.kind === 'dream' ? 'stage-dream' : ''} ${scene.kind === 'brand' ? 'stage-brand' : ''}`}>
          {scene.layers
            ? scene.layers.map((src, index) => <img key={src} className="stage-background" style={backgroundStyle(scene, finalPose)} src={src} alt={index === 0 ? `Arte guía: ${scene.beat}` : ''} />)
            : <img className={scene.kind === 'brand' ? 'stage-background stage-brand-mark' : 'stage-background'} style={backgroundStyle(scene, finalPose)} src={finalPose && scene.endBackground ? scene.endBackground : scene.background} alt={`Arte guía: ${scene.beat}`} />}
          {scene.tint && <div style={{ position: 'absolute', inset: 0, zIndex: -2, background: scene.tint, pointerEvents: 'none' }} />}
          {scene.figures.map((figure) => <img key={figure.name} className={`stage-figure ${finalPose ? 'pose-final' : 'pose-initial'}`} style={figureStyle(figure, finalPose)} src={`${base}${finalPose ? figure.final : figure.initial}`} alt={figure.name} />)}
          {scene.kind === 'hook' && <><img className={`envelope-prop ${finalPose ? 'envelope-final' : ''}`} src={`${base}props/hook-02/cream-envelope-and-hand.png`} alt="Mano entregando un sobre" /><div className={`falling-shadow ${finalPose ? 'shadow-final' : ''}`} /></>}
          {scene.kind === 'dream' && <><div className="dream-light" />{scene.placeholder && !finalPose && <span className="dream-placeholder">{scene.placeholder}</span>}</>}
          <span className="stage-watermark">BOCETO DE ENCUADRE · ARTE NO FINAL</span>
          <div className="stage-subtitle">{scene.narration}</div>
          <span className="stage-duration">{scene.seconds}</span>
        </div>
        <div className="stage-caption"><span>PUENTE DE SALIDA</span><p>{scene.transition}</p></div>
        <div className="stage-navigation"><button disabled={active === 0} onClick={() => goTo(Math.max(0, active - 1))}>← Escena anterior</button><span>{String(active + 1).padStart(2,'0')} <i>/</i> {count}</span><button disabled={active === total - 1} onClick={() => goTo(Math.min(total - 1, active + 1))}>Siguiente escena →</button></div>
      </section>
      <aside className="scene-inspector"><div className="inspector-section"><span className="stage-label">VOZ APROBADA</span><blockquote>{scene.narration}</blockquote><small>{scene.seconds} · referencias visuales, no sincronía final</small></div><div className="inspector-section"><span className="stage-label">COMPOSICIÓN Y MOVIMIENTO</span><p>{scene.note}</p></div><div className="inspector-section"><label className="stage-label" htmlFor="scene-note">TUS AJUSTES</label><textarea id="scene-note" value={notes[scene.id] ?? ''} onChange={(event) => updateNote(event.target.value)} placeholder="Ej.: mover a Abimelec más a la izquierda…" /><small className="saved-note">Se guarda solo en este navegador.</small></div><div className="inspector-assets"><span className="stage-label">RECURSOS USADOS</span>{(scene.layers ?? [scene.background]).map((src) => <code key={src}>{src.split('/').slice(-1)[0]}</code>)}{scene.figures.map((figure) => <code key={figure.name}>{figure.name}</code>)}</div><Link className="open-plan-link" href={`/documento/plan/${code}`}>Abrir plan completo ↗</Link></aside>
    </div>
    <div className="storyboard-footnote"><span>✳</span><p>{board.footnote}</p></div>
  </div>;
}
