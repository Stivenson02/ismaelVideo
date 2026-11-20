---
name: ismv-plan
description: Crea un plan técnico de producción para una historia marcada ready-for-plan, usando sus aprobaciones, recursos, decisiones visuales y el código actual.
---

# ISMV Plan

Produce un plan concreto y revisable para una sola historia. Planificar no autoriza a ejecutar.

## Antes de planear

- Resuelve el código o nombre en `docs/episodes/INDEX.md`; exige estado `ready-for-plan` y objetivo definido.
- Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, el brief y el documento del episodio, `docs/DIRECCION-VISUAL.md`, el catálogo, spikes aplicables y los archivos fuente que afectará el plan.
- Si Next.js App Router está dentro del alcance, consulta la guía local aplicable en `node_modules/next/dist/docs/` antes de definir esos cambios.
- Si el guion y `story.ts` difieren, incluye su alineación como tarea solo si el texto aprobado está claro. Si la diferencia exige una decisión narrativa, detente y marca `needs-review`.

## Plan

Guarda `docs/plans/<HIST-###>-plan.md`. Incluye:

- identidad y objetivo (`animatic` o `video-final`), fuentes aprobadas y fuera de alcance;
- estado de assets y límites que el plan debe respetar;
- desglose temporal y visual de gancho, puente, historia, enseñanza, remate y placa, con recursos y transición de cada tramo; reserva una escena animada para el gancho y la imagen final acordada, sin fijar los 3–4 s como regla rígida;
- cuando un plano aprobado use variantes de expresión o boca animada, secuencia de poses/formas, sincronía con la voz, archivos registrados, técnica de transición y revisión de saltos visuales; distingue diálogo del personaje de narración externa;
- si hay preproducción, toma la hoja de animación de `<slug>-preproduccion.md` y los manifiestos `*.set.json`/`*.layers.json` como fuente: cortes de sprite a 12 fps, parches de cara con fundido corto, parpadeos y capas con su profundidad (`docs/technical/ANIMACION-POR-CAPAS.md` §6). No cambies tiempos ni piezas aprobadas sin registrarlo;
- tareas en orden, agrupadas con etiquetas `HISTORY`, `ART`, `AUDIO`, `CODE`, `RENDER` o `REVIEW` cuando apliquen;
- archivos/rutas concretos a crear o modificar, dependencias y decisiones técnicas;
- criterios observables de aceptación y cómo se revisará el resultado;
- riesgos, supuestos y puntos que requieren detenerse.

## Previa visual del plan

- Además del Markdown, mantén los datos visuales de las escenas que la interfaz local consume en `src/app/historias/[code]/storyboard.tsx` (o en un manifiesto importado por esa ruta). Para cada beat registra: duración, narración, fondo/arte existente, personajes y poses inicial/final, movimiento, transición y límites/placeholder.
- Usa solo rutas existentes bajo `public/assets/`. Marca en pantalla recursos provisionales o pendientes; no generes arte ni declares aprobaciones nuevas.
- La previa es un storyboard ligero del panel, no un MP4 ni una composición Remotion. Permite recorrer escenas, comparar poses inicial/final y anotar ajustes locales antes de ejecutar.
- No ejecutes código ni levantes el servidor al planear. La persona lo inicia cuando quiera; el panel usa `http://localhost:3007`.
- Si el storyboard y el plan discrepan, el plan aprobado y el guion son fuente de verdad; actualiza la previa para alinearla.

No edites código, no generes arte final, no arranques servidores, no ejecutes pruebas y no marques el plan aprobado. Registra `plan-draft` en el índice; la persona debe aprobar el plan antes de `ismv-ejecute`.
