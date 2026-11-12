# Plan de producción — HIST-002

**Historia:** Una verdad a medias: Abraham, Sara y Abimelec  
**Documento fuente:** `docs/episodes/02-abraham-sara-abimelec.md`  
**Estado:** plan v3 aprobado (2026-11-12); transiciones visuales reajustadas en `review-06`, pendiente de revisión humana.  
**Objetivo:** `animatic` audiovisual de revisión (voz Fish de referencia, artes guía estáticas). No es video final ni publicable.  
**Formato:** 1080 × 1920, 30 fps, H.264. **2430 cuadros (81,0 s)** = 2340 de voz y escenas (78,0 s) + 90 de placa de marca (3 s).

## Objetivo

Montar el guion aprobado completo (Génesis 20:1–18, narrador único) con los recursos ya aprobados como referencia, en una composición Remotion nueva `AbrahamAbimelech`, para revisar ritmo, encuadres, lectura móvil, sincronía voz–imagen y cierre de marca. La historia completa pesa más que la duración: la voz real mide 77,9 s, por debajo de los 90–110 s estimados en el guion pero sobre la guía de 30–45 s; es una decisión ya aceptada en el documento del episodio, se repite aquí para la revisión.

## Fuentes aprobadas y fuera de alcance

- **Aprobado:** enfoque, guion narrado (gancho, historia, enseñanza, pregunta “¿Alguna vez pagaste por una mentira?”), siete diseños recientes como referencias visuales, placa y sting comunes (`src/video/brand/IsmaelOutro.tsx`, `public/assets/audio/sfx/ismael-outro-sting.wav`).
- **Reglas:** `docs/DIRECCION-VISUAL.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/technical/spikes/SPIKE-001-resultado.md`, `AGENTS.md`.
- **No se hace en la ejecución audiovisual:** fondos finales por capas ni parallax, portada de Instagram compuesta/exportada, comprobación de derechos de la voz, bocas animadas o voces de personaje, CTA hablado, música, cambios al guion o publicación. La previa visual del panel es una herramienta aparte para revisar encuadres; no se renderiza ni modifica la composición aprobada de HIST-001.

## Estado de assets y límites que el plan respeta

- **Fondos/frames:** las guías opacas de 941 × 1672 / 1024 × 1536 son placas estáticas. `clampToCover` mantiene la ventana 1080 × 1920 cubierta (mínimos actuales 1,148× y 1,25×). El límite 1,45× aplica al **fondo**, no al tamaño de los recortes transparentes: animar la figura por separado permite medio cuerpo/rostro sin empujar ni ablandar todo el escenario. Sin parallax amplio en este animatic.
- **Personajes con alfa real** (1024 × 1536): Abraham, Abimelec, Sara, mujer del gancho; servidores en set de seis figuras por PNG; sobre y mano en un solo PNG (1536 × 1024). Medidas de caja visible ya tomadas (ver tarea CODE 2).
- **Personajes recortados:** Abraham y Abimelec tienen 4 PNG alineados de 1024 × 1536; a cuerpo completo las diferencias son sutiles, pero el recorte vertical a medio cuerpo/rostro las hace legibles. Usar cambios registrados: Abraham `fearful → focused → resolve → patriarch`; Abimelec `dignified → awakens → steady-concern → calm-reflection`. Mantener el centro de la cabeza fijo, alternar en pausas con corte de 1–2 cuadros o dip oscuro de 3 cuadros; no usar fundidos largos que dupliquen la cara. La calidad se revisa al tamaño real; si queda blanda, bajar el acercamiento, no interpolar.
- **Disponibles para la previa:** la placa estática `public/assets/concepts/episodes/abraham-sara-abimelech/frames/frame-abimelech-sleeping-amber-shadows.png` (941 × 1672), elegida por la persona para mostrar a Abimelec dormido. Es una composición opaca; admite acercamiento suave, no parallax ni separación de capas. Siguen faltando capas de salón con puertas/cortinas, fondo final de dormitorio y ambiente/efectos.
- **Recursos no aprobados o descartados:** no usar `frame-07-abimelech-with-envelope-do-not-use.png`, `person-old-man-unused.png` ni frames 02–06, 08, 09 y 11 como arte aprobado. El preview puede recurrir a esos frames solo si los etiqueta como propuestas pendientes de revisión; el plan de animatic prioriza las siete guías aprobadas, los fondos estáticos y los recortes de personajes existentes. No alterar ni sustituir archivos fuente.
- **Audio:** narración Fish de referencia (`AUDIO DE TERROR` / Fish Audio Drama 3, cuenta Free, 2026-11-11); solo revisión interna. La composición lleva la etiqueta “ANIMATIC DE REVISIÓN · VOZ TEMPORAL”.

## Medición de la voz (hecha al planear)

Duración medida con el ffprobe/ffmpeg incluido en Remotion; pausas detectadas con `silencedetect`. Cada archivo se coloca en su propia `Sequence` para que ningún desfase se acumule.

