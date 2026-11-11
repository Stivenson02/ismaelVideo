# Flujo de trabajo — Ismael Studio

Este flujo convierte una idea en un Reel bíblico aprobado y reproducible. Las skills propias del proyecto automatizarán cada etapa; **la aprobación editorial y de arte sigue siendo humana**. Ninguna skill debe saltarse un estado pendiente ni inventar una aprobación.

## Mapa completo

```text
IDEA → HISTORIA INVESTIGADA → GUION → RECURSOS → LISTO PARA PLAN
     → PLAN APROBADO → EJECUCIÓN → REVISIÓN → CIERRE / ENTREGA
```

Cada episodio tiene un objetivo de entrega explícito: **animatic** o **video final**. Los recursos provisionales pueden bastar para planear un animatic si sus límites están documentados; para un video final se requieren artes, audio, citas, marca y revisión en estado final.

## Estructura narrativa y visual del Reel

1. **Gancho cotidiano:** una pregunta o situación humana reconocible abre el video. El guion reserva una mini escena animada para acompañar la voz (orientativamente 3–4 segundos, ajustables al ritmo real). Puede mostrar la acción de forma literal o sugerirla visualmente. Registra por separado la narración, la acción visible y el puente hacia el relato bíblico; un subtítulo por sí solo no reemplaza la escena.
2. **Historia bíblica:** relato breve con sus propios beats, referencias y escenas. El puente desde el gancho debe tener sentido narrativo y respetar el pasaje; una analogía cotidiana no se presenta como equivalente al sufrimiento o a los hechos bíblicos.
3. **Enseñanza o aplicación:** conclusión que nace del relato. Reserva una imagen o acción final, bíblica o conectada con el gancho, según lo que cierre mejor la idea.
4. **Remate del episodio:** decide en el guion si hay invitación hablada, una última acción visual, un regreso al gancho o una combinación breve. Documenta cómo esa acción transita a la placa de marca. No fuerces un CTA cuando corte el sentido del relato; si se usa, debe estar aprobado y vigente.
5. **Cierre de marca:** placa y sonido comunes de Ismael, después del remate. Su identidad y duración se mantienen según `docs/DIRECCION-VISUAL.md`; la transición de entrada puede variar por episodio.

El documento del episodio separa el **texto narrado** del **desglose visual**. Para cada beat visual anota duración estimada, acción, recursos y transición. La persona revisa el enfoque, el guion y los artes antes de tratarlos como aprobados.

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
| 3. Recursos | `ismv-recursos` | Recibe guion y escenas aprobados, y consulta `public/assets/`, el catálogo y la dirección visual. | Mapea el gancho cotidiano, la historia bíblica, la enseñanza y el remate a recursos existentes; verifica formato, alfa, dimensiones, cobertura de cámara, consistencia y estado. Entrega checklist y prompts solo para lo que falta. La persona revisa los artes nuevos. |
| 4. Preparación / gate | `ismv-preparar` | Recibe historia, guion y checklist revisados. | Verifica que las aprobaciones y archivos requeridos correspondan al objetivo elegido. Produce un brief de producción y marca `ready-for-plan`, `needs-review` o `blocked`, con razones concretas. |
| 5. Plan | `ismv-plan` | Solo inicia con brief `ready-for-plan`. | Revisa el código y las decisiones técnicas; lista tareas ordenadas, archivos afectados, dependencias, criterios de aceptación, recursos, riesgos y forma de revisión. Produce un plan `plan-draft`; la persona debe aprobarlo antes de ejecución. |
| 6. Ejecución | `ismv-ejecute` | Recibe código `HIST-###` o nombre exacto y un plan `plan-approved` para esa historia. | Sigue el plan, actualiza código y documentación, y reporta avance, desvíos y pendientes. No modifica guion o arte aprobados por su cuenta. |
| 7. Revisión | `ismv-revision` | Recibe el animatic/render y el plan ejecutado. | Revisa fidelidad bíblica, narración, montaje, lectura móvil, audio, recursos y cierre de marca. Devuelve correcciones concretas o propone el estado `approved`. La aprobación final la da la persona. |
| 8. Cierre / entrega | `ismv-cerrar` | Recibe una historia con render existente y revisión aprobada por la persona. | Crea `docs/deliveries/<HIST-###>-copy-redes.md` con copy listo para copiar, ruta local del MP4 y bloqueos de publicación. No sube ni publica contenido; los derechos de voz y otros recursos deben estar claros antes de llamarlo publicable. |

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

1. Alinear `story.ts` con los beats y tiempos aprobados; no mezclar ahí decisiones de composición.
2. Describir planos, cámara y capas en el artefacto visual/plan de producción.
3. Montar el escenario en Remotion con el tamaño y cobertura calculados para los recorridos de cámara.
4. Incorporar voz y subtítulos después de aprobar el guion; música y efectos solo con permisos adecuados.
5. Preparar el animatic o render que pidió el plan y revisar sus limitaciones conocidas.
6. Corregir según la revisión y registrar qué versión queda aprobada.

## Estado actual del proceso

- HIST-001 ejecutó su plan y la persona aprobó el render `public/videos/ismael-001-origen-review-02.mp4`. Antes de publicar, confirmar los derechos comerciales de la voz TTS o sustituirla por una narración autorizada.
- `SPIKE-001` completó la investigación de técnicas 2D; el resultado describe la cámara multiplano como base y advierte que los fondos actuales sirven principalmente como referencia o para un animatic controlado.
- Las ocho skills de etapa `ismv-*` están creadas en `.agents/skills/`; `ismv-producciones` es transversal y las skills oficiales de Remotion siguen intactas como referencia técnica.
- `ismv-producciones` es una skill transversal de solo lectura que lista el estado de todas las historias y sus bloqueos.
- Cada historia usa un código estable registrado en `docs/episodes/INDEX.md`; `HIST-001` identifica el episodio de Agar.
- El siguiente trabajo metodológico es usar `ismv-historia` con una idea o pasaje real y ajustar la skill si el uso revela un problema concreto.
- `HIST-001`: plan ejecutado y review-02 aprobado por la persona. La entrega del copy está en `docs/deliveries/HIST-001-copy-redes.md`; antes de publicar, confirmar los derechos comerciales de la voz TTS o sustituirla por una narración autorizada.
