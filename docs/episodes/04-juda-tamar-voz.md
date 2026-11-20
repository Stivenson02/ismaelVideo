# HIST-004 · Guion de voz para Fish Audio

**Fuente:** guion v2 `script-approved` (2026-11-17) de [`04-juda-tamar.md`](04-juda-tamar.md). El texto es el aprobado, sin cambios; solo está dividido en audios. **Herramienta:** [Fish Audio, texto a voz](https://fish.audio/es/app/text-to-speech/).

- **Total:** 107 palabras, 575 caracteres → **~38–40 s** de voz. No cabe en una sola generación (límite de ~500 caracteres), y además conviene un audio por frase: así se repite solo la que salga mal y cada plano se sincroniza con su frase.
- **10 audios**, el más largo de 97 caracteres. Las dos citas bíblicas van en audios propios: se pueden grabar con la voz del narrador o, si decides dramatizarlas, con una voz de personaje, sin rehacer el resto.

## Cómo generarlos

1. **Una sola voz y los mismos ajustes** (modelo, velocidad, estilo) en los 10 audios. Si puedes, hazlos en una misma sesión para que el tono no cambie.
2. **Pega en Fish solo el texto del bloque**, sin el número ni las notas.
3. **Escucha antes de descargar:** nombres bien dichos (**Judá**, con acento en la *a* final; **Tamar**; **Selá**, con acento en la *a*), ninguna palabra cambiada, y pausas donde está "…". Si una toma falla, genera otra; no cambies el texto. Si Fish no hace la pausa en "…", prueba con una coma solo en Fish y avísame.
4. **Descarga** cada audio con el nombre exacto de la tabla en `public/assets/audio/narration/` (MP3 o WAV). No hace falta recortar silencios: los mido yo.
5. **Anota la voz** en la tabla de registro del final. Una generación del plan gratuito sirve para el animatic; para publicar hace falta el permiso comercial claro (ver `public/assets/audio/README.md`).

## Audios

| # | Archivo | Tramo | Plano | Caracteres | Interpretación |
|---|---|---|---|---|---|
| 01 | `04-juda-tamar-01-gancho.mp3` | Gancho moderno | M1 | 80 | Cercana, como quien habla de algo que te pasó a ti. Pausa en "…"; "la culpa fue tuya" cae seco. |
| 02 | `04-juda-tamar-02-puente.mp3` | Puente | P2 | 52 | Baja el volumen y abre la historia; peso en "mucho más grave". |
| 03 | `04-juda-tamar-03-conflicto.mp3` | Conflicto | P3 | 85 | Narrativa, sobria. Pausa en "…" antes de "pero nunca cumplió". |
| 04 | `04-juda-tamar-04-riesgo.mp3` | Giro 1 | P5 | 69 | Decisión: un poco más de tensión; pausa breve en los dos puntos. |
| 05 | `04-juda-tamar-05-garantia.mp3` | Giro 1 | P6–P7 | 97 | Ritmo parejo; "sello, cordón y bastón" separados y claros (cada uno es un plano). |
| 06 | `04-juda-tamar-06-escalada.mp3` | Giro 2 | P8–P9 | 79 | Sube la tensión; "el que no cumplió" con ironía contenida; "ordenó castigarla", firme. |
| 07 | `04-juda-tamar-07-revelacion.mp3` | Revelación | P10 | 33 | Suspenso, queda abierto en los dos puntos. |
| 08 | `04-juda-tamar-08-cita-tamar.mp3` | Cita Gn 38:25 | P10 | 36 | Cita textual: más lenta, digna, sin dramatizar de más. |
| 09 | `04-juda-tamar-09-remate.mp3` | Remate | P11–P12 | 19 | Grave, pausado. |
| 10 | `04-juda-tamar-10-cita-juda.mp3` | Cita Gn 38:26 | P12 | 25 | Cita textual: lenta, en voz más baja, como una confesión. |

## Texto para copiar

**01 · `04-juda-tamar-01-gancho.mp3`**

```text
Te prometió algo. Esperaste meses. Nunca cumplió… y al final, la culpa fue tuya.
```

**02 · `04-juda-tamar-02-puente.mp3`**

```text
A Tamar le pasó algo parecido… pero mucho más grave.
```

**03 · `04-juda-tamar-03-conflicto.mp3`**

```text
Había quedado viuda. Judá, su suegro, le prometió a su hijo Selá… pero nunca cumplió.
```

**04 · `04-juda-tamar-04-riesgo.mp3`**

```text
Así que tomó un riesgo: se cubrió el rostro y lo esperó en el camino.
```

**05 · `04-juda-tamar-05-garantia.mp3`**

```text
Judá no la reconoció, se acostó con ella y le dejó como garantía su sello, su cordón y su bastón.
```

**06 · `04-juda-tamar-06-escalada.mp3`**

```text
Meses después, estaba embarazada. Y Judá, el que no cumplió, ordenó castigarla.
```

**07 · `04-juda-tamar-07-revelacion.mp3`**

```text
Entonces ella mostró los objetos:
```

**08 · `04-juda-tamar-08-cita-tamar.mp3`** — cita textual RVR1960, fragmento de Gn 38:25

```text
Mira ahora de quién son estas cosas.
```

**09 · `04-juda-tamar-09-remate.mp3`**

```text
Judá los reconoció:
```

**10 · `04-juda-tamar-10-cita-juda.mp3`** — cita textual RVR1960, fragmento de Gn 38:26

```text
Más justa es ella que yo.
```

## Lo que no se graba

Son textos en pantalla, no voz: las burbujas de chat ("Te lo prometo, el próximo mes" ×3 y "Esto es culpa tuya."), el título "¿Te ha pasado?", "Génesis 38", las referencias Gn 38:25 y Gn 38:26, y la enseñanza final "Quien promete, responde por su promesa.". La enseñanza va sin voz, en el plano final de la mujer moderna.

## Si la voz dura más de 40 s

Aplica los recortes ya aprobados en las notas del guion, en este orden, y regenera solo el audio afectado:
1. Audio 03: "Judá, su suegro," → "Judá" (−2 palabras).
2. Audio 01: quitar "Esperaste meses." (−2 palabras).

No quitar "se acostó con ella" (audio 05): sin esa frase el embarazo queda sin explicar.

## Registro de la voz (lo completas tú)

| Dato | Valor |
|---|---|
| Voz de Fish (nombre y enlace o ID) | **Joss**: narración, audios 01–07 y 09 (falta el enlace o ID) |
| Voz para las citas (si es otra) | **Yuli**: cita de Tamar, audio 08 · **GABRIEL-VO, Professional Spanish Narrator**: cita de Judá, audio 10 |
| Modelo / ajustes | (por completar) |
| Fecha de generación | 2026-11-19, entre las 18:06 y las 18:16 (según el nombre de los archivos) |
| Plan / cuenta (gratis o pago) | **Cuenta gratuita (Free)**, confirmado por la persona el 2026-11-20 |
| ¿Permite uso comercial? | **No, por la cuenta.** Según la persona, las voces (Joss, Yuli y GABRIEL-VO) son de uso libre; eso cubre la voz, pero no el servicio. Los términos de Fish (vigentes desde el 2024-08-18, revisados el 2026-11-20) limitan a uso "personal, non-commercial" lo generado sin plan pago, y la FAQ dice lo mismo para el plan gratuito. Estos 10 audios sirven como **referencia de montaje**. Para publicar: regenerarlos en un plan pago y confirmar con Fish que esas voces de la comunidad se pueden usar comercialmente, porque la FAQ habla de voces verificadas "que te pertenecen". Los términos piden además declarar que el contenido se hizo con IA |

Los nombres originales de las descargas están en `art-inbox/hist-004/ORIGEN-AUDIO.md`. Tiempos medidos en [`04-juda-tamar-preproduccion.md`](04-juda-tamar-preproduccion.md) §6.

## Después (preproducción)

Con los 10 archivos en `public/assets/audio/narration/`:

```bash
python tools/ismv_prep.py voz public/assets/audio/narration/04-juda-tamar-*.mp3
```

Eso deja un `.words.json` junto a cada audio, con el inicio y fin de cada palabra. Con esos tiempos armo la hoja de animación: dónde entra cada plano, cada cuadro del sprite, cada texto y cuánta pausa hay entre audios. El texto de los subtítulos sale de este guion, no de la transcripción automática.
