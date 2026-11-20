---
name: ismv-producciones
description: Lista las historias y episodios de Ismael en una tabla de producciones con estado, objetivo, plan, bloqueos y siguiente paso.
---

# ISMV Producciones

Muestra el estado actual de la cartera de historias para que la persona pueda decidir qué preparar, planear o ejecutar. Es una consulta de solo lectura: no cambies estados ni archivos.

## Fuentes de estado

- Empieza por `docs/episodes/INDEX.md`, que es el registro de códigos `HIST-###`, nombres, documentos, estado, objetivo y plan.
- Para cada fila, consulta el documento del episodio, su brief de preparación, el plan y el último informe de revisión cuando existan. Los testimonios usan el mismo índice (nombre "Testimonio —") y su documento está en `docs/testimonios/`; añade en su fila el estado del consentimiento.
- Consulta `docs/ideas/` para ideas todavía no convertidas en historias y `docs/plans/` para planes que no aparezcan en el índice.
- La línea **YouTube niños y familia** tiene su propio registro, `docs/youtube/INDEX.md`, con códigos `YT-###`. Lístala en una tabla aparte después de la principal, con las mismas columnas (en "Objetivo" pon formato y duración). Mientras `docs/youtube/README.md` diga que la línea está en estudio, su siguiente paso es la decisión pendiente de ese documento, no una skill de etapa.
- Si las fuentes discrepan, no las corrijas en una consulta: marca el estado como `Revisar registro` y explica la discrepancia.

## Tabla de producciones

Por defecto lista todas las historias. Si la persona da un código, nombre o etapa, filtra el reporte sin perder la identidad de cada historia. Presenta una tabla con estas columnas:

| Código | Historia | Estado / etapa | Objetivo | Plan | Bloqueo | Siguiente paso |
|---|---|---|---|---|---|---|

Usa estados comprensibles y precisos, alineados con el "Paso a paso" de `docs/FLUJO-DE-TRABAJO.md`, por ejemplo: `idea`, `historia en borrador`, `historia aprobada`, `guion en borrador`, `guion aprobado`, `recursos en preparación`, `esperando artes y voz` (prompts y guion de voz entregados), `en preproducción`, `artes en revisión`, `lista para plan`, `plan en borrador`, `plan aprobado`, `en ejecución`, `cambios solicitados`, `aprobada` o `bloqueada`. Para `esperando artes y voz` y `en preproducción`, cuenta qué llegó a `art-inbox/<hist>/` y a `public/assets/audio/narration/` frente a la tabla de entrega y el guion de voz. No presentes `ready-for-plan` como equivalente a aprobado para video final; incluye el objetivo (`animatic` o `video-final`).

Después de la tabla, resume el total por etapa y destaca solo el próximo paso que desbloquea trabajo. Si no hay ideas o episodios, dilo claramente y sugiere empezar con `$ismv-historia`.

No ejecutes otra skill, no planees ni implementes cambios. No infieras una aprobación a partir de un archivo existente; informa lo que dice el registro y marca datos incompletos.