| Clip | Archivo `02-abraham-abimelech-…` | Dur. (s) | Cuadros | Inicio global |
|---|---|---:|---:|---:|
| 1 | `01-hook.mp3` | 14,42 | 433 | 0 |
| 2 | `02-abimelec.mp3` | 15,73 | 472 | 433 |
| 3 | `03-confrontacion.mp3` | 14,42 | 433 | 905 |
| 4 | `04-abraham-explica.mp3` | 11,31 | 340 | 1338 |
| 5 | `05-restauracion.mp3` | 14,92 | 448 | 1678 |
| 6 | `06-ensenanza-cierre.mp3` | 7,13 | 214 | 2126 |

Total de voz 2340 cuadros (`NARRATION_FRAMES`); `OUTRO_FRAMES` 90; `TOTAL_FRAMES` 2430. Los nombres de archivo no coinciden con el contenido real: el clip 1 trae gancho **y** el primer párrafo; el 2 trae el palacio y el inicio del sueño; el 3, el resto del sueño y el llamado; el 4, la explicación de Abraham; el 5, devolución, oración, y la enseñanza hasta “confrontarlo”; el 6, el cierre y la pregunta. La asignación de cada frase a su pausa se dedujo de las pausas y la longitud del texto (los 6 clips encajan frase a frase con el guion); **debe confirmarse de oído en la primera tarea** y corregirse en `story.ts` si alguna frontera difiere unos cuadros. Cada clip termina con 0,45–0,57 s de silencio, que sirve de respiro entre tramos.

## Desglose temporal y visual

Cuadros globales (30 fps); los `from/to` salen de los inicios de frase medidos. Referencias bíblicas discretas en pantalla, separadas de la narración.

