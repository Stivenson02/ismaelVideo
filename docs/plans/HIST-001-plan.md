# Plan de producción — HIST-001

**Historia:** Agar: vista y escuchada  
**Documento fuente:** `docs/episodes/01-origen-de-ismael.md`  
**Estado:** ejecución completa; `review-02` aprobado por la persona; publicación pendiente de confirmar derechos de voz TTS  
**Objetivo aprobado:** animatic audiovisual de revisión, con voz TTS temporal y firma sonora; no es el video final  
**Formato aprobado:** 1080 × 1920, 30 fps, 1001 cuadros (~33,37 s): 30,35 s de voz de referencia + 3 s de cierre común.

## Objetivo

Reemplazar la composición de prueba actual por un animatic vertical que cuente el guion aprobado con Agar, la presencia del mensajero, el escenario de Shur, voz temporal, textos sincronizados y cierre de marca reutilizable. Sirve para revisar encuadre, ritmo, lectura, animación y firma sonora; no es el video final.

Usar cámara 2D con movimiento limitado sobre el arte existente. No hacer paneos panorámicos ni parallax entre las capas de Shur: tienen cuadrícula opaca, lienzos sin registrar y cobertura insuficiente. Incluir `public/assets/audio/narration/01-ismail-origin-reference.wav` como voz temporal de este animatic, solo para revisión local. No agregar música. La voz final, la limpieza/regeneración de fondos y la revisión de arte se reservan para otro gate de video-final.

## Fuentes aprobadas y decisiones

