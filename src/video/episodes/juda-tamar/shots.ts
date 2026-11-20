import { coverZoom, type CameraKey, type Size } from '../../stage/camera';
import type { BgPlane, FigureArt, FigureLayer, Keys, LayeredShot, Light, PropLayer } from '../../stage/layered';
import { cycleCuts, flicker, spriteArts, type SpriteSet } from '../../stage/sprites';

// Planos visuales de HIST-004 (animatic por capas). Los tiempos del relato viven en story.ts;
// la fuente es la hoja de animación (docs/episodes/04-juda-tamar-preproduccion.md §7) y el plan
// (docs/plans/HIST-004-plan.md). Todos los `frame` internos son relativos al inicio del plano.
// Figuras: x/y = ancla del set (centro inferior de la figura); k = px de pantalla por px del PNG.
// Con `space: 'world'`, x/y/k van en px del lienzo del fondo y la figura se mueve con la cámara.

const VIEW: Size = { width: 1080, height: 1920 };

// ------------------------------------------------------------------ fondos multiplano
const background = (name: string, size: Size, depths: number[]): { size: Size; planes: BgPlane[] } => ({
  size,
  planes: depths.map((depth, i) => ({ src: `assets/backgrounds/${name}/${name}-l${i}.png`, depth })),
});
const BEDROOM = background('hist-004-modern-bedroom', { width: 1632, height: 2176 }, [0.4, 1]);
const HOUSE = background('tamar-father-house', { width: 1400, height: 2100 }, [0.5, 1]);
const ROAD = background('enaim-road', { width: 2100, height: 2100 }, [0.3, 1, 1.3]);
const SQUARE = background('judah-town-square-night', { width: 1920, height: 2400 }, [0.3, 1, 1.3]);

/** Clave de cámara con zoom relativo a la cobertura (`zr` 1 = encuadre más abierto posible). */
const cam = (size: Size) => (frame: number, x: number, y: number, zr: number): CameraKey => ({ frame, x, y, zoom: coverZoom(size, VIEW) * zr });
const Bd = cam(BEDROOM.size);
const H = cam(HOUSE.size);
const R = cam(ROAD.size);
const Q = cam(SQUARE.size);

// ------------------------------------------------------------------ sets (de los *.set.json)
const CH = 'assets/characters';
const M1: SpriteSet = { dir: `${CH}/hook-04/modern-woman-m1`, prefix: 'modern-woman-m1', size: { width: 418, height: 627 }, anchor: { x: 209, y: 623 }, frames: ['espera', 'dolida', 'baja-1', 'baja-2', 'regazo', 'regazo-blink'] };
const M2: SpriteSet = { dir: `${CH}/hook-04/modern-woman-m2`, prefix: 'modern-woman-m2', size: { width: 512, height: 768 }, anchor: { x: 258, y: 754 }, frames: ['regazo', 'sube', 'firme', 'firme-blink'] };
const J_CMD: SpriteSet = { dir: `${CH}/judah/judah-command`, prefix: 'judah-command', size: { width: 418, height: 627 }, anchor: { x: 217, y: 583 }, frames: ['neutral', 'anticipa', 'extiende', 'senala', 'sostiene', 'sostiene-blink'] };
const J_REACT: SpriteSet = { dir: `${CH}/judah/judah-reaction`, prefix: 'judah-reaction', size: { width: 512, height: 768 }, anchor: { x: 254, y: 754 }, frames: ['seguro', 'seguro-blink', 'sorpresa', 'reconoce'] };
const J_WALK: SpriteSet = { dir: `${CH}/judah/judah-walk`, prefix: 'judah-walk', size: { width: 418, height: 627 }, anchor: { x: 220, y: 604 }, frames: ['contacto-d', 'bajada-d', 'paso-d', 'contacto-i', 'bajada-i', 'paso-i'] };
const T_HOUSE: SpriteSet = { dir: `${CH}/tamar/tamar-house`, prefix: 'tamar-house', size: { width: 512, height: 768 }, anchor: { x: 261, y: 759 }, frames: ['espera', 'espera-blink', 'decepcion', 'decepcion-blink'] };
const T_REVEAL: SpriteSet = { dir: `${CH}/tamar/tamar-reveal`, prefix: 'tamar-reveal', size: { width: 418, height: 627 }, anchor: { x: 209, y: 615 }, frames: ['reposo', 'anticipa', 'sube', 'muestra', 'sostiene', 'sostiene-blink'] };
const T_VEIL: SpriteSet = { dir: `${CH}/tamar/tamar-veil`, prefix: 'tamar-veil', size: { width: 418, height: 627 }, anchor: { x: 204, y: 615 }, frames: ['doblado', 'despliega', 'alto', 'cae', 'cierra', 'velada'] };
const LAMP: SpriteSet = { dir: 'assets/props/hist-004/oil-lamp', prefix: 'oil-lamp', size: { width: 1254, height: 1254 }, anchor: { x: 612, y: 879 }, frames: ['base', 'flame'] };

