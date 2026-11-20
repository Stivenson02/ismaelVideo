# Animación por capas desde una base

**Estado:** método de producción vigente desde 2026-11-19 (primer uso: HIST-004).
**Herramienta:** [`tools/ismv_prep.py`](../../tools/ismv_prep.py) (Python local).
**Origen:** prueba del 2026-11-19 con las imágenes de la mujer moderna de HIST-004. Interpolar dibujos completos y distintos produce doble exposición (dos celulares, manos fantasma). En cambio, un parche que solo toca la cara deja el resto del cuerpo idéntico.

## 1. Idea central

La IA de imagen no garantiza que dos dibujos del mismo personaje, generados por separado, coincidan. Por eso **nunca se piden dibujos sueltos para animar**. Un movimiento se pide de una de dos formas:

- **Hoja de sprites (forma preferida desde 2026-11-19):** una sola imagen con todos los cuadros del gesto en cuadrícula, incluidos los cambios de cara y los parpadeos. Dentro de una misma imagen el generador mantiene el personaje igual de un cuadro a otro. El costo es la resolución: cada cuadro es una fracción de la imagen.
- **Ediciones de una base:** una base aprobada y ediciones de esa misma imagen que cambian solo lo que se mueve. Da más resolución por cuadro, pero el generador puede redibujar de más.

En los dos casos, la preproducción:

1. recorta el fondo liso (verde o magenta) y deja alfa real;
2. **registra** cada edición contra la base para corregir el pequeño desplazamiento o escala que mete el generador;
3. **estabiliza** cada cuadro: lo que no cambió se toma de la base (o del cuadro anterior), para que el pelo, la ropa y el fondo no "hiervan" entre cuadros;
4. convierte las ediciones de cara en **parches** que solo contienen el rostro, sobre un lienzo completo transparente, para encajarlos sin reescalar;
5. entrega todo con el mismo lienzo y un manifiesto (`*.set.json`) que Remotion usa directamente.

Remotion anima después: cambia cuadros a 12 fps ("en doses"), cruza parches de expresión, añade respiración, parpadeo y cámara (multiplano, push-in, paneos).

```text
GENERADOR (persona)                PREPRODUCCIÓN (ismv_prep.py)             ANIMACIÓN (Remotion)
base.png  ──────────────┐
pose-02.png (edición) ──┼─► recorte → registro → estabilización ──► set.json + PNG RGBA ─► FigureLayer arts/cuts
face-dolida.png (edic.) ┘                       └► parches de cara ──────────────────────► capa de parche + fundidos
full.png + l0/l1/l2.png ──► recorte → registro → escala al lienzo ──► layers.json ───────► cámara multiplano
narración Fish (.wav) ────► tiempos por palabra (faster-whisper) ───► words.json ────────► hoja de animación / subtítulos
```

## 2. Tipos de pieza

| Pieza | Qué es | Cómo se pide | Archivo en la bandeja |
|---|---|---|---|
| **Base** ✋ | Diseño del personaje (y pose neutra). Define rostro, ropa, escala y luz; se adjunta como referencia en sus hojas. | Prompt de generación completo con la Dirección común y fondo `#00FF00`. | `base.png` |
| **Hoja de sprites** | Todos los cuadros de un gesto de un plano, con caras y parpadeos, en una imagen. | Prompt de generación con la base adjunta: cuadrícula de celdas iguales (4 cuadros → 2 × 2 en 2:3; 6 → 3 × 2 en 1:1), misma escala y posición en cada celda, margen verde entre celdas. | `sprite-<plano>.png` |
| **Pose** | Cuadro clave de un gesto (sprite). | **Edición de la base**: "cambia solo brazos/celular…". | `pose-02.png`, `pose-03.png`… (orden de reproducción) |
| **Parche de cara** | Expresión, parpadeo o forma de boca. | Edición de la base (o de una pose): "cambia solo cejas, ojos y boca". | `face-<nombre>.png`, `blink.png`, `mouth-<forma>.png` |
| **Parche sobre pose** | Expresión cuando la cabeza está en otra posición (p. ej. mirando abajo). | Edición de esa pose. | `face-<nombre>@pose-04.png` |
| **Escena completa** | Fondo compuesto, referencia de todas las capas. | Prompt de generación con proporción vertical. | `full.png` |
| **Capa de fondo** | Lejano, medio o primer plano. | Edición de la escena completa: quitar o aislar elementos. | `l0.png` (lejana, opaca), `l1.png`, `l2.png` |
| **Prop** | Objeto aislado. | Generación con fondo `#00FF00`. | cualquier nombre, comando `key` |

Una pieza que no sale de editar la base no es un cuadro de animación: sirve como referencia o como plano aparte con corte.

## 3. Reglas para generar

