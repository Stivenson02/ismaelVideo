# Flujo de trabajo — Ismael Studio

Este flujo convierte una idea en un Reel bíblico aprobado y reproducible. Las skills propias del proyecto automatizarán cada etapa; **la aprobación editorial y de arte sigue siendo humana**. Ninguna skill debe saltarse un estado pendiente ni inventar una aprobación.

## Mapa completo

```text
IDEA → HISTORIA INVESTIGADA → GUION → RECURSOS (prompts) → la persona genera artes y voz
     → PREPRODUCCIÓN → LISTO PARA PLAN → PLAN APROBADO → EJECUCIÓN → REVISIÓN → CIERRE / ENTREGA
```

## Paso a paso (resumen para cada video)

Las skills viven en `.agents/skills/`. Basta con escribir el comando de la tabla y el agente lee la skill y la sigue. ✋ = el agente se detiene hasta que la persona apruebe.

| Paso | Quién | Qué se escribe | Qué sale | ✋ |
|---|---|---|---|---|
| 1. Historia | agente | `$ismv-historia <idea, pasaje o experiencia>` | Idea registrada, contexto y propuesta de historia con código `HIST-###` | Aprobar la historia |
| 2. Guion | agente | `$ismv-guion HIST-###` | Voz con gancho moderno, texto en pantalla y desglose visual | Aprobar el guion |
| 3. Recursos | agente | `$ismv-recursos HIST-###` | Checklist, `<slug>-prompts.md` (escenas, capas, props, bases y una hoja de sprites por movimiento) y `<slug>-voz.md` (audios para Fish) | — |
| 4. Generar | persona | — | Imágenes en `art-inbox/<hist>/…` (o pegadas en el chat), siguiendo el orden del documento de prompts; audios de Fish en `public/assets/audio/narration/` | Aprobar escenas y bases antes de pedir capas y hojas |
| 5. Preproducción | agente | `$ismv-preproduccion HIST-###` | Piezas recortadas y alineadas, hojas de QA, video corto de cada gesto, tiempos de voz y hoja de animación cuadro a cuadro | Aprobar los artes o pedir regenerar |
| 6. Gate | agente | `$ismv-preparar HIST-### animatic` (o `video-final`) | Brief y estado `ready-for-plan` | — |
| 7. Plan | agente | `$ismv-plan HIST-###` | Plan técnico y storyboard en el panel | Aprobar el plan |
| 8. Animación | agente | `$ismv-ejecute HIST-###` | Composición en Remotion (sprites, cámara, textos, voz, sting) y MP4 | — |
| 9. Revisión | agente | `$ismv-revision HIST-###` | Correcciones concretas | Aprobar el video |
| 10. Cierre | agente | `$ismv-cerrar HIST-###` | MP4 de publicación (sin etiqueta), portada, copy de Instagram y título + descripción de YouTube Shorts, y pendientes de publicación | Aprobar portada y copy; publicar (la persona) |

En cualquier momento, `$ismv-producciones` muestra en qué paso va cada historia y qué la desbloquea.

## Línea de testimonios

Historias reales que la persona **escribe**, contadas en primera persona y animadas en estilo moderno ([`testimonios/README.md`](testimonios/README.md)). Es el mismo flujo de arriba; solo cambia el paso 1.

| Paso | Quién | Qué se escribe | Qué sale | ✋ |
|---|---|---|---|---|
| 0. Pedir el testimonio | persona usuaria | — | El texto de la persona (preguntas guía en `testimonios/README.md`) y su autorización | — |
| 1. Historia | agente | `$ismv-testimonio <texto pegado o ruta>` | Registro `HIST-###`, original guardado en privado (`art-inbox/`), mapa de la historia anonimizado, temas sensibles, enfoque y preguntas pendientes | Aprobar el enfoque |
| 2. Guion | agente | `$ismv-guion HIST-###` | Narración en primera persona con gancho y orden; "Testimonio real · nombre cambiado · voz recreada" en pantalla | Aprobar el guion; idealmente lo confirma quien dio el testimonio |
| 3–10 | igual | `$ismv-recursos HIST-###` … `$ismv-cerrar HIST-###` | Igual que arriba, con la dirección visual moderna. El guion de voz lo lee la persona o se genera en Fish | Igual que arriba |