| # | Beat | Cuadros | Voz | Recurso y acción | Cámara / transición |
|---|---|---|---|---|---|
| 1 | `hook` (gancho animado, 3,7 s) | 0–111 | “Te mintieron. Tú confiaste. Y tú pagaste las consecuencias.” | La persona afectada entra como plano medio cercano, no perdida en el fondo: `person-affected.png` ocupa aproximadamente 75–82 % del alto visible; se recorta desde la cabeza hasta la cintura. Mano y sobre reales entran por primer plano; (a) 0–26 la mano acerca y entrega el sobre; (b) 26–52 la mujer lo recibe y reacciona con un leve retroceso de hombros; (c) 52–111 la sombra sube desde la mesa y cubre parcialmente el rostro, sin tapar el subtítulo. | Fondo de mesa casi fijo (solo cobertura mínima); escala y posición de personaje independientes: 1,05→1,55, ancla de pies constante y foco en la cara. Match cut de movimiento al camino de Gerar cuando la sombra llena el cuadro (fundido desde negro, 8–10 cuadros). Repetir misma escala/posición al volver en el remate. |
| 2 | `arrival` | 111–210 | “Abraham llegó a Gerar con Sara. Pero el miedo lo acompañaba.” | E1 `gerar-road-portrait-guide.png`: abrir 18–24 cuadros en vista general para leer camino y ciudad; luego corte guiado por la mirada a Abraham en medio cuerpo cercano (`abraham-fearful.png` → `abraham-focused.png`). Sara entra como contraplano medio (`sarah-earth-tones.png`), con el rostro bien visible; no mostrar caminata falsa de pies. | Tilt/push-in del camino al rostro, manteniendo el fondo dentro de cobertura; las figuras escalan por separado. Corte de posición a F1 o a plano de susurro. Ref. Gn 20:1–2. |
| 3 | `half-truth` | 210–433 | “Pensó que, si sabían que ella era su esposa, lo matarían. Por eso dijo que era su hermana. Sara también sostuvo esa versión.” | Abrir con F1 `frame-truth-half-whisper.png` como plano conjunto corto; recortar la franja derecha no identificada. Enseguida pasar a retrato de Abraham con `abraham-fearful.png`; en la pausa de “dijo que era su hermana” hacer match cut fijo a `abraham-focused.png`, y al nombrar a Sara cortar a su medio cuerpo escuchando. No mover bocas: narrador externo. | Empuje de personaje independiente del fondo; corte a negro/cambio de luz de 3–4 cuadros entre expresiones, no fundido largo de caras. Ref. Gn 20:2, 11–13. |
| 4 | `palace` | 433–663 | “Abimelec, rey de aquella tierra, oyó que Sara era hermana… la llevó a su casa. No sabía que también era su esposa.” | E2 `gerar-palace-courtyard-hall-guide.png`. Cerca del segundo 17 (cuadro 497), Abimelec ocupa la izquierda mirando a la derecha y Sara la derecha con espejo horizontal para mirarlo. Iniciar como plano conjunto medio; acercar las figuras por separado sin contacto. Después, plano/contraplano de sus rostros, conservando la línea de mirada. | Entrada por oclusión de columna sugerida; push-in independiente de ambos recortes y cortes de mirada. No agrandar el fondo junto con las figuras. La luz baja hacia noche en los últimos 20 cuadros. Ref. Gn 20:2. |
| 5 | `dream` | 663–1101 | “Esa noche, Dios se le apareció en sueños… Abimelec respondió… Dios reconoció su integridad… Ahora debía devolverla.” | Abrir con la placa estática `frame-abimelech-sleeping-amber-shadows.png`, elegida para Abimelec dormido; acercar lentamente al rostro. Luego cortar a la guía del dormitorio y mostrar a Abimelec despierto en medio cuerpo (`abimelech-awakens.png`); usar cortes a `abimelech-steady-concern.png` y `abimelech-calm-reflection.png` en pausas. La presencia divina se sugiere con luz sobre la pared, nunca como figura. | Push-in sobre la placa (sin parallax porque es una composición opaca); dip de 3 cuadros hacia el recorte despierto; noche→amanecer por capa cálida en el segundo plano. Ref. Gn 20:3–7. |
| 6 | `council` | 1101–1252 | “Al amanecer, Abimelec reunió a sus siervos. Después llamó a Abraham y lo confrontó.” | E2 salón: empezar en plano medio de Abimelec; abrir para revelar `servants-set-a.png` al fondo con entrada escalonada; después un push-in corto a Abimelec y entra Abraham (`abraham-fearful.png`) en contraplano de medio cuerpo. | Apertura por tilt del haz de amanecer hacia el salón; las figuras del fondo se mueven menos que los personajes. Corte por mirada a escena 7. Ref. Gn 20:8. |
| 7 | `confrontation` | 1252–1475 | “Su decisión había puesto a otros en peligro. Abraham explicó que había tenido miedo: creyó que allí no había temor de Dios.” | Usar plano a dos solo como orientación inicial. Alternar primeros planos de Abimelec (`abimelech-steady-concern.png` → `abimelech-calm-reflection.png`) y Abraham (`abraham-fearful.png` → `abraham-resolve.png`); anclar cada rostro en la misma coordenada y escala para que el cambio de expresión se lea limpio. El último corte se sostiene en Abraham al admitir su temor. Sin diálogo de personaje ni sincronía labial. | Plano/contraplano con match cut de mirada y escala; cada pose dura al menos 8–12 cuadros. Dip oscuro de 3 cuadros solo en los cambios que salten. Fondo quieto o con parallax mínimo. Ref. Gn 20:9–11. |
| 8 | `truth` | 1475–1678 | “Sara era su media hermana, sí. Pero también era su esposa. Abraham había contado solo la parte que le convenía.” | Reutilizar F1 con un recorte distinto y legible: empezar en Sara, deslizar hacia Abraham cuando se reconoce la verdad y cerrar en su rostro; cortar a `abraham-focused.png` en medio cuerpo para “solo la parte que le convenía”. | Paneo vertical corto desde Sara hasta Abraham; el encuadre y posición de cabeza se igualan al plano anterior para un corte de continuidad. Bajar levemente la luz, sin efecto dramático añadido. Ref. Gn 20:12–13. |
| 9 | `return` | 1678–1780 | “Abimelec devolvió a Sara y la reivindicó ante todos.” | E2 patio. Comenzar en medio cuerpo de Sara al centro; abrir a plano de tres con ella adelantada y Abimelec/Abraham más pequeños y separados al fondo. Abimelec baja la mano/los hombros mediante el cambio `steady-concern` → `calm-reflection`; Sara permanece serena, no trofeo ni recurso. | Retirada suave de cámara desde el rostro de Sara al plano conjunto; entrada de luz más amplia. Conservar el orden de profundidad y la distancia. Ref. Gn 20:14–16. |
| 10 | `prayer` | 1780–1869 | “Abraham oró por él, y Dios sanó a su casa.” | Mantener `frame-10-prayer-and-restoration.png` como composición guía, pero recorrerla con tilt lento desde Abraham orando hasta la casa en calma; el cuadro ya comunica ambos espacios. No superponer recortes duplicados ni inventar síntomas. | Push-in solo sobre el personaje dentro del frame; fundido de 10–12 cuadros hacia el retrato de Abimelec. Ref. Gn 20:17–18. |
| 11 | `lesson` | 1869–2250 | “Abimelec no había mentido. Aun así, su casa sufrió las consecuencias de la verdad a medias de Abraham. Y él se atrevió a confrontarlo. Porque incluso una persona de fe puede hacer daño con lo que decide callar.” | `frame-abimelech-closing.png` es el plano de partida, ya cercano. Alternar con recortes registrados de Abimelec (`abimelech-steady-concern.png`, `abimelech-calm-reflection.png`): cuando dice “no había mentido”, sostener la mirada; al hablar de las consecuencias, bajar el encuadre a medio cuerpo; al decir “confrontarlo”, volver al rostro firme. | Tres posiciones de cámara (rostro, medio cuerpo, rostro) conectadas con push/pull-in y match cuts en pausas. Transiciones por corte o dip de 3 cuadros; evitar fundir dos rostros a la vez. Dejar la última frase quieta. |
| 12 | `final-question` | 2250–2340 | “¿Alguna vez pagaste por una mentira?” (2270–2325) | Regresar al mismo encuadre cercano de la mujer del gancho, misma escala y posición. El sobre descansa sobre la mesa, sin mano ni sombra. Subtítulo dentro de zona segura. | Match cut desde el rostro de Abimelec a la mirada de la mujer; micro push-in durante la pregunta y pausa quieta 2325–2340; fundido a negro sin CTA. |
| 13 | `brand-outro` | 2340–2430 | silencio | `IsmaelOutro` + sting. | Fondo y símbolo comunes, plano estable; reservar 90 cuadros completos. | Fundido de entrada de 8–10 cuadros y pausa legible del símbolo. |

