---
name: ismv-revision
description: Revisa el animatic o render de una historia Ismael frente al guion, el plan, la dirección visual y los requisitos de entrega.
---

# ISMV Revisión

Evalúa el resultado de una ejecución concreta y entrega hallazgos accionables. No confundas sugerencias con aprobación final.

## Revisión

- Resuelve una sola historia por código `HIST-###` o nombre inequívoco. Lee su registro, el plan aprobado, el guion vigente, `docs/DIRECCION-VISUAL.md` y los criterios del objetivo.
- Inspecciona el archivo real de animatic/render o los artefactos disponibles; no declares revisado lo que no pudiste abrir.
- Revisa fidelidad bíblica y distinción entre cita/paráfrasis, sincronía y claridad de narración, legibilidad móvil, ritmo, continuidad de personajes/escenario, movimientos de cámara, bordes/costuras, audio, CTA si aplica y cierre de marca según el objetivo. Para episodios con la estructura de retención (`docs/FLUJO-DE-TRABAJO.md`), comprueba también:
  - que el primer fotograma se entienda sin sonido;
  - que el gancho y el título en pantalla aparezcan en 0–3 s;
  - que el conflicto quede claro antes del segundo 5;
  - que haya un evento visual cada 2–3 s, sin tramos muertos;
  - que la revelación caiga en el último ~15 %;
  - que el final empalme con el inicio al repetirse;
  - que el sting de ~1 s no rompa el bucle;
  - que se respeten las zonas seguras.

  En episodios anteriores, comprueba que el gancho tenga una acción animada legible, que su puente al relato funcione y que la enseñanza/remate entren con sentido a la placa común.
- En planos con variantes de expresión o boca animada, revisa saltos de encuadre/luz, caras dobles durante el fundido, bordes de piezas, legibilidad de la emoción y sincronía de la boca con el diálogo del personaje.
- Prioriza hallazgos por impacto y enlaza el tiempo/escena o archivo cuando sea posible. Distingue bloqueo de mejora opcional.
- No cambies el guion, arte o código durante la revisión salvo que la persona pida corregirlo. No corras pruebas no solicitadas.

Guarda un informe reproducible en `docs/episodes/<slug>-review.md` o en la ruta de revisión definida por el plan. Propón `approved` o `changes-requested`; solo la persona puede marcar la aprobación final en `docs/episodes/INDEX.md`.
