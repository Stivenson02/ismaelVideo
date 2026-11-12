---
name: ismv-preparar
description: Valida aprobaciones, recursos y decisiones de un episodio para un objetivo explícito de animatic o video final antes de planificar.
---

# ISMV Preparar episodio

Actúa como gate entre la preparación editorial/visual y la planificación técnica. No escribe código ni cambia una aprobación humana.

## Entrada necesaria

- Un código `HIST-###` o nombre inequívoco en `docs/episodes/INDEX.md`.
- Objetivo explícito: `animatic` o `video-final`. Si no se especifica, pregunta; no lo infieras del estado de los artes.

## Validaciones

- Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/DIRECCION-VISUAL.md`, la historia, el guion, `docs/ASSET-CATALOG.md`, el checklist de recursos y los spikes pertinentes.
- Verifica que historia y guion estén aprobados por la persona. Busca discrepancias con `src/video/episodes/*/story.ts`: si la fuente narrativa aprobada es inequívoca, registra la alineación como tarea del plan; si hace falta una decisión editorial, marca `needs-review`.
- Para `animatic`, acepta recursos en estado `animatic` si sus límites están anotados; permite voz de referencia o temporales si el animatic lo admite.
- Para `video-final`, exige arte final revisado para el gancho, la historia y el remate, cobertura y alfa adecuados, voz Fish Audio final con derechos comerciales comprobados, citas/referencias claras, CTA vigente si el guion lo incluye, marca oficial y revisión de permisos de música/efectos.
- Comprueba que el guion aprobado defina la acción visual del gancho, su puente al relato, la imagen de enseñanza y la forma de entrar al cierre común; no inventes esas decisiones durante el plan.
- Comprueba si falta alguna decisión que cambie el alcance, como diseño aprobado, duración, uso o ausencia de CTA y técnica visual.

## Resultado

Añade al documento del episodio un brief compacto: código/nombre, objetivo, fuentes aprobadas, recursos por estado, límites conocidos, decisiones y tareas pendientes. Actualiza `docs/episodes/INDEX.md` con `ready-for-plan`, `needs-review` o `blocked` y una razón breve.

Solo usa `ready-for-plan` si el plan puede empezar sin inventar contenido ni alcance. `ready-for-plan` para animatic no equivale a listo para video final. Si algo bloquea, explica qué falta y deriva a la skill apropiada; no saltes el gate.
