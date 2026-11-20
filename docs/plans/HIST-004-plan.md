# Plan de producción — HIST-004

**Historia:** Tamar, Judá y las pruebas que no pudo negar
**Documento fuente:** `docs/episodes/04-juda-tamar.md`. Brief "Preparación para plan" (2026-11-19).
**Estado:** `plan-approved` por la persona (2026-11-19). Ejecutado: animatic `review-01` renderizado y pendiente de revisión (ver "Registro de ejecución").
**Objetivo:** `animatic` audiovisual de revisión, con piezas por capas y sprites aprobados para animatic y voz Fish de referencia. No es video final ni publicable.
**Formato:** 1080 × 1920, 30 fps, H.264. **1300 cuadros (43,3 s)** = 1270 de escenas con voz y enseñanza + 30 del sting integrado.

## Objetivo

Montar el guion v2 aprobado en una composición Remotion nueva, `JudaTamar`. Es el primer episodio con **animación por capas**:

- fondos multiplano con parallax;
- sprites cortados a 12 fps y anclados a la voz medida;
- bucle con el gancho moderno.

El animatic sirve para revisar ritmo, encuadres, lectura en móvil, sincronía entre voz y gesto, el match cut, la oclusión del velo, la elipsis y el bucle. La fuente de los tiempos es la hoja de animación (`docs/episodes/04-juda-tamar-preproduccion.md` §7); este plan la convierte en tareas.

## Fuentes aprobadas y fuera de alcance

- **Aprobado:**
  - Enfoque y guion v2 `script-approved` (2026-11-17), con las citas de Gn 38:25–26 en RVR1960.
  - Piezas de preproducción aprobadas para el animatic (2026-11-19).
  - Hoja de animación y voz medida (10 `*.words.json`).
  - Símbolo oficial (`brand/ismael-symbol-light-variant.png`) y sting original de Mixkit.
- **Reglas:** `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/DIRECCION-VISUAL.md` (zonas seguras: ~250 px arriba, ~670 px abajo y ~120 px a la derecha), `docs/technical/ANIMACION-POR-CAPAS.md` §6 y `docs/technical/spikes/SPIKE-001-resultado.md` §3 (cámara multiplano).
- **No se hace en este animatic:**
  - música ni efectos sin licencia;
  - bocas animadas;
  - ampliar las hojas ×2;
  - derechos de voz;
  - portada compuesta;
  - cambios al guion o a las piezas;
  - publicación.

  No se modifica nada de HIST-001 ni de HIST-002, salvo mover los datos de la previa de HIST-002 a un manifiesto sin cambiar su contenido (§Previa visual).

## Estado de assets y límites que el plan respeta

- **Fondos por capas** (`*.layers.json`, todas las capas en el mismo lienzo):

  | Fondo | Lienzo | Capas y profundidad `p` | Zoom mínimo de cobertura |
  |---|---|---|---|
  | `judah-town-square-night` (F1) | 1920 × 2400 | l0 0,3 · l1 1,0 · **l2 1,3, primer plano** | 0,80 |
  | `tamar-father-house` (F2) | 1400 × 2100 | l0 0,5 · l1 1,0 | 0,914 |
  | `hist-004-modern-bedroom` (FM) | 1632 × 2176 | l0 0,4 · l1 1,0 | 0,882 |
  | `enaim-road` (F3) | 2100 × 2100 | l0 0,3 · l1 1,0 · **l2 1,3, primer plano** | 0,914 |

  - Las profundidades salen de la preproducción, porque el manifiesto trae `depth: null`.
  - En este plan, "zoom relativo" (`zr`) es el zoom dividido por el zoom de cobertura: `zr` 1,0 es el encuadre más abierto posible.
  - Holgura de paneo a `zr` 1,0: F1 ±285 px, F2 ±109 px, FM ±204 px, F3 ±459 px. En F2, el paneo de P3 queda limitado por `clampToCover`; no se fuerza.
