import { random } from 'remotion';
import type { Size } from './camera';
import type { FigureArt, Keys } from './layered';

// Ayudantes para hojas de sprites procesadas con tools/ismv_prep.py (docs/technical/ANIMACION-POR-CAPAS.md §6).
// Cada set comparte lienzo y ancla (centro inferior de la figura, del `*.set.json`), así que los cuadros
// se intercambian sin reescalar ni registrar en el código.

export type SpriteSet = {
  /** Carpeta bajo public/, sin barra final. */
  dir: string;
  /** Prefijo de archivo: `<prefix>-<cuadro>.png`. */
  prefix: string;
  size: Size;
  anchor: { x: number; y: number };
  frames: readonly string[];
};

/** `arts` de un FigureLayer a partir de un set: un id por cuadro. */
export const spriteArts = (set: SpriteSet): Record<string, FigureArt> =>
  Object.fromEntries(set.frames.map((name) => [name, { src: `${set.dir}/${set.prefix}-${name}.png`, anchor: set.anchor, size: set.size }]));

/** Cortes de un ciclo (p. ej. caminata) desde `start` hasta `end`, `hold` cuadros por dibujo (2 = 12 fps en doses). */
export const cycleCuts = (frames: readonly string[], start: number, end: number, hold = 2): Array<[number, string]> => {
  const cuts: Array<[number, string]> = [];
  for (let f = start, i = 0; f < end; f += hold, i++) cuts.push([f, frames[i % frames.length]]);
  return cuts;
};

/** Parpadeo determinista (llama, antorcha): valores alrededor de `base` con amplitud `amp`, una clave cada `step` cuadros. */
export const flicker = (seed: string, start: number, end: number, base: number, amp: number, step = 3): Keys => {
  const keys: Keys = [];
  for (let f = start; f <= end; f += step) keys.push([f, base + (random(`${seed}-${f}`) * 2 - 1) * amp]);
  return keys;
};