Diferencias con la línea bíblica:
- **Anonimato por defecto:** alias, personaje genérico, sin datos que identifiquen. En `docs/` todo va anonimizado y el texto original queda fuera de git.
- **Fidelidad:** al testimonio escrito, no a un pasaje. Se resume y se ordena, pero no se añaden hechos, diálogos ni emociones.
- **Voz:** la persona lee el guion aprobado, o voz recreada en Fish, declarada en pantalla y en el copy.
- **Consentimiento:** el gate de `video-final` y el cierre exigen la autorización escrita con el alcance usado.

**Reparto de trabajo (desde 2026-11-19):** el agente entrega el documento de prompts. La persona genera todas las imágenes y la voz. La preproducción las convierte en piezas animables y en una hoja de animación cuadro a cuadro. La ejecución solo ensambla esas piezas en Remotion, con movimiento de personajes, cámara, textos y sonido. Método: [`technical/ANIMACION-POR-CAPAS.md`](technical/ANIMACION-POR-CAPAS.md).

Cada episodio tiene un objetivo de entrega explícito: **animatic** o **video final**. Los recursos provisionales pueden bastar para planear un animatic si sus límites están documentados; para un video final se requieren artes, audio, citas, marca y revisión en estado final.

## Estructura narrativa y visual del Reel

Estructura de retención aprobada por la persona el 2026-11-17, a partir de [`docs/investigacion/RETENCION-REELS.md`](investigacion/RETENCION-REELS.md). Duración objetivo: **~30 s** (guía 30–40 s), una sola pregunta central y ~70–100 palabras.

1. **Gancho (0–3 s):** abre con una de dos opciones, nunca con una pregunta genérica de autoayuda:
   - **caso moderno concreto** (preferido por la persona desde 2026-11-17): una escena del día a día con una persona, una acción y un conflicto visibles, para que la audiencia se identifique;
   - **el momento más tenso del relato**.

   El caso moderno necesita un **puente** de una frase hacia la historia, que no equipare la molestia cotidiana con el sufrimiento bíblico. Se apilan tres capas:
   - **imagen:** acción o rostro legible, que se entienda sin sonido;
   - **frase hablada:** contradicción, sorpresa o pregunta concreta;
   - **título en pantalla:** 3–6 palabras, distinto de la voz.

   Sin logo, saludo ni plano de establecimiento lento. La sorpresa de la parte bíblica debe salir del texto.
2. **Conflicto (antes del segundo 5):** quién sufre, qué pierde y quién tiene el poder.
3. **Giros:** cada tramo empieza con *pero / así que / entonces*, no con "y después". Hay un re-gancho cada 5–8 s.
4. **Revelación (último ~15 %):** paga lo que prometía el gancho. Es el clímax visual y emocional.
5. **Remate en bucle:** la última frase enlaza con la primera, para que la repetición se sienta continua. La enseñanza cabe en **una línea**, hablada o en pantalla; no es un bloque aparte. **Sin CTA hablado:** la invitación a seguir va en el copy de la publicación (`ismv-cerrar`).
6. **Cierre de marca (~1 s):** sting y símbolo de Ismael integrados sobre el último plano, según `docs/DIRECCION-VISUAL.md`.

**Vocabulario sensible para plataformas:** no usar "morir", "muerte", "matar", "quemar" ni términos de violencia explícita en la voz ni en pantalla. Parafrasear de forma fiel y menos explícita ("quedó viuda", "ordenó castigarla") y anotar la atenuación en las notas editoriales. Las citas textuales que contengan esas palabras se evitan o se recortan.

Ritmo visual: un evento visual cada 2–3 s (corte, movimiento de cámara, gesto con sprite, expresión, capa o texto clave), alternando escalas de plano. Audio: voz sin silencios muertos, ambiente, efectos en los giros y música con licencia.

