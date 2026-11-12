import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

export type Story = { code: string; name: string; document: string; status: string; objective: string; plan: string };
export type StoryVideo = { file: string; url: string; label: string };

const root = process.cwd();

/** Historias registradas en docs/episodes/INDEX.md (fuente única de estados). */
export async function getStories(): Promise<Story[]> {
  const index = await readFile(path.join(root, 'docs/episodes/INDEX.md'), 'utf8');
  return index
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| `HIST-'))
    .map((line) => {
      const c = line.split('|').slice(1, -1).map((column) => column.trim());
      return {
        code: c[0].replaceAll('`', ''),
        name: c[1],
        document: c[2].replaceAll('`', ''),
        status: c[3].replaceAll('`', ''),
        objective: c[4].replaceAll('`', ''),
        plan: c[5].replaceAll('`', ''),
      };
    });
}

export async function getStory(code: string) {
  return (await getStories()).find((story) => story.code === code);
}

/** Videos renderizados en public/videos cuyo nombre empieza con ismael-<número de la historia>-. */
export async function getVideos(code: string): Promise<StoryVideo[]> {
  const number = code.replace('HIST-', '');
  let files: string[] = [];
  try {
    files = await readdir(path.join(root, 'public/videos'));
  } catch {
    return [];
  }
  return files
    .filter((file) => file.startsWith(`ismael-${number}-`) && file.endsWith('.mp4'))
    .sort()
    .reverse() // la revisión más reciente (review-02) primero
    .map((file) => ({
      file,
      url: `/videos/${file}`,
      label: file.replace(/^ismael-\d+-/, '').replace('.mp4', '').replace(/-/g, ' '),
    }));
}

export async function readRepoFile(relativePath: string) {
  return readFile(path.join(root, relativePath), 'utf8');
}

/** Extrae el bloque “Guion narrado” del documento del episodio (hasta el siguiente encabezado de nivel 2). */
export function extractScript(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => /^##\s+Guion narrado/i.test(line));
  if (start === -1) return null;
  let end = lines.findIndex((line, i) => i > start && /^##\s+/.test(line));
  if (end === -1) end = lines.length;
  return lines.slice(start, end);
}

export function statusLabel(status: string) {
  if (status.includes('approved') && status.includes('ejecutado')) return 'Animatic en revisión';
  if (status.includes('plan-approved')) return 'Plan aprobado';
  if (status.includes('aprobada') || status.includes('aprobado')) return 'Aprobado';
  if (status.includes('ready-for-plan')) return 'Listo para plan';
  if (status.includes('plan-draft')) return 'Plan en revisión';
  if (status.includes('Revisión')) return 'En revisión';
  return 'En preparación';
}