- **Sprites** (`*.set.json`): cuadros de 418 × 627 (hojas 3 × 2) o 512 × 768 (hojas 2 × 2). El ancla del set es el **centro inferior de la figura**; todos los cuadros de un set comparten lienzo y ancla.
  - Un medio cuerpo de ~1150–1250 px de alto en pantalla equivale a `k` ≈ 2,1–2,3 en las hojas de 418 y ≈ 1,6–1,7 en las de 512. Se ven blandos: es un límite aceptado del animatic.
  - Para que la mujer de M1 y la de M2 tengan el mismo tamaño en pantalla, `k` se calcula con la altura del `bbox` de cada set. Lo mismo para Judá entre P9 y P11–P12.
- **Bases y props:** `tamar-veiled-seated`, `shelah-full-body` y la base de Tamar (para la silueta de P9) miden 1024 × 1536. Los props `judah-{seal,cord,staff}` miden 571 × 1026, alineados abajo al centro. Las siluetas `crowd-*` miden 455 × 727. La lámpara son `oil-lamp-base` + `oil-lamp-flame` (parche del mismo lienzo, 1254 × 1254).
- **Límites aceptados por la persona** (preproducción §3):
  - F1 es azul nocturna y la luz cálida se agrega aquí.
  - F3 no tiene la entrada del pueblo.
  - P10 y P9 tienen pequeños saltos de redibujo.
  - En el cuadro `alto` de P5 el velo se corta en el borde derecho, y en `extiende` de P9 los dedos tocan el borde izquierdo. Se encuadran para que el corte no se vea.
- **Audio:**
  - 10 MP3 de Fish (Joss; citas con Yuli y GABRIEL-VO) como **voz de referencia**, sin derechos confirmados.
  - Sting: falta su versión de ~1 s (tarea `AUDIO` 1).
  - Sin música. Efectos solo si son de Mixkit con licencia registrada; si no, se omiten.
  - La composición lleva la etiqueta "ANIMATIC DE REVISIÓN · VOZ TEMPORAL".

## Medición de la voz (hecha en la preproducción)

Cada audio entra en su propia `Sequence` y se recorta 6 cuadros después de su última palabra.

| Clip | Archivo `04-juda-tamar-…` | Voz | Entra | Última palabra | Duración de la Sequence |
|---|---|---|---:|---:|---:|
| 1 | `01-gancho.mp3` | Joss | 0 | 181 | 187 |
| 2 | `02-puente.mp3` | Joss | 192 | 275 | 89 |
| 3 | `03-conflicto.mp3` | Joss | 284 | 450 | 172 |
| 4 | `04-riesgo.mp3` | Joss | 459 | 571 | 118 |
| 5 | `05-garantia.mp3` | Joss | 582 | 758 | 182 |
| 6 | `06-escalada.mp3` | Joss | 771 | 936 | 171 |
| 7 | `07-revelacion.mp3` | Joss | 948 | 997 | 55 |
| 8 | `08-cita-tamar.mp3` | Yuli | 1004 | 1063 | 65 |
| 9 | `09-remate.mp3` | Joss | 1074 | 1104 | 36 |
| 10 | `10-cita-juda.mp3` | GABRIEL-VO | 1113 | 1168 | 61 |

## Desglose temporal y visual

Cuadros globales a 30 fps. Los cortes de sprite, las claves de cámara y los textos de cada plano están en la hoja (§7 de la preproducción) y se copian tal cual a `shots.ts`.