## Subtítulos (para `story.ts`)

Mismo texto aprobado, partido en las pausas. Cada línea dura hasta la siguiente (la última, hasta 2325); el hook usa fuente grande.

0 “Te mintieron.” · 26 “Tú confiaste.” · 52 “Y tú pagaste las consecuencias.” · 111 “Abraham llegó a Gerar con Sara.” · 167 “Pero el miedo lo acompañaba.” · 210 “Pensó que, si sabían que ella era su esposa, lo matarían.” · 311 “Por eso dijo que era su hermana.” · 359 “Sara también sostuvo esa versión.” · 433 “Abimelec, rey de aquella tierra,” · 497 “oyó que Sara era hermana de Abraham y la llevó a su casa.” · 600 “No sabía que también era su esposa.” · 663 “Esa noche, Dios se le apareció en sueños y le advirtió que Sara estaba casada.” · 807 “Abimelec respondió que había actuado sin saberlo.” · 909 “Dios reconoció su integridad en ese asunto:” · 983 “él mismo le había impedido acercarse a ella.” · 1058 “Ahora debía devolverla.” · 1101 “Al amanecer, Abimelec reunió a sus siervos.” · 1185 “Después llamó a Abraham y lo confrontó.” · 1256 “Su decisión había puesto a otros en peligro.” · 1342 “Abraham explicó que había tenido miedo:” · 1406 “creyó que allí no había temor de Dios.” · 1475 “Sara era su media hermana, sí.” · 1531 “Pero también era su esposa.” · 1575 “Abraham había contado solo la parte que le convenía.” · 1678 “Abimelec devolvió a Sara y la reivindicó ante todos.” · 1780 “Abraham oró por él,” · 1821 “y Dios sanó a su casa.” · 1869 “Abimelec no había mentido.” · 1923 “Aun así, su casa sufrió las consecuencias de la verdad a medias de Abraham.” (dos líneas) · 2054 “Y él se atrevió a confrontarlo.” · 2130 “Porque incluso una persona de fe” · 2184 “puede hacer daño con lo que decide callar.” · 2270 “¿Alguna vez pagaste por una mentira?”

## Tareas, en orden

### 1. `AUDIO` — verificar la medición
- Escuchar los seis MP3 y confirmar la frase de cada pausa. Corregir los `from/to` de la tabla anterior si difieren. Si un clip difiere de lo deducido (por ejemplo, otra frase en otro archivo), **detenerse y marcar `needs-review`**: no recortar ni reescribir la voz.
- No modificar los MP3 originales ni generar audio nuevo. No se agrega música, ambiente ni efectos (A2 queda `idea`).

### 2. `HISTORY` — alinear `story.ts`
- Crear `src/video/episodes/abraham-abimelech/story.ts` con `NARRATION_FRAMES` (2340), `OUTRO_FRAMES` (90), `TOTAL_FRAMES` (2430), los clips (archivo, inicio, duración), los 12 beats con narración literal del guion aprobado y su referencia, y los subtítulos. Solo texto, tiempo y referencia: sin decisiones visuales.
- Texto palabra por palabra igual al guion aprobado. Gancho y enseñanza no llevan referencia; el relato indica Gn 20 por versículos (tabla). Ninguna frase se presenta como cita textual de RVR1960.

### 3. `CODE` — planos y componentes
- Crear `src/video/episodes/abraham-abimelech/shots.ts` con un plano por fila 1–12 (recurso, cámara, figuras, luz, fundidos).
- Medidas de cajas visibles (px del PNG, para `figureBox`): Abraham 203,8 → 784,1524; Abimelec 204,6 → 773,1535; Sara 225,6 → 756,1532; mujer del gancho 277,13 → 724,1523 (todos 1024 × 1536); sobre+mano 109,284 → 1451,755 (1536 × 1024). Con los personajes ampliados, validar que los rostros no salgan del área segura de subtítulos. Separar sobre y mano buscando la columna vacía de alfa entre ambos y recortándolos con `clip-path`/`object-position`; no editar el PNG original.
- **Composición de personajes en 9:16 (origen del PNG intacto):** el encuadre de plano general usa figura a 55–70 % del alto de pantalla; el medio cuerpo, 105–125 % del alto del cuadro anclado por debajo del borde inferior; el retrato cerrado, 145–160 %, mostrando cabeza y torso superior. `x` conserva el centro del rostro; el `y` ancla el recorte bajo el cuadro. Parejas: dos medios cuerpos separados; luego plano/contraplano con un rostro por vez para evitar que las siluetas choquen. Hook y pregunta final: mujer a 145–155 %, centrada y consistente. No escalar simultáneamente el fondo para lograr el primer plano.
- Reutilizar cámara `cameraAt`/`clampToCover`/`worldTransform`, respiración y balanceo sutil, polvo determinista, viñeta y subtítulos, sin editar `src/video/episodes/ismael-origin/*`. Separar el zoom de fondo del encuadre de personajes: cada plano tendrá `cameraStart/cameraEnd` para el fondo y `figureStart/figureEnd` por personaje, con coordenadas de cabeza constantes para los cambios de expresión. Extraer solo componentes compartidos necesarios a `src/video/stage/`.
- Transiciones/efectos permitidos y acotados: sombra que cae en el gancho y vuelve en pregunta; match cut de mirada entre personajes; paneo/tilt de fondos de pocos píxeles; entrada de recortes con máscara de sombra y rebote de 3–4 px; dips de 3 cuadros entre variantes; haz de luz en sueño y noche→amanecer. No animar bocas ni añadir recursos nuevos.
- La placa estática de Abimelec dormido puede usarse en la previa sin etiqueta de arte pendiente; marcarla como composición guía, no como fondo por capas. Todo arte aún no revisado conserva su marca de propuesta.

