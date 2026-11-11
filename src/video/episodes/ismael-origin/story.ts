export type StoryBeat = {
  id: string;
  from: number;
  to: number;
  narration: string;
  reference: string;
  art: string;
};

// 30 fps · 40 s · 1080 × 1920. Dramatic paraphrase based on Genesis 16:7–14 (RVR1960).
export const beats: StoryBeat[] = [
  { id: 'opening', from: 0, to: 90, narration: 'En el desierto, Agar creyó que estaba sola.', reference: 'GÉNESIS 16:7–14', art: 'desierto + Agar' },
  { id: 'encounter', from: 90, to: 360, narration: 'Pero junto a una fuente, el ángel del Señor la encontró.', reference: 'GÉNESIS 16:7', art: 'Agar + ángel + fuente' },
  { id: 'question', from: 360, to: 600, narration: 'Le preguntó: “Agar, ¿de dónde vienes y a dónde vas?”', reference: 'GÉNESIS 16:8', art: 'personajes en diálogo' },
  { id: 'promise', from: 600, to: 840, narration: 'Y le anunció que su descendencia sería incontable.', reference: 'GÉNESIS 16:10', art: 'cielo / estrellas / gesto del ángel' },
  { id: 'name', from: 840, to: 1080, narration: 'Tendrás un hijo. Lo llamarás Ismael, porque el Señor ha oído tu aflicción.', reference: 'GÉNESIS 16:11', art: 'Agar escucha el nombre' },
  { id: 'close', from: 1080, to: 1200, narration: 'Ismael: Dios escucha.', reference: 'UNA HISTORIA DE ISMAEL', art: 'logo Ismael' },
];
