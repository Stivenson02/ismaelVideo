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
- tareas en orden, agrupadas con etiquetas `HISTORY`, `ART`, `AUDIO`, `CODE`, `RENDER` o `REVIEW` cuando apliquen;
- archivos/rutas concretos a crear o modificar, dependencias y decisiones técnicas;
- criterios observables de aceptación y cómo se revisará el resultado;
- riesgos, supuestos y puntos que requieren detenerse.

No edites código, no generes arte final, no arranques servidores, no ejecutes pruebas y no marques el plan aprobado. Registra `plan-draft` en el índice; la persona debe aprobar el plan antes de `ismv-ejecute`.