- **Ajustes de validación v3 (obligatorios):**
  - **Anclas por variante.** Las variantes de Abraham y Abimelec no están registradas al píxel (cabeza, capucha y barba cambian de tamaño y posición). Crear en `shots.ts` una tabla `anchor` por PNG (centro entre ojos y punta de nariz, medidos comparando superposiciones al 50 % de opacidad) y aplicar `translate/scale` para igualar la cabeza al cambiar de variante. Tolerancia: ≤ 3 px de desplazamiento de cabeza al tamaño final. Si no se logra, cortar solo en dip de 3 cuadros y retirar esa variante del plano.
  - **Miradas (eyeline).** Abraham, Abimelec y Sara miran hacia la derecha del cuadro. En el plano/contraplano de `confrontation` (y donde se enfrenten), voltear horizontalmente (`scaleX(-1)`) a uno de los dos para que se miren; compensar la dirección de luz con el viraje de color del plano. Las demás escenas conservan la orientación original.
  - **Fondo en dos capas.** En retratos y medios cuerpos el fondo lleva desenfoque leve (3–6 px), 20–30 % más oscuro y viraje de color al tono de la figura, y se mueve más lento que ella (deriva de ±40 px). Para tener margen sin bordes, el zoom mínimo de fondo en esos planos es 1,3 (941 × 1672; holgura 71 px en X y 127 px en Y) o 1,4 (1024 × 1536; holgura 177 px en X y 115 px en Y); validar con `clampToCover`. En planos generales el fondo vuelve a nitidez total (cambio de foco simulado).
  - **Tope de ampliación y vida en planos sostenidos.** Figuras hasta 150 % del alto del cuadro (≈ 2,0× del PNG; probado a 1,9× sin pérdida inaceptable). Cada frase sostenida lleva un empuje de 1,00→1,06, respiración y balanceo sutil.
  - **Parejas.** Dos medios cuerpos no caben a la vez en 1080 px: usar plano general (figuras al 55–70 %), F1 ya compuesto, o plano/contraplano; nunca dos retratos a la vez.
  - **Subtítulo del gancho.** Con la mujer al 145–155 %, el subtítulo del gancho va en la franja baja (≈ y 1300–1500), no arriba, para no tapar el rostro; la pregunta final usa la misma colocación y el mismo encuadre de la mujer.
  - **Sara y la mujer del gancho tienen una sola pose.** Sin variantes de expresión: reacciones con empuje de cámara, rotación ≤ 1,5° y luz. Pedir una variante de Sara (alerta/serena) es opcional, no bloquea el animatic.

### 4. `CODE` — composición y registro
- Crear `src/video/episodes/abraham-abimelech/Composition.tsx`: 12 `Sequence` visuales, 6 `Audio` (uno por clip, `staticFile('assets/audio/narration/02-abraham-abimelech-…mp3')`), subtítulos, etiqueta de animatic y `IsmaelOutro` en 2340–2430.
- Modificar `src/video/Root.tsx`: añadir `Composition id="AbrahamAbimelech"` (2430 cuadros, 30 fps, 1080 × 1920) dentro de `Folder "Instagram"`. Añadir en `package.json` el script `render:abraham-abimelech` apuntando a `public/videos/ismael-002-abraham-abimelec-review-01.mp4`.
- Sin dependencias nuevas.

### 5. `RENDER`
- Renderizar el script anterior; confirmar que termina bien y que el MP4 existe. Está ignorado por Git. No arrancar servidor, Studio ni Next; no correr `npm run dev`; no hacer commits; no publicar.

### 6. `REVIEW`
- Inspeccionar fotogramas clave (110, 112, 210, 260, 359, 433, 600, 807, 909, 1101, 1252, 1338, 1475, 1575, 1678, 1869, 2054, 2250, 2300, 2400), incluyendo rostro en móvil, continuidad de registro de variantes, lectura de Sara y doble imagen en transiciones.
- Documentar desvíos y dejar el siguiente paso: `ismv-revision HIST-002` tras ver el MP4. No marcar `approved`.

## Archivos

