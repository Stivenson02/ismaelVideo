# HIST-004 · Preproducción

**Historia:** [`04-juda-tamar.md`](04-juda-tamar.md) · **Checklist:** [`04-juda-tamar-recursos.md`](04-juda-tamar-recursos.md) · **Prompts:** [`04-juda-tamar-prompts.md`](04-juda-tamar-prompts.md) · **Voz:** [`04-juda-tamar-voz.md`](04-juda-tamar-voz.md) · **Método:** [`../technical/ANIMACION-POR-CAPAS.md`](../technical/ANIMACION-POR-CAPAS.md)

**Estado (2026-11-19):** las imágenes y los 10 audios llegaron completos y están procesados. La voz está medida (§6) y la hoja de animación armada (§7): el Reel dura 43,3 s. **La persona aprobó todas las piezas para el animatic** (2026-11-19), aceptando las observaciones de §3 y las decisiones de §4. Estado de las piezas: `animatic`, no `final`. El gate quedó en [`04-juda-tamar.md`](04-juda-tamar.md#preparación-para-plan--hist-004-animatic).

---

## 1. Inventario

Llegaron las 23 piezas de la tabla de entrega (prioridades A, B y C). Están copiadas a `art-inbox/hist-004/` con sus nombres. El origen de cada archivo está en `art-inbox/hist-004/ORIGEN.md`, que no se versiona.

| Recibido | Detalle |
|---|---|
| Escenarios | F1 (full + l0, l1, l2), F2 (full + l0, l1), FM (full + l0, l1), F3 (full + l0, l1, l2) |
| Props | LAMP (encendida y apagada), PROPS (sello, cordón, bastón), CROWD (5 siluetas) |
| Bases de diseño | Judá medio cuerpo, Judá cuerpo entero, Tamar, mujer moderna, Selá, Tamar velada sentada |
| Hojas de sprites | P9, P11, P2, P10, P5, caminata, M1, M2 |
| Publicación | COVER (guía de portada) |
| **Falta** | **VOZ:** los 10 audios de Fish |

**Versiones alternativas** guardadas en `_alt/`. No se procesan; se pueden cambiar por la elegida:

- `F1/_alt/l1-a.png`: plaza con arco y escalera, el muro más cerca.
- `F3/_alt/l1-b.png` y `F3/_alt/l1-c.png`: caminos sin la ladera.
- `JUDA/_alt/base-medio-a.png`: base cortada a la altura de los muslos.
- `JUDA/_alt/sprite-walk-b.png`: el bastón cambia de mano a mitad del ciclo, así que no sirve como bucle.

Los duplicados exactos de Descargas no se copiaron. Tampoco las pruebas de `Descargas/others/`: son el diseño anterior (bastón de cayado y fondos transparentes con halo).

## 2. Registro de procesamiento

Todo se procesó con `python tools/ismv_prep.py`. Las hojas de QA y los videos de revisión quedan en `art-inbox/hist-004/<ID>/_qa/` y `art-inbox/hist-004/_previews/`.

| ID | Comando | Salida en `public/assets/` | Resultado |
|---|---|---|---|
| F1 | `layers F1 … --size 1920x2400 --depths 0.3,1,1.3` | `backgrounds/judah-town-square-night/` | 3 capas. No registran contra `full`: ver §3 |
| F2 | `layers F2 … --size 1400x2100 --depths 0.5,1` | `backgrounds/tamar-father-house/` | 2 capas. Apiladas igual a la escena (diferencia 0,028) |
| FM | `layers FM … --size 1632x2176 --depths 0.4,1` | `backgrounds/hist-004-modern-bedroom/` | 2 capas. Apiladas igual a la escena (0,018). Lienzo 3:4 en lugar de 9:16, para no cortar la ventana |
| F3 | `layers F3 … --size 2100x2100 --depths 0.3,1,1.3` | `backgrounds/enaim-road/` | 3 capas. Sin la entrada del pueblo: ver §3 |
| LAMP | `set LAMP …` | `props/hist-004/oil-lamp/` | `oil-lamp-base.png` + parche `oil-lamp-flame.png` (cambio 3,5 %, registrada) |
| PROPS | `sheet … --prefix judah --names seal,cord,staff` | `props/hist-004/judah-{seal,cord,staff}.png` | 3 piezas de 571 × 1026 |
| CROWD | `sheet … --prefix crowd --names women-1,women-2,man-pointing,guard-1,guard-2` | `characters/hist-004-crowd/` | 5 siluetas de 455 × 727 |
| Bases | `key` | `characters/judah/judah-half-body-base.png`, `judah-full-body-pledge-base.png`, `characters/tamar/tamar-half-body-base.png`, `tamar-veiled-seated.png`, `characters/hook-04/modern-woman-base.png`, `characters/shelah/shelah-full-body.png` | 1024 × 1536 con alfa |
| P9 | `sprites --grid 3x2` | `characters/judah/judah-command/` | 6 cuadros de 418 × 627 |
| P11 | `sprites --grid 2x2` | `characters/judah/judah-reaction/` | 4 cuadros de 512 × 768, bien registrados |
| P2 | `sprites --grid 2x2` | `characters/tamar/tamar-house/` | 4 cuadros de 512 × 768, bien registrados |
| P10 | `sprites --grid 3x2` | `characters/tamar/tamar-reveal/` | 6 cuadros de 418 × 627 |
| P5 | `sprites --grid 3x2` | `characters/tamar/tamar-veil/` | 6 cuadros de 418 × 627 |
| Caminata | `sprites --grid 3x2` | `characters/judah/judah-walk/` | 6 cuadros de 418 × 627 |
| M1 | `sprites --grid 3x2` | `characters/hook-04/modern-woman-m1/` | 6 cuadros de 418 × 627 |
| M2 | `sprites --grid 2x2` | `characters/hook-04/modern-woman-m2/` | 4 cuadros de 512 × 768, bien registrados |
| COVER | copia | `concepts/episodes/juda-tamar/instagram-cover-guide.png` | 941 × 1672, guía; no se procesa |

## 3. QA: qué revisar antes de aprobar

Videos cortos de cada gesto: `art-inbox/hist-004/_previews/*.mp4`. Pruebas de parallax: `art-inbox/hist-004/F*/_qa/*-parallax.mp4` (el magenta marca huecos).

### Avisos generales

- **Resolución (afecta a todas las hojas).** Cada cuadro mide 418 × 627 (hojas 3 × 2) o 512 × 768 (hojas 2 × 2). Un medio cuerpo ocupa unos 1200–1300 px de alto en el Reel, así que la imagen se amplía entre 1,6 y 2 veces y se verá blanda. **Sirve para el animatic.** Para el video final hay que ampliar ×2 cada hoja con un ampliador de IA y volver a correr el mismo comando. Los fondos se amplían entre 1,4 y 1,7 veces; se nota menos y el desenfoque de profundidad lo disimula.
- **"Cambio > 30 %" y "registro fallido"** en las hojas de gestos grandes (P9, P10, P5, caminata, M1): es lo esperado, porque cambian brazos, velo o piernas. Cuando el registro falla, el cuadro se usa en la posición de su celda. Las posiciones medidas son estables (la cabeza se mueve 20 px o menos en celdas de 418), así que lo que hay que juzgar en el video es si el gesto se lee fluido.

### Por pieza

| Pieza | Observación | Propuesta |
|---|---|---|
| F1 Plaza | Las capas no son ediciones de `full`. La plaza apilada es **azul nocturna con antorchas pequeñas** y la escena `full` es naranja, con otra arquitectura, así que `full` queda solo como referencia. Las tres capas encajan entre sí. Se eligió la l1 con la plaza más abierta | Aprobar el aspecto azul o cambiar a `_alt/l1-a`. La luz cálida se agrega en la animación |
| F1 l2 | El halo de la antorcha salía amarillo limón al quitar el verde. Corregido en la herramienta: ahora queda naranja | — |
| F2 Casa | La capa l0 (exterior) es 4:5 y se recorta al centro. La celosía y la puerta dejan ver el patio | Aprobar |
| FM Cuarto | El arte es 3:4. Con el lienzo pedido (9:16) se cortaba la ventana, así que se dejó en 1632 × 2176: queda margen para paneo horizontal | Aprobar |
| F3 Camino | La entrada del pueblo solo está en `full`: l0 tiene colinas y l1 borra el horizonte. La voz no nombra Enaim, así que no bloquea | Opcional: regenerar l0 como edición de `full` que conserve el pueblo lejano |
| P9 Judá ordena | En "señala" la cabeza se corre 15 px. En "extiende" la punta de los dedos toca el borde izquierdo de la celda | Revisar en video. Si salta, regenerar la hoja con más margen |
| P10 Tamar revela | El generador redibujó la figura de un cuadro a otro (escala, cabeza +20 px en "muestra"). Es el gesto más grande del video | Revisar en video. Si molesta, regenerar con "misma escala y posición" o cortar en "muestra" con un push-in de cámara |
| P5 Velo | En "alto" el velo se sale 113 px por el borde derecho de la celda y queda cortado en recto. En la oclusión ese cuadro va rápido y la cámara puede encuadrar sin ese borde | Aceptar o regenerar solo si se ve el corte |
| M1 Celular | En "baja-1" y "baja-2" el pelo está redibujado; la bajada se lee bien | Aprobar |
| Caminata | Ciclo en el sitio, con el bastón siempre en la misma mano y la cabeza subiendo y bajando de forma natural | Aprobar |
| P11, P2, M2 | Solo cambian cara e inclinación; registro fino (menos de 1 px) | Aprobar |
| LAMP | La llama sale como parche aparte para parpadear | Aprobar |
| PROPS, CROWD | Recortes limpios: 3 objetos y 5 siluetas | Aprobar |

## 4. Decisiones tomadas en la preproducción

Se pueden cambiar.

1. F1 usa `l1` = "Earthen plaza with chroma green sky-2" (plaza abierta); la alternativa está en `_alt/l1-a.png`.
2. F3 usa `l1` = "Golden olive path, chroma green horizon-1" (con ladera); las alternativas están en `_alt/`.
3. Judá medio cuerpo usa la base cortada a la cadera, igual que sus hojas.
4. La caminata usa la hoja donde el bastón no cambia de mano.
5. FM usa un lienzo de 1632 × 2176 (3:4) en lugar de 1224 × 2176.

## 5. Cambios en la herramienta (`tools/ismv_prep.py`)

- **Capas con croma parcial:** el verde que solo cubre el cielo, una ventana o una puerta ahora se detecta como croma. Antes se confundía con un fondo liso y se borraban partes de la escena.
- **Capas sin croma:** una capa de escenario sin verde se trata como opaca (modo `layer`). Ya no se recorta un cielo o una pared lisa.
- **Halos:** en zonas semitransparentes (halos de antorcha, brillos) el verde se limita al promedio de los otros canales, así que un halo cálido queda naranja y no amarillo limón.

## 6. Voz medida

Los 10 audios llegaron el 2026-11-19 (Descargas → `public/assets/audio/narration/04-juda-tamar-NN-*.mp3`) y se midieron con:

```bash
python tools/ismv_prep.py voz public/assets/audio/narration/04-juda-tamar-*.mp3
```

Cada audio tiene su `.words.json` al lado. Las 10 transcripciones dicen el texto del guion de voz. Los errores de la transcripción automática ("Atamar", "Judano", "Judad") no están en el audio. El texto de pantalla sale del guion, no de la transcripción.

| Audio | Voz de Fish | Duración | Habla | Plano |
|---|---|---|---|---|
| 01 gancho | Joss | 6,19 s | 0–6,02 s | M1 |
| 02 puente | Joss | 3,03 s | 0–2,76 s | P2 |
| 03 conflicto | Joss | 5,77 s | 0–5,54 s | P3 |
| 04 riesgo | Joss | 4,15 s | 0–3,74 s | P5 |
| 05 garantía | Joss | 6,11 s | 0–5,86 s | P6–P7 |
| 06 escalada | Joss | 5,77 s | 0–5,50 s | P8–P9 |
| 07 revelación | Joss | 2,12 s | 0–1,62 s | P10 |
| 08 cita de Tamar (Gn 38:25) | Yuli | 2,66 s | 0–1,98 s | P10 |
| 09 remate | Joss | 1,28 s | 0–1,00 s | P11 |
| 10 cita de Judá (Gn 38:26) | GABRIEL-VO, Professional Spanish Narrator | 3,40 s | 0–1,84 s | P12 |

Hay 35,9 s de habla en total. Con las pausas entre audios, la voz termina en 38,9 s y el Reel dura **43,3 s (1300 cuadros)**, con la enseñanza y el sting. No hace falta aplicar los recortes del guion de voz.

**Las citas tienen voces de personaje** (Tamar y Judá) y la narración es de Joss. Las dos van como cita textual RVR1960, con la referencia en pantalla. Que una voz dramatice no convierte la cita en paráfrasis. **Derechos:** falta registrar el plan y el permiso comercial de las tres voces ([`04-juda-tamar-voz.md`](04-juda-tamar-voz.md), "Registro de la voz"). Hasta entonces la voz sirve para el animatic, no para publicar.

## 7. Hoja de animación

**Convenciones:**

- 30 fps y 1080 × 1920. Los números son cuadros de la composición.
- Los cuadros del sprite cambian en múltiplos de 2–3 cuadros (12 fps en doses).
- Cámara: `z` es el zoom sobre el lienzo de la capa a p 1,0 y `x` es el desplazamiento horizontal en px del lienzo.
- Textos dentro de las zonas seguras de `docs/DIRECCION-VISUAL.md`: libres ~250 px arriba, ~670 px abajo y ~120 px a la derecha. Rostros y acción en el tercio central; subtítulos por encima del tercio inferior.

### Audios en la línea de tiempo

Cada audio se recorta 6 cuadros después de su última palabra, para que la cola de silencio no se monte con el siguiente.

| Audio | Entra | Última palabra | Corta en |
|---|---|---|---|
| 01 | 0 | 181 | 187 |
| 02 | 192 | 275 | 281 |
| 03 | 284 | 450 | 456 |
| 04 | 459 | 571 | 577 |
| 05 | 582 | 758 | 764 |
| 06 | 771 | 936 | 942 |
| 07 | 948 | 997 | 1003 |
| 08 | 1004 | 1063 | 1069 |
| 09 | 1074 | 1104 | 1110 |
| 10 | 1113 | 1168 | 1174 |

### Planos

**M1 · gancho · 0–191** · voz 01
- **Fondo y personaje:** FM (l0 ciudad p 0,4; l1 cuarto p 1,0) y `modern-woman-m1`.
- **Cámara:** push-in `z` 1,00 → 1,10 (0–180). Sacudida corta de 6 cuadros en 154.
- **Sprite:** `espera` 0 · `dolida` 82 ("nunca") · `baja-1` 160 ("fue") · `baja-2` 164 · `regazo` 168 ("tuya") · `regazo-blink` 182–184 · `regazo` hasta 191.
- **Textos:**
  - Título "¿Te ha pasado?" 6–84.
  - Burbujas "Te lo prometo, el próximo mes" con su fecha: marzo 4 ("prometió"), junio 40 ("esperaste"), septiembre 60 ("meses").
  - "Esto es culpa tuya." 150 (antes de "culpa").
  - Vibración de celular en cada burbuja.
- **Salida:** match cut en 192. La pantalla del celular, sobre el regazo, queda en el mismo lugar que la llama de la lámpara en P2.

**P2 · puente · 192–283** · voz 02
- **Fondo y luz:** F2 gradado de noche (l0 p 0,5 · l1 p 1,0). LAMP encendida, con la llama parpadeando (el parche `oil-lamp-flame` con un poco de escala y brillo).
- **Personaje:** `tamar-house`.
- **Cámara:** push-in `z` 1,00 → 1,06, con un acento en 248 ("pero mucho más grave").
- **Sprite:** `espera` 192 · `espera-blink` 236–238 · `espera` hasta 283.
- **Texto:** "Génesis 38" 200–270.
- **Salida:** movimiento continuo.

**P3 · conflicto · 284–458** · voz 03
- **Fondo:** F2, gradación de noche a día entre 284 y 340.
- **Cámara:** paneo de `x` 0 → +200 hacia la puerta (360–400) y vuelta a Tamar (410–426).
- **Selá:** cruza el exterior, visto por la puerta, entre 380 y 420 ("su hijo Selá"). Es una sola pose; se traslada con un balanceo de 2 px por paso.
- **Sprite:** `espera` 284 · `decepcion` 426 ("nunca") · `decepcion-blink` 446–448 · `decepcion` hasta 458.
- **Salida:** corte en 459.

**P5 · giro 1, el velo · 459–559** · voz 04 (hasta "en")
- **Fondo y personaje:** F2 de día y `tamar-veil`.
- **Cámara:** plano medio fijo. Desde 540, push-in rápido `z` 1,0 → 1,6 sobre el velo hasta que la tela llena el cuadro.
- **Sprite:** `doblado` 459 · `despliega` 504 · `alto` 508 · `cae` 514 · `cierra` 522 ("rostro") · `velada` 530.
- **Salida:** oclusión motivada en 559. Con el velo llenando el cuadro, se pasa a P6 ("en el camino").

**P6 · giro 1, el camino · 560–667** · voz 04 (final) + 05 (hasta "dejó")
- **Fondo:** F3 (l0 p 0,3 · l1 p 1,0 · l2 p 1,3).
- **Personajes:** `tamar-veiled-seated` sobre la piedra, a la derecha. Judá con `judah-walk`: ciclo de 6 cuadros a 2 cuadros cada uno; entra por la izquierda en 566 y avanza unos 9 px por cuadro, con los pies tapados por l2.
- **Cámara:** paneo de `x` −300 → +300 siguiendo a Judá (566–626).
- **Elipsis:** en 627 ("se acostó con ella"), la cámara sube a la copa del olivo y al cielo (627–667). No se muestra a los dos juntos.
- **Salida:** corte al inserto en 668.

**P7 · los objetos · 668–770** · voz 05 (final)
- **Fondo:** F3 desenfocado (blur de 12 px) y oscurecido.
- **Objetos:** entran con un rebote de 6 cuadros (escala 0,6 → 1,08 → 1,0) y un "tic":
  - `judah-seal` en 689, antes de "sello" (691);
  - `judah-cord` en 716 (cordón, 718);
  - `judah-staff` en 743 (bastón, 745).
- **Cámara:** fija, con una deriva leve.
- **Salida:** corte de elipsis en 771.

**P8 · giro 2, el pueblo · 771–847** · voz 06 (hasta "y")
- **Fondo:** F1 con gradación de atardecer.
- **Siluetas:** `crowd-women-1` y `crowd-women-2` a la izquierda, cuchicheando (balanceo de 1–2 px). `crowd-man-pointing` entra en 812 ("embarazada").
- **Cámara:** paneo corto de `x` −120 → +120.
- **Texto:** "Meses después" 775–830.
- **Sonido:** murmullo del pueblo.

**P9 · giro 2, la orden · 848–947** · voz 06 (desde "Judá")
- **Fondo y personaje:** F1 de noche y `judah-command`.
- **Sprite:** `neutral` 848 · `anticipa` 900 · `extiende` 906 · `senala` 909 ("ordenó") · `sostiene` 918 ("castigarla") · `sostiene-blink` 928–930 · `sostiene` hasta 936.
- **Cámara:** paneo de Judá a Tamar (918–937). Tamar va a contraluz de las antorchas, entre `crowd-guard-1` y `crowd-guard-2`: es la base de Tamar oscurecida a silueta, sin fuego sobre ella y sin violencia.
- **Salida:** 937–947 en silencio (0,33 s) y corte.

**P10 · revelación · 948–1073** · voces 07 y 08
- **Fondo y personaje:** F1 y `tamar-reveal`, con luz cálida radial sobre los objetos.
- **Sprite:** `reposo` 948 · `anticipa` 970 ("ella") · `sube` 976 ("mostró") · `muestra` 985 ("los") · `sostiene` 990 ("objetos") · `sostiene-blink` 1064–1066 · `sostiene` hasta 1073.
- **Cámara:** push-in rápido `z` 1,00 → 1,12 (985–1000).
- **Texto:** la cita "«¡Mira ahora de quién son estas cosas!»" y "Génesis 38:25" en 1004–1073.
- **Salida:** contraplano en 1074.

**P11 · contraplano · 1074–1112** · voz 09
- **Fondo y personaje:** F1 y `judah-reaction`.
- **Sprite:** `seguro` 1074 · `sorpresa` 1088 ("reconoció") · hasta 1112.
- **Cámara:** fija.

**P12 · remate · 1113–1179** · voz 10
- **Fondo y personaje:** F1 y `judah-reaction`.
- **Sprite:** `reconoce` 1113, con la mirada baja.
- **Cámara:** micro push-in `z` 1,00 → 1,03.
- **Texto:** la cita "«Más justa es ella que yo»" y "Génesis 38:26" en 1113–1179.
- **Salida:** corte por mirada en 1180. Judá baja los ojos y la mujer moderna los levanta.

**M2 · bucle · 1180–1269** · sin voz
- **Fondo y personaje:** FM y `modern-woman-m2`.
- **Sprite:** `regazo` 1180 · `sube` 1188 · `firme` 1194 · `firme-blink` 1230–1232 · `firme` hasta 1269.
- **Cámara:** pull-out leve `z` 1,10 → 1,00.
- **Texto:** la enseñanza "Quien promete, responde por su promesa." en 1196–1269.

**Cierre · 1270–1299** · sting de ~1 s con el símbolo de Ismael (`brand/ismael-symbol-light-variant.png`), integrado sin fundido a negro. El bucle vuelve a M1.

**Eventos visuales:** cada 2–3 s hay un corte, un cambio de sprite, un texto o un movimiento de cámara. Los tramos más largos sin corte son P3 (gradación, paneo, Selá y decepción) y M1 (burbujas y bajada del celular), y ninguno pasa de 2,6 s sin un evento.

**Sonido pendiente de licencia:** cama musical, vibración, crepitar de antorchas, viento, "tic" ×3, murmullo y subida de cuerdas en P10.

## 8. Pendientes y riesgos

- **Aprobación:** hecha para el animatic el 2026-11-19, a partir del video de revisión `art-inbox/hist-004/_previews/HIST-004-revision.mp4`. Para el video final se vuelven a revisar las hojas ampliadas.
- **Voz:** falta registrar el plan de Fish y el permiso comercial de Joss, Yuli y GABRIEL-VO.
- **Video final:** ampliar las hojas ×2 con un ampliador de IA y volver a procesar. El animatic no lo necesita.
- **Música y efectos** con licencia, y el sting de ~1 s: siguen pendientes, como en el checklist.
