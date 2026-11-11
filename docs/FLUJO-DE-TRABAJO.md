# Flujo de trabajo — Ismael Studio

Este flujo convierte una idea en un Reel bíblico aprobado y reproducible. Las skills propias del proyecto automatizarán cada etapa; **la aprobación editorial y de arte sigue siendo humana**. Ninguna skill debe saltarse un estado pendiente ni inventar una aprobación.

## Mapa completo

```text
IDEA → HISTORIA INVESTIGADA → GUION → RECURSOS → LISTO PARA PLAN
     → PLAN APROBADO → EJECUCIÓN → REVISIÓN → EPISODIO APROBADO
```

Cada episodio tiene un objetivo de entrega explícito: **animatic** o **video final**. Los recursos provisionales pueden bastar para planear un animatic si sus límites están documentados; para un video final se requieren artes, audio, citas, marca y revisión en estado final.

## Identidad de cada historia

Cada historia recibe un código estable `HIST-###` y queda registrada en `docs/episodes/INDEX.md`. Usa el código para evitar que la preparación de muchas historias termine ejecutando la equivocada; el nombre exacto también sirve si solo hay una coincidencia.

```text
$ismv-ejecute HIST-001          # ejecuta el plan aprobado de esa historia
$ismv-ejecute HIST-001 CODE     # ejecuta solo las tareas de código de ese plan
$ismv-ejecute HIST-001 HISTORY  # ejecuta solo tareas narrativas incluidas en el plan
```

La misma skill no procesa el resto del índice ni salta a otra historia. El plan debe estar aprobado explícitamente antes de cualquiera de estas invocaciones.

## Etapas y punto de inicio

| Etapa | Skill ISMV | Cómo empieza | Resultado / aprobación |
|---|---|---|---|
| 1. Idea, historia e investigación | `ismael-historia` | La persona comparte una idea, una experiencia, un pasaje o una Biblia/material de referencia; también puede apuntar a una ficha de `docs/ideas/`. | Conserva la idea original en `docs/ideas/`, investiga contexto, separa texto bíblico de interpretación y propone historia(s), enfoque y enseñanza. La persona elige y aprueba una historia. |
| 2. Guion | `ismael-guion` | Recibe la historia aprobada, audiencia, duración aproximada y CTA vigente. | Escribe narración con gancho, historia, enseñanza e invitación. Distingue cita, paráfrasis y aplicación. La persona revisa y aprueba el texto. |
| 3. Recursos | `ismael-recursos` | Recibe guion y escenas aprobados, y consulta `public/assets/`, el catálogo y la dirección visual. | Mapea cada escena a recursos existentes; verifica formato, alfa, dimensiones, cobertura de cámara, consistencia y estado. Entrega checklist y prompts solo para lo que falta. La persona revisa los artes nuevos. |
| 4. Preparación / gate | `ismael-preparar-episodio` | Recibe historia, guion y checklist revisados. | Verifica que las aprobaciones y archivos requeridos correspondan al objetivo elegido. Produce un brief de producción y marca `ready-for-plan`, `needs-review` o `blocked`, con razones concretas. |
| 5. Plan | `ismael-plan` | Solo inicia con brief `ready-for-plan`. | Revisa el código y las decisiones técnicas; lista tareas ordenadas, archivos afectados, dependencias, criterios de aceptación, recursos, riesgos y forma de revisión. Produce un plan, sin ejecutar cambios. La persona aprueba el plan. |
| 6. Ejecución | `ismael-ejecutar` | Recibe el plan aprobado y el objetivo de entrega. | Sigue el plan, actualiza código y documentación, y reporta avance, desvíos y pendientes. No modifica guion o arte aprobados por su cuenta. |
| 7. Revisión | `ismael-revision` | Recibe el animatic/render y el plan ejecutado. | Revisa fidelidad bíblica, narración, montaje, lectura móvil, audio, recursos y cierre de marca. Devuelve correcciones concretas o propone el estado `approved`. La aprobación final la da la persona. |

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
- `docs/plans/<slug>-plan.md`: plan aprobado que consume la skill de ejecución; las reglas están en `docs/plans/README.md`.
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

- Existe un primer borrador narrativo del episodio 01 y un checklist inicial de artes.
- `SPIKE-001` completó la investigación de técnicas 2D; el resultado describe la cámara multiplano como base y advierte que los fondos actuales sirven principalmente como referencia o para un animatic controlado.
- Las siete skills propias `ismv-*` están creadas en `.agents/skills/`; las skills oficiales de Remotion siguen intactas y sirven como referencia técnica.
- Cada historia usa un código estable registrado en `docs/episodes/INDEX.md`; `HIST-001` identifica el episodio de Agar.
- El siguiente trabajo metodológico es usar `ismv-historia` con una idea o pasaje real y ajustar la skill si el uso revela un problema concreto.
- Para llevar el episodio 01 a `ready-for-plan`, primero hay que elegir objetivo (`animatic` o `video final`) y alinear `story.ts` con el guion vigente. El spike deja claro que el fondo compuesto permite una prueba controlada; los fondos por capas actuales no sostienen un recorrido panorámico final sin limpieza/regeneración.
