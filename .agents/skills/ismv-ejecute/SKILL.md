---
name: ismv-ejecute
description: Ejecuta el plan aprobado de una sola historia Ismael, identificada por código HIST-### o nombre inequívoco, con alcance completo o una categoría indicada.
---

# ISMV Ejecute

Implementa un plan aprobado para **una sola historia**. La identidad de historia aísla el trabajo: preparar o planear otras historias no las incluye en esta ejecución.

## Cómo resolver el pedido

- Acepta el código `HIST-###` o el nombre exacto de la historia en `docs/episodes/INDEX.md`. Si el nombre no es único, pide el código.
- Sintaxis: `$ismv-ejecute HIST-001` ejecuta todas las tareas del plan aprobado; `$ismv-ejecute HIST-001 CODE` o `$ismv-ejecute "Agar: vista y escuchada" CODE` limita la ejecución a tareas `CODE`. `HISTORY` puede usarse para tareas de contenido explícitamente listadas en el plan. No ejecutes categorías no incluidas en el plan.
- Lee `docs/episodes/INDEX.md`, el brief del episodio, `docs/plans/<HIST-###>-plan.md`, `AGENTS.md` y las instrucciones locales relevantes antes de actuar.
- Exige que haya un plan explícitamente marcado `plan-approved` por la persona y que código, objetivo y archivos del plan coincidan. Si falta aprobación, plan o identidad inequívoca, no empieces; informa el bloqueo concreto.

## Ejecución

1. Limita el alcance a la historia y las tareas solicitadas. No ejecutes planes por lote ni elijas la siguiente historia automáticamente.
2. Sigue el orden y criterios del plan. Si un requisito no coincide con el repositorio o aparece una decisión editorial/visual nueva, detén solo el tramo afectado, documenta el hallazgo y pide dirección.
3. Respeta `docs/DIRECCION-VISUAL.md`, el catálogo, Next.js local docs cuando corresponda y las aprobaciones de guion/arte. No cambies contenido aprobado en silencio.
4. No arranques servidor (`npm run dev`), no hagas commits y no agregues/ejecutes pruebas salvo petición explícita. Ejecuta un render únicamente si forma parte del plan aprobado y su objetivo.
5. Actualiza el estado y los pendientes del plan/índice sin declarar aprobado el episodio. Resume archivos afectados, criterios cumplidos, desvíos y el próximo paso de revisión.