| Acción | Ruta |
|---|---|
| Crear | `src/video/episodes/abraham-abimelech/story.ts`, `shots.ts`, `Composition.tsx` |
| Crear | `src/video/stage/` (componentes compartidos extraídos para HIST-002) |
| Modificar | `src/video/Root.tsx`, `package.json` |
| Crear (render) | `public/videos/ismael-002-abraham-abimelec-review-01.mp4` |
| Documentar | `docs/plans/HIST-002-plan.md` (registro de ejecución), `docs/episodes/INDEX.md`, y una nota en `docs/ASSET-CATALOG.md` si se agregan recursos (no se prevé) |
| Sin cambios por este plan | `src/video/PreviewPlayer.tsx`, todo HIST-001, MP3 y artes originales. Existen cambios previos ajenos al plan en `src/app/` (previa `historias`/`documento`, `page.tsx`, `globals.css`) y en el script `dev` de `package.json`; la ejecución no los modifica salvo la línea del script `render:abraham-abimelech` |

## Criterios de aceptación

- 1080 × 1920, 30 fps, 2430 cuadros; la cámara y fondos no descubren bordes; cada personaje tiene al menos un plano medio/rostro con ojos y boca legibles en pantalla móvil, sin dejar figuras protagonistas pequeñas en el centro de un fondo vacío.
- El texto narrado y los subtítulos coinciden palabra por palabra con el guion aprobado; cada subtítulo cae con su frase (verificado de oído al menos al inicio de cada clip).
- El gancho tiene tres acciones distinguibles, una por frase, y la sombra conduce visualmente a Gerar; la pregunta final regresa al mismo plano y personaje del gancho.
- No hay bordes vacíos en ningún plano; ninguna escena sugiere contacto físico de Abimelec con Sara ni representa físicamente a Dios; la sanidad no muestra síntomas inventados; la enseñanza se apoya en Abimelec, no en quien mintió.
- Todo placeholder está etiquetado; se declara en pantalla “animatic de revisión · voz temporal”; no se afirma que sea final ni publicable.
- Los cambios de variante no muestran salto visible de cabeza (≤ 3 px) ni doble imagen; en el plano/contraplano los personajes se miran entre sí; el subtítulo del gancho no cubre el rostro de la mujer.
- No hay música ni efectos nuevos; el sting se oye con la entrada del símbolo.
- El MP4 existe en la ruta indicada y se informa.

## Cómo se revisará

La persona ve el MP4 con sonido en móvil o a tamaño móvil, y valida: ritmo y claridad del gancho, que la voz y las imágenes coincidan, tono respetuoso con Sara y Abimelec, saltos entre variantes, legibilidad de subtítulos y la pregunta final. Los cambios de arte vuelven a revisión humana.

## Riesgos, supuestos y puntos de parada

- **Asignación frase–pausa inferida:** si el oído la contradice, detenerse y corregir antes de seguir. Supuesto con alta confianza (encaja en los seis archivos).
- **Resolución:** el fondo de 941 × 1672 y 1024 × 1536 limita paneos/zooms del escenario. Los personajes se acercan mediante escala independiente; revisar suavidad de las caras a 1080 × 1920 y retirar 10–15 % del acercamiento si la rasterización se ablanda.
- **Registro de expresión:** las variantes son mismo cuerpo y luz con gesto facial distinto. Comparar recortes lado a lado y mantener fijo centro y escala del rostro; el corte debe leerse como cambio expresivo, no salto de identidad.
- **Abimelec dormido:** ya hay placa estática para la previa, sin capas separables; para cámara multiplano final se requiere arte preparado por capas. **Salón, puertas y dormitorio final por capas:** todavía faltan.
- **Borde derecho de F1:** la previa y el plano propuesto lo recortan para excluir la figura parcial; revisar que los rostros y gestos de Abraham y Sara sigan completos y legibles.
- **Duración:** 81 s de producto frente a la guía de 30–45 s; es decisión aceptada, pero la revisión puede pedir condensar sin tocar el guion aprobado.
- **Derechos de voz y portada:** siguen bloqueando video final/publicación; no se resuelven aquí.
- **Detenerse y devolver a revisión** si cualquier tarea exige reescribir el guion, regenerar arte, cambiar la voz o añadir recursos no aprobados.

## Estado de aprobación

`plan-approved` (2026-11-12): la persona aprobó el plan con los ajustes v3. Siguiente paso: `ismv-ejecute HIST-002`.

## Registro de ejecución — 2026-11-12

Ejecutado con `ismv-ejecute HIST-002` (todas las tareas). **Resultado: animatic visual de revisión `review-01`, no video final.**

**Render:** `public/videos/ismael-002-abraham-abimelec-review-01.mp4` — H.264, 1080 × 1920, 30 fps, 2430 cuadros (81,0 s), AAC. Ignorado por Git. Voz en 0–2340 y placa común en 2340–2430.

**Archivos afectados**

| Archivo | Cambio |
|---|---|
| `src/video/episodes/abraham-abimelech/story.ts` | Nuevo. Seis clips con inicio y duración, 12 beats con narración literal y referencia, 33 subtítulos, `NARRATION_FRAMES` 2340, `OUTRO_FRAMES` 90, `TOTAL_FRAMES` 2430. |
| `src/video/episodes/abraham-abimelech/shots.ts` | Nuevo. 22 planos (12 beats) con fondo, cámara, figuras por pantalla, variantes, sombras, luz y dips. Incluye las anclas de variante. |
| `src/video/episodes/abraham-abimelech/Composition.tsx` | Nuevo. Planos, seis `Audio` (uno por clip), subtítulos, etiqueta de animatic y placa común. |
| `src/video/stage/layered.tsx` | Nuevo. Fondo con su cámara y figuras en coordenadas de pantalla (zoom independiente), recorte de sobre/mano, sombra, haz de luz, tintes, dip y fundidos. No se modificó HIST-001. |
| `src/video/Root.tsx`, `package.json` | Composición `AbrahamAbimelech` y script `render:abraham-abimelech`. El cambio previo del script `dev` no es de esta ejecución. |