| # | Tramo | Cuadros | Voz | Recursos | Cámara / transición |
|---|---|---|---|---|---|
| 1 | **Gancho** M1 | 0–191 | 01 | FM (l0 0,4 · l1 1,0) y `modern-woman-m1` (espera → dolida → baja → regazo). Burbujas de chat y título "¿Te ha pasado?" | Push-in `zr` 1,00 → 1,10 y sacudida en 154. **Match cut** en 192: la pantalla del celular queda donde aparece la llama |
| 2 | **Puente** P2 | 192–283 | 02 | F2 de noche (tinte), LAMP con la llama parpadeando, `tamar-house` (espera, parpadeo). "Génesis 38" | Push-in 1,00 → 1,06, con un acento en "pero". Movimiento continuo |
| 3 | Conflicto P3 | 284–458 | 03 | F2 de noche a día (284–340); Selá cruza **entre l0 y l1** (380–420); `tamar-house` decepción en 426 | Paneo hacia la puerta, limitado por cobertura, y regreso. Corte |
| 4 | Giro 1 P5 | 459–559 | 04 | F2 de día, `tamar-veil` (doblado → velada en 530) | Fijo; desde 540, push-in rápido al velo hasta llenar el cuadro. **Oclusión** hacia P6 |
| 5 | Giro 1 P6 | 560–667 | 04 / 05 | F3 en 3 capas, `tamar-veiled-seated` sobre la piedra y `judah-walk` (ciclo de 2 cuadros por dibujo, ~9 px por cuadro, **pies detrás de l2**) | Paneo siguiendo a Judá (566–626). **Elipsis:** en 627 la cámara sube al olivo y al cielo. Corte |
| 6 | Giro 1 P7 | 668–770 | 05 | F3 con blur de 12 px y oscurecido; objetos con rebote en 689, 716 y 743, y resaltado de "sello · cordón · bastón" | Fijo, con una deriva leve. Corte de elipsis |
| 7 | Giro 2 P8 | 771–847 | 06 | F1 con tinte de atardecer, `crowd-women-*` y `crowd-man-pointing` (entra en 812). "Meses después" | Paneo corto |
| 8 | Giro 2 P9 | 848–947 | 06 | F1 de noche, `judah-command` (neutral → señala en 909 → sostiene); Tamar a contraluz (silueta de su base) entre `crowd-guard-1` y `crowd-guard-2` | Paneo de Judá a Tamar (918–937). **Silencio** de 937 a 947 y corte. Sin fuego sobre ella ni violencia |
| 9 | **Revelación** P10 | 948–1073 | 07 + 08 | F1, `tamar-reveal` (reposo → muestra en 985 → sostiene) y luz cálida radial. Cita con "Gn 38:25" | Push-in rápido 1,00 → 1,12 (985–1000). Contraplano |
| 10 | Revelación P11 | 1074–1112 | 09 | F1, `judah-reaction` (seguro → sorpresa en 1088) | Fijo |
| 11 | **Remate** P12 | 1113–1179 | 10 | F1, `judah-reaction` reconoce. Cita con "Gn 38:26" | Micro push-in. **Corte por mirada** a M2 |
| 12 | **Enseñanza** M2 | 1180–1269 | — | FM, `modern-woman-m2` (regazo → sube → firme). "Quien promete, responde por su promesa." | Pull-out 1,10 → 1,00 |
| 13 | **Sting** | 1270–1299 | — | Símbolo claro + sting corto, sobre el último cuadro de M2, sin negro | El bucle vuelve a M1 |

**Las citas van en off, sin boca animada.** Son narración externa o diálogo enviado, no diálogo en cuadro. En P10 Tamar sostiene los objetos con la boca cerrada; en P12 Judá tiene la mirada baja. No se mueve ninguna boca.

## Textos en pantalla (para `story.ts`)

Texto del guion aprobado, nunca de la transcripción. Cada línea dura hasta la siguiente, con un máximo de 200 cuadros.

