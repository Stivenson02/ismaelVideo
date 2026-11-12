import { notFound } from 'next/navigation';
import Link from 'next/link';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const documents: Record<string, Record<string, string>> = {
  episodio: { 'HIST-001': 'docs/episodes/01-origen-de-ismael.md', 'HIST-002': 'docs/episodes/02-abraham-sara-abimelec.md' },
  plan: { 'HIST-001': 'docs/plans/HIST-001-plan.md', 'HIST-002': 'docs/plans/HIST-002-plan.md' },
};

export default async function DocumentPage({ params }: PageProps<'/documento/[tipo]/[code]'>) {
  const { tipo, code } = await params;
  const file = documents[tipo]?.[code];
  if (!file) notFound();
  const content = await readFile(path.join(process.cwd(), file), 'utf8');
  return <main className="document-page"><Link className="back-link" href={tipo === 'plan' ? `/historias/${code}` : '/'}>← Volver</Link><div className="document-header"><span className="section-kicker">DOCUMENTO LOCAL · {code}</span><h1>{tipo === 'plan' ? 'Plan de producción' : 'Historia y guion'}</h1><p>{file}</p></div><pre className="document-content">{content}</pre></main>;
}