**Anclas de variantes:** registro automático por silueta de cabeza contra la variante base. Las variantes quedaron alineadas (desplazamiento 0 px) salvo `abraham-resolve` (0,98× y +10 px), corregido en `shots.ts`. El registro mide silueta, no rasgos del rostro.

**Criterios revisados (muestreo de ~35 fotogramas, no cuadro a cuadro):** formato y duración; narración y subtítulos con el texto aprobado; gancho con tres acciones y sombra hacia Gerar; regreso al mismo plano de la mujer en la pregunta; sin bordes descubiertos (garantizado por `clampToCover`); Abimelec volteado en el plano/contraplano; figura parcial de F1 excluida; subtítulo del gancho en la franja baja; placa y sting comunes.

**Desvíos y límites (para revisión)**
- **Asignación frase–pausa no verificada de oído:** quien ejecuta no puede escuchar el audio. Se usó la deducción de la medición; confirmar de oído que cada subtítulo cae con su frase.
- `arrival`: Sara aparece solo en el plano abierto; el medio cuerpo es de Abraham (no hay contraplano de Sara).
- `lesson`: se resolvió con la placa `frame-abimelech-closing.png` y cámara (rostro, medio cuerpo, rostro); no se alternaron recortes de variantes.
- Abimelec dormido: placeholder “ABIMELEC DORMIDO — ARTE PENDIENTE” con cama vacía y haz de luz.
- Los recortes se miden por silueta; el parecido de rostro entre variantes se revisa a simple vista.
- Voz Fish de referencia, derechos y portada de Instagram siguen pendientes para publicación.

**Siguiente paso:** la persona ve el MP4; luego `ismv-revision HIST-002`.

### Ajustes tras la revisión de `review-01` — `review-02` (2026-11-12)

Aplicadas las mejoras 1–3 de `docs/episodes/02-abraham-sara-abimelec-review-01.md`, solo en `src/video/episodes/abraham-abimelech/shots.ts` (y el nombre del archivo en el script de render):
- **Plano a dos en la confrontación:** nuevo plano `confront-two` (1252–1288), Abraham a la izquierda y Abimelec volteado a la derecha, mirándose; el retrato de Abimelec pasa a 1288–1338.
- **Posición lateral variada:** retratos de Abraham, Sara y Abimelec desplazados a x 470–500 en varios planos (los recortes miran a la derecha, así que no se mueven a la derecha del cuadro).
- **Llegada:** Abraham y Sara separados (x 340 / 640) en el plano abierto.
- **Entrada de Abimelec en el sueño y de Abraham en el consejo:** sin transparencia; dip de 3 cuadros y rebote de 4 px.

**Render:** `public/videos/ismael-002-abraham-abimelec-review-02.mp4` (1080 × 1920, 30 fps, 2430 cuadros, 81,0 s). `review-01` se conserva. Verificados fotogramas 125, 270, 400, 810, 830, 1190, 1260, 1280, 1300, 1360 y 1700; no se vio el video en movimiento. Siguen pendientes la revisión humana y el chequeo de oído de los subtítulos.

### Storyboard v4 y animatic `review-03` (2026-11-12)

- La persona eligió el recurso descargado “Amber shadows over Abimelech” para representar a Abimelec dormido. Se integró como `public/assets/concepts/episodes/abraham-sara-abimelech/frames/frame-abimelech-sleeping-amber-shadows.png`, placa opaca de 941 × 1672. En la vista previa se usa con un push-in suave; no se interpreta como fondo por capas.
- Para el tramo de palacio que empieza en 14,4 s, alrededor del segundo 17 (cuadro 497), el storyboard pone a Abimelec a la izquierda y a Sara a la derecha espejada para enfrentar sus miradas. El encuadre evoluciona de plano medio conjunto a acercamiento separado y planos/contraplanos; no implica contacto físico.
- La persona entregó “Thoughtful woman in warm cut-paper.png”; se integró como `public/assets/characters/hook-02/person-affected-reflective.png`. La pose mantiene la identidad, ropa y paleta; para el cierre se espeja horizontalmente para que mire a la izquierda, hacia el sobre. La escena 12 del storyboard ya usa esta nueva pose.
- La persona pidió reajustar el storyboard para volver a armar el video; se toma esa instrucción como aprobación de la propuesta visual v4 para este animatic de revisión. No modifica el guion ni implica aprobación editorial del video.
- En `shots.ts`, el tramo 663–807 usa la placa aprobada de Abimelec dormido con un acercamiento suave, sin placeholder; después corta al dormitorio guía y al recorte de Abimelec despierto. La placa sigue siendo compuesta y opaca, no capas ni fondo para parallax.
- En el plano conjunto del palacio, Sara se espeja horizontalmente para mirar hacia Abimelec. En la pregunta final, se sustituye el recorte de cuerpo entero por la pose reflexiva recibida, volteada hacia el sobre.
- Se conserva `review-01` y `review-02`. La nueva exportación usa un archivo distinto `review-03` y queda pendiente de revisión humana. No se cambian guion, audio, subtítulos ni derechos de voz; el render sigue siendo un animatic, no una pieza publicable.