- **Subtítulos de la narración:**
  - 0 "Te prometió algo." · 40 "Esperaste meses." · 82 "Nunca cumplió…" · 107 "y al final, la culpa fue tuya."
  - 192 "A Tamar le pasó algo parecido…" · 248 "pero mucho más grave."
  - 284 "Había quedado viuda." · 324 "Judá, su suegro, le prometió a su hijo Selá…" · 420 "pero nunca cumplió."
  - 459 "Así que tomó un riesgo:" · 507 "se cubrió el rostro y lo esperó en el camino."
  - 582 "Judá no la reconoció, se acostó con ella" · 652 "y le dejó como garantía" · 687 "su sello, su cordón y su bastón." Las tres palabras toman el color de acento en 691, 718 y 745.
  - 771 "Meses después, estaba embarazada." · 832 "Y Judá, el que no cumplió, ordenó castigarla."
  - 948 "Entonces ella mostró los objetos:"
  - 1074 "Judá los reconoció:"
- **Citas** (en otro estilo, entre comillas y con la referencia encima):
  - 1004–1073: «Mira ahora de quién son estas cosas» · GÉNESIS 38:25.
  - 1113–1179: «Más justa es ella que yo» · GÉNESIS 38:26.
- **Gancho:**
  - Título "¿Te ha pasado?" de 6 a 84, en la franja alta, por debajo de los 250 px.
  - Burbujas sin remitente "Te lo prometo, el próximo mes" con su fecha: marzo en 4, junio en 40, septiembre en 60.
  - "Esto es culpa tuya." en 150. Las burbujas van a la derecha del rostro, sin tapar los ojos.
- **Otros textos:** "Génesis 38" de 200 a 270, "Meses después" de 775 a 830, y la enseñanza "Quien promete, responde por su promesa." de 1196 a 1269, sin voz.
- **Colocación:**
  - Los subtítulos van por encima del tercio inferior: su línea base no baja de y ≈ 1250.
  - Los textos no entran en las franjas de 250 px arriba ni 120 px a la derecha.

## Tareas, en orden

### 1. `AUDIO`: sting corto y comprobación de la voz
- Crear `public/assets/audio/sfx/ismael-outro-sting-short.wav` a partir de `sfx/mixkit-orchestral-happy-prompt-636.wav`, con el ffmpeg de Remotion: ~1,1 s, con salida suave en los últimos 0,3 s. Los dos archivos existentes no se tocan. Registrar el derivado en `docs/ASSET-CATALOG.md`.
- Escuchar el inicio y el final de los 10 clips y confirmar que cada uno dice su frase. Si un clip no coincide, **detenerse** y marcar `needs-review`; no se regenera la voz.

### 2. `HISTORY`: crear `story.ts`
- Crear `src/video/episodes/juda-tamar/story.ts` con:
  - `clips` (archivo, inicio y duración según la tabla de medición);
  - `SCENE_FRAMES` = 1270, `STING_FRAMES` = 30 y `TOTAL_FRAMES` = 1300;
  - los beats `hook`, `bridge`, `conflict`, `risk`, `road`, `pledge`, `rumor`, `order`, `reveal`, `recognize`, `verdict`, `lesson` y `sting`, con su narración literal y su referencia;
  - `captions` (subtítulos), `quotes` (citas con referencia) y `onScreen` (título, burbujas, "Génesis 38", "Meses después" y la enseñanza), con sus cuadros;
  - las palabras resaltadas (sello, cordón y bastón), con los cuadros 691, 718 y 745.
- Solo texto, tiempos y referencias; ninguna decisión visual. La paráfrasis "ordenó castigarla" no se presenta como cita.

### 3. `CODE`: escenario multiplano y sprites (`src/video/stage/`)
- **`layered.tsx`:**
  - Agregar a `BgSpec` el campo opcional `planes: Array<{ src: string; depth: number }>`, ordenado del más lejano al más cercano. Si existe, reemplaza a `src`; HIST-001 y HIST-002 siguen con `src` y no cambian.
  - Transformación por plano según SPIKE-001 §3: con la cámara `{x, y, zoom}` del plano p = 1, cada plano usa escala `s = cover·(1 + (zr − 1)·p)` y desplazamiento proporcional a `p`.
  - Clampear de forma independiente cada plano opaco (p < 1) para que nunca muestre bordes.
  - Orden de dibujo: planos con p < 1 → figuras con `between: true` → plano p = 1 → figuras → planos con p > 1 (primer plano) → tintes, viñeta y textos.
  - El blur y el oscurecimiento del fondo (`blur`, `dim`) se aplican a todos los planos.
