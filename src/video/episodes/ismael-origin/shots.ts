import type { CameraKey, Size } from '../../stage/camera';
import { NARRATION_FRAMES } from './story';

// Planos visuales de HIST-001 (animatic). Los tiempos del relato viven en story.ts;
// aquí solo se decide encuadre, recursos, cámara y efectos. Todos los `frame`
// internos de un plano son relativos a su `from`.

export type SceneArt = {
  src: string;
  size: Size;
};

export type FigureArt = {
  src: string;
  size: Size;
  /** Caja visible de la figura dentro del PNG (px del archivo). */
  bbox: { left: number; top: number; right: number; bottom: number };
};

export type Keyframes = Array<[frame: number, value: number]>;

export type FigurePlacement = {
  art: FigureArt;
  /** Punto de apoyo (pies) en coordenadas del mundo. */
  x: number;
  y: number;
  /** Altura visible de la figura en px del mundo. */
  height: number;
  motion: 'breathe' | 'walk';
  /** Desplazamiento lateral total durante el plano (px del mundo). */
  driftX?: number;
  opacity?: Keyframes;
};

export type Shot = {
  id: string;
  from: number;
  to: number;
  scene: SceneArt;
  camera: CameraKey[];
  /** Fundido cruzado sobre el plano anterior, en cuadros. 0 = corte. */
  crossfade: number;
  figures: FigurePlacement[];
  /** Sombra proyectada del mensajero: longitud 0–1 por cuadro. */
  messengerShadow?: Keyframes;
  /** Contraluz cálido detrás del mensajero: intensidad 0–1. */
  backlight?: Keyframes;
  /** Luz cálida general de la escena: intensidad 0–1. */
  warmth?: Keyframes;
  dust?: boolean;
  /** Fundido a negro al final del plano, en cuadros. */
  fadeOut?: number;
};

export const SHUR: SceneArt = {
  src: 'assets/backgrounds/shur-spring/shur-spring-full-scene-reference.png',
  size: { width: 941, height: 1672 },
};

export const AGAR_CLOSEUP: SceneArt = {
  src: 'assets/characters/agar/agar-closeup-warm-desert-light.png',
  size: { width: 1024, height: 1536 },
};

// Escena compuesta: Agar sentada junto a la fuente y el mensajero como silueta lejana.
// Ya trae a los personajes dibujados; no se le superponen recortes.
export const HAGAR_AT_SPRING: SceneArt = {
  src: 'assets/concepts/episodes/ismael-origin/hagar-at-desert-spring.png',
  size: { width: 941, height: 1672 },
};

export const AGAR: FigureArt = {
  src: 'assets/characters/agar/agar-weary-traveler-full-body.png',
  size: { width: 1024, height: 1536 },
  bbox: { left: 167, top: 9, right: 794, bottom: 1528 },
};

export const MESSENGER: FigureArt = {
  src: 'assets/characters/angel/angel-warm-backlit-silhouette.png',
  size: { width: 1024, height: 1536 },
  bbox: { left: 166, top: 17, right: 818, bottom: 1524 },
};

// Posiciones en el mundo de Shur (px del fondo compuesto de 941 × 1672).
const agarAtSpring = { art: AGAR, x: 500, y: 1040, height: 250, motion: 'breathe' } as const;
const messengerAtSpring = { art: MESSENGER, x: 715, y: 1035, height: 275, motion: 'breathe' } as const;

export const shots: Shot[] = [
  {
    // hook: plano general, Agar pequeña y aislada en el camino; push-in suave.
    id: 'hook',
    from: 0,
    to: 98,
    scene: SHUR,
    camera: [
      { frame: 0, x: 470, y: 880, zoom: 1.2 },
      { frame: 98, x: 450, y: 940, zoom: 1.3 },
    ],
    crossfade: 0,
    figures: [{ art: AGAR, x: 330, y: 1230, height: 230, motion: 'walk', driftX: 14 }],
    dust: true,
  },
  {
    // flight: reencuadre sobre el mismo fondo; deriva lateral mínima, sin ciclo de piernas.
    id: 'flight',
    from: 98,
    to: 152,
    scene: SHUR,
    camera: [
      { frame: 0, x: 380, y: 1010, zoom: 1.45 },
      { frame: 54, x: 405, y: 1000, zoom: 1.5 },
    ],
    crossfade: 0,
    figures: [{ art: AGAR, x: 350, y: 1230, height: 230, motion: 'walk', driftX: 36 }],
    dust: true,
  },
  {
    // encounter: la cámara avanza hacia la fuente; sombra breve y luego silueta a contraluz.
    id: 'encounter',
    from: 152,
    to: 294,
    scene: SHUR,
    camera: [
      { frame: 0, x: 540, y: 960, zoom: 1.4 },
      { frame: 142, x: 580, y: 950, zoom: 1.5 },
    ],
    crossfade: 8,
    figures: [
      agarAtSpring,
      { ...messengerAtSpring, opacity: [[0, 0], [60, 0], [110, 1]] },
    ],
    messengerShadow: [[0, 0], [8, 0], [60, 1]],
    backlight: [[0, 0], [52, 0], [120, 0.7]],
    dust: true,
  },
  {
    // question + inicio de promise: plano medio casi fijo de las dos figuras;
    // la luz cálida detrás del mensajero crece cuando empieza el anuncio.
    id: 'question',
    from: 294,
    to: 448,
    scene: SHUR,
    camera: [
      { frame: 0, x: 615, y: 900, zoom: 1.85 },
      { frame: 85, x: 618, y: 895, zoom: 1.92 },
      { frame: 154, x: 630, y: 880, zoom: 2.0 },
    ],
    crossfade: 0,
    figures: [agarAtSpring, messengerAtSpring],
    messengerShadow: [[0, 1]],
    backlight: [[0, 0.7], [85, 0.7], [150, 1]],
    warmth: [[0, 0], [85, 0], [150, 0.35]],
  },
  {
    // promise (nombre): reacción de Agar en plano cerrado con luz cálida discreta.
    id: 'promise-closeup',
    from: 448,
    to: 575,
    scene: AGAR_CLOSEUP,
    camera: [
      { frame: 0, x: 600, y: 760, zoom: 1.26 },
      { frame: 127, x: 610, y: 720, zoom: 1.36 },
    ],
    crossfade: 10,
    figures: [],
    warmth: [[0, 0.2], [127, 0.45]],
  },
  {
    // lesson + close: escena compuesta de Agar sentada junto a la fuente, con el
    // mensajero como silueta lejana a contraluz. Acercamiento lento con luz cálida
    // creciente; alejamiento leve en el CTA y fundido antes de la placa de marca.
    id: 'lesson',
    from: 575,
    to: NARRATION_FRAMES,
    scene: HAGAR_AT_SPRING,
    camera: [
      { frame: 0, x: 470, y: 836, zoom: 1.16 },
      { frame: 223, x: 520, y: 880, zoom: 1.28 },
      { frame: 336, x: 500, y: 860, zoom: 1.2 },
    ],
    crossfade: 12,
    figures: [],
    warmth: [[0, 0.15], [223, 0.45]],
    dust: true,
    fadeOut: 14,
  },
];