const single = (src: string, size: Size, anchor: { x: number; y: number }): Record<string, FigureArt> => ({ a: { src, size, anchor } });
const T_SEATED = single(`${CH}/tamar/tamar-veiled-seated.png`, { width: 1024, height: 1536 }, { x: 487, y: 1511 });
const SHELAH = single(`${CH}/shelah/shelah-full-body.png`, { width: 1024, height: 1536 }, { x: 491, y: 1470 });
const T_BASE = single(`${CH}/tamar/tamar-half-body-base.png`, { width: 1024, height: 1536 }, { x: 517, y: 1529 });
const crowd = (name: string) => single(`${CH}/hist-004-crowd/crowd-${name}.png`, { width: 455, height: 727 }, { x: 227, y: 711 });

// ------------------------------------------------------------------ ayudantes
const fig = (arts: Record<string, FigureArt>, cuts: Array<[number, string]>, p: { x: Keys; y: Keys; k: Keys } & Partial<FigureLayer>): FigureLayer => ({
  kind: 'figure', arts, cuts, breathe: true, ...p,
});
const still = (v: number): Keys => [[0, v]];
/** Balanceo vertical de paso (px), una clave cada `step` cuadros. */
const bob = (start: number, end: number, y: number, amp: number, step = 4): Keys => {
  const keys: Keys = [];
  for (let f = start, i = 0; f <= end; f += step, i++) keys.push([f, y - (i % 2) * amp]);
  return keys;
};

const WARM = 'rgba(255, 158, 78, 1)';
const FLAME = 'rgba(255, 222, 150, 1)';
const PHONE = 'rgba(110, 170, 255, 1)';
const NIGHT = 'rgb(14, 20, 56)';
const TERRACOTTA = 'rgb(176, 86, 52)';
const torch = (seed: string, x: number, y: number, end: number, base = 0.22): Light => ({ x, y, radius: 760, color: WARM, opacity: flicker(seed, 0, end, base, 0.05, 4) });

// Lámpara en primer plano (pantalla): la llama queda en (540, 1700), donde termina el brillo del celular en M1.
const lamp = (x: Keys, y: Keys, k: Keys, flame: Keys): FigureLayer[] => [
  fig(spriteArts(LAMP), [[0, 'base']], { x, y, k, breathe: false }),
  fig(spriteArts(LAMP), [[0, 'flame']], { x, y, k, breathe: false, opacity: flame }),
];

// Objetos de la garantía (inserto P7): recortes al contenido de cada PNG de 571 × 1026.
const PLEDGE = { width: 571, height: 1026 };
const pledge = (name: string, crop: PropLayer['crop'], x: number, y: number, k: number, at: number): PropLayer => ({
  kind: 'prop',
  src: `assets/props/hist-004/judah-${name}.png`,
  size: PLEDGE,
  crop,
  x: still(x),
  y: [[0, y], [103, y - 12]],
  k: [[at, 0.6 * k], [at + 3, 1.08 * k], [at + 6, k]],
  opacity: [[at - 1, 0], [at + 1, 1]],
});

// Tamar en la casa (P2–P3) vive en el lienzo de F2 para moverse con el push-in y el paneo.
const TAMAR_HOUSE_AT = { x: still(766), y: still(2144), k: still(1.674), space: 'world' as const };