- **Figuras:**
  - `FigureLayer` recibe el campo opcional `between`, para Selá entre l0 y l1 en P3.
  - Un ayudante `spriteArts(set)` lee los nombres y el ancla del `*.set.json` (copiados como constantes TypeScript, sin leer JSON en tiempo de render) y devuelve los `arts`.
  - `cuts` se escribe a mano desde la hoja; los parpadeos son cortes de 2–3 cuadros.
  - La silueta de Tamar en P9 sale de su base, con `filter: brightness(0)` y un borde de luz naranja (`drop-shadow`).
- **Luz:**
  - Tintes por plano con los `tints` existentes: noche en F2 (P2) que pasa a día (P3), atardecer en F1 (P8) y calidez de antorcha en F1 (P9–P12).
  - Luz radial cálida sobre los objetos en P10.
  - Parpadeo de la llama (`oil-lamp-flame`) con opacidad y escala pseudoaleatorias deterministas.
- **Ciclo de caminata:** ayudante `cycleCuts(names, start, end, hold = 2)`. La traslación de Judá va en `x` y es independiente del ciclo.

### 4. `CODE`: planos, textos y composición
- Crear `src/video/episodes/juda-tamar/shots.ts` con los 12 planos de la tabla (M1 a M2), según la hoja de §7.
  - Los `x` e `y` de las figuras son el centro inferior del ancla, en pantalla.
  - Medio cuerpo: el ancla queda 40–90 px por debajo del borde inferior, para que el corte de cadera no se vea.
  - P5 con el cuadro `alto` y P9 con `extiende` se encuadran de modo que el borde cortado quede fuera de cuadro.
- Crear `src/video/episodes/juda-tamar/Composition.tsx`:
  - 12 `Sequence` visuales y 10 `Audio` (cada uno recortado con `durationInFrames`);
  - capa de textos: subtítulos, citas con referencia, resaltado, burbujas de chat, título y textos de tramo, todos dentro de las zonas seguras;
  - etiqueta "ANIMATIC DE REVISIÓN · VOZ TEMPORAL";
  - sting en 1270–1299.
- Crear `src/video/brand/IsmaelSting.tsx`: el símbolo claro entra con un brillo sobre el último cuadro de la escena, sin fondo negro, con `ismael-outro-sting-short.wav` y 30 cuadros. `IsmaelOutro.tsx` no cambia.
- Modificar `src/video/Root.tsx`: agregar `Composition id="JudaTamar"` (1300 cuadros, 30 fps, 1080 × 1920) dentro de `Folder "Instagram"`.
- Modificar `package.json`: agregar el script `render:juda-tamar`, con salida en `public/videos/ismael-004-juda-tamar-review-01.mp4`.
- Sin dependencias nuevas.

### 5. `RENDER`
- Renderizar con el script nuevo y confirmar que el MP4 existe. No arrancar Studio, Next ni `npm run dev`; no hacer commits; no publicar.

### 6. `REVIEW`
- Revisar los fotogramas 0, 60, 150, 172, 191, 192, 236, 400, 426, 530, 559, 560, 600, 640, 691, 745, 812, 909, 937, 948, 985, 1004, 1088, 1113, 1180, 1194, 1230, 1280 y 1299. En cada uno: bordes y huecos del parallax, salto de sprites, corte de cadera, legibilidad de textos y zonas seguras.
- Comprobar de oído la sincronía de los cortes de sprite con "nunca", "rostro", "ordenó", "objetos" y "reconoció".
- Dejar como siguiente paso `ismv-revision HIST-004`. No marcar `approved`.

## Archivos