1. **Fondo liso de croma.** Personajes y props: verde `#00FF00` uniforme, sin sombra ni degradado ni suelo. Capas de fondo con vegetación verde saturada: magenta `#FF00FF`. El sujeto no lleva el color del fondo (nada verde saturado en ropa ni objetos). Un tablero gris pintado no es transparencia.
2. **Base primero y aprobada (✋).** Ninguna pose ni expresión se genera antes de aprobar la base.
3. **Toda variante es una edición de la base** (o de la pose indicada), adjuntándola. Se usa la **plantilla de edición** (sección 4), no la Dirección común: repetir la descripción de estilo invita al generador a redibujar todo.
4. **Si la herramienta permite seleccionar una zona (pincel, inpainting, relleno generativo), selecciona solo lo que cambia.** Es la mejor garantía de que el resto quede idéntico.
5. **Un archivo por cuadro y por expresión.** Las hojas en cuadrícula (2 × 3) quedan solo como referencia de actuación; no se usan como piezas registradas.
6. **Genera primero el cuadro extremo** del gesto (el de acción), luego la anticipación y al final los intermedios. Si el extremo no funciona, no vale la pena seguir.
7. **Gestos grandes = más cuadros.** Si algo cambia de forma (manos que se separan, un velo que se despliega), pide 4–6 cuadros. Con cuadros cercanos el cambio a 12 fps se lee como movimiento; con saltos grandes se ve como un corte.
8. **Lienzo:** personajes en proporción vertical 2:3 (p. ej. 1024 × 1536) a la mayor resolución disponible. Si el plano se acerca al rostro, conviene más resolución; la preproducción puede reescalar (`--scale`). Fondos: la proporción del lienzo calculado (SPIKE-001); la preproducción lo escala al tamaño exacto (`layers --size`).
9. **Encuadre estable:** misma escala y posición. En medio cuerpo, la figura cortada en el borde inferior, a la altura de la cadera; en cuerpo entero, los pies apoyados en el mismo lugar.
10. **Hojas de sprites:** celdas iguales en orden de lectura; cada celda en proporción 2:3 (2 × 2 en un lienzo 2:3, 3 × 2 en uno 1:1). Medio cuerpo con un corte recto a la misma altura en todas las celdas. Nada cruza a otra celda; sin bordes, líneas, números ni texto. El parpadeo va justo después de su cuadro. Pide la mayor resolución y, si el generador puede ampliar, amplía la hoja ×2: cada cuadro debería medir ~1000 px de alto o más. Si un cuadro sale distinto, se regenera la hoja entera; no se mezclan cuadros de hojas distintas.

## 4. Plantilla de edición

```text
[Adjuntar: <base o pose aprobada>]
Edita la imagen adjunta para crear un cuadro de animación. Conserva EXACTAMENTE igual: tamaño del lienzo, encuadre, posición y escala del personaje, estilo de dibujo, trazos, colores, luz, ropa, cabello y el fondo verde liso #00FF00. No redibujes ni muevas nada que no se mencione aquí.
Cambia solo: <la parte que se mueve y cómo queda>.
<Lo que debe seguir igual y es fácil de alterar por error, p. ej. "la cara y la mirada no cambian">.
Entrega una sola imagen, sin texto.
```

Para parches de cara, la línea "Cambia solo" dice: "la expresión: cejas, párpados, ojos y boca. La cabeza, el pelo, el cuello y la luz no se mueven".

## 5. Preproducción (comandos)

Requisitos (una vez): `python -m pip install -r tools/requirements.txt`.

| Comando | Para qué |
|---|---|
| `python tools/ismv_prep.py audit <carpeta o archivos>` | Tamaño, alfa real, tablero pintado, fondo recortable y riesgo de color de croma dentro del sujeto. |
| `python tools/ismv_prep.py sprites art-inbox/hist-004/MOD/sprite-m1.png public/assets/characters/hook-04/modern-woman-m1 --grid 3x2 --names espera,dolida,…` | Hoja de sprites: corta la cuadrícula, quita restos de celdas vecinas, alinea cada cuadro con el primero y fija lo que no cambió respecto del cuadro anterior. Deja `*.set.json` y la hoja de QA. Avisa si un cuadro queda chico o salta demasiado. |
| `python tools/ismv_prep.py set art-inbox/hist-004/MOD public/assets/characters/hook-04/modern-woman` | Set por ediciones: base, poses estabilizadas, parches, `*.set.json` y hoja de QA en `art-inbox/…/_qa/`. |
| `python tools/ismv_prep.py layers art-inbox/hist-004/F1 public/assets/backgrounds/judah-town-square-night --size 1920x2400 --depths 0.3,1,1.3` | Capas de fondo registradas y escaladas, `*.layers.json`, hoja de QA y prueba de parallax en MP4 (el magenta muestra huecos). El croma se detecta aunque solo cubra el cielo o una ventana; una capa sin croma queda opaca. Si una capa no registra contra `full` (la edición cambió el encuadre), se usa sin mover: entonces lo que importa es que las capas encajen entre sí. Si el arte no tiene la proporción de `--size`, se recorta al centro; elige un `--size` con la proporción del arte cuando el recorte corte algo importante. |
| `python tools/ismv_prep.py key <archivos> --out <carpeta>` | Props: solo recorte del fondo. |
| `python tools/ismv_prep.py inbetween <a.png> <b.png> <salida> --n 2` | Intermedios opcionales entre dos cuadros del mismo set (solo dentro de la zona que cambia). Revisarlos: si muestran doble imagen, pedir otro cuadro en vez de usarlos. |
| `python tools/ismv_prep.py preview <salida.mp4> base.png:12 base.png+face-x.png:15 pose-02.png:3 … --breathe` | Video rápido para revisar el gesto antes de Remotion (`:n` = cuadros a 30 fps; `+` superpone un parche). |
| `python tools/ismv_prep.py sheet <hoja.png> <salida> --names a,b,c` | Separa una hoja de expresiones en celdas iguales (solo referencia). |
| `python tools/ismv_prep.py montar <grabación> cortes.txt <salida.mp3> --limpiar` | Corta y une fragmentos de una grabación, p. ej. un testimonio leído en una sola toma, separado en frases (una línea `inicio - fin  # nota` o `pausa 0.4` por fragmento). Usa fundidos cortos, limpieza de ruido opcional y volumen normalizado. Deja `<salida>.cortes.json` con la correspondencia de tiempos. |
| `python tools/ismv_prep.py voz <audio1> <audio2> …` | Tiempos por palabra y pausas de cada audio de Fish (un audio por frase del guion de voz), en `<audio>.words.json`. Usa faster-whisper con el modelo `small`, local. |

