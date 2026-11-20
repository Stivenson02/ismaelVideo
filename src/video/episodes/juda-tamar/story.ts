// HIST-004 · 30 fps · 1080 × 1920.
// Guion v2 aprobado en docs/episodes/04-juda-tamar.md (Génesis 38; citas textuales RVR1960 de Gn 38:25–26).
// Tiempos medidos con `tools/ismv_prep.py voz` sobre public/assets/audio/narration/04-juda-tamar-*.mp3
// (`*.words.json`) y hoja de animación en docs/episodes/04-juda-tamar-preproduccion.md §7.
// Solo texto, tiempo y referencia; las decisiones visuales viven en shots.ts.

/** `frames`: el audio se corta 6 cuadros después de su última palabra. */
export type Clip = { file: string; from: number; frames: number; voice: string };

export const clips: Clip[] = [
  { file: '04-juda-tamar-01-gancho.mp3', from: 0, frames: 187, voice: 'Joss' },
  { file: '04-juda-tamar-02-puente.mp3', from: 192, frames: 89, voice: 'Joss' },
  { file: '04-juda-tamar-03-conflicto.mp3', from: 284, frames: 172, voice: 'Joss' },
  { file: '04-juda-tamar-04-riesgo.mp3', from: 459, frames: 118, voice: 'Joss' },
  { file: '04-juda-tamar-05-garantia.mp3', from: 582, frames: 182, voice: 'Joss' },
  { file: '04-juda-tamar-06-escalada.mp3', from: 771, frames: 171, voice: 'Joss' },
  { file: '04-juda-tamar-07-revelacion.mp3', from: 948, frames: 55, voice: 'Joss' },
  { file: '04-juda-tamar-08-cita-tamar.mp3', from: 1004, frames: 65, voice: 'Yuli (Tamar)' },
  { file: '04-juda-tamar-09-remate.mp3', from: 1074, frames: 36, voice: 'Joss' },
  { file: '04-juda-tamar-10-cita-juda.mp3', from: 1113, frames: 61, voice: 'GABRIEL-VO (Judá)' },
];

/** Escenas con voz y enseñanza; el sting integrado va encima de los últimos 30 cuadros. */
export const SCENE_FRAMES = 1270;
export const STING_FRAMES = 30;
export const TOTAL_FRAMES = SCENE_FRAMES + STING_FRAMES;

export type StoryBeatId =
  | 'hook'
  | 'bridge'
  | 'conflict'
  | 'risk'
  | 'road'
  | 'pledge'
  | 'rumor'
  | 'order'
  | 'reveal'
  | 'recognize'
  | 'verdict'
  | 'lesson'
  | 'sting';

export type StoryBeat = { id: StoryBeatId; from: number; to: number; narration: string; reference: string };

export const beats: StoryBeat[] = [
  { id: 'hook', from: 0, to: 192, narration: 'Te prometió algo. Esperaste meses. Nunca cumplió… y al final, la culpa fue tuya.', reference: '' },
  { id: 'bridge', from: 192, to: 284, narration: 'A Tamar le pasó algo parecido… pero mucho más grave.', reference: 'Génesis 38' },
  { id: 'conflict', from: 284, to: 459, narration: 'Había quedado viuda. Judá, su suegro, le prometió a su hijo Selá… pero nunca cumplió.', reference: 'Génesis 38:11–14' },
  { id: 'risk', from: 459, to: 560, narration: 'Así que tomó un riesgo: se cubrió el rostro y lo esperó en el camino.', reference: 'Génesis 38:14' },
  { id: 'road', from: 560, to: 668, narration: 'Judá no la reconoció, se acostó con ella y le dejó como garantía', reference: 'Génesis 38:15–18' },
  { id: 'pledge', from: 668, to: 771, narration: 'su sello, su cordón y su bastón.', reference: 'Génesis 38:18' },
  { id: 'rumor', from: 771, to: 848, narration: 'Meses después, estaba embarazada.', reference: 'Génesis 38:24' },
  { id: 'order', from: 848, to: 948, narration: 'Y Judá, el que no cumplió, ordenó castigarla.', reference: 'Génesis 38:24' },
  { id: 'reveal', from: 948, to: 1074, narration: 'Entonces ella mostró los objetos: «Mira ahora de quién son estas cosas».', reference: 'Génesis 38:25' },
  { id: 'recognize', from: 1074, to: 1113, narration: 'Judá los reconoció:', reference: 'Génesis 38:26' },
  { id: 'verdict', from: 1113, to: 1180, narration: '«Más justa es ella que yo».', reference: 'Génesis 38:26' },
  { id: 'lesson', from: 1180, to: SCENE_FRAMES, narration: '', reference: '' },
  { id: 'sting', from: SCENE_FRAMES, to: TOTAL_FRAMES, narration: '', reference: '' },
];