**Render:** `public/videos/ismael-002-abraham-abimelec-review-03.mp4` (1080 × 1920, 30 fps, 2430 cuadros, 81,0 s). Verificar exportación y fotogramas del sueño (663–807), plano conjunto de palacio (497–600), pregunta final (2250–2340) y cierre de marca. El siguiente paso es que la persona vea `review-03` y, si hace falta, pida cambios con `ismv-revision HIST-002`.

### Corrección de la escena 12 — animatic `review-04` (2026-11-12)

- La persona señaló que en la vista inicial de storyboard la escena 12 seguía mostrando la imagen del gancho. Se corrigió `src/app/historias/[code]/storyboard.tsx`: tanto la pose inicial como la final de “Pregunta final” usan `person-affected-reflective.png`, la pose de **“Thoughtful woman in warm cut-paper”**. La figura queda espejada y en el mismo encuadre durante toda la escena; la figura de cuerpo entero se conserva solo para el gancho.
- Se comparó SHA-256 del archivo de Descargas con el recurso del proyecto: `46E3C41D46DFF7ECBF224F4E0353D9005D2A65D9B82D49856E8A9D9349584F71`; son idénticos. Remotion ya selecciona esa misma pose en `shots.ts` desde `review-03`; se vuelve a exportar una nueva versión para que el storyboard y el MP4 correspondan.
- El comando del proyecto genera ahora `public/videos/ismael-002-abraham-abimelec-review-04.mp4`. Se conservan las versiones anteriores, y `review-04` queda pendiente de revisión humana.

**Render:** `public/videos/ismael-002-abraham-abimelec-review-04.mp4` (1080 × 1920, 30 fps, 2430 cuadros, 81,0 s). La revisión del cuadro 2280 confirmó que se usa la pose descargada, pero el texto de la pregunta cubría parte del rostro. Corregido en `Composition.tsx` para bajar y reducir la pregunta final.

### Encuadre de subtítulo y animatic `review-05` (2026-11-12)

- La pregunta final usa una banda de contraste en la zona baja y texto a 54 px desde y=1630, debajo del rostro y del sobre. El gancho mantiene su ubicación y tamaño de subtítulo originales.
- El storyboard identifica `review-05` y mantiene la pose de “Thoughtful woman in warm cut-paper” como figura inicial y final de la escena 12.
- Se conserva `review-04`, que ya contenía la pose correcta pero tenía el subtítulo encima del rostro.

**Render:** `public/videos/ismael-002-abraham-abimelec-review-05.mp4` (1080 × 1920, 30 fps, 2430 cuadros, 81,0 s). Revisado el cuadro 2280 con Remotion still: la pose reflexiva de Descargas aparece completa y el subtítulo queda debajo del rostro. La revisión integral del video sigue pendiente de la persona.

### Transiciones visuales y animatic `review-06` (2026-11-12)

- Se implementó `crossfadeIn` como solapamiento real: el plano entrante empieza antes del punto de corte, conserva el anterior debajo y aparece aumentando opacidad. No inserta una placa negra.
- En `arrival` (3,7–7 s), se quitó el dip del cuadro 22. La cámara continúa desde el camino hacia Abraham; el mismo recorte de Abraham se mueve y escala al acercamiento mientras Sara se desvanece. Se retiró también el salto abrupto de desenfoque/oscurecimiento y se evitó duplicar el rostro durante el acercamiento.
- Se retiraron los dips oscuros de entrada y los dips internos de este animatic. Los cambios de interlocutor/expresión quedan como cortes directos; se dejó una disolvencia superpuesta solo en la llegada desde el gancho (10 cuadros); los demás cambios de escena y de interlocutor usan cortes directos o cambios de luz para evitar caras dobles.
- Se creó `docs/technical/TRANSICIONES-VISUALES.md` con corte directo, corte por mirada/acción, match cut, disolvencia superpuesta, fundidos/dips, oclusión/wipe, luz, movimiento continuo, plano/contraplano y puentes de audio; incluye cuándo usar cada uno, duración inicial y necesidades de recursos. Se enlazó desde dirección visual y la skill de recursos.
- El storyboard apunta a `review-06` y explica las transiciones de llegada, sueño y confrontación. `review-01` a `review-05` se conservan.

**Render:** `public/videos/ismael-002-abraham-abimelec-review-06.mp4` (1080 × 1920, 30 fps, 2430 cuadros, 81 s). Revisados con Remotion still los cuadros 106 (entrada al camino), 138 (acercamiento de Abraham), 205 (corte limpio al beat siguiente) y 2280 (pregunta final). La revisión humana integral sigue pendiente; no representa aprobación final del episodio.