HIST-001 y HIST-002 se aprobaron con la estructura anterior (gancho cotidiano, enseñanza, CTA y placa de 3 s) y no se rehacen automáticamente.

El documento del episodio separa el **texto narrado** del **desglose visual**. Para cada beat visual anota duración estimada, acción, recursos y transición. La persona revisa el enfoque, el guion y los artes antes de tratarlos como aprobados.

## Narración recurrente

La herramienta elegida para la voz de todos los episodios es [Fish Audio, texto a voz](https://fish.audio/es/app/text-to-speech/). Tras aprobar el guion, generar allí la narración en audios cortos, uno por frase según `<slug>-voz.md`, porque Fish limita los caracteres por generación. Descargarlos a `public/assets/audio/narration/` y medir con ese archivo los tiempos de escenas y subtítulos: `python tools/ismv_prep.py voz <archivo> <archivo>.words.json` da el inicio y fin de cada palabra y las pausas, que anclan la hoja de animación. La voz específica se puede elegir por episodio; registrar su identidad y la fecha/plan de generación. El resto de la producción y el render siguen siendo locales.

Una voz Fish de referencia puede servir para animatic. Antes de declarar un video publicable, comprobar derechos de uso comercial de la generación y de la voz elegida según `public/assets/audio/README.md`; si la referencia no los tiene, regenerar en Fish con condiciones autorizadas y revisar de nuevo la sincronía. No cambiar de proveedor por defecto.

## Identidad de cada historia

Cada historia recibe un código estable `HIST-###` y queda registrada en `docs/episodes/INDEX.md`. Usa el código para evitar que la preparación de muchas historias termine ejecutando la equivocada; el nombre exacto también sirve si solo hay una coincidencia.

```text
$ismv-ejecute HIST-001          # ejecuta el plan aprobado de esa historia
$ismv-ejecute HIST-001 CODE     # ejecuta solo las tareas de código de ese plan
$ismv-ejecute HIST-001 HISTORY  # ejecuta solo tareas narrativas incluidas en el plan
$ismv-cerrar HIST-001           # crea el copy y los datos de entrega tras la revisión aprobada
```

La misma skill no procesa el resto del índice ni salta a otra historia. El plan debe estar aprobado explícitamente antes de cualquiera de estas invocaciones.

## Etapas y punto de inicio

| Etapa | Skill ISMV | Cómo empieza | Resultado / aprobación |
|---|---|---|---|
| 1. Idea, historia e investigación | `ismv-historia` | La persona comparte una idea, una experiencia, un pasaje o una Biblia/material de referencia; también puede apuntar a una ficha de `docs/ideas/`. | Conserva la idea original en `docs/ideas/`, investiga contexto, separa texto bíblico de interpretación y propone historia(s), enfoque y enseñanza. La persona elige y aprueba una historia. |
| 2. Guion | `ismv-guion` | Recibe la historia aprobada, audiencia, duración aproximada y CTA vigente si aplica. | Escribe narración con gancho, historia y enseñanza; define el remate y la opción de invitación. Separa voz de la mini escena del gancho, el desenlace visual y las transiciones. Distingue cita, paráfrasis y aplicación. La persona revisa y aprueba el texto y el enfoque visual. |
| 3. Recursos | `ismv-recursos` | Recibe guion y escenas aprobados, y consulta `public/assets/`, el catálogo y la dirección visual. | Mapea el gancho cotidiano, la historia bíblica, la enseñanza, el remate y la portada vertical de Instagram a recursos existentes; verifica formato, alfa, dimensiones, cobertura de cámara, consistencia y estado. Entrega el checklist, el **documento de prompts** (`<slug>-prompts.md`) y el **guion de voz** (`<slug>-voz.md`). Los prompts van en orden de creación: escenas y capas, props, bases de diseño y una hoja de sprites por movimiento, con la tabla de entrega (ID → archivo en `art-inbox/`). El guion de voz divide el texto aprobado en audios de una frase. La persona genera los artes y la voz. |
| 4. Preproducción | `ismv-preproduccion` | Recibe los artes en `art-inbox/<hist>/` (o pegados en el chat) y la narración de Fish. | Con `tools/ismv_prep.py` recorta, registra y estabiliza sets, extrae parches de expresión, prepara capas de fondo y mide la voz por palabra. Muestra hojas de QA y videos cortos de cada gesto. Escribe la hoja de animación cuadro a cuadro en `<slug>-preproduccion.md`. La persona aprueba los artes. |
| 5. Preparación / gate | `ismv-preparar` | Recibe historia, guion, checklist y preproducción revisados. | Verifica que las aprobaciones y archivos requeridos correspondan al objetivo elegido. Produce un brief de producción y marca `ready-for-plan`, `needs-review` o `blocked`, con razones concretas. |
| 6. Plan | `ismv-plan` | Solo inicia con brief `ready-for-plan`. | Revisa el código y las decisiones técnicas; convierte la hoja de animación en tareas ordenadas, archivos afectados, dependencias, criterios de aceptación, recursos, riesgos y forma de revisión. Produce un plan `plan-draft`; la persona debe aprobarlo antes de ejecución. |
| 7. Ejecución | `ismv-ejecute` | Recibe código `HIST-###` o nombre exacto y un plan `plan-approved` para esa historia. | Sigue el plan, actualiza código y documentación, y reporta avance, desvíos y pendientes. No modifica guion o arte aprobados por su cuenta. |
| 8. Revisión | `ismv-revision` | Recibe el animatic/render y el plan ejecutado. | Revisa fidelidad bíblica, narración, montaje, lectura móvil, audio, recursos, portada vertical (Instagram y miniatura de Shorts) y cierre de marca. Devuelve correcciones concretas o propone el estado `approved`. La aprobación final la da la persona. |
| 9. Cierre / entrega | `ismv-cerrar` | Recibe una historia con render, portada vertical y revisión aprobada por la persona. | Renderiza la versión de publicación sin etiqueta de animatic y crea `docs/deliveries/<HIST-###>-copy-redes.md` con el copy de **Instagram (Reels)** y el título y la descripción de **YouTube (Shorts)**, listos para copiar, ruta local del MP4, ruta de la portada aprobada y bloqueos de publicación. Si falta la portada, la registra como pendiente; no sube ni publica contenido. Los derechos de voz y otros recursos deben estar claros antes de llamarlo publicable. |

### Consulta transversal

`ismv-producciones` lista ideas e historias en una tabla por código, estado, objetivo, plan, bloqueos y siguiente paso. Es de solo lectura y sirve para elegir cuál historia activar; no ejecuta el flujo.

## Qué significa “listo”

No basta con que un archivo exista. La skill de recursos debe asignar a cada pieza un estado:

- **Idea:** referencia o concepto, todavía no apto para montaje.
- **Disponible:** archivo presente, falta revisión de calidad o ajuste.
- **Animatic:** apto para probar ritmo/encuadre, con limitaciones anotadas.
- **Final:** calidad, dimensiones, transparencia/alfa, cobertura y aprobación suficientes para el video final.
- **No requerido:** el guion no necesita ese recurso.

El gate declara el objetivo. **`ready-for-plan` para animatic no significa `ready-for-final`**. Si falta algo, la skill puede proponer prompts o tareas, pero no declarar el episodio listo a escondidas.

## Estructura de documentos y recursos

- `docs/ideas/<slug>.md`: idea en palabras originales y estado de investigación; la plantilla está en `docs/ideas/README.md`.
- `docs/episodes/<slug>.md`: fuente principal del episodio con referencia bíblica, historia aprobada, guion, escenas, decisiones visuales y checklist.
- `docs/episodes/<slug>-recursos.md`, `<slug>-prompts.md`, `<slug>-voz.md` y `<slug>-preproduccion.md`: checklist de recursos, prompts en orden de creación con tabla de entrega, guion de voz dividido en audios para Fish, y registro de preproducción con la hoja de animación.
- `art-inbox/<hist>/<ID>/`: bandeja de artes crudos del generador (no se versiona). `tools/ismv_prep.py`: herramienta local de preproducción.
- `docs/plans/<HIST-###>-plan.md`: plan asociado a un código estable; la skill ejecutora solo lee el plan de la historia solicitada.
- `docs/technical/spikes/`: investigaciones técnicas acotadas; guardar pregunta, hallazgos, decisiones, límites y relación con episodios.
- `public/assets/`: biblioteca común ordenada por personajes, escenarios, objetos, marca, audio y conceptos. Los fondos no están limitados a 1080 × 1920; se dimensionan según el movimiento de cámara.

Mientras solo haya un episodio, su documento puede reunir historia, guion y recursos. Si crece mucho, se pueden separar en archivos por etapa sin cambiar el flujo ni perder un estado único de aprobación.

## Reglas para planificación y ejecución

- El plan toma como fuentes obligatorias la historia y el guion aprobados, el checklist, la dirección visual, el spike técnico aplicable y el estado actual del código.
- Si el plan toca Next.js, el agente lee la guía local correspondiente en `node_modules/next/dist/docs/` antes de cambiar código.
- La ejecución no arranca servidor, no crea commits y no ejecuta pruebas salvo que la persona lo pida. No usa servicios externos ni despliega el proyecto.
- Si aparece una discrepancia entre guion, recursos y `story.ts`, se detiene el tramo afectado y documenta el conflicto; no cambia silenciosamente la versión aprobada.
- Para un render de animatic o final, la ejecución respeta objetivo, formato vertical y cierre de marca. Los cambios de contenido o artes finales vuelven a revisión humana.

## Producción del episodio

1. Alinear `story.ts` con los beats y tiempos aprobados (desde `*.words.json` y la hoja de animación); no mezclar ahí decisiones de composición.
2. Traducir la hoja de animación a planos, cámara, capas, cortes de sprite y parches (`shots.ts`).
3. Montar el escenario en Remotion con las piezas de `*.set.json` y `*.layers.json`, con el tamaño y la cobertura calculados para los recorridos de cámara.
4. Sincronizar subtítulos con la voz de Fish ya medida; música y efectos solo con permisos adecuados.
5. Preparar el animatic o render que pidió el plan y revisar sus limitaciones conocidas.
6. Corregir según la revisión y registrar qué versión queda aprobada.

## Estado actual del proceso

- HIST-001 ejecutó su plan y la persona aprobó el render `public/videos/ismael-001-origen-review-02.mp4`. Antes de publicar, confirmar los derechos comerciales de la voz Fish o regenerarla en Fish con condiciones autorizadas.
- `SPIKE-001` completó la investigación de técnicas 2D; el resultado describe la cámara multiplano como base y advierte que los fondos actuales sirven principalmente como referencia o para un animatic controlado.
- Las nueve skills de etapa `ismv-*` están creadas en `.agents/skills/`; `ismv-producciones` es transversal y las skills oficiales de Remotion siguen intactas como referencia técnica.
- 2026-11-19: se adoptó la **animación por capas desde una base** (`docs/technical/ANIMACION-POR-CAPAS.md`) y la etapa de preproducción con `tools/ismv_prep.py`. HIST-004 es el primer episodio que la usa; su documento de prompts ya sigue el método. El 2026-11-20 la persona aprobó el animatic de HIST-004 y fijó este formato (fondos multiplano, hojas de sprites a 12 fps, bucle con sting de ~1 s) como **estándar para todos los videos**, publicados en Instagram (Reels) y YouTube (Shorts).
- `ismv-producciones` es una skill transversal de solo lectura que lista el estado de todas las historias y sus bloqueos.
- Cada historia usa un código estable registrado en `docs/episodes/INDEX.md`; `HIST-001` identifica el episodio de Agar.
- El siguiente trabajo metodológico es usar `ismv-historia` con una idea o pasaje real y ajustar la skill si el uso revela un problema concreto.
- `HIST-001`: plan ejecutado y review-02 aprobado por la persona. La entrega del copy está en `docs/deliveries/HIST-001-copy-redes.md`; antes de publicar, confirmar los derechos comerciales de la voz Fish o regenerarla en Fish con condiciones autorizadas.
