# Revisión — HIST-002 `review-01`

**Historia:** Una verdad a medias: Abraham, Sara y Abimelec  
**Archivo revisado:** `public/videos/ismael-002-abraham-abimelec-review-01.mp4` (H.264, 1080 × 1920, 30 fps, 2430 cuadros, 81,0 s, AAC)  
**Contra:** `docs/plans/HIST-002-plan.md` (aprobado, con ajustes v3), `docs/episodes/02-abraham-sara-abimelec.md`, `docs/DIRECCION-VISUAL.md`  
**Fecha:** 2026-11-12 · **Objetivo:** animatic  
**Propuesta del revisor:** `approved` para el objetivo animatic, con mejoras opcionales. La aprobación final es de la persona.

## Cómo se revisó (y qué no)

- Se abrió el MP4 real y se extrajeron 41 fotogramas distribuidos en los 12 beats, incluidos los cortes y el cierre. **No se vio el video en movimiento** ni se escuchó el audio.
- Audio: el análisis de pausas del MP4 coincide con la estructura planeada (silencios en 13,9–14,5 s, 55,4–56,0 s, 70,3–71,0 s y 74,8–75,7 s, que corresponden a los finales de clip y a la pausa previa a la pregunta). Esto confirma el montaje de los clips; **no** confirma de oído que cada subtítulo caiga con su frase. No se pudo medir el volumen.

## Resultado por criterio

| Criterio | Estado |
|---|---|
| Formato, duración y placa | Cumple: 1080 × 1920, 30 fps, voz 0–78,0 s y placa común de 3 s con su sting. |
| Fidelidad bíblica | Cumple en lo visible: relato de Gn 20; ninguna frase como cita textual; Dios sugerido solo con luz; Sara en plano serio y sin contacto con Abimelec. |
| Gancho | Cumple: tres acciones legibles (sobre, recibir, sombra); la sombra pasa por negro hacia Gerar. El puente es un fundido desde negro, no una revelación de la puerta. |
| Enseñanza y remate | Cumple: enseñanza desde Abimelec; regreso al mismo plano y personaje del gancho para la pregunta, con pausa final. |
| Legibilidad móvil | Cumple: rostros grandes, subtítulos en franja baja (gancho en franja media), sin cubrir caras. |
| Bordes y costuras | Sin bordes descubiertos en los fotogramas revisados; figura parcial de F1 excluida. |
| Variantes y saltos | Sin saltos de cabeza visibles en los fotogramas revisados; no se vio ninguna doble cara. Los cambios de expresión entre variantes son sutiles. |
| Cámara | Empuje lento y paneo Sara → Abraham correctos; nada brusco en los fotogramas. |

## Hallazgos (por impacto)

1. **Repetición de composición (mejora, media).** Casi todos los planos son un personaje frontal centrado al mismo tamaño (Abraham 14 s, Abimelec en 7 planos). La confrontación (1252–1475) no tiene ningún plano a dos. Sugerencia: un plano a dos corto o encuadre sobre el hombro, y alternar la posición horizontal del retrato (izquierda/derecha) en lugar de siempre al centro.
2. **Llegada, plano abierto (mejora, baja).** En el cuadro ~125 Abraham y Sara se solapan en el camino. Separar sus posiciones (por ejemplo, 350 y 620) mejora la lectura. Fotograma 125.
3. **Entrada de Abimelec en el sueño (mejora, baja).** En ~808 aparece con transparencia sobre la cama vacía (fantasma durante ~6 cuadros). Cambiar a entrada con dip o rebote sin transparencia.
4. **Variantes poco legibles (observación).** `fearful → focused → resolve` se distinguen poco al ritmo del video; los cortes caen en pausas y no estorban. Si se quiere más emoción, la mejora es de arte (expresiones más marcadas), no de montaje.
5. **Sara tiene poco peso (observación).** Con una sola pose y sin variantes, su reacción depende de la cámara. No bloquea el animatic.
6. **Ritmo en la enseñanza (observación).** Doce segundos sobre la misma placa de Abimelec con cámara lenta (1869–2250). Es coherente con el tono; la persona decide si lo quiere más movido.

## Bloqueos para video final / publicación (fuera del animatic)

- Abimelec dormido (`ABIMELEC DORMIDO — ARTE PENDIENTE`), fondos finales por capas y salón con piezas separadas.
- Portada de Instagram compuesta y exportada a 1080 × 1920.
- Derechos de la voz Fish (cuenta Free): regenerar o confirmar permiso comercial antes de publicar.
- Ambiente y efectos (A2) sin definir.

## Acciones propuestas

Si apruebas el animatic tal cual: la persona marca el estado en `docs/episodes/INDEX.md`.  
Si pides cambios: 1, 2 y 3 se resuelven solo con código (`src/video/episodes/abraham-abimelech/shots.ts`) y un nuevo render `review-02`. Los puntos 4 y 5 requieren decidir si se piden nuevas variantes de arte.
