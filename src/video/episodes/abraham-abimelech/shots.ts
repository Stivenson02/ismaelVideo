import type { FigureArt, FigureLayer, Keys, LayeredShot, PropLayer } from '../../stage/layered';

// Planos visuales de HIST-002 (animatic). Los tiempos del relato viven en story.ts.
// Coordenadas de figuras en pantalla (1080 × 1920): x/y = punto ancla (centro de la cabeza),
// k = píxeles de pantalla por píxel del PNG. Valores iniciales, ajustables tras revisar fotogramas.
// Todos los `frame` internos son relativos al inicio del plano.

const C = 'assets/concepts/episodes/abraham-sara-abimelech';
const BG = {
  table: { src: 'assets/backgrounds/hook-02/sunlit-dining-table-reference.png', size: { width: 941, height: 1672 } },
  sleeping: { src: `${C}/frames/frame-abimelech-sleeping-amber-shadows.png`, size: { width: 941, height: 1672 } },
  road: { src: `${C}/background-studies/gerar-road-portrait-guide.png`, size: { width: 941, height: 1672 } },
  hall: { src: `${C}/background-studies/gerar-palace-courtyard-hall-guide.png`, size: { width: 1024, height: 1536 } },
  bed: { src: `${C}/background-studies/gerar-bedroom-portrait-guide.png`, size: { width: 941, height: 1672 } },
  whisper: { src: `${C}/frames/frame-truth-half-whisper.png`, size: { width: 941, height: 1672 } },
  closing: { src: `${C}/frames/frame-abimelech-closing.png`, size: { width: 941, height: 1672 } },
  prayer: { src: `${C}/frames/frame-10-prayer-and-restoration.png`, size: { width: 941, height: 1672 } },
};

// Anclas medidas por registro de silueta de cabeza (variantes alineadas a la base de cada familia).
const art = (family: string, file: string, ax: number, ay = 140, scale?: number): FigureArt => ({
  src: `assets/characters/${family}/${file}.png`,
  anchor: { x: ax, y: ay },
  scale,
});

const ABRAHAM: Record<string, FigureArt> = {
  fearful: art('abraham', 'abraham-fearful', 491),
  focused: art('abraham', 'abraham-focused', 491),
  patriarch: art('abraham', 'abraham-patriarch', 491),
  // Registro: 0,98× y +10 px respecto a la base.
  resolve: art('abraham', 'abraham-resolve', 490.8, 142.9, 0.98),
};
const ABIMELECH: Record<string, FigureArt> = {
  dignified: art('abimelech', 'abimelech-dignified', 492),
  awakens: art('abimelech', 'abimelech-awakens', 492),
  concern: art('abimelech', 'abimelech-steady-concern', 492),
  calm: art('abimelech', 'abimelech-calm-reflection', 492),
};
const SARA: Record<string, FigureArt> = { sara: art('sarah', 'sarah-earth-tones', 478) };
const WOMAN: Record<string, FigureArt> = {
  w: art('hook-02', 'person-affected', 488),
  reflective: art('hook-02', 'person-affected-reflective', 488),
};
const SERVANTS: Record<string, FigureArt> = {
  a: { src: 'assets/characters/gerar-support/servants-set-a.png', anchor: { x: 512, y: 1382 } },
};

const fig = (
  arts: Record<string, FigureArt>,
  cuts: Array<[number, string]>,
  p: { x: Keys; y: Keys; k: Keys } & Partial<FigureLayer>,
): FigureLayer => ({ kind: 'figure', arts, cuts, breathe: true, ...p });

const still = (v: number): Keys => [[0, v]];

