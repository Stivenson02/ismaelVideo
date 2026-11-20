# Testimonios animados

Segunda línea de contenido de Ismael (desde 2026-11-19): **historias reales de personas, contadas en primera persona y animadas** con el mismo estilo 2D moderno y la misma técnica de sprites y capas de los episodios bíblicos. Referencia de formato: los testimonios animados de El Lugar de Su Presencia.

- **Cómo llegan:** la persona **escribe** su testimonio y la persona usuaria lo pasa al agente. Desde ahí se trabaja igual que un episodio bíblico: historia → guion (gancho, orden, giros) → recursos y guion de voz → artes y audios → preproducción → animación.
- **Anonimato por defecto.** La mayoría prefiere no ser identificada: alias, personaje genérico y voz recreada. Con un permiso explícito se puede usar el nombre real, el parecido o la voz propia.
- **Voz:** la persona puede **leer y grabar el guion aprobado**, o se genera en **Fish Audio** como "voz recreada". El video siempre lo dice.
- **Formato:** Reel vertical 1080 × 1920, **45–60 s** por defecto (hasta 90 s si la historia lo pide), con el cierre de marca de ~1 s.
- **Código y registro:** el mismo índice de los episodios (`docs/episodes/INDEX.md`, código `HIST-###`, nombre "Testimonio — <alias>: …"). El documento de cada testimonio vive en esta carpeta, ya anonimizado. El texto original queda en `art-inbox/<hist>/TEXTO/`, que no se sube a git.
- **Estilo:** sección "Línea de testimonios" de [`../DIRECCION-VISUAL.md`](../DIRECCION-VISUAL.md), con referencias en `public/assets/concepts/testimonios/estilo/`.

## Paso a paso

| Paso | Quién | Qué se escribe | Qué sale | ✋ |
|---|---|---|---|---|
| 0. Pedir el testimonio | persona usuaria | — | El texto de la persona (sección 1) y su autorización (sección 3) | — |
| 1. Historia | agente | `$ismv-testimonio <texto pegado o ruta>` | Registro `HIST-###`, original guardado en privado, mapa de la historia, datos anonimizados, temas sensibles, enfoque y preguntas pendientes | Aprobar el enfoque |
| 2. Guion | agente | `$ismv-guion HIST-###` | Narración en primera persona con gancho y orden, textos en pantalla ("Testimonio real · nombre cambiado") y desglose visual | Aprobar el guion; idealmente lo confirma quien dio el testimonio |
| 3. Recursos | agente | `$ismv-recursos HIST-###` | Prompts en estilo moderno (escenas, personaje, hojas de sprites) y guion de voz dividido en audios | — |
| 4. Generar | persona usuaria | — | Imágenes en `art-inbox/<hist>/…`; audios leídos por la persona (sección 2) o generados en Fish | Aprobar escenas y bases |
| 5–10 | agente | `$ismv-preproduccion` → `$ismv-preparar` → `$ismv-plan` → `$ismv-ejecute` → `$ismv-revision` → `$ismv-cerrar` | Igual que los episodios bíblicos | Igual |

## 1. Qué pedirle a la persona que escriba

Comparte esto con quien va a dar su testimonio:

> Escribe tu historia con tus palabras, como se la contarías a un amigo. No tiene que ser perfecta ni corta: nosotros elegimos y ordenamos. Lo más valioso son los **detalles concretos** (dónde estabas, qué pasó, qué sentiste), porque eso es lo que se puede animar. Cuéntanos:
> 1. **Antes:** ¿quién eras y cómo era tu vida?
> 2. **Crisis:** ¿qué pasó? ¿Cuál fue el momento más difícil? ¿Qué temías perder?
> 3. **Quiebre:** ¿hubo un momento en que dijiste "no puedo más" o en que algo cambió? ¿Dónde estabas?
> 4. **Encuentro:** ¿qué hizo Dios y cómo lo viviste?
> 5. **Después:** ¿cómo es tu vida hoy? ¿Qué cambió en ti y en los tuyos?
> 6. **Mensaje:** si alguien vive hoy lo mismo, ¿qué le dirías en una frase?
>
> Dinos también si quieres aparecer con tu nombre o de forma anónima, y si prefieres grabar tú la voz o que usemos una voz recreada.