export const shots: LayeredShot[] = [
  // M1 · gancho (0–191): la mujer espera, se duele en "nunca" y baja el celular en "fue tuya".
  {
    id: 'hook',
    from: 0,
    to: 192,
    bg: {
      ...BEDROOM,
      camera: [Bd(0, 816, 1088, 1.0), Bd(150, 816, 1088, 1.083), Bd(154, 828, 1088, 1.085), Bd(157, 806, 1088, 1.086), Bd(160, 820, 1088, 1.087), Bd(163, 816, 1088, 1.088), Bd(180, 816, 1100, 1.1)],
    },
    layers: [
      fig(spriteArts(M1), [[0, 'espera'], [82, 'dolida'], [160, 'baja-1'], [164, 'baja-2'], [168, 'regazo'], [182, 'regazo-blink'], [184, 'regazo']], {
        x: still(540), y: [[0, 1960], [160, 1975], [184, 1800]], k: [[0, 2.1], [180, 2.31]],
      }),
    ],
    shade: [[0, 0], [164, 0], [184, 0.07]],
    // Brillo del celular sobre el regazo: es el punto del match cut con la llama.
    lights: [{ x: 540, y: 1700, radius: 280, color: PHONE, opacity: [[164, 0], [178, 0.55], [191, 0.85]] }],
  },

  // P2 · puente (192–283): casa de noche, lámpara en primer plano, Tamar espera.
  {
    id: 'bridge',
    from: 192,
    to: 284,
    bg: { ...HOUSE, camera: [H(0, 700, 1050, 1.0), H(56, 700, 1050, 1.03), H(62, 700, 1050, 1.045), H(92, 700, 1050, 1.06)] },
    layers: [
      fig(spriteArts(T_HOUSE), [[0, 'espera'], [44, 'espera-blink'], [47, 'espera']], { ...TAMAR_HOUSE_AT }),
      ...lamp([[0, 384], [92, 372]], [[0, 1900], [92, 1950]], [[0, 0.5], [92, 0.54]], flicker('p2-flame', 0, 92, 0.9, 0.1, 3)),
    ],
    tints: [{ color: NIGHT, opacity: still(0.5) }],
    lights: [
      { x: 540, y: 1700, radius: 620, color: WARM, opacity: flicker('p2-light', 0, 92, 0.42, 0.06, 4) },
      { x: 540, y: 1700, radius: 110, color: FLAME, opacity: [[0, 0.85], [92, 0.7]] },
    ],
  },

  // P3 · conflicto (284–458): de noche a día; Selá cruza por la puerta; decepción en "nunca".
  {
    id: 'conflict',
    from: 284,
    to: 459,
    bg: { ...HOUSE, camera: [H(0, 700, 1050, 1.06), H(76, 700, 1050, 1.06), H(116, 820, 1050, 1.1), H(126, 820, 1050, 1.1), H(142, 700, 1050, 1.1)] },
    layers: [
      // Selá pasa entre el exterior (l0) y el interior (l1): solo se ve por la puerta.
      fig(SHELAH, [[0, 'a']], { space: 'world', between: true, breathe: false, x: [[96, 1150], [136, 1450]], y: bob(96, 136, 1480, 5), k: still(0.4) }),
      fig(spriteArts(T_HOUSE), [[0, 'espera'], [142, 'decepcion'], [162, 'decepcion-blink'], [165, 'decepcion']], { ...TAMAR_HOUSE_AT }),
      ...lamp([[0, 372], [50, 360]], [[0, 1950], [50, 2400]], [[0, 0.54], [50, 0.6]], [[0, 0.95], [40, 0]]),
    ],
    tints: [{ color: NIGHT, opacity: [[0, 0.5], [56, 0]] }],
    lights: [{ x: 540, y: 1760, radius: 600, color: WARM, opacity: [[0, 0.42], [40, 0]] }],
  },

  // P5 · giro 1, el velo (459–559): se cubre en "rostro" y la cámara entra al velo (oclusión).
  {
    id: 'risk',
    from: 459,
    to: 560,
    bg: { ...HOUSE, camera: [H(0, 700, 1050, 1.1), H(81, 700, 1050, 1.1), H(100, 800, 1450, 1.8)] },
    layers: [
      // x 800 deja el borde recortado del cuadro "alto" fuera de la pantalla.
      fig(spriteArts(T_VEIL), [[0, 'doblado'], [45, 'despliega'], [49, 'alto'], [55, 'cae'], [63, 'cierra'], [71, 'velada']], {
        space: 'world', x: still(800), y: still(2144), k: still(2.125),
      }),
    ],
    tints: [{ color: TERRACOTTA, opacity: [[86, 0], [100, 0.92]] }],
  },

  // P6 · giro 1, el camino (560–667): Judá llega caminando; elipsis con el resplandor de la tarde.
  {
    id: 'road',
    from: 560,
    to: 668,
    bg: { ...ROAD, camera: [R(0, 700, 1080, 1.05), R(6, 700, 1080, 1.05), R(66, 1350, 1080, 1.05), R(100, 1450, 900, 1.25)] },
    layers: [
      fig(T_SEATED, [[0, 'a']], { space: 'world', x: still(1590), y: still(1330), k: still(0.4), opacity: [[70, 1], [96, 0]] }),
      // Pies detrás de las rocas de l2 (p 1,3). Ciclo a 12 fps; ~15 px de lienzo por cuadro.
      fig(spriteArts(J_WALK), [...cycleCuts(J_WALK.frames, 0, 70, 2), [70, 'contacto-d']], {
        space: 'world', breathe: false, x: [[0, 60], [66, 1250]], y: still(1700), k: still(1.61), opacity: [[70, 1], [96, 0]],
      }),
    ],
    tints: [
      { color: TERRACOTTA, opacity: [[0, 0.92], [10, 0]] },
      { color: 'rgb(255, 190, 120)', opacity: [[64, 0], [96, 0.85]], blend: 'screen' },
    ],
  },

  // P7 · los objetos (668–770): inserto sobre el camino desenfocado; uno por palabra.
  {
    id: 'pledge',
    from: 668,
    to: 771,
    bg: { ...ROAD, camera: [R(0, 1300, 1080, 1.15), R(103, 1320, 1070, 1.17)], blur: still(12), dim: still(0.45) },
    layers: [
      pledge('seal', { x: 186, y: 625, w: 199, h: 385 }, 250, 800, 1.0, 21),
      pledge('cord', { x: 16, y: 562, w: 539, h: 448 }, 540, 820, 0.72, 48),
      pledge('staff', { x: 219, y: 16, w: 132, h: 994 }, 830, 760, 0.74, 75),
    ],
    lights: [{ x: 540, y: 800, radius: 520, color: WARM, opacity: still(0.25) }],
  },

  // P8 · giro 2, el pueblo (771–847): siluetas al atardecer; el hombre que señala entra en "embarazada".
  {
    id: 'rumor',
    from: 771,
    to: 848,
    bg: { ...SQUARE, camera: [Q(0, 840, 1200, 1.05), Q(77, 1080, 1200, 1.05)] },
    layers: [
      fig(crowd('women-1'), [[0, 'a']], { space: 'world', x: still(640), y: still(1800), k: still(1.3), rot: [[0, 0], [20, 1], [40, -0.5], [60, 0.8], [77, 0]] }),
      fig(crowd('women-2'), [[0, 'a']], { space: 'world', x: still(790), y: still(1800), k: still(1.3), rot: [[0, 0], [24, -0.8], [48, 0.6], [77, 0]] }),
      fig(crowd('man-pointing'), [[0, 'a']], { space: 'world', x: still(1330), y: still(1800), k: still(1.3), opacity: [[40, 0], [44, 1]] }),
    ],
    tints: [{ color: 'rgb(255, 130, 60)', opacity: still(0.2), blend: 'screen' }],
  },

  // P9 · giro 2, la orden (848–947): Judá señala en "ordenó"; paneo rápido a Tamar a contraluz.
  {
    id: 'order',
    from: 848,
    to: 948,
    bg: { ...SQUARE, camera: [Q(0, 1000, 1200, 1.05), Q(70, 1000, 1200, 1.05), Q(89, 800, 1200, 1.05)] },
    layers: [
      // x 470: la mano que señala sale del cuadro, así no se ve el borde recortado de "extiende".
      fig(spriteArts(J_CMD), [[0, 'neutral'], [52, 'anticipa'], [58, 'extiende'], [61, 'senala'], [70, 'sostiene'], [80, 'sostiene-blink'], [83, 'sostiene']], {
        ease: true, x: [[0, 470], [70, 470], [89, 1700]], y: still(1960), k: still(2.25),
      }),
      // Guardias detrás y Tamar adelante, a contraluz: sin fuego sobre ella ni violencia.
      fig(crowd('guard-1'), [[0, 'a']], { ease: true, x: [[70, -930], [89, 300]], y: still(1560), k: still(0.95) }),
      fig(crowd('guard-2'), [[0, 'a']], { ease: true, x: [[70, -450], [89, 780]], y: still(1560), k: still(0.95) }),
      fig(T_BASE, [[0, 'a']], {
        ease: true, x: [[70, -690], [89, 540]], y: still(1720), k: still(0.58),
        filter: 'brightness(0.06) drop-shadow(0 0 8px rgba(255, 150, 70, 0.85))',
      }),
    ],
    shade: [[0, 0], [70, 0], [89, 0.12]],
    lights: [torch('p9-torch', 200, 700, 70), { x: 540, y: 1000, radius: 720, color: WARM, opacity: [[70, 0], [89, 0.5]] }],
  },

  // P10 · revelación (948–1073): Tamar levanta los objetos; push-in rápido; luz cálida sobre ellos.
  {
    id: 'reveal',
    from: 948,
    to: 1074,
    bg: { ...SQUARE, camera: [Q(0, 800, 1200, 1.05), Q(37, 800, 1200, 1.05), Q(52, 800, 1200, 1.12), Q(126, 800, 1180, 1.14)] },
    layers: [
      fig(spriteArts(T_REVEAL), [[0, 'reposo'], [22, 'anticipa'], [28, 'sube'], [37, 'muestra'], [42, 'sostiene'], [116, 'sostiene-blink'], [119, 'sostiene']], {
        x: still(540), y: [[37, 1960], [52, 2010]], k: [[0, 2.1], [37, 2.1], [52, 2.32], [126, 2.36]],
      }),
    ],
    lights: [torch('p10-torch', 900, 600, 126, 0.2), { x: 560, y: 1380, radius: 460, color: WARM, opacity: [[30, 0], [45, 0.45], [126, 0.4]] }],
  },

  // P11 · contraplano (1074–1112): Judá seguro → sorpresa en "reconoció".
  {
    id: 'recognize',
    from: 1074,
    to: 1113,
    bg: { ...SQUARE, camera: [Q(0, 1150, 1200, 1.08)] },
    layers: [fig(spriteArts(J_REACT), [[0, 'seguro'], [14, 'sorpresa']], { x: still(540), y: still(1960), k: still(1.7) })],
    lights: [torch('p11-torch', 180, 760, 39)],
  },

  // P12 · remate (1113–1179): Judá baja la mirada; la cita suena en off.
  {
    id: 'verdict',
    from: 1113,
    to: 1180,
    bg: { ...SQUARE, camera: [Q(0, 1150, 1200, 1.08), Q(67, 1150, 1200, 1.11)] },
    layers: [fig(spriteArts(J_REACT), [[0, 'reconoce']], { x: still(540), y: [[0, 1960], [67, 1975]], k: [[0, 1.7], [67, 1.75]] })],
    lights: [torch('p12-torch', 180, 760, 67, 0.18)],
  },

  // M2 · enseñanza (1180–1299): la mujer levanta la vista; el sting entra encima en 1270.
  {
    id: 'lesson',
    from: 1180,
    to: 1300,
    bg: { ...BEDROOM, camera: [Bd(0, 816, 1100, 1.1), Bd(89, 816, 1088, 1.0)] },
    layers: [
      // Misma escala en pantalla que M1 (k 2,1 × 605 px de bbox = 1,726 × 736 px).
      fig(spriteArts(M2), [[0, 'regazo'], [8, 'sube'], [14, 'firme'], [50, 'firme-blink'], [53, 'firme']], {
        x: still(540), y: [[0, 2000], [89, 1960]], k: [[0, 1.9], [89, 1.726]],
      }),
    ],
  },
];