export type Caption = { from: number; to: number; text: string };

/** Subtítulos de la narración (texto del guion, no de la transcripción), partidos en las pausas medidas. */
export const captions: Caption[] = [
  { from: 0, to: 40, text: 'Te prometió algo.' },
  { from: 40, to: 82, text: 'Esperaste meses.' },
  { from: 82, to: 107, text: 'Nunca cumplió…' },
  { from: 107, to: 188, text: 'y al final, la culpa fue tuya.' },
  { from: 192, to: 248, text: 'A Tamar le pasó algo parecido…' },
  { from: 248, to: 282, text: 'pero mucho más grave.' },
  { from: 284, to: 324, text: 'Había quedado viuda.' },
  { from: 324, to: 420, text: 'Judá, su suegro, le prometió a su hijo Selá…' },
  { from: 420, to: 457, text: 'pero nunca cumplió.' },
  { from: 459, to: 507, text: 'Así que tomó un riesgo:' },
  { from: 507, to: 578, text: 'se cubrió el rostro y lo esperó en el camino.' },
  { from: 582, to: 652, text: 'Judá no la reconoció, se acostó con ella' },
  { from: 652, to: 687, text: 'y le dejó como garantía' },
  { from: 687, to: 766, text: 'su sello, su cordón y su bastón.' },
  { from: 771, to: 832, text: 'Meses después, estaba embarazada.' },
  { from: 832, to: 942, text: 'Y Judá, el que no cumplió, ordenó castigarla.' },
  { from: 948, to: 1003, text: 'Entonces ella mostró los objetos:' },
  { from: 1074, to: 1110, text: 'Judá los reconoció:' },
];

/** Palabras que toman el color de acento al nombrarse (siembran la revelación). */
export const highlights = [
  { word: 'sello', from: 691 },
  { word: 'cordón', from: 718 },
  { word: 'bastón', from: 745 },
] as const;

/** Citas textuales RVR1960 (fragmentos de versículo); se distinguen visualmente de la narración. */
export type Quote = { from: number; to: number; text: string; reference: string; voice: string };

export const quotes: Quote[] = [
  { from: 1004, to: 1073, text: 'Mira ahora de quién son estas cosas', reference: 'Génesis 38:25', voice: 'Yuli (Tamar)' },
  { from: 1113, to: 1179, text: 'Más justa es ella que yo', reference: 'Génesis 38:26', voice: 'GABRIEL-VO (Judá)' },
];

/** Textos en pantalla sin voz (guion v2, "Texto en pantalla"). */
export const onScreen = {
  /** Visible desde el primer cuadro: el inicio se entiende sin sonido. */
  title: { from: 0, to: 84, text: '¿Te ha pasado?' },
  /** Burbujas de chat sin remitente; permanecen hasta el final del gancho. */
  bubbles: [
    { from: 4, text: 'Te lo prometo, el próximo mes', date: 'marzo' },
    { from: 40, text: 'Te lo prometo, el próximo mes', date: 'junio' },
    { from: 60, text: 'Te lo prometo, el próximo mes', date: 'septiembre' },
    { from: 150, text: 'Esto es culpa tuya.', date: '' },
  ],
  bubblesTo: 190,
  labels: [
    { from: 200, to: 270, text: 'Génesis 38' },
    { from: 775, to: 830, text: 'Meses después' },
  ],
  lesson: { from: 1196, to: 1269, text: 'Quien promete, responde por su promesa.' },
};
