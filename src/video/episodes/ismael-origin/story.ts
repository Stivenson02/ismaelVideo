export type StoryBeatId = 'hook' | 'flight' | 'encounter' | 'question' | 'promise' | 'lesson' | 'close';

export type StoryBeat = {
  id: StoryBeatId;
  from: number;
  to: number;
  narration: string;
  reference: string;
};

export type Caption = {
  from: number;
  to: number;
  text: string;
};

// HIST-001 · 30 fps · 1080 × 1920.
// Narración aprobada en docs/episodes/01-origen-de-ismael.md (adaptación breve de Génesis 16:7–11, RVR1960).
// Tiempos medidos sobre public/assets/audio/narration/01-ismail-origin-reference.wav (30,35 s):
// cada límite cae en la pausa entre frases. La voz ocupa 0–911; 911–1001 es la placa de marca.
export const NARRATION_FRAMES = 911;
export const OUTRO_FRAMES = 90;
export const TOTAL_FRAMES = NARRATION_FRAMES + OUTRO_FRAMES;

export const beats: StoryBeat[] = [
  { id: 'hook', from: 0, to: 98, narration: '¿Alguna vez has sentido que nadie ve lo que estás viviendo?', reference: '' },
  { id: 'flight', from: 98, to: 152, narration: 'Agar huía por el desierto.', reference: 'Génesis 16:6–7' },
  { id: 'encounter', from: 152, to: 294, narration: 'Allí, junto a una fuente, el ángel del Señor la encontró y la llamó por su nombre.', reference: 'Génesis 16:7–8' },
  { id: 'question', from: 294, to: 379, narration: 'Le preguntó de dónde venía y hacia dónde iba.', reference: 'Génesis 16:8' },
  { id: 'promise', from: 379, to: 575, narration: 'Después le anunció que tendría un hijo, y que debía llamarlo Ismael, porque Dios había oído su aflicción.', reference: 'Génesis 16:11' },
  { id: 'lesson', from: 575, to: 798, narration: 'La historia de Agar nos recuerda que, aun en medio del dolor, podemos hablar con Dios y confiar en que él nos ve y nos escucha.', reference: '' },
  { id: 'close', from: 798, to: NARRATION_FRAMES, narration: 'Si estas historias te ayudan, síguenos para compartir más.', reference: '' },
];

// Subtítulos: el mismo texto aprobado, partido en las pausas audibles de la voz de referencia.
export const captions: Caption[] = [
  { from: 0, to: 98, text: '¿Alguna vez has sentido que nadie ve lo que estás viviendo?' },
  { from: 98, to: 152, text: 'Agar huía por el desierto.' },
  { from: 152, to: 204, text: 'Allí, junto a una fuente,' },
  { from: 204, to: 294, text: 'el ángel del Señor la encontró y la llamó por su nombre.' },
  { from: 294, to: 379, text: 'Le preguntó de dónde venía y hacia dónde iba.' },
  { from: 379, to: 448, text: 'Después le anunció que tendría un hijo,' },
  { from: 448, to: 575, text: 'y que debía llamarlo Ismael, porque Dios había oído su aflicción.' },
  { from: 575, to: 680, text: 'La historia de Agar nos recuerda que, aun en medio del dolor,' },
  { from: 680, to: 798, text: 'podemos hablar con Dios y confiar en que él nos ve y nos escucha.' },
  { from: 798, to: NARRATION_FRAMES, text: 'Si estas historias te ayudan, síguenos para compartir más.' },
];