**`config.json` opcional en la carpeta del set:**

```json
{
  "scale": 1.0,
  "threshold": 0.11,
  "chain": true,
  "regions": { "pose-*": [[0.15, 0.40, 0.90, 1.0]], "face-*": [[0.30, 0.18, 0.70, 0.45]] }
}
```

`regions` limita, en coordenadas normalizadas (0–1), dónde se aceptan cambios. Úsalo cuando el generador alteró algo que no debía (pelo, ropa); fuera de la caja manda la base. `chain: true` fija cada pose al cuadro anterior; `false` la fija a la base.

**Lectura del resultado:**
- `cambio` < ~25 %: edición fiel; el gesto se verá limpio.
- `cambio` > 30 %: la herramienta avisa. El generador redibujó la figura. Regenera con edición por zonas o limita con `regions`.
- Desplazamientos (`dx`, `dy`, `esc`) de unos pocos píxeles o ±2 % son normales: el registro los corrige.
- La hoja de QA marca en magenta la zona que cambió en cada pieza. Si el contorno abarca cosas que no debían moverse, es un problema del arte, no del código.

## 6. Cómo lo usa Remotion

`src/video/stage/layered.tsx` ya tiene lo necesario:

- **Cuerpo:** un `FigureLayer` con `arts` = los cuadros del set (de una hoja o de ediciones; `{ src, anchor: set.anchor, size: set.canvas }`) y `cuts` = `[cuadro, id]`. En una hoja, los parpadeos y cambios de cara ya son cuadros: se intercalan en `cuts`. A 12 fps, cada dibujo dura 2–3 cuadros de la composición de 30 fps. Anticipación, acción y asentamiento se sostienen más.
- **Cara:** un segundo `FigureLayer` con los mismos `x`, `y`, `k`, `flip` y `breathe` y los parches como `arts`. Como el parche solo contiene el rostro, un fundido de 3–5 cuadros entre expresiones no duplica el cuerpo. El parpadeo es un parche de 2–3 cuadros cada 3–5 s en planos sostenidos.
- **Fondo:** capas de `*.layers.json` con su profundidad `p` y la cámara de `camera.ts`.
- El plan del episodio (`ismv-plan`) decide si agrega un ayudante para generar `cuts` a 12 fps y un componente de parche con fundido. Este documento no cambia el código.

## 7. Límites conocidos

- Un giro de cabeza o de cuerpo (perfil ↔ frente) no sale de editar la base: requiere otra base, con un corte, un movimiento de cámara o una oclusión que lo cubra.
- Cambios de topología (manos que se juntan o se separan, telas que se despliegan) necesitan más cuadros. Los intermedios automáticos solo suavizan desplazamientos pequeños.
- La estabilización puede "congelar" un cambio sutil deseado, como un párpado que baja un poco, si queda bajo el umbral. Se arregla con un parche de cara o bajando `threshold`.
- El reescalado con Lanczos no inventa detalle. Para primeros planos, pide la base a mayor resolución desde el generador.
- En una hoja de sprites, cada cuadro mide una fracción de la imagen (una hoja 2 × 2 de 1024 × 1536 da cuadros de 512 × 768). Amplía la hoja en el generador antes de entregarla, o encuadra ese plano más pequeño en pantalla.
- Dos hojas de un mismo personaje son generaciones distintas y no coinciden exactamente. El paso de una a otra debe caer en un corte de plano, no en medio de un movimiento continuo.
- La transcripción de voz puede escribir mal una palabra; los **tiempos** son fiables, pero el texto de los subtítulos sale del guion aprobado, no de la transcripción.