const ENVELOPE_AND_HAND = 'assets/props/hook-02/cream-envelope-and-hand.png';
const PROP_SIZE = { width: 1536, height: 1024 };
// El PNG trae sobre (x 109–724) y mano (x 739–1451) en una sola hoja; se recortan sin editar el archivo.
const envelope = (p: Pick<PropLayer, 'x' | 'y' | 'k' | 'rot' | 'opacity'>): PropLayer => ({
  kind: 'prop', src: ENVELOPE_AND_HAND, size: PROP_SIZE, crop: { x: 100, y: 295, w: 630, h: 470 }, ...p,
});
const hand = (p: Pick<PropLayer, 'x' | 'y' | 'k' | 'rot' | 'opacity'>): PropLayer => ({
  kind: 'prop', src: ENVELOPE_AND_HAND, size: PROP_SIZE, crop: { x: 735, y: 275, w: 725, h: 375 }, ...p,
});

const MID = { x: still(540), y: still(650) };
const NIGHT = { color: 'rgb(18, 26, 66)', opacity: [[0, 0.3]] as Keys };

export const shots: LayeredShot[] = [
  // 1 · hook (0–111): tres acciones, una por frase; la sombra conduce a Gerar.
  {
    id: 'hook',
    from: 0,
    to: 111,
    bg: { ...BG.table, camera: [{ frame: 0, x: 470, y: 836, zoom: 1.3 }, { frame: 111, x: 470, y: 836, zoom: 1.36 }] },
    layers: [
      fig(WOMAN, [[0, 'w']], { x: still(430), y: [[0, 640], [111, 600]], k: [[0, 1.3], [52, 1.34], [111, 1.5]], rot: [[26, 0], [40, -1.2], [60, 0]] }),
      // (a) 0–26 la mano entrega el sobre cubriendo parte; (b) 26–52 ella lo recibe y la mano se retira.
      envelope({ x: [[0, 1250], [26, 700], [52, 560]], y: [[0, 1500], [26, 1470], [52, 1440]], k: still(0.6), rot: [[0, -12], [26, -8], [52, -5]] }),
      hand({ x: [[0, 1530], [26, 975], [40, 975], [52, 1450]], y: [[0, 1510], [26, 1480]], k: still(0.7), rot: still(-6), opacity: [[40, 1], [52, 0]] }),
    ],
    shade: [[0, 0], [52, 0], [111, 1]],
  },

  // 2 · arrival (111–210): vista general y corte a Abraham en medio cuerpo.
  {
    id: 'arrival',
    from: 111,
    to: 210,
    crossfadeIn: 10,
    bg: {
      ...BG.road,
      camera: [{ frame: 0, x: 470, y: 836, zoom: 1.15 }, { frame: 21, x: 470, y: 836, zoom: 1.2 }, { frame: 34, x: 440, y: 930, zoom: 1.36 }, { frame: 99, x: 440, y: 1000, zoom: 1.46 }],
      blur: [[0, 0], [21, 0], [34, 2], [99, 2]],
      dim: [[0, 0], [21, 0], [34, 0.04], [99, 0.04]],
    },
    layers: [
      // El mismo recorte de Abraham recorre el acercamiento para que su rostro no aparezca duplicado.
      fig(ABRAHAM, [[0, 'fearful']], { x: [[0, 340], [21, 340], [34, 540], [99, 540]], y: [[0, 662], [21, 662], [34, 620], [99, 610]], k: [[0, 0.55], [21, 0.55], [34, 1.48], [99, 1.7]] }),
      fig(SARA, [[0, 'sara']], { x: still(640), y: still(680), k: still(0.52), opacity: [[0, 1], [21, 1], [34, 0]] }),
    ],
  },

  // 3 · half-truth (210–433).
  {
    id: 'half-truth-plate',
    from: 210,
    to: 311,
    // x ≤ 400 con zoom ≥ 1,4 deja fuera la figura parcial del borde derecho (x > 800 del frame).
    bg: { ...BG.whisper, camera: [{ frame: 0, x: 390, y: 760, zoom: 1.4 }, { frame: 101, x: 395, y: 740, zoom: 1.5 }] },
    layers: [],
  },
  {
    id: 'half-truth-abraham',
    from: 311,
    to: 359,
    bg: { ...BG.road, camera: [{ frame: 0, x: 520, y: 900, zoom: 1.5 }, { frame: 48, x: 500, y: 900, zoom: 1.5 }], blur: still(5), dim: still(0.2) },
    layers: [fig(ABRAHAM, [[0, 'focused']], { x: still(470), y: still(650), k: [[0, 1.5], [48, 1.62]] })],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.06), blend: 'screen' }],
  },
  {
    id: 'half-truth-sara',
    from: 359,
    to: 433,
    bg: { ...BG.road, camera: [{ frame: 0, x: 420, y: 900, zoom: 1.5 }, { frame: 74, x: 440, y: 900, zoom: 1.5 }], blur: still(5), dim: still(0.2) },
    layers: [fig(SARA, [[0, 'sara']], { x: still(500), y: still(650), k: [[0, 1.45], [74, 1.56]] })],
  },

  // 4 · palace (433–663): Abimelec, la separación y su duda.
  {
    id: 'palace-abimelech',
    from: 433,
    to: 497,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 500, y: 800, zoom: 1.45 }, { frame: 64, x: 520, y: 800, zoom: 1.45 }], blur: still(5), dim: still(0.15) },
    layers: [fig(ABIMELECH, [[0, 'dignified']], { x: still(480), y: still(650), k: [[0, 1.45], [64, 1.55]] })],
  },
  {
    id: 'palace-pair',
    from: 497,
    to: 600,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 512, y: 768, zoom: 1.25 }, { frame: 103, x: 512, y: 768, zoom: 1.32 }] },
    layers: [
      fig(ABIMELECH, [[0, 'dignified']], { x: still(320), y: still(454), k: still(0.75) }),
      fig(SARA, [[0, 'sara']], { x: [[0, 900], [103, 780]], y: still(456), k: still(0.75), flip: true }),
    ],
  },
  {
    id: 'palace-abimelech-close',
    from: 600,
    to: 663,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 520, y: 800, zoom: 1.45 }, { frame: 63, x: 500, y: 800, zoom: 1.45 }], blur: still(5), dim: [[0, 0.15], [63, 0.4]] },
    layers: [fig(ABIMELECH, [[0, 'dignified'], [30, 'concern']], { ...MID, k: [[0, 1.7], [63, 1.8]] })],
    tints: [{ color: 'rgb(18, 26, 66)', opacity: [[0, 0], [63, 0.3]] }],
  },

  // 5 · dream (663–1101): placa aprobada de Abimelec dormido; la presencia divina solo se sugiere.
  {
    id: 'dream-sleep',
    from: 663,
    to: 807,
    bg: { ...BG.sleeping, camera: [{ frame: 0, x: 470, y: 836, zoom: 1.15 }, { frame: 144, x: 430, y: 825, zoom: 1.3 }] },
    layers: [],
    tints: [{ color: 'rgb(18, 26, 66)', opacity: [[0, 0.08], [144, 0.02]] }],
  },
  {
    id: 'dream-awake',
    from: 807,
    to: 1101,
    bg: { ...BG.bed, camera: [{ frame: 0, x: 470, y: 860, zoom: 1.4 }, { frame: 294, x: 470, y: 840, zoom: 1.46 }], blur: still(5), dim: [[0, 0.1], [294, 0]] },
    layers: [
      fig(ABIMELECH, [[0, 'awakens'], [102, 'concern'], [251, 'calm']], {
        x: still(540),
        y: [[0, 690], [8, 646], [14, 650], [294, 625]],
        k: [[0, 1.45], [102, 1.55], [251, 1.55], [294, 1.62]],
        // Entrada sin transparencia: dip de 3 cuadros y rebote de 4 px (sin fantasma sobre la cama).
      }),
    ],
    tints: [
      { color: 'rgb(18, 26, 66)', opacity: [[0, 0.28], [251, 0.2], [294, 0]] },
      { color: 'rgb(255, 170, 90)', opacity: [[0, 0], [251, 0.05], [294, 0.22]], blend: 'screen' },
    ],
    shaft: [[0, 0.5], [251, 0.3], [294, 0.8]],
  },

  // 6 · council (1101–1252).
  {
    id: 'council-abimelech',
    from: 1101,
    to: 1145,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 520, y: 800, zoom: 1.45 }, { frame: 44, x: 500, y: 800, zoom: 1.45 }], blur: still(5), dim: still(0.05) },
    layers: [fig(ABIMELECH, [[0, 'dignified']], { x: still(490), y: still(650), k: [[0, 1.45], [44, 1.55]] })],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.12), blend: 'screen' }],
  },
  {
    id: 'council-servants',
    from: 1145,
    to: 1185,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 512, y: 768, zoom: 1.25 }, { frame: 40, x: 512, y: 768, zoom: 1.3 }] },
    layers: [
      fig(SERVANTS, [[0, 'a']], { x: still(700), y: still(1360), k: still(0.62), breathe: false, opacity: [[0, 0], [10, 1]] }),
      fig(ABIMELECH, [[0, 'dignified']], { x: still(300), y: still(454), k: still(0.75) }),
    ],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.12), blend: 'screen' }],
  },
  {
    id: 'council-abraham',
    from: 1185,
    to: 1252,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 500, y: 800, zoom: 1.45 }, { frame: 67, x: 520, y: 800, zoom: 1.45 }], blur: still(5), dim: still(0.1) },
    layers: [fig(ABRAHAM, [[0, 'fearful']], { x: still(540), y: [[0, 690], [8, 646], [14, 650]], k: [[0, 1.45], [67, 1.58]] })],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.1), blend: 'screen' }],
  },

  // 7 · confrontation (1252–1475): plano/contraplano; cada hablante mira hacia el otro.
  {
    // Plano a dos de orientación: se miran entre sí (Abraham a la izquierda, Abimelec volteado a la derecha).
    id: 'confront-two',
    from: 1252,
    to: 1288,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 512, y: 768, zoom: 1.25 }, { frame: 36, x: 512, y: 768, zoom: 1.3 }] },
    layers: [
      fig(ABRAHAM, [[0, 'fearful']], { x: still(300), y: still(454), k: still(0.75) }),
      fig(ABIMELECH, [[0, 'concern']], { x: still(790), y: still(454), k: still(0.75), flip: true }),
    ],
  },
  {
    id: 'confront-abimelech',
    from: 1288,
    to: 1338,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 600, y: 800, zoom: 1.45 }, { frame: 50, x: 570, y: 800, zoom: 1.45 }], blur: still(6), dim: still(0.15) },
    layers: [fig(ABIMELECH, [[0, 'concern']], { x: still(620), y: still(630), k: [[0, 1.68], [50, 1.78]], flip: true })],
  },
  {
    id: 'confront-abraham',
    from: 1338,
    to: 1475,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 430, y: 800, zoom: 1.45 }, { frame: 137, x: 460, y: 800, zoom: 1.45 }], blur: still(6), dim: still(0.15) },
    layers: [fig(ABRAHAM, [[0, 'fearful'], [68, 'resolve']], { x: still(480), y: still(630), k: [[0, 1.65], [137, 1.78]] })],
  },

  // 8 · truth (1475–1678): paneo de Sara a Abraham sobre la placa y cierre en su rostro.
  {
    id: 'truth-plate',
    from: 1475,
    to: 1575,
    bg: {
      ...BG.whisper,
      camera: [{ frame: 0, x: 200, y: 700, zoom: 1.45 }, { frame: 56, x: 215, y: 700, zoom: 1.5 }, { frame: 100, x: 480, y: 690, zoom: 1.7 }],
    },
    layers: [],
  },
  {
    id: 'truth-abraham',
    from: 1575,
    to: 1678,
    bg: { ...BG.road, camera: [{ frame: 0, x: 500, y: 900, zoom: 1.5 }, { frame: 103, x: 480, y: 900, zoom: 1.5 }], blur: still(6), dim: still(0.3) },
    layers: [fig(ABRAHAM, [[0, 'focused'], [60, 'patriarch']], { x: still(480), y: still(650), k: [[0, 1.6], [103, 1.75]] })],
    tints: [{ color: 'rgb(30, 40, 80)', opacity: still(0.1) }],
  },

  // 9 · return (1678–1780).
  {
    id: 'return-sara',
    from: 1678,
    to: 1723,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 512, y: 800, zoom: 1.45 }, { frame: 45, x: 512, y: 800, zoom: 1.45 }], blur: still(5), dim: still(0.05) },
    layers: [fig(SARA, [[0, 'sara']], { x: still(500), y: still(650), k: [[0, 1.45], [45, 1.55]] })],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.12), blend: 'screen' }],
  },
  {
    id: 'return-three',
    from: 1723,
    to: 1780,
    bg: { ...BG.hall, camera: [{ frame: 0, x: 512, y: 768, zoom: 1.3 }, { frame: 57, x: 512, y: 768, zoom: 1.25 }] },
    layers: [
      fig(ABIMELECH, [[0, 'concern'], [30, 'calm']], { x: still(200), y: still(543), k: still(0.6), flip: false }),
      fig(ABRAHAM, [[0, 'fearful']], { x: still(880), y: still(543), k: still(0.6), flip: true }),
      fig(SARA, [[0, 'sara']], { x: still(540), y: still(417), k: still(0.85) }),
    ],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.14), blend: 'screen' }],
  },

  // 10 · prayer (1780–1869): tilt de Abraham orando a la casa en calma.
  {
    id: 'prayer',
    from: 1780,
    to: 1869,
    bg: { ...BG.prayer, camera: [{ frame: 0, x: 330, y: 1150, zoom: 1.35 }, { frame: 89, x: 560, y: 820, zoom: 1.25 }] },
    layers: [],
    tints: [{ color: 'rgb(255, 190, 110)', opacity: [[0, 0], [41, 0], [89, 0.2]], blend: 'screen' }],
  },

  // 11 · lesson (1869–2250): rostro, medio cuerpo, rostro y pausa sobre Abimelec.
  {
    id: 'lesson',
    from: 1869,
    to: 2250,
    bg: {
      ...BG.closing,
      camera: [
        { frame: 0, x: 400, y: 640, zoom: 1.5 },
        { frame: 54, x: 400, y: 640, zoom: 1.55 },
        { frame: 110, x: 470, y: 820, zoom: 1.2 },
        { frame: 185, x: 470, y: 820, zoom: 1.2 },
        { frame: 215, x: 400, y: 640, zoom: 1.5 },
        { frame: 257, x: 400, y: 640, zoom: 1.55 },
        { frame: 381, x: 400, y: 650, zoom: 1.65 },
      ],
    },
    layers: [],
    tints: [{ color: 'rgb(255, 170, 90)', opacity: still(0.08), blend: 'screen' }],
  },

  // 12 · final-question (2250–2340): pose reflexiva aprobada, sobre en la mesa; no reutilizar el cuerpo entero del gancho.
  {
    id: 'final-question',
    from: 2250,
    to: 2340,
    bg: { ...BG.table, camera: [{ frame: 0, x: 470, y: 836, zoom: 1.3 }, { frame: 90, x: 470, y: 836, zoom: 1.34 }] },
    layers: [
      fig(WOMAN, [[0, 'reflective']], { x: still(430), y: still(640), k: [[0, 1.3], [90, 1.34]], flip: true }),
      envelope({ x: still(560), y: still(1440), k: still(0.6), rot: still(-5) }),
    ],
  },
];