## 2. Si la persona va a leer el guion

- Recibe el guion de voz aprobado (`docs/testimonios/<slug>-voz.md`), dividido en frases cortas.
- Graba con el celular en un cuarto callado, sin música, a un palmo de la boca. Una nota de voz por frase, con el nombre que indica el guion. También sirve una sola grabación leyendo todo con una pausa entre frases; después se corta con `montar`.
- Que lo lea con naturalidad, como contándolo, no como quien lee un texto. Si se equivoca, que repita la frase entera.
- Si la persona es anónima pero quiere grabar, su voz puede reconocerse. En ese caso conviene una voz recreada.

## 3. Autorización (plantilla básica)

> Plantilla de partida, no es asesoría legal. Revísala con la iglesia o con un asesor antes de usarla. Guarda la autorización firmada **fuera del repositorio**.

```text
AUTORIZACIÓN DE USO DE TESTIMONIO

Yo, ______________________, autorizo a Ismael a adaptar el testimonio que escribí y envié
el ____/____/______ en un video animado y a publicarlo.

Cómo quiero aparecer (marca lo que aplica):
[ ] De forma anónima, con el alias: ______________________
[ ] Con mi nombre real.
[ ] Con un personaje genérico que no se me parezca.
[ ] Con un personaje parecido a mí (con fotos de referencia que yo entrego).
[ ] Con mi propia voz (leeré el guion aprobado).
[ ] Con una voz recreada.
[ ] Mencionando mi ciudad o país: ______________________
[ ] Publicar en: Instagram / TikTok / YouTube / Facebook / otro: ______________

Entiendo que:
- Mi historia se resumirá y ordenará para un video corto, sin agregar hechos que yo no conté.
- Veré el guion y el video antes de que se publiquen y podré pedir cambios.
- Se cambiarán o quitarán los datos que me identifiquen, a mí o a otras personas, si así lo pido.
- El video dirá que es un testimonio real y, si aplica, que el nombre o la voz se cambiaron.
- Puedo pedir que se retire el video publicado escribiendo a ______________________.

Firma: ______________________   Fecha: ____/____/______
(Si es menor de edad, firma de su madre, padre o tutor: ______________________)
```

## 4. Plantilla del documento de testimonio

`docs/testimonios/<slug>.md`, siempre **anonimizado**:

```markdown
# HIST-### — Testimonio: <título de trabajo>

**Estado:** story-draft · **Objetivo:** animatic / video-final · **Duración objetivo:** 45–60 s

## Persona y consentimiento
| Dato | Valor |
|---|---|
| Cómo aparece | alias "…" / nombre real |
| Personaje | genérico / parecido con fotos |
| Voz | la persona lee el guion / voz recreada en Fish |
| Lugar | no se menciona / … |
| Plataformas | … |
| Autorización firmada | pendiente / sí (fecha; dónde se guarda, fuera del repo) |
| Confirmación del guion por la persona | pendiente / hecha (fecha) |

## Texto original
Guardado en `art-inbox/hist-###/TEXTO/original.md` (privado). Resumen anonimizado.

## Mapa de la historia
Antes · Crisis · Quiebre · Encuentro · Después · Frase resumen. En cada tramo: hechos, interpretación de la persona y huecos o preguntas pendientes.

## Datos protegidos
Qué se omitió o generalizó y por qué. Nunca se inventa un reemplazo.

## Enfoque aprobado
Pregunta central, gancho, giro y cierre.

## Guion (ismv-guion)
Narración en primera persona · textos en pantalla ("Testimonio real · nombre cambiado · voz recreada") · desglose visual · notas editoriales.
```
