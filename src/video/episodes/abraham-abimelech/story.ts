// HIST-002 · 30 fps · 1080 × 1920.
// Narración aprobada en docs/episodes/02-abraham-sara-abimelec.md (adaptación de Génesis 20:1–18, RVR1960).
// Tiempos medidos sobre los seis MP3 de public/assets/audio/narration/02-abraham-abimelech-*.mp3
// (ffprobe + pausas detectadas). Cada clip entra en su propia Sequence para que el desfase no se acumule.
// Solo texto, tiempo y referencia; las decisiones visuales viven en shots.ts.

export type Clip = { file: string; from: number; frames: number };

export const clips: Clip[] = [
  { file: '02-abraham-abimelech-01-hook.mp3', from: 0, frames: 433 },
  { file: '02-abraham-abimelech-02-abimelec.mp3', from: 433, frames: 472 },
  { file: '02-abraham-abimelech-03-confrontacion.mp3', from: 905, frames: 433 },
  { file: '02-abraham-abimelech-04-abraham-explica.mp3', from: 1338, frames: 340 },
  { file: '02-abraham-abimelech-05-restauracion.mp3', from: 1678, frames: 448 },
  { file: '02-abraham-abimelech-06-ensenanza-cierre.mp3', from: 2126, frames: 214 },
];

export const NARRATION_FRAMES = 2340;
export const OUTRO_FRAMES = 90;
export const TOTAL_FRAMES = NARRATION_FRAMES + OUTRO_FRAMES;

export type StoryBeatId =
  | 'hook'
  | 'arrival'
  | 'half-truth'
  | 'palace'
  | 'dream'
  | 'council'
  | 'confrontation'
  | 'truth'
  | 'return'
  | 'prayer'
  | 'lesson'
  | 'final-question';

export type StoryBeat = { id: StoryBeatId; from: number; to: number; narration: string; reference: string };

export const beats: StoryBeat[] = [
  { id: 'hook', from: 0, to: 111, narration: 'Te mintieron. Tú confiaste. Y tú pagaste las consecuencias.', reference: '' },
  { id: 'arrival', from: 111, to: 210, narration: 'Abraham llegó a Gerar con Sara. Pero el miedo lo acompañaba.', reference: 'Génesis 20:1–2' },
  { id: 'half-truth', from: 210, to: 433, narration: 'Pensó que, si sabían que ella era su esposa, lo matarían. Por eso dijo que era su hermana. Sara también sostuvo esa versión.', reference: 'Génesis 20:2, 11–13' },
  { id: 'palace', from: 433, to: 663, narration: 'Abimelec, rey de aquella tierra, oyó que Sara era hermana de Abraham y la llevó a su casa. No sabía que también era su esposa.', reference: 'Génesis 20:2' },
  { id: 'dream', from: 663, to: 1101, narration: 'Esa noche, Dios se le apareció en sueños y le advirtió que Sara estaba casada. Abimelec respondió que había actuado sin saberlo. Dios reconoció su integridad en ese asunto: él mismo le había impedido acercarse a ella. Ahora debía devolverla.', reference: 'Génesis 20:3–7' },
  { id: 'council', from: 1101, to: 1252, narration: 'Al amanecer, Abimelec reunió a sus siervos. Después llamó a Abraham y lo confrontó.', reference: 'Génesis 20:8' },
  { id: 'confrontation', from: 1252, to: 1475, narration: 'Su decisión había puesto a otros en peligro. Abraham explicó que había tenido miedo: creyó que allí no había temor de Dios.', reference: 'Génesis 20:9–11' },
  { id: 'truth', from: 1475, to: 1678, narration: 'Sara era su media hermana, sí. Pero también era su esposa. Abraham había contado solo la parte que le convenía.', reference: 'Génesis 20:12–13' },
  { id: 'return', from: 1678, to: 1780, narration: 'Abimelec devolvió a Sara y la reivindicó ante todos.', reference: 'Génesis 20:14–16' },
  { id: 'prayer', from: 1780, to: 1869, narration: 'Abraham oró por él, y Dios sanó a su casa.', reference: 'Génesis 20:17–18' },
  { id: 'lesson', from: 1869, to: 2250, narration: 'Abimelec no había mentido. Aun así, su casa sufrió las consecuencias de la verdad a medias de Abraham. Y él se atrevió a confrontarlo. Porque incluso una persona de fe puede hacer daño con lo que decide callar.', reference: '' },
  { id: 'final-question', from: 2250, to: NARRATION_FRAMES, narration: '¿Alguna vez pagaste por una mentira?', reference: '' },
];

export type Caption = { from: number; to: number; text: string };

// Mismo texto aprobado, partido en las pausas audibles. Cada línea dura hasta la siguiente.
const starts: Array<[number, string]> = [
  [0, 'Te mintieron.'],
  [26, 'Tú confiaste.'],
  [52, 'Y tú pagaste las consecuencias.'],
  [111, 'Abraham llegó a Gerar con Sara.'],
  [167, 'Pero el miedo lo acompañaba.'],
  [210, 'Pensó que, si sabían que ella era su esposa, lo matarían.'],
  [311, 'Por eso dijo que era su hermana.'],
  [359, 'Sara también sostuvo esa versión.'],
  [433, 'Abimelec, rey de aquella tierra,'],
  [497, 'oyó que Sara era hermana de Abraham y la llevó a su casa.'],
  [600, 'No sabía que también era su esposa.'],
  [663, 'Esa noche, Dios se le apareció en sueños y le advirtió que Sara estaba casada.'],
  [807, 'Abimelec respondió que había actuado sin saberlo.'],
  [909, 'Dios reconoció su integridad en ese asunto:'],
  [983, 'él mismo le había impedido acercarse a ella.'],
  [1058, 'Ahora debía devolverla.'],
  [1101, 'Al amanecer, Abimelec reunió a sus siervos.'],
  [1185, 'Después llamó a Abraham y lo confrontó.'],
  [1256, 'Su decisión había puesto a otros en peligro.'],
  [1342, 'Abraham explicó que había tenido miedo:'],
  [1406, 'creyó que allí no había temor de Dios.'],
  [1475, 'Sara era su media hermana, sí.'],
  [1531, 'Pero también era su esposa.'],
  [1575, 'Abraham había contado solo la parte que le convenía.'],
  [1678, 'Abimelec devolvió a Sara y la reivindicó ante todos.'],
  [1780, 'Abraham oró por él,'],
  [1821, 'y Dios sanó a su casa.'],
  [1869, 'Abimelec no había mentido.'],
  [1923, 'Aun así, su casa sufrió las consecuencias de la verdad a medias de Abraham.'],
  [2054, 'Y él se atrevió a confrontarlo.'],
  [2130, 'Porque incluso una persona de fe'],
  [2184, 'puede hacer daño con lo que decide callar.'],
  [2270, '¿Alguna vez pagaste por una mentira?'],
];

// Cada subtítulo termina en el inicio del siguiente (máx. 200 cuadros); el último, al terminar la voz.
export const captions: Caption[] = starts.map(([from, text], i) => {
  const next = starts[i + 1]?.[0];
  const to = next === undefined ? 2325 : Math.min(next, from + 200);
  return { from, to, text };
});
