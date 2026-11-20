# HIST-004 · Prompts en orden de creación (hojas de sprites + capas)

**Historia:** [`04-juda-tamar.md`](04-juda-tamar.md) · **Checklist:** [`04-juda-tamar-recursos.md`](04-juda-tamar-recursos.md) · **Voz:** [`04-juda-tamar-voz.md`](04-juda-tamar-voz.md) · **Método:** [`../technical/ANIMACION-POR-CAPAS.md`](../technical/ANIMACION-POR-CAPAS.md)

**Versión 3 (2026-11-19).** Cada movimiento se genera como **hoja de sprites**: una sola imagen con todos los cuadros del gesto, incluidos los cambios de cara y los parpadeos. Dentro de una misma imagen el generador mantiene el personaje igual de un cuadro a otro. La preproducción corta la hoja, alinea los cuadros y fija lo que no se mueve.
- Los fondos salen de una **escena completa** y de ediciones que separan sus capas.
- Todo va sobre fondo de croma liso.
- Los prompts producen piezas para revisar, no arte aprobado.

## Cómo trabajar

1. **Primero la escena o el diseño del personaje (base); apruébalo (✋) antes de seguir.** Las hojas de sprites llevan la base adjunta como referencia.
2. **Copia cada bloque completo** y adjunta lo que indica la primera línea.
3. **Fondo de croma:** verde liso `#00FF00` en toda la imagen, sin sombras, sin degradados y sin suelo. Ningún personaje ni objeto de este episodio es verde. Si una capa de paisaje sale con verdes saturados, avísame y la pedimos en magenta `#FF00FF`.
4. **Una imagen por archivo**, con el nombre de la [tabla de entrega](#tabla-de-entrega), en `art-inbox/hist-004/<carpeta>/`. También puedes pegarlas en el chat diciendo su nombre y yo las guardo.
5. **Resolución:** pide la mayor que ofrezca el generador. **Si tiene "ampliar" (upscale), amplía cada hoja ×2 antes de entregarla:** cada cuadro termina siendo una fracción de la imagen, y para verse nítido en pantalla debería medir ~1000 px de alto o más. La preproducción avisa si un cuadro queda chico.

### Reglas de las hojas de sprites

- **Cuadrícula de celdas iguales**, leídas de izquierda a derecha y de arriba abajo. **4 cuadros → 2 × 2 en vertical 2:3. 6 cuadros → 3 × 2 en cuadrado 1:1.** En los dos casos cada celda queda en proporción 2:3, igual que la base.
- **Mismo personaje, misma escala y misma posición en todas las celdas.** Medio cuerpo: la figura centrada, con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Cuerpo entero: los pies sobre la misma línea. Solo cambia lo que dice cada cuadro.
- **Margen verde entre celdas.** Nada cruza a otra celda: ni brazos, ni velo, ni bastón. Sin bordes, líneas, números ni texto.
- **La luz no cambia** de un cuadro a otro. La luz de antorcha, la noche o el día se agregan en la animación. La única excepción es la pantalla del celular, que se aleja de la cara.
- **Parpadeo:** el cuadro "igual al anterior con los ojos cerrados" va justo después de su cuadro. La preproducción lo convierte en un cambio solo de ojos.
- Si una hoja sale con un cuadro raro (otra cara, otra escala, la figura movida), regenérala completa. No mezcles cuadros de hojas distintas.

## Orden

| # | Fase | ID | Imágenes | Depende de | Prioridad |
|---|---|---|---|---|---|
| 1 | Escenarios | F1 Plaza de noche | full ✋ + l0, l1, l2 | — | A |
| 2 | Escenarios | F2 Casa del padre | full ✋ + l0, l1 | F1 (estilo) | A |
| 3 | Escenarios | FM Cuarto moderno | full ✋ + l0, l1 | F1 (estilo) | A |
| 4 | Props | LAMP Lámpara | encendida + apagada | F2 | A |
| 5 | Props | PROPS Sello, cordón, bastón | 1 hoja | F1 | A |
| 6 | Judá | J-MC medio cuerpo | base ✋ + hoja P9 (6) + hoja P11–P12 (4) | F1 | A |
| 7 | Tamar | T-MC medio cuerpo | base ✋ + hoja P2–P3 (4) + hoja P10 (6) | F2, PROPS | A |
| 8 | Moderna | MOD con celular | base ✋ + hoja M1 (6) + hoja M2 (4) | FM | A |
| — | Voz | 10 audios de Fish | [`04-juda-tamar-voz.md`](04-juda-tamar-voz.md) | — | A |
| — | — | **Con 1–8 y la voz ya se puede armar el animatic** | — | — | — |
| 9 | Escenarios | F3 Camino a Enaim | full ✋ + l0, l1, l2 | F1 (estilo) | B |
| 10 | Tamar | T-VEIL se cubre con el velo | hoja P5 (6) | T-MC | B |
| 11 | Tamar | T-SEATED velada, sentada | 1 | T-VEIL, F3 | B |
| 12 | Judá | J-CE cuerpo entero caminando | base ✋ + hoja de caminata (6) | J-MC, PROPS, F3 | B |
| 13 | Apoyo | SELA Selá | 1 | F2 | C |
| 14 | Apoyo | CROWD Siluetas | 1 hoja | F1 | C |
| 15 | Publicación | COVER Portada (guía) | 1 | T-MC, J-MC, F1 | C |

---

## Fase 1 · Escenarios

### 1 · F1 — Plaza de noche

Lienzo final 1920 × 2400 (4:5). Capas: l0 cielo y tejados (p 0,3) · l1 plaza (p 1,0) · l2 primer plano (p 1,3).

**1a · `F1/full.png` — escena completa ✋**

```text
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Escenario: plaza pequeña de un pueblo cananeo antiguo de noche, suelo de tierra apisonada, muros de piedra y adobe, dos antorchas en soportes de pared en el plano medio que proyectan círculos de luz naranja cálida, cielo azul noche profundo con pocas estrellas y tejados planos lejanos. En primer término, a la izquierda, el borde oscuro de una columna de piedra; a la derecha, una antorcha cercana más grande. Sin personajes. Zona central despejada para ubicar dos personajes enfrentados, uno a cada lado.
Paleta: azules nocturnos apagados, ocres en sombra, luz de antorcha naranja.
Formato: vertical 4:5 a la mayor resolución disponible. Escena completa en una sola imagen.
```

**1b · `F1/l0.png` — capa lejana (opaca)**

```text
[Adjuntar: F1/full.png aprobado]
Edita la imagen adjunta para separar la capa más lejana. Conserva el tamaño del lienzo, el encuadre, la perspectiva, el estilo, los colores y la luz.
Elimina la plaza, los muros, las antorchas y la columna del primer plano. En su lugar pinta solo lo que quedaría detrás: el cielo nocturno con sus estrellas y los tejados lejanos, y debajo de ellos fachadas lejanas en sombra hasta el borde inferior. Toda la imagen queda pintada, sin huecos.
Entrega una sola imagen, sin texto.
```

**1c · `F1/l1.png` — plaza**

```text
[Adjuntar: F1/full.png aprobado]
Edita la imagen adjunta para separar la capa media. Conserva EXACTAMENTE igual el tamaño del lienzo, el encuadre, la perspectiva, el estilo, los colores y la luz de la plaza.
1. Elimina la columna del primer plano (izquierda) y la antorcha cercana (derecha), y pinta la plaza y los muros que quedan detrás, continuos.
2. Sustituye el cielo y los tejados lejanos por verde liso #00FF00.
La plaza, los muros y las antorchas del plano medio quedan idénticos. Entrega una sola imagen, sin texto.
```

**1d · `F1/l2.png` — primer plano**

```text
[Adjuntar: F1/full.png aprobado]
Edita la imagen adjunta para separar el primer plano. Conserva idénticos, en la misma posición y tamaño, la columna de piedra de la izquierda y la antorcha cercana de la derecha, con su resplandor. Sustituye todo lo demás por verde liso #00FF00.
Entrega una sola imagen, sin texto.
```

### 2 · F2 — Casa del padre de Tamar

Lienzo final 1400 × 2100 (2:3). Capas: l0 exterior (p 0,5) · l1 interior (p 1,0). Selá pasa entre ambas. La noche del puente se hace con gradación.

**2a · `F2/full.png` ✋**

```text
[Adjuntar: F1/full.png aprobado como referencia de estilo]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Escenario: interior sencillo de una casa antigua de piedra y adobe, de día. A la izquierda, una ventana pequeña por donde entra un haz de luz cálida; a la derecha, una puerta abierta que deja ver un patio exterior soleado con un muro bajo. Banco de piedra bajo la ventana, cántaro de barro, tela colgada y un nicho en la pared donde puede ir una lámpara de aceite. Sin personajes. Espacio libre junto a la ventana para una mujer de medio cuerpo.
Paleta: ocres y pardos en sombra, luz dorada en el haz de la ventana.
Formato: vertical 2:3 a la mayor resolución disponible. Escena completa en una sola imagen.
```

**2b · `F2/l0.png` — exterior (opaca)**

```text
[Adjuntar: F2/full.png aprobado]
Edita la imagen adjunta para separar la capa más lejana. Conserva el tamaño del lienzo, la perspectiva, el estilo, los colores y la luz.
Elimina todo el interior: paredes, banco, cántaro, tela y los marcos de la ventana y de la puerta. Pinta solo el exterior que se ve por ellas (patio soleado, muro bajo y cielo claro), extendido a todo el lienzo sin huecos.
Entrega una sola imagen, sin texto.
```

**2c · `F2/l1.png` — interior**

```text
[Adjuntar: F2/full.png aprobado]
Edita la imagen adjunta. Conserva EXACTAMENTE igual todo el interior: paredes, ventana, puerta, banco, cántaro, tela, nicho, luz y estilo.
Cambia solo: lo que se ve a través de la ventana y de la puerta abierta (el exterior) se sustituye por verde liso #00FF00.
Entrega una sola imagen, sin texto.
```

### 3 · FM — Cuarto moderno de noche

Lienzo final 1224 × 2176 (9:16). Capas: l0 ciudad por la ventana (p 0,4) · l1 cuarto (p 1,0).

**3a · `FM/full.png` ✋**

```text
[Adjuntar: F1/full.png aprobado como referencia de estilo]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Excepción aprobada solo para esta escena del gancho: se permite un entorno actual (cuarto, cama, celular, ropa de hoy), con el mismo lenguaje 2D, luz y paleta del episodio. El celular se dibuja con la pantalla lisa e iluminada, sin interfaz, letras ni marca.
Escenario: cuarto sencillo de una joven, de noche: cama con manta arrugada, mesa de noche con una lámpara pequeña de luz cálida, pared con una sola foto enmarcada sin rostro reconocible y una ventana con luces lejanas de ciudad desenfocadas en tonos ámbar y azul. Luz principal fría azulada, con el acento cálido de la lámpara. Sin personajes. Espacio libre en el centro, sobre la cama, para una mujer sentada de medio cuerpo.
Formato: vertical 9:16 a la mayor resolución disponible. Escena completa en una sola imagen.
```

**3b · `FM/l0.png` — ciudad (opaca)**

```text
[Adjuntar: FM/full.png aprobado]
Edita la imagen adjunta para separar la capa más lejana. Conserva el tamaño del lienzo, el estilo, los colores y la luz.
Elimina todo el cuarto y pinta solo la vista de la ciudad nocturna que se ve por la ventana, con sus luces ámbar y azules desenfocadas, extendida a todo el lienzo sin huecos.
Entrega una sola imagen, sin texto.
```

**3c · `FM/l1.png` — cuarto**

```text
[Adjuntar: FM/full.png aprobado]
Edita la imagen adjunta. Conserva EXACTAMENTE igual todo el cuarto: cama, manta, mesa de noche, lámpara, foto, marco de la ventana, luz y estilo.
Cambia solo: lo que se ve a través de la ventana (la ciudad) se sustituye por verde liso #00FF00.
Entrega una sola imagen, sin texto.
```

## Fase 2 · Props

### 4 · LAMP — Lámpara de aceite

La lámpara encendida se genera primero y se guarda como `flame.png`; la apagada sale de editarla y se guarda como `base.png`. La preproducción extrae la llama como pieza aparte para que parpadee. Es la llama del match cut con la luz del celular.

**4a · `LAMP/flame.png` — encendida**

```text
[Adjuntar: F2/full.png aprobado como referencia de estilo y luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Lámpara de aceite de barro del antiguo Cercano Oriente, pequeña y abierta, vista de lado y un poco desde arriba, con una llama encendida cálida y un halo suave alrededor. Aislada.
Fondo: verde croma liso y uniforme #00FF00, sin sombras ni degradados.
Formato: cuadrado 1:1 a la mayor resolución disponible.
```

**4b · `LAMP/base.png` — apagada**

```text
[Adjuntar: LAMP/flame.png]
Edita la imagen adjunta. Conserva EXACTAMENTE igual la lámpara, su tamaño, posición, trazos, colores y el fondo verde liso #00FF00.
Cambia solo: elimina la llama y su halo, y deja la mecha oscura. El cuerpo de la lámpara no cambia.
Entrega una sola imagen, sin texto.
```

### 5 · PROPS — Sello, cordón y bastón

Una sola imagen con los tres objetos separados; la preproducción los corta en tres archivos. Esta imagen se adjunta después en las hojas de Tamar (P10) y Judá caminando, para que los objetos sean siempre los mismos.

**5 · `PROPS/pledge-sheet.png`**

```text
[Adjuntar: F1/full.png aprobado como referencia de estilo]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Tres objetos personales de un jefe de familia del antiguo Cercano Oriente, en una fila horizontal, bien separados entre sí, sin tocarse ni superponerse:
1 (izquierda) sello de piedra oscura pulida, pequeño y cilíndrico, con un orificio para colgar y grabados simples sin letras;
2 (centro) cordón trenzado color rojo apagado, enrollado de forma suelta;
3 (derecha) bastón de madera recto y vertical, con el extremo superior tallado en una forma sencilla y reconocible, ocupando casi toda la altura.
Luz cálida lateral.
Fondo: verde croma liso y uniforme #00FF00, sin sombras ni degradados.
Formato: horizontal 3:2 a la mayor resolución disponible.
```

> El diseño del sello (cilíndrico o de estampa) es una decisión de arte; el texto solo dice "sello", "cordón" y "báculo".

## Fase 3 · Judá (prioridad A) — carpeta `JUDA/`

### 6 · J-MC — Judá medio cuerpo, sin objetos

**6a · `JUDA/base-medio.png` — diseño ✋**

```text
[Adjuntar: F1/full.png aprobado como referencia de estilo y luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Personaje — Judá: hombre adulto de unos 45–50 años, jefe de familia de pastores, piel morena oliva, barba oscura y espesa con algunas canas, cabello oscuro corto bajo un turbante de tela sencillo color arena. Túnica larga color ocre con faja marrón oscura y manto granate apagado sobre un hombro. Postura erguida y segura. Variante sin objetos: sin sello, sin cordón y sin bastón.
Pose: medio cuerpo, en 3/4 mirando hacia la izquierda del cuadro, brazos relajados a los lados y un poco separados del torso, expresión neutral y segura. Luz cálida de antorcha desde la izquierda, contraluz suave.
Fondo: verde croma liso y uniforme #00FF00 en todo el lienzo, sin sombras, sin degradados y sin suelo. Nada del personaje es verde.
Formato: vertical 2:3 a la mayor resolución disponible. Figura cortada a la altura de la cadera en el borde inferior y centrada. Líneas limpias y rostro bien definido: es el diseño de referencia de todas sus hojas.
```

**6b · `JUDA/sprite-p9.png` — da la orden (6 cuadros, plano P9)**

```text
[Adjuntar: JUDA/base-medio.png aprobado como referencia del personaje]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Hoja de sprites de animación 2D: 6 cuadros del mismo personaje de la referencia (Judá, variante sin objetos), en una cuadrícula de 3 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. En todos los cuadros: mismo diseño, ropa, colores, trazo, luz y escala que la referencia; medio cuerpo en 3/4 mirando a la izquierda, centrado en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian el brazo derecho, el torso y la cara, como se describe. Margen verde entre celdas; nada cruza a otra celda. Sin bordes, líneas, números ni texto.
1 neutral, brazos relajados a los lados, mirada segura;
2 anticipación: brazo derecho recogido frente al pecho con el puño cerrado, torso un poco echado hacia atrás, cejas bajas;
3 el brazo derecho empieza a extenderse hacia la izquierda, el codo se despega del cuerpo y la mano se abre, boca entreabierta;
4 señala: brazo derecho extendido hacia la izquierda del cuadro con el índice estirado, torso levemente hacia adelante, boca abierta dando una orden, cejas bajas y mirada severa;
5 sostiene: igual que el 4, con el mentón alto, la boca cerrada y la mirada dura;
6 igual que el 5, con los ojos cerrados (parpadeo).
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: cuadrado 1:1 a la mayor resolución disponible.
```

**6c · `JUDA/sprite-p11.png` — reacción (4 cuadros, planos P11 y P12)**

```text
[Adjuntar: JUDA/base-medio.png aprobado como referencia del personaje]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Hoja de sprites de animación 2D: 4 cuadros del mismo personaje de la referencia (Judá, variante sin objetos), en una cuadrícula de 2 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. En todos los cuadros: mismo diseño, ropa, colores, trazo, luz, escala y pose del cuerpo que la referencia (brazos relajados), centrado en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian la cara y una leve inclinación de la cabeza. Margen verde entre celdas; nada cruza a otra celda. Sin bordes, líneas, números ni texto.
1 seguro: media sonrisa de autoridad, cejas relajadas, mirada segura;
2 igual que el 1, con los ojos cerrados (parpadeo);
3 sorpresa: ojos muy abiertos, cejas altas, boca entreabierta, la cabeza un poco hacia atrás;
4 reconocimiento: mirada baja hacia el suelo con los párpados caídos, cejas levemente juntas, boca cerrada, la cabeza un poco inclinada hacia abajo.
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: vertical 2:3 a la mayor resolución disponible.
```

> "Vergüenza contenida" ya no se pide: ningún plano del guion v2 la usa.

## Fase 4 · Tamar (prioridad A) — carpeta `TAMAR/`

### 7 · T-MC — Tamar medio cuerpo, ropa de viuda

La misma luz sirve para la casa y para la plaza; la luz de antorcha de la plaza se agrega en la animación.

**7a · `TAMAR/base.png` — diseño ✋**

```text
[Adjuntar: F2/full.png aprobado como referencia de estilo y luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Personaje — Tamar: mujer adulta joven de unos 20–25 años, piel morena oliva, ojos oscuros y expresivos, cabello negro recogido. Ropa de viuda: túnica sencilla gris pardo y manto azul índigo muy apagado. Gesto digno y contenido, nunca sensualizado.
Pose: medio cuerpo, frontal con leve giro 3/4 hacia la derecha, manos juntas frente a la cintura, expresión serena de espera. Luz cálida lateral desde la derecha.
Fondo: verde croma liso y uniforme #00FF00 en todo el lienzo, sin sombras, sin degradados y sin suelo. Nada del personaje es verde.
Formato: vertical 2:3 a la mayor resolución disponible. Figura cortada a la altura de la cadera en el borde inferior y centrada. Líneas limpias y rostro bien definido: es el diseño de referencia de todas sus hojas.
```

**7b · `TAMAR/sprite-p2.png` — espera y decepción (4 cuadros, planos P2 y P3)**

```text
[Adjuntar: TAMAR/base.png aprobado como referencia del personaje]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Hoja de sprites de animación 2D: 4 cuadros del mismo personaje de la referencia (Tamar, ropa de viuda), en una cuadrícula de 2 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. En todos los cuadros: mismo diseño, ropa, colores, trazo, luz, escala y pose que la referencia (manos juntas frente a la cintura), centrada en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian la cara y una leve caída de los hombros. Margen verde entre celdas; nada cruza a otra celda. Sin bordes, líneas, números ni texto.
1 espera serena, mirada al frente;
2 igual que el 1, con los ojos cerrados (parpadeo);
3 decepción: mirada baja, párpados pesados, comisuras de la boca caídas, hombros un poco caídos;
4 igual que el 3, con los ojos cerrados (parpadeo).
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: vertical 2:3 a la mayor resolución disponible.
```

### 8 · T-REVEAL — Tamar revela los objetos (el gesto más grande del video)

**8 · `TAMAR/sprite-p10.png` — 6 cuadros, plano P10**

```text
[Adjuntar: TAMAR/base.png aprobado como referencia del personaje y PROPS/pledge-sheet.png aprobado como referencia de los objetos]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Hoja de sprites de animación 2D: 6 cuadros del mismo personaje de la referencia (Tamar, ropa de viuda, sin velo), en una cuadrícula de 3 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. Lleva los tres objetos de Judá, idénticos a la referencia: sello de piedra oscura, cordón trenzado rojo apagado y bastón de madera con el extremo superior tallado. En todos los cuadros: mismo diseño, ropa, colores, trazo, luz y escala; pose frontal, centrada en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian brazos, manos, objetos y cara. Margen verde entre celdas; los brazos, el bastón y el cordón no cruzan a otra celda. Sin bordes, líneas, números ni texto.
1 manos bajas frente a la cintura; en una mano el sello con el cordón y en la otra el bastón apoyado; mirada baja;
2 anticipación: hombros recogidos, sello, cordón y bastón apretados contra el pecho, la mirada empieza a subir;
3 los brazos suben y los objetos se separan del cuerpo; mirada al frente;
4 muestra: brazos extendidos hacia la cámara; una mano muestra el sello con el cordón colgando y la otra sostiene el bastón en alto; mirada firme al frente;
5 sostiene: igual que el 4, con el mentón alto y una expresión calma y firme, boca cerrada;
6 igual que el 5, con los ojos cerrados (parpadeo).
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: cuadrado 1:1 a la mayor resolución disponible.
```

## Fase 5 · Mujer moderna (prioridad A) — carpeta `MOD/`

### 9 · MOD — Mujer moderna con celular

La imagen de prueba del 2026-11-19 queda descartada; se genera desde cero.

**9a · `MOD/base.png` — diseño ✋**

```text
[Adjuntar: FM/full.png aprobado como referencia de estilo y luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Excepción aprobada solo para esta escena del gancho: se permite un entorno actual (cuarto, cama, celular, ropa de hoy), con el mismo lenguaje 2D, luz y paleta del episodio. El celular se dibuja con la pantalla lisa e iluminada, sin interfaz, letras ni marca.
Personaje — Mujer moderna: mujer de unos 25–30 años, latina, piel morena clara, cabello oscuro largo suelto, sudadera holgada color gris azulado, sentada en la cama de su cuarto. Persona común, sin marcas ni logotipos visibles.
Pose: medio cuerpo, sentada, sostiene el celular con ambas manos a la altura del pecho, la cara iluminada desde abajo por la pantalla, expresión de espera.
Fondo: verde croma liso y uniforme #00FF00 en todo el lienzo, sin sombras, sin degradados y sin suelo. Nada del personaje es verde.
Formato: vertical 2:3 a la mayor resolución disponible. Figura cortada a la altura de la cadera en el borde inferior y centrada. Es el diseño de referencia de sus hojas.
```

**9b · `MOD/sprite-m1.png` — baja el celular (6 cuadros, gancho M1)**

```text
[Adjuntar: MOD/base.png aprobado como referencia del personaje]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Excepción aprobada solo para esta escena del gancho: se permite un entorno actual (cuarto, cama, celular, ropa de hoy), con el mismo lenguaje 2D, luz y paleta del episodio. El celular se dibuja con la pantalla lisa e iluminada, sin interfaz, letras ni marca.
Hoja de sprites de animación 2D: 6 cuadros del mismo personaje de la referencia (mujer moderna sentada en la cama), en una cuadrícula de 3 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. En todos los cuadros: mismo diseño, ropa, cabello, colores, trazo y escala que la referencia; centrada en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian brazos, manos, celular, hombros, cabeza, cara y la luz de la pantalla sobre la cara. Margen verde entre celdas; nada cruza a otra celda. Sin bordes, líneas, números ni texto.
1 espera: sostiene el celular con ambas manos a la altura del pecho, la cara iluminada desde abajo por la pantalla, mirada en la pantalla;
2 dolida: igual que el 1, con ojos húmedos y brillantes, cejas levantadas en el centro y labios apretados, sin llanto exagerado;
3 el celular baja un poco, justo por debajo del pecho, y la pantalla se inclina lejos de la cara; la mirada sigue la pantalla; menos luz en la cara;
4 el celular a la altura del estómago; los hombros empiezan a caer y la cabeza se inclina; la luz en la cara se debilita;
5 el celular sobre el regazo, sostenido con ambas manos; hombros caídos; cabeza inclinada hacia abajo y mirada perdida; la luz azul ya no ilumina la cara;
6 igual que el 5, con los ojos cerrados (parpadeo).
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: cuadrado 1:1 a la mayor resolución disponible.
```

**9c · `MOD/sprite-m2.png` — levanta la vista (4 cuadros, bucle M2)**

```text
[Adjuntar: MOD/base.png aprobado como referencia del personaje y MOD/sprite-m1.png aprobado como referencia de la pose final]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Excepción aprobada solo para esta escena del gancho: se permite un entorno actual (cuarto, cama, celular, ropa de hoy), con el mismo lenguaje 2D, luz y paleta del episodio. El celular se dibuja con la pantalla lisa e iluminada, sin interfaz, letras ni marca.
Hoja de sprites de animación 2D: 4 cuadros del mismo personaje de la referencia (mujer moderna sentada en la cama), en una cuadrícula de 2 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. En todos los cuadros: mismo diseño, ropa, cabello, colores, trazo y escala; el celular sigue sobre el regazo, sostenido con ambas manos, y brazos y manos no se mueven; centrada en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian la cabeza, el cuello y la cara. Margen verde entre celdas; nada cruza a otra celda. Sin bordes, líneas, números ni texto.
1 cabeza inclinada hacia abajo y mirada perdida, expresión dolida (como el cuadro 5 de la referencia);
2 la cabeza empieza a levantarse y la mirada sube hacia el frente; expresión seria;
3 cabeza erguida y mirada al frente, directa a la cámara; expresión firme: cejas firmes, mentón alto y labios cerrados con serenidad; una luz cálida suave de la lámpara del cuarto en la cara;
4 igual que el 3, con los ojos cerrados (parpadeo).
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: vertical 2:3 a la mayor resolución disponible.
```

---

## Fase 6 · Prioridad B

### 10 · F3 — Camino a la entrada de Enaim

Lienzo final 2100 × 2100 (1:1). Capas: l0 cielo y colinas (p 0,3) · l1 camino y piedra (p 1,0) · l2 rocas y arbustos que tapan los pies de Judá (p 1,3).

**10a · `F3/full.png` ✋**

```text
[Adjuntar: F1/full.png aprobado como referencia de estilo]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Escenario: camino de tierra en las colinas de Canaán a la entrada de un pequeño pueblo, al final de la tarde. El camino cruza el cuadro de izquierda a derecha en la mitad inferior; junto al camino, a la derecha, una piedra grande y plana donde alguien puede sentarse. Colinas suaves con olivos dispersos en tonos oliva apagados al fondo y una entrada sencilla de pueblo lejana, sin murallas monumentales. A lo largo de todo el borde inferior, en primer término, rocas bajas y arbustos secos con altura suficiente para tapar los pies de un hombre que camina por el camino. Sin personajes.
Paleta: ocres y dorados de tarde, sombras violáceas.
Formato: cuadrado 1:1 a la mayor resolución disponible. Escena completa en una sola imagen.
```

**10b · `F3/l0.png` — cielo y colinas (opaca)**

```text
[Adjuntar: F3/full.png aprobado]
Edita la imagen adjunta para separar la capa más lejana. Conserva el tamaño del lienzo, la perspectiva, el estilo, los colores y la luz.
Elimina el camino, la piedra, las rocas y los arbustos del primer plano. Pinta solo el cielo de tarde y las colinas lejanas con olivos, y continúa las colinas hasta el borde inferior, sin huecos.
Entrega una sola imagen, sin texto.
```

**10c · `F3/l1.png` — camino**

```text
[Adjuntar: F3/full.png aprobado]
Edita la imagen adjunta para separar la capa media. Conserva EXACTAMENTE igual el tamaño del lienzo, el encuadre, la perspectiva, el estilo, los colores y la luz del camino y la piedra.
1. Elimina las rocas y los arbustos del primer plano y pinta el camino y su borde que quedan detrás, continuos.
2. Sustituye el cielo, las colinas y la entrada del pueblo lejana por verde liso #00FF00.
Entrega una sola imagen, sin texto.
```

**10d · `F3/l2.png` — primer plano**

```text
[Adjuntar: F3/full.png aprobado]
Edita la imagen adjunta para separar el primer plano. Conserva idénticos, en la misma posición y tamaño, solo las rocas bajas y los arbustos secos del borde inferior. Sustituye todo lo demás por verde liso #00FF00.
Entrega una sola imagen, sin texto.
```

### 11 · T-VEIL — Tamar se cubre con el velo

**11 · `TAMAR/sprite-p5.png` — 6 cuadros, plano P5 (el cuadro 3 hace la oclusión hacia P6)**

```text
[Adjuntar: TAMAR/base.png aprobado como referencia del personaje]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Hoja de sprites de animación 2D: 6 cuadros del mismo personaje de la referencia (Tamar, ropa de viuda), en una cuadrícula de 3 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. Se añade un velo amplio color terracota, idéntico en todos los cuadros. En todos los cuadros: mismo diseño, ropa, colores, trazo, luz y escala; centrada en su celda y con un corte recto a la altura de la cadera, a la misma altura en todas las celdas. Solo cambian brazos, manos, velo y cabeza. Margen verde entre celdas; el velo puede llenar casi toda su celda, pero no cruza a otra. Sin bordes, líneas, números ni texto.
1 sostiene el velo terracota doblado con ambas manos frente al pecho; mirada decidida;
2 los brazos suben a la altura de los hombros y el velo empieza a desplegarse;
3 ambos brazos en alto pasan el velo, abierto y grande, sobre la cabeza; la tela cubre la mitad superior de la figura;
4 el velo cae sobre la cabeza y los hombros;
5 con una mano cierra el velo frente al rostro;
6 velada: el velo cubre la cabeza y casi todo el rostro, solo los ojos en sombra; manos abajo, quieta.
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: cuadrado 1:1 a la mayor resolución disponible.
```

### 12 · T-SEATED — Tamar velada, sentada al borde del camino

Es otra pose y otro ángulo: imagen propia, sin cuadros (solo respiración y cámara).

**12 · `TAMAR/seated.png`**

```text
[Adjuntar: TAMAR/sprite-p5.png aprobado (cuadro 6) como referencia de personaje y velo, y F3/full.png aprobado como referencia de luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Personaje — Tamar: mujer adulta joven de unos 20–25 años, piel morena oliva, ojos oscuros y expresivos, cabello negro recogido. Ropa de viuda: túnica sencilla gris pardo y manto azul índigo muy apagado. Variante velada: un velo amplio color terracota que le cubre la cabeza y casi todo el rostro, dejando solo los ojos en sombra. Gesto digno y contenido, nunca sensualizado.
Pose: cuerpo entero, sentada (el asiento no se dibuja), de perfil 3/4 mirando hacia la izquierda, quieta y vigilante. Luz de tarde desde la derecha.
Fondo: verde croma liso y uniforme #00FF00 en todo el lienzo, sin sombras, sin degradados y sin suelo. Nada del personaje es verde.
Formato: vertical 2:3 a la mayor resolución disponible, figura completa dentro del lienzo.
```

### 13 · J-CE — Judá cuerpo entero con objetos, caminando

**13a · `JUDA/base-entero.png` — diseño ✋**

```text
[Adjuntar: JUDA/base-medio.png aprobado como referencia de personaje, PROPS/pledge-sheet.png como referencia de objetos y F3/full.png aprobado como referencia de luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Personaje — Judá: hombre adulto de unos 45–50 años, jefe de familia de pastores, piel morena oliva, barba oscura y espesa con algunas canas, cabello oscuro corto bajo un turbante de tela sencillo color arena. Túnica larga color ocre con faja marrón oscura y manto granate apagado sobre un hombro. Postura erguida y segura. Variante con objetos: sello de piedra oscura colgado al cuello de un cordón trenzado color rojo apagado y bastón de madera con el extremo superior tallado, en la mano derecha, idénticos a la referencia.
Pose: cuerpo entero en perfil 3/4 hacia la derecha, de pie en posición de contacto de paso (pie derecho adelante apoyando el talón). Luz de tarde desde la derecha.
Fondo: verde croma liso y uniforme #00FF00 en todo el lienzo, sin sombras, sin degradados y sin suelo. Nada del personaje es verde.
Formato: vertical 2:3 a la mayor resolución disponible, pies apoyados cerca del borde inferior y figura centrada.
```

**13b · `JUDA/sprite-walk.png` — ciclo de caminata (6 cuadros, plano P6)**

```text
[Adjuntar: JUDA/base-entero.png aprobado como referencia del personaje]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Hoja de sprites de animación 2D: ciclo de caminata de 6 cuadros del mismo personaje de la referencia (Judá con sello, cordón y bastón), en una cuadrícula de 3 columnas × 2 filas con celdas iguales, leídas de izquierda a derecha y de arriba abajo. Camina en el sitio, sin avanzar dentro de la celda: perfil 3/4 hacia la derecha, centrado, con la línea de los pies a la misma altura en todas las celdas. Mismo diseño, ropa, objetos, colores, trazo, luz y escala en todos los cuadros; el bastón acompaña el paso y el manto se balancea un poco. Margen verde entre celdas; nada cruza a otra celda. Sin bordes, líneas, números ni texto.
1 contacto: pie derecho adelante apoyando el talón, pie izquierdo atrás;
2 bajada: pie derecho apoyado con la rodilla flexionada recibiendo el peso; el cuerpo baja un poco;
3 paso: pierna derecha recta sosteniendo el cuerpo, la izquierda pasa por delante doblada; el cuerpo en su punto más alto;
4 contacto: pie izquierdo adelante apoyando el talón, pie derecho atrás; brazos y bastón invertidos respecto del 1;
5 bajada: igual que el 2, con el pie izquierdo apoyado;
6 paso: igual que el 3, con la pierna derecha pasando por delante.
Fondo: verde croma liso y uniforme #00FF00 en toda la hoja, sin sombras ni degradados.
Formato: cuadrado 1:1 a la mayor resolución disponible.
```

## Fase 7 · Prioridad C

### 14 · `SELA/shelah-full-body.png` — Selá

```text
[Adjuntar: F2/full.png aprobado como referencia de estilo y luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Personaje — Selá: hombre joven de unos 18–20 años, piel morena oliva, barba incipiente, cabello oscuro rizado corto, túnica corta color mostaza apagado con faja marrón.
Pose: cuerpo entero de perfil caminando hacia la derecha, distraído, sin mirar a la cámara. Luz de día desde arriba.
Fondo: verde croma liso y uniforme #00FF00 en todo el lienzo, sin sombras, sin degradados y sin suelo. Nada del personaje es verde.
Formato: vertical 2:3 a la mayor resolución disponible, figura completa dentro del lienzo.
```

### 15 · `CROWD/crowd-sheet.png` — Siluetas del pueblo y guardias

Una imagen con las cinco figuras separadas; la preproducción las corta.

```text
[Adjuntar: F1/full.png aprobado como referencia de luz]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Cinco figuras de pueblo antiguo, de cuerpo entero, en una fila horizontal, bien separadas entre sí y sin tocarse. Son siluetas oscuras recortadas a contraluz de antorchas, sin rasgos faciales definidos y con un borde de luz naranja. De izquierda a derecha: dos mujeres con manto conversando en voz baja; un hombre que señala con el brazo extendido; dos guardias de pie con túnica corta y lanza vertical, en postura firme, sin violencia.
Fondo: verde croma liso y uniforme #00FF00, sin sombras ni suelo.
Formato: horizontal 16:9 a la mayor resolución disponible, pies a la misma altura.
```

### 16 · `COVER/cover-guide.png` — Portada vertical (imagen guía)

```text
[Adjuntar: TAMAR/sprite-p10.png, JUDA/sprite-p11.png, PROPS/pledge-sheet.png y F1/full.png aprobados como referencia]
Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

Personajes — Tamar (ficha de viuda, sin velo) y Judá (ficha, variante sin objetos).
Composición: Tamar en primer término, a la derecha, de medio cuerpo, sostiene hacia la cámara el sello con el cordón colgando y el bastón, iluminada por una antorcha cálida. Judá al fondo a la izquierda, en sombra, desenfocado, con una expresión de sorpresa. Plaza nocturna.
Formato: vertical 9:16. Dejar libre el tercio superior (cielo oscuro liso) para componer después el título y el símbolo oficial de Ismael. Es una imagen guía de publicación, no capas.
```

---

## Tabla de entrega

Deja cada imagen en `art-inbox/hist-004/<carpeta>/` con el nombre indicado (PNG, WEBP o JPG), o pégala en el chat diciendo su nombre. La preproducción escribe en `public/assets/`.

| ID | Archivo en `art-inbox/hist-004/` | Destino en `public/assets/` | Preproducción |
|---|---|---|---|
| F1 | `F1/full`, `l0`, `l1`, `l2` | `backgrounds/judah-town-square-night/` | `layers --size 1920x2400 --depths 0.3,1,1.3` |
| F2 | `F2/full`, `l0`, `l1` | `backgrounds/tamar-father-house/` | `layers --size 1400x2100 --depths 0.5,1` |
| FM | `FM/full`, `l0`, `l1` | `backgrounds/hist-004-modern-bedroom/` | `layers --size 1632x2176 --depths 0.4,1` (el arte llegó 3:4) |
| LAMP | `LAMP/flame`, `LAMP/base` | `props/hist-004/oil-lamp/` | `set` |
| PROPS | `PROPS/pledge-sheet` | `props/hist-004/` | `sheet --names judah-seal,judah-cord,judah-staff` |
| J-MC | `JUDA/base-medio` | `characters/judah/judah-half-body-base.png` | `key` (diseño de referencia) |
| J-MC | `JUDA/sprite-p9` | `characters/judah/judah-command/` | `sprites --grid 3x2 --names neutral,anticipa,extiende,senala,sostiene,sostiene-blink` |
| J-MC | `JUDA/sprite-p11` | `characters/judah/judah-reaction/` | `sprites --grid 2x2 --names seguro,seguro-blink,sorpresa,reconoce` |
| T-MC | `TAMAR/base` | `characters/tamar/tamar-half-body-base.png` | `key` |
| T-MC | `TAMAR/sprite-p2` | `characters/tamar/tamar-house/` | `sprites --grid 2x2 --names espera,espera-blink,decepcion,decepcion-blink` |
| T-REVEAL | `TAMAR/sprite-p10` | `characters/tamar/tamar-reveal/` | `sprites --grid 3x2 --names reposo,anticipa,sube,muestra,sostiene,sostiene-blink` |
| MOD | `MOD/base` | `characters/hook-04/modern-woman-base.png` | `key` |
| MOD | `MOD/sprite-m1` | `characters/hook-04/modern-woman-m1/` | `sprites --grid 3x2 --names espera,dolida,baja-1,baja-2,regazo,regazo-blink` |
| MOD | `MOD/sprite-m2` | `characters/hook-04/modern-woman-m2/` | `sprites --grid 2x2 --names regazo,sube,firme,firme-blink` |
| VOZ | 10 audios ([guion de voz](04-juda-tamar-voz.md)) | `audio/narration/04-juda-tamar-NN-*.mp3` | `voz` → `.words.json` |
| F3 | `F3/full`, `l0`, `l1`, `l2` | `backgrounds/enaim-road/` | `layers --size 2100x2100 --depths 0.3,1,1.3` |
| T-VEIL | `TAMAR/sprite-p5` | `characters/tamar/tamar-veil/` | `sprites --grid 3x2 --names doblado,despliega,alto,cae,cierra,velada` |
| T-SEATED | `TAMAR/seated` | `characters/tamar/tamar-veiled-seated.png` | `key` |
| J-CE | `JUDA/base-entero` | `characters/judah/judah-full-body-pledge-base.png` | `key` |
| J-CE | `JUDA/sprite-walk` | `characters/judah/judah-walk/` | `sprites --grid 3x2 --names contacto-d,bajada-d,paso-d,contacto-i,bajada-i,paso-i` |
| SELA | `SELA/shelah-full-body` | `characters/shelah/` | `key` |
| CROWD | `CROWD/crowd-sheet` | `characters/hist-004-crowd/` | `sheet --names women-1,women-2,man-pointing,guard-1,guard-2` |
| COVER | `COVER/cover-guide` | `concepts/episodes/juda-tamar/instagram-cover-guide.png` | copia; no se procesa |

## Qué pasa después (preproducción)

1. `audit` de todo lo recibido: qué falta, qué se puede recortar y si algo trae el color del croma.
2. `layers`, `sprites`, `key` y `sheet` según la tabla. Te muestro la hoja de QA de cada hoja de sprites: la línea magenta marca lo que cambió de un cuadro al siguiente. Un salto de más del 30 % o un cuadro chico se revisan o se regeneran.
3. Un video corto por gesto (12 fps, con respiración) para que lo apruebes antes de montarlo.
4. `voz` con los 10 audios de Fish. La hoja de animación cuadro a cuadro va en `04-juda-tamar-preproduccion.md`: plano, palabras, cámara, cuadros del sprite, textos y transiciones.
5. Gate (`ismv-preparar`) → plan (`ismv-plan`) → animación en Remotion (`ismv-ejecute`).

**No requieren prompt:** CHAT y TXT (se componen en Remotion), LOGO (ya existe), STING (sale del audio de Mixkit), MUS y SFX (bibliotecas con licencia).