| Acción | Ruta |
|---|---|
| Crear | `src/video/episodes/juda-tamar/story.ts`, `shots.ts`, `Composition.tsx` |
| Crear | `src/video/brand/IsmaelSting.tsx`, `public/assets/audio/sfx/ismael-outro-sting-short.wav` |
| Modificar | `src/video/stage/layered.tsx` (planos con profundidad, `between`, ayudantes de sprites; compatible con HIST-001 y HIST-002), `src/video/Root.tsx`, `package.json` |
| Crear (render) | `public/videos/ismael-004-juda-tamar-review-01.mp4` |
| Documentar | este plan (registro de ejecución), `docs/episodes/INDEX.md`, `docs/ASSET-CATALOG.md` (sting corto) |
| Ya hecho al planear | Previa visual: `src/app/historias/[code]/storyboards.ts` (manifiesto con HIST-002, sin cambios de contenido, y HIST-004), `storyboard.tsx` (recibe `code`) y `page.tsx` (lista de storyboards desde el manifiesto) |
| Sin cambios | Todo HIST-001 y HIST-002 en `src/video/`, `IsmaelOutro.tsx`, `camera.ts` (solo se reutiliza), MP3 y artes originales |

## Criterios de aceptación

- 1080 × 1920, 30 fps y 1300 cuadros.
- Ningún plano muestra bordes ni huecos del fondo, ni siquiera en paneos y zooms con parallax.
- l2 (columna, antorcha y rocas) se dibuja delante de las figuras y tapa los pies de Judá en P6. Selá pasa detrás del marco de la puerta.
- Subtítulos y citas iguales palabra por palabra al guion v2. Las citas se distinguen con comillas, otro estilo y su referencia (Gn 38:25 y Gn 38:26).
- Los cortes de sprite caen en sus palabras con ±2 cuadros: "nunca" (82), "rostro" (522), "ordenó" (909), "objetos" (990) y "reconoció" (1088).
- Gancho:
  - el primer fotograma se entiende sin sonido;
  - título y primera burbuja en los primeros 0,3 s;
  - conflicto ("nunca cumplió") antes de 3 s;
  - match cut legible entre la pantalla del celular y la llama.
- Ningún tramo pasa más de 2,6 s sin un evento visual. No se muestra intimidad en P6. P9 no tiene fuego ni violencia.
- La mujer de M1 y la de M2 tienen la misma escala en pantalla. El sting no pasa por negro y el bucle vuelve a M1.
- Nada de texto en las franjas de 250 px arriba, 670 px abajo (subtítulos por encima de y ≈ 1250) y 120 px a la derecha.
- La etiqueta de animatic se ve. Sin música; efectos solo con licencia registrada.
- El MP4 existe en la ruta indicada. HIST-001 y HIST-002 se ven igual que antes (la nueva interfaz de `layered.tsx` es opcional).

## Cómo se revisará

La persona ve el MP4 con sonido, a tamaño de móvil, y revisa:

- el ritmo y el bucle;
- el match cut y la oclusión del velo;
- que los gestos (P9, P10, M1) se lean sin saltos que distraigan;
- el tono respetuoso con Tamar;
- la legibilidad de textos y citas.

Los cambios de arte vuelven a preproducción. La previa del panel (`/historias/HIST-004?vista=storyboard`) permite anotar ajustes por escena antes de ejecutar.

## Riesgos, supuestos y puntos de parada

- **Parallax nuevo en el código:** es la primera vez que se usa. Si el clamp por plano no basta y aparece un hueco, se reduce el recorrido de ese plano. No se agrega arte ni se escala más allá de la cobertura.
- **Resolución:** las figuras se ven blandas a `k` 2,1–2,3. Si una cara se rompe al verla en móvil, se baja ese acercamiento un 10–15 %; no se interpola.
- **Saltos de redibujo (P10, P9):** si se notan mucho a 12 fps, se puede sostener más el cuadro anterior o tapar el cambio con el push-in. No se generan cuadros nuevos.
- **Bucle:** M2 termina con el celular en el regazo y M1 empieza con el celular en alto. El salto de pose cae en el corte del bucle, que es lo esperado.
- **Duración:** 43,3 s, dentro de la guía de 30–45 s.
- **Derechos de voz y música:** siguen bloqueando el video final y la publicación. Aquí no se resuelven.
- **Detenerse y devolver a revisión** si una tarea obliga a reescribir el guion, regenerar arte, cambiar la voz o agregar recursos no aprobados.