- Guion vigente: `docs/episodes/01-origen-de-ismael.md`, versión aprobada por la persona.
- Dirección de arte: `docs/DIRECCION-VISUAL.md`; recortes 2D minimalistas, misterio con contraluz y movimientos suaves.
- Técnicas: `docs/technical/spikes/SPIKE-001-resultado.md`; cámara multiplano como técnica base de la serie, con restricciones para los fondos actuales.
- Cierre común de marca: `docs/DIRECCION-VISUAL.md`; usar una placa animada fija y reutilizable al final de todos los Reels, con símbolo oficial claro sobre fondo oscuro cálido y el mismo sonido breve.
- Historia: `HIST-001`, identificada en `docs/episodes/INDEX.md`.
- **Objetivo de este plan:** animatic visual. Para pasar a video final se debe hacer otro gate de recursos, completar fondo/capas, voz y revisión de arte.
- **CTA:** “Si estas historias te ayudan, síguenos para compartir más.” No mencionar descarga de Play Store.
- **Cierre reutilizable aprobado:** después del CTA hablado, usar un end card común de exactamente 3 s para este y los próximos Reels: fondo oscuro cálido, resplandor discreto, símbolo oficial claro, fundido de entrada, acercamiento muy leve y pausa para reconocimiento. Sin narración ni CTA variable dentro de la placa.
- **Sonido de marca aprobado para este animatic:** `public/assets/audio/sfx/mixkit-orchestral-happy-prompt-636.wav`, descargado de Mixkit. Conservar el original de 4,05 s; crear `public/assets/audio/sfx/ismael-outro-sting.wav` de máximo 3 s con salida suave y sincronizarlo con la entrada del símbolo. El sonido se integra en el video, no se distribuye por separado. Conservar la referencia a la [licencia de efectos de Mixkit](https://mixkit.co/license/modal/sfxFree/).
- **Duración:** la voz dura 30,35 s; el cierre suma 90 cuadros. Redondear la voz hacia arriba a 911 cuadros y fijar la composición en 1001 cuadros. No recuperar el cronometraje antiguo de 44 s.

## Desglose narrativo y ritmo propuesto

La composición conserva las palabras del guion aprobado. El ejecutor mide en el archivo de voz el inicio y final de cada frase/beat y traduce esas marcas a cuadros a 30 fps; no altera el orden ni las palabras para acomodar el cronometraje. Ventana total: 0–911 para voz y escenas; 911–1001 para la placa fija. La tabla visual de abajo define el orden y la acción, y la sincronía exacta se escribe en `story.ts` y `shots.ts` a partir de las marcas audibles.

| Beat | Ventana de trabajo | Narración aprobada / plano y movimiento |
|---|---:|---:|---|
| `hook` | Voz: primer enunciado | “¿Alguna vez has sentido que nadie ve lo que estás viviendo?” Plano general del fondo compuesto; Agar pequeña y aislada. Push-in suave; texto del gancho en zona segura. |
| `flight` | Voz: siguiente enunciado | “Agar huía por el desierto.” Reencuadrar el mismo fondo; Agar como recorte distante con deriva lateral/balanceo mínimo, sin ciclo de piernas. |
| `encounter` | Voz: fuente y encuentro | “Allí, junto a una fuente, el ángel del Señor la encontró y la llamó por su nombre.” Cámara avanza pocos píxeles hacia la fuente. Agar y mensajero como recortes separados; sombra estilizada breve antes de revelar la silueta a contraluz. |
| `question` | Voz: pregunta indirecta | “Le preguntó de dónde venía y hacia dónde iba.” Plano medio casi fijo de las dos figuras; respiración/balanceo muy leve. Mantener la pregunta sin comillas como narración indirecta. |
| `promise` | Voz: promesa y nombre | “Después le anunció que tendría un hijo, y que debía llamarlo Ismael, porque Dios había oído su aflicción.” Reacción de Agar en plano más cerrado, luz cálida discreta detrás del mensajero; no mostrar al bebé ni estrellas/descendencia. |
| `lesson` | Voz: reflexión | “La historia de Agar nos recuerda que, aun en medio del dolor, podemos hablar con Dios y confiar en que él nos ve y nos escucha.” Sostener una pose serena; aumentar un poco la luz cálida y mostrar subtítulos legibles. |
| `close` | Voz: invitación | “Si estas historias te ayudan, síguenos para compartir más.” Mantener el fondo y la marca fuera de esta escena; el CTA hablado debe terminar antes de comenzar la placa final. |
| `brand-outro` | Cuadros 911–1001 | Sin narración. Placa común fija de marca por 3 s con fondo oscuro cálido, símbolo oficial claro, fundido, acercamiento leve, pausa final y sting de marca sincronizado. |

La referencia bíblica puede aparecer en texto discreto, separada de la narración. El diálogo narrado no debe presentarse en pantalla como cita textual RVR1960 sin revisar su literalidad: el texto del guion es una versión breve.

## Tareas del plan

### 1. `HISTORY` — alinear los beats con el guion

- Actualizar `src/video/episodes/ismael-origin/story.ts` para que las narraciones y referencias correspondan al documento aprobado.
- Escuchar `public/assets/audio/narration/01-ismail-origin-reference.wav`, marcar el inicio/final de cada frase y asignar `from/to` en cuadros a los siete beats; dejar 90 cuadros independientes al final para `brand-outro` y fijar el total en 1001 cuadros.
- Mantener en `story.ts` solo identidad del beat, tiempo, narración y referencia. Sacar la descripción visual `art` de su tipo.
- No reescribir el guion, agregar descendencia incontable, mostrar al bebé ni inventar diálogo adicional.
- La pregunta del ángel permanece en estilo indirecto, sin comillas. No añadir citas literales nuevas; si fueran necesarias, detenerse para verificar la traducción y pedir aprobación editorial.

### 2. `CODE` — preparar cámara y planos del episodio

- Crear `src/video/stage/camera.ts` con tipos y una función pura que interpole claves de cámara por fotograma, sin dependencias nuevas y sin animación de reloj real.
- Crear `src/video/episodes/ismael-origin/shots.ts` con un plano por beat según la tabla de arriba: encuadre, recurso, posición/escala, clave de cámara y efectos discretos. Mantener esta información visual fuera de `story.ts`.
- Limitar el escenario a la imagen compuesta `public/assets/backgrounds/shur-spring/shur-spring-full-scene-reference.png`. Al cubrir 1080 × 1920, el escalado estimado es 1,25×; mantener el recorrido dentro de la cobertura calculada, con paneos de pocas decenas de píxeles y sin dejar bordes vacíos.
- No usar en este animatic las cuatro capas que llevan cuadrícula opaca ni hacer limpieza destructiva de los originales.
- Usar Agar y el mensajero como recortes completos con alfa real, con pose sostenida y movimientos pequeños. No crear un rig ni ciclo de caminata.
- Usar `public/assets/characters/agar/agar-closeup-warm-desert-light.png` y `public/assets/concepts/episodes/ismael-origin/hagar-at-desert-spring.png` como referencias compuestas solo cuando el encuadre las necesite; evitar superponer personajes duplicados dentro de una imagen compuesta.

### 3. `AUDIO` — preparar e integrar los audios aprobados para el animatic

- Conservar intacto `public/assets/audio/sfx/mixkit-orchestral-happy-prompt-636.wav` como original descargado.
- Crear una copia `public/assets/audio/sfx/ismael-outro-sting.wav` de máximo 3 s, con una salida suave que no corte la frase musical abruptamente.
- Incluir la voz TTS de referencia al inicio de la secuencia como voz temporal del animatic y sincronizarla con los siete beats. No tratarla como voz final ni publicar el MP4.
- Conservar la licencia/fuente de Mixkit en la documentación del recurso. Usar el sting corto en la placa común después del CTA; no agregar música ni efectos ambientales en esta entrega.

### 4. `CODE` — rehacer la composición con recursos reales

- Actualizar `src/video/episodes/ismael-origin/Composition.tsx` para cargar recursos con `<Img>` y `staticFile()` desde `public/assets/`.
- Usar cámara y composición por beat; incluir el fondo, personajes, sombra/contraluz como efectos sobrios y texto legible en márgenes seguros.
- Sustituir el aviso `ESCENA EN CONSTRUCCIÓN` y las formas sintéticas del paisaje por recursos aprobados.
- Añadir la pista de voz temporal con `<Audio>` desde `public/assets/audio/narration/01-ismail-origin-reference.wav`; mostrar subtítulos sincronizados con el guion. Mantener las referencias bíblicas discretas y separadas de la narración.
- Extraer la placa común a `src/video/brand/IsmaelOutro.tsx`, componente reutilizable de 90 cuadros. Usar fondo oscuro cálido generado en composición, resplandor discreto y `public/assets/brand/ismael-symbol-light-variant.png`; animar con fundido y escala leve y sostener el símbolo al final. Reproducir `public/assets/audio/sfx/ismael-outro-sting.wav` sincronizado con la entrada. No usar el wordmark con fondo blanco ni recrear/deformar el logo. El CTA hablado termina antes de la placa.
- Mantener la invitación a seguirnos. No mostrar un CTA de descarga.

### 5. `CODE` — duración y encuadre

- Actualizar `src/video/Root.tsx` y cálculos de progreso/escena a 1001 cuadros, 30 fps y 1080 × 1920; que la placa final ocupe exactamente los últimos 90 cuadros.
- Mantener tipografía y subtítulos legibles en móvil; retirar indicadores temporales de progreso si distraen del animatic.

### 6. `RENDER` — generar archivo de revisión

- Renderizar con Remotion a `public/videos/ismael-001-origen-review-01.mp4`.
- Confirmar que el comando termina correctamente y que el MP4 aparece en esa ruta. El video queda ignorado por Git según `.gitignore`.
- No arrancar Next.js ni Remotion Studio. No correr pruebas, no hacer commit ni publicar el video.

### 7. `REVIEW` — dejar listo para revisión humana

- Entregar un resumen de escenas y movimientos, limitaciones del arte, uso de voz temporal/no final, ausencia de música y resultado de la placa común con el sting de marca.
- Indicar que el siguiente paso es `$ismv-revision HIST-001` después de que la persona vea el MP4. No cambiar el estado del episodio a `approved`.

## Criterios de aceptación

- Composición vertical exacta de 1080 × 1920, 30 fps y 1001 cuadros; la voz ocupa sus 30,35 s iniciales y los 90 cuadros finales son la placa de marca.
- El texto narrado coincide palabra por palabra con la versión aprobada del guion y cubre los beats sin omisiones silenciosas.
- Agar y el mensajero se leen como figuras humanas recortadas; el mensajero mantiene el misterio de la dirección visual.
- El escenario no muestra cuadrícula falsa, huecos ni bordes al moverse la cámara.
- No quedan placeholders ni paisaje sintético de la prueba inicial.
- El CTA hablado termina antes de la placa fija de 3 s con el símbolo oficial; el sting de marca dura como máximo 3 s, se oye completo con salida suave y coincide con la entrada del símbolo.
- El render usa solo la voz TTS temporal y el sting aprobados para revisión local; no agrega música y se identifica como animatic.
- El MP4 de revisión se renderiza y se informa la ruta.
- El resultado se etiqueta como **animatic visual**, sin afirmar que es final ni que incluye audio terminado.

## Fuera de alcance y bloqueos para video final

- Voz humana o TTS final, música y efectos ambientales. El sonido de marca del cierre sí forma parte de este plan.
- Limpiar/regenerar fondos panorámicos con alfa real, registro común y solapes suficientes.
- Ciclos dibujados, rig articulado, efectos celestiales intensos, publicación o descarga desde Play Store.
- Cambios a otras historias, Next.js, despliegue remoto o servicios pagos.

## Estado de aprobación

La persona aprobó el plan y la revisión de `review-02`. No cambiar el guion ni tratar la voz temporal como voz final. La publicación queda pendiente hasta confirmar derechos de uso comercial de la voz TTS o reemplazarla por una narración autorizada.

## Registro de ejecución — 2026-11-11

Ejecutado completo con `ismv-ejecute HIST-001`. **Resultado: animatic visual de revisión, no video final.**

**Render:** `public/videos/ismael-001-origen-review-01.mp4` — H.264, 1080 × 1920, 30 fps, 1001 cuadros (33,37 s), AAC 48 kHz. Ignorado por Git.

**Archivos afectados**

| Archivo | Cambio |
|---|---|
| `src/video/episodes/ismael-origin/story.ts` | Siete beats con la narración aprobada palabra por palabra, referencias separadas, sin campo `art`; subtítulos partidos en las pausas audibles; constantes `NARRATION_FRAMES` (911), `OUTRO_FRAMES` (90), `TOTAL_FRAMES` (1001). |
| `src/video/stage/camera.ts` | Nuevo. Tipos de cámara, `cameraAt` (interpolación con easing), `clampToCover` (impide revelar bordes), `worldTransform` y `minLayerSize` (fórmula de SPIKE-001). Sin dependencias nuevas. |
| `src/video/episodes/ismael-origin/shots.ts` | Nuevo. Seis planos: encuadre, recurso, claves de cámara, figuras, sombra, contraluz, luz cálida, polvo y fundidos. |
| `src/video/episodes/ismael-origin/Composition.tsx` | Rehecho con `<Img>`/`staticFile()`, cámara por plano, figuras recortadas con respiración/balanceo/caminata limitada, sombra proyectada y contraluz del mensajero, subtítulos y voz temporal. |
| `src/video/brand/IsmaelOutro.tsx` | Nuevo. Placa común de 90 cuadros con símbolo claro y sting. |
| `src/video/Root.tsx`, `src/video/PreviewPlayer.tsx` | Duración desde `TOTAL_FRAMES` (1001). |
| `src/video/episodes/ismael-origin/Composition.module.css` | Eliminado (paisaje sintético y aviso de construcción). |
| `public/assets/audio/sfx/ismael-outro-sting.wav` | Nuevo. Copia de 2,90 s del original Mixkit con salida coseno desde 2,30 s; el original de 4,05 s queda intacto. |

**Sincronía medida** (detección de pausas en la voz de referencia; límites en mitad de cada silencio): `hook` 0–98 · `flight` 98–152 · `encounter` 152–294 · `question` 294–379 · `promise` 379–575 · `lesson` 575–798 · `close` 798–911 · `brand-outro` 911–1001. La voz termina a los 29,91 s, antes de la placa.

**Planos:** gancho con push-in sobre el fondo compuesto y Agar pequeña; huida con reencuadre y deriva; encuentro con avance hacia la fuente, sombra y luego la silueta con contraluz; plano medio de las dos figuras para la pregunta y el inicio de la promesa; fundido al primer plano de Agar en “llamarlo Ismael”; plano sereno con luz cálida creciente para la enseñanza, alejamiento en el CTA y fundido a negro; placa de marca.

**Criterios:** formato, duración, narración literal, CTA antes de la placa, sting ≤ 3 s sincronizado con el símbolo, sin música, sin placeholders ni paisaje sintético y etiqueta “ANIMATIC DE REVISIÓN · VOZ TEMPORAL” en pantalla: cumplidos. La ausencia de bordes está garantizada por `clampToCover`; se revisaron fotogramas sueltos, no el video completo cuadro a cuadro.

**Desvíos y decisiones menores (para revisión)**
- Los subtítulos se guardan como `captions` en `story.ts` (son texto y tiempo del relato, no decisiones visuales); el plan solo mencionaba beats.
- Referencias por beat: Génesis 16:6–7, 16:7–8, 16:8 y 16:11. Verificar que sean las deseadas.
- Las marcas de tiempo salen de la detección de silencios, no de una transcripción; conviene confirmar al oído que cada subtítulo cae con su frase.
- `<Audio>` se toma del paquete `remotion` para no añadir dependencias.
- El arte del mensajero tiene rostro y túnica iluminados, no una silueta oscura; se usa tal cual. Si se quiere más misterio, es una decisión de arte para el gate de video final.
- `npx tsc --noEmit` informa un error previo ajeno al plan (`LayoutProps` en `src/app/layout.tsx`, tipo que genera `next dev`). ESLint sobre `src/video` no da errores.

**Siguiente paso tras el render:** revisión humana de `review-02`.

### Ajuste pedido por la persona — `review-02` (2026-11-11)

Tras ver `review-01`, la persona pidió usar `public/assets/concepts/episodes/ismael-origin/hagar-at-desert-spring.png` después del primer plano de Agar.

- El plano `lesson` (cuadros 575–911: enseñanza y CTA) usa ahora esa escena compuesta: Agar sentada junto a la fuente y el mensajero como silueta lejana a contraluz. Tiene un acercamiento lento de 1,16 a 1,28, un alejamiento leve a 1,20 en el CTA, luz cálida creciente, polvo y el mismo fundido a negro antes de la placa.
- No se le superponen recortes, para no duplicar personajes. El cambio de Agar, de pie a sentada, se lee como un momento posterior tras el primer plano.
- Archivo afectado: `src/video/episodes/ismael-origin/shots.ts` (nueva escena `HAGAR_AT_SPRING`).
- Render: `public/videos/ismael-001-origen-review-02.mp4` (H.264, 1080 × 1920, 1001 cuadros, con audio). `review-01` se conserva.

### Revisión humana — `review-02` (2026-11-11)

La persona reprodujo el video y aprobó narración, subtítulos, mezcla y cierre. La revisión creativa queda aprobada. Antes de publicar, confirmar los derechos comerciales de la voz TTS del plan gratuito de Fish Audio o sustituirla por una narración autorizada. Ver `docs/episodes/01-origen-de-ismael-review-02.md`.

