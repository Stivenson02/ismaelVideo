---
name: ismv-guion
description: Redacta o revisa la narración de un Reel a partir de una historia aprobada, bíblica o de testimonio (en primera persona y anónima). Estructura el mensaje, controla citas y paráfrasis, y conserva la aprobación humana del texto.
---

# ISMV Guion

Convierte una historia aprobada en un guion corto, claro y narrable para un Reel de Ismael.

## Antes de redactar

- Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/DIRECCION-VISUAL.md` y el documento de historia indicado en `docs/episodes/INDEX.md`.
- Confirma que la historia tiene aprobación humana. Si sigue en `story-draft`, no la conviertas silenciosamente en canon: entrega observaciones o pide que primero se apruebe el enfoque.
- Lee `docs/investigacion/RETENCION-REELS.md` (§4.1 plantilla de 30 s y §4.3 sprites).
- Identifica duración y audiencia. Si falta un dato que cambia materialmente el guion, pregunta; como supuesto reversible, usa ~30 s (guía 30–40 s) y ~70–100 palabras.

## Escribe

- Estructura preferida (retención, aprobada 2026-11-17): **gancho (0–3 s): caso moderno concreto (preferido) o momento más tenso del relato → puente de una frase si el gancho es moderno → conflicto (antes de 5 s) → giros con "pero / así que / entonces" → revelación (último ~15 %) → remate en bucle → sting de marca ~1 s**. Escribe **primero el gancho y la última frase**, luego el resto. Una sola pregunta central por video. Conserva otra estructura si la persona la pide.
- Escribe para voz alta: frases naturales, una idea por frase, ritmo breve y pausas posibles. No incluyas indicaciones de cámara dentro de la narración.
- No uses "morir", "muerte", "matar", "quemar" ni violencia explícita en voz o pantalla: parafrasea de forma fiel y menos explícita y registra la atenuación en las notas editoriales.
- Separa narración, texto en pantalla, referencias bíblicas y propuesta visual. Con un gancho moderno, dale una escena concreta (persona, acción, conflicto visibles; puede usar burbujas de chat u otros textos compuestos en Remotion) y un regreso al final para el bucle. Si no, el gancho sale del momento más tenso o sorprendente del relato y apila imagen + frase hablada + título en pantalla de 3–6 palabras distinto de la voz. No uses una pregunta genérica de autoayuda ni abras con un plano de establecimiento lento. La sorpresa debe ser fiel al texto, no un adorno.
- Desglosa la historia en beats visuales con un evento visual cada 2–3 s y señala dónde van los gestos y expresiones con sprites (gancho, reacciones a cada giro, revelación). La enseñanza cabe en una línea, hablada o en pantalla. El remate enlaza con el gancho para el bucle. Describe cómo el sting de ~1 s se integra sobre el último plano.
- Si propones un cambio de expresión por variantes, describe la progresión emocional sin dar por creados los dibujos. Si propones boca animada, identifica la línea como diálogo de personaje o dramatización; no atribuyas al personaje la voz del narrador externo.
- Evita analogías que equiparen una molestia cotidiana con sufrimiento grave o hechos bíblicos; el puente debe conectar el tema sin trivializar el pasaje.
- Marca de forma inequívoca las citas textuales con su traducción. Trata el resto como paráfrasis o dramatización y no uses comillas para embellecerla.
- La enseñanza debe desprenderse del relato sin presentarse como cita ni prometer resultados que el pasaje no promete.
- No incluyas CTA hablado: la invitación (seguir a Ismael; Play Store solo cuando la app esté publicada) va en el copy de entrega. Si la persona pide un CTA hablado para un episodio, ponlo como texto pequeño o una línea breve que no rompa el bucle.

## Testimonios

Si el código es un testimonio (nombre "Testimonio —", documento en `docs/testimonios/`), parte del enfoque aprobado en `ismv-testimonio` y aplica estas reglas en lugar de las de cita bíblica:

- **Primera persona** ("Yo…"): es la persona contando su historia, aunque la voz la lea ella o la genere Fish. Habla como habla la gente, no como un sermón.
- **Solo hechos del texto.** Puedes resumir, ordenar y decirlo con palabras naturales, pero no añadir hechos, diálogos, lugares ni emociones que la persona no contó. Conserva casi literales sus frases más fuertes.
- **Anonimato.** Sin nombres reales, lugares exactos ni datos que identifiquen, según la tabla de consentimiento. Lo generalizado se anota en las notas editoriales.
- **Estructura:** la misma de retención:
  - gancho de 0–3 s con el momento más fuerte de su historia (o un caso cotidiano), más un título en pantalla;
  - conflicto antes del segundo 5;
  - giros con "pero / así que / entonces";
  - encuentro como revelación;
  - cierre con cómo vive hoy y una frase que se quede.

  Duración guía: **45–60 s (~120–160 palabras)**; hasta 90 s si la historia lo pide y la persona usuaria lo aprueba.
- **Texto en pantalla obligatorio** al inicio o al final: "Testimonio real". Si aplica, añade "nombre cambiado" y "voz recreada". Un versículo opcional va como referencia del equipo, nunca como palabras de la persona.
- **Sensibles:** sanidad contada como su experiencia, sin consejo médico; nada gráfico. Las palabras delicadas para las plataformas se parafrasean y se anotan.
- ✋ Además de la aprobación de la persona usuaria, recomienda que **quien dio el testimonio confirme el guion** ("¿así lo contarías tú?") antes de grabar o generar la voz. Regístralo en el documento.
- Guarda el guion en `docs/testimonios/<slug>.md`, con el mismo desglose de abajo. Después sigue `$ismv-recursos HIST-###`, que entrega los prompts y el guion de voz por audios.

Entrega junto al texto narrado un desglose compacto para revisión:

| Tramo | Voz o silencio | Acción visual propuesta | Duración estimada | Puente o transición |
|---|---|---|---|---|
| Gancho | Momento más tenso del relato + título en pantalla | Acción o rostro legible, con sprite si aplica | 0–3 s | Salto al conflicto |
| Conflicto y giros | Beats fieles al pasaje con "pero / así que" | Evento visual cada 2–3 s, reacciones | Según narración | Re-gancho en cada giro |
| Revelación y remate | Pago del gancho + frase en bucle; enseñanza en una línea | Gesto más grande del video | Último ~15 % | Sting de ~1 s sobre el último plano |

La tabla propone decisiones visuales para aprobar; no convierte esas indicaciones en texto de voz ni autoriza a crear arte final.

Guarda el resultado en el documento de episodio como `script-draft`. Mantén intacto el texto aprobado anterior si haces una revisión; etiqueta versiones. Solo registra `script-approved` cuando la persona lo diga expresamente. Devuelve duración estimada (conteo de palabras a ~155–165 ppm) y cualquier cita que requiera confirmación.