## Estado de aprobación

`plan-approved` (2026-11-19): la persona aprobó el plan ("Apruebo el plan"). Siguiente paso: `ismv-ejecute HIST-004`.

## Registro de ejecución — 2026-11-19

**Resultado:** `public/videos/ismael-004-juda-tamar-review-01.mp4` (1080 × 1920, 30 fps, 1300 cuadros, 43,3 s), renderizado con `npm run render:juda-tamar` (equivalente a `npx remotion render … JudaTamar`). Se renderizó dos veces: la segunda corrige lo encontrado al revisar los fotogramas de la primera (ver abajo). Es un animatic de revisión, con voz temporal; no es el video final.

### Tareas hechas

1. **`AUDIO`:**
   - Creado `public/assets/audio/sfx/ismael-outro-sting-short.wav`: 1,00 s del original de Mixkit, con salida suave desde 0,7 s. Quedó en 1,0 s y no en 1,1 s, para que el corte de 30 cuadros no caiga a mitad del desvanecido.
   - Registrado en `docs/ASSET-CATALOG.md`.
   - Cada clip se verificó con la transcripción de `voz` (las 10 frases coinciden con el guion), no de oído.
2. **`HISTORY`:** creado `src/video/episodes/juda-tamar/story.ts` con:
   - los clips y sus cortes;
   - 13 beats con su referencia;
   - subtítulos, citas, palabras resaltadas y textos en pantalla, todos del guion v2.
3. **`CODE`, escenario:**
   - `src/video/stage/layered.tsx` ahora admite:
     - `bg.planes` (multiplano con `planeCamera` según SPIKE-001 §3, y clamp de las capas lejanas);
     - figuras `space: 'world'`, `between`, `ease` y `filter`;
     - `filter` en los props;
     - `lights` (luz radial en pantalla).
   - HIST-002 sigue usando `bg.src`, que se dibuja como un plano p = 1 en el mismo orden que antes.
   - Nuevos `src/video/stage/sprites.ts` (`spriteArts`, `cycleCuts`, `flicker`) y `src/video/brand/IsmaelSting.tsx`.
4. **`CODE`, planos y composición:**
   - `shots.ts` (12 planos) y `Composition.tsx` (textos, burbujas, citas, resaltado, etiqueta de animatic y sting).
   - `Root.tsx` registra `JudaTamar` (1300 cuadros); `package.json` suma `render:juda-tamar`.
   - Sin dependencias nuevas.
5. **`RENDER`:** hecho. No se arrancó Studio ni Next, y no hay commits.
6. **`REVIEW`:** se revisaron 50 fotogramas, desde el gancho hasta el sting, y tras la corrección los cuadros 0, 70, 170, 1275 y 1299.

### Desvíos respecto de la hoja y el plan

- **Elipsis de P6:** la hoja pedía que la cámara subiera al olivo, pero en el lienzo de F3 las cabezas quedan a la altura de la copa, así que ningún encuadre sin zoom excesivo deja fuera a los personajes. Ahora la cámara sube un poco y un resplandor cálido de atardecer cubre el cuadro (624–656) mientras las figuras se desvanecen. Se mantiene la elipsis discreta: no se muestra intimidad.
- **Match cut de M1 a P2:**
  - En "fue tuya" la mujer baja el celular al regazo y la cámara baja con él. Una sombra baja leve tapa el corte de cadera, y el brillo del celular queda en (540, 1700).
  - P2 empieza con la lámpara en **primer plano**, con la llama exactamente en ese punto. La lámpara baja y sale de cuadro durante el push-in y P3, y la llama se apaga con el amanecer.
- **P9, contraluz:** Tamar es la silueta de su base, en primer plano. Los guardias van detrás y más chicos (sin violencia ni fuego), y la sombra baja tapa el corte de cadera de la silueta. El paneo rápido mueve las figuras más que la plaza, que se lee como profundidad.
- **Sting:** el símbolo va en la franja alta, por encima del rostro del plano final, sobre un velo oscuro parcial y sin negro.
- **Título del gancho:** visible desde el cuadro 0, para que el primer fotograma se entienda sin sonido.
- **Siluetas del pueblo:** el arte tiene color (no son negras puras); se usan tal cual.

### Criterios

| Criterio | Estado |
|---|---|
| 1080 × 1920, 30 fps y 1300 cuadros | Cumplido |
| Sin bordes ni huecos del parallax | Sin huecos en los fotogramas revisados |
| Primer plano (l2) delante de las figuras; Selá detrás del marco de la puerta | Cumplido (P6, P8–P12; Selá visible solo por la puerta) |
| Subtítulos y citas iguales al guion; citas con comillas, otro estilo y su referencia | Cumplido |
| Cortes de sprite en "nunca", "rostro", "ordenó", "objetos" y "reconoció" | Cumplido según los tiempos medidos. No verificado de oído |
| Gancho legible sin sonido, título y burbuja al inicio, match cut | Cumplido |
| Sin intimidad en P6; sin fuego ni violencia en P9 | Cumplido |
| Misma escala de la mujer en M1 y M2; sting sin negro; bucle a M1 | Cumplido |
| Textos dentro de las zonas seguras | Cumplido. La pila de burbujas roza el pelo en el último mensaje |
| Etiqueta de animatic; sin música | Cumplido |
| HIST-001 y HIST-002 sin cambios visibles | No re-renderizados. El cambio de `layered.tsx` es aditivo y conserva el orden de dibujo |

### Pendientes y riesgos

- Sin verificar: escucha completa con sonido, `lint` y `tsc`. El render compila TypeScript, pero no comprueba tipos.
- Las figuras se ven blandas a `k` 2,1–2,3 y las hojas necesitan ampliarse ×2 para el video final.
- Siguen pendientes los derechos de voz, la música y efectos con licencia, y la portada.

**Siguiente paso:** la persona ve el MP4 y luego `ismv-revision HIST-004`. No se marca `approved`.

## Aprobación y cierre — 2026-11-20

- **Revisión:** la persona aprobó `review-01` ("super aprobado") y adoptó el formato como estándar. Informe en `docs/episodes/04-juda-tamar-review-01.md`.
- **Publicación:** se agregó la composición `JudaTamarPublicacion`. Es la misma `JudaTamar` con la propiedad `review: false`, que solo quita la etiqueta de animatic.
  - Render: `public/videos/ismael-004-juda-tamar-publicacion.mp4` (36,4 MB), con el script `render:juda-tamar-publicacion`.
  - Comprobado en los cuadros 0, 1030 y 1290: sin etiqueta.
- **Portada:** `Still` `JudaTamarCover` (`src/video/episodes/juda-tamar/Cover.tsx`). Usa la imagen guía, "GÉNESIS 38", el título "Las pruebas que no pudo negar" y el símbolo oficial.
  - Salida: `public/assets/social/hist-004/instagram-reel-cover.png`, con el script `render:juda-tamar-portada`.
  - Es una propuesta pendiente de aprobación.
- **Entrega:** `docs/deliveries/HIST-004-copy-redes.md`, con el copy de Instagram y el título y la descripción de YouTube Shorts.
- **Pendiente para publicar:** la voz es de la cuenta gratuita de Fish (confirmado el 2026-11-20). Hay que regenerar los 10 audios en un plan pago, medir de nuevo, ajustar tiempos y volver a renderizar. Falta también aprobar la portada.
