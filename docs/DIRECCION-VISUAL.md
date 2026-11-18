# Dirección visual — Ismael Studio

## Identidad

Los Reels de Ismael usan **animación 2D minimalista de recortes**, con una atmósfera bíblica cinematográfica, misteriosa y emocional. La referencia a un tono de cómic oscuro sirve como orientación de ánimo; no se copian personajes, diseños ni recursos gráficos de una franquicia existente.

La imagen debe ser sencilla de producir y fácil de leer en pantalla vertical. El misterio acompaña el relato; no debe volverlo lúgubre, violento ni confuso.

## Base común para prompts de diseño

Todo prompt para generar un personaje, prop, fondo, frame guía o portada debe incluir esta dirección común:

> Dirección común = Animación 2D minimalista de recortes, apariencia de ilustración tradicional hecha con formas planas y capas separables. Atmósfera bíblica cinematográfica, misteriosa y emotiva, contraste de sombras profundas con acentos de luz cálida. Detalle sencillo, siluetas claras, composición legible en pantalla vertical. Sin realismo fotográfico, sin 3D, sin anime, sin texto, sin letras, sin logotipos, sin elementos modernos. Mantener coherencia visual con las imágenes de referencia.

- La descripción común define el lenguaje visual y se copia completa en cada prompt; no reemplaza la descripción del sujeto, escena, encuadre ni requisitos técnicos.
- Los prompts incluyen una ficha escrita y estable de cada personaje (rasgos, vestuario, paleta y edad aparente), tomada del episodio. No es requisito adjuntar imágenes de personajes para cada generación.
- La descripción común por sí sola no garantiza identidad exacta entre generaciones. Para una secuencia que depende de que el rostro no cambie —como variantes de expresión registradas— se trabaja desde un mismo diseño base o se generan las variantes juntas; no se presenta continuidad exacta como garantizada por texto.
- La frase “sin elementos modernos” se aplica a los beats bíblicos. Si el guion aprobado tiene una escena cotidiana actual, el prompt declara esa excepción de forma explícita y limita lo moderno únicamente a esa escena; conserva el mismo lenguaje 2D, luz y paleta.
- No generar texto ni logotipos dentro del arte. Añadir subtítulos, títulos de portada y el símbolo oficial como capas editables después.

## Técnicas de animación

- Construir escenas con planos ilustrados apilados: fondo, plano medio, personajes y primer plano.
- Tratar el formato vertical del Reel como la ventana de cámara, no como el tamaño máximo del arte. Los fondos pueden ser panorámicos, extra anchos o más altos que el cuadro para permitir recorridos de cámara.
- Diseñar el tamaño del fondo según el recorrido previsto: debe cubrir toda la ventana durante paneos y acercamientos, sin revelar bordes vacíos. Una composición puede recorrer un escenario más grande que 1080 × 1920.
- Usar movimiento de cámara, parallax y entradas/salidas para dar vida al escenario sin animar cada cuadro.
- Diseñar personajes como recortes reutilizables. Separar solo las piezas que la acción necesite; empezar con poses claras y movimientos suaves.
- Mantener pocos detalles, siluetas legibles y composición con espacio para subtítulos y textos.
- Reservar cambios de luz, sombra y movimiento para los momentos narrativos importantes.

### Hojas de expresiones / sprites faciales

Para primeros planos con cambios de emoción, se puede preparar una hoja de expresiones (sprite sheet): varias versiones del mismo rostro en una cuadrícula de 2 × 3 o 3 × 3. Cada celda contiene una expresión recortable; en montaje se alterna o superpone la cara sobre una base fija del personaje para lograr animación limitada sin redibujar el cuerpo entero.

- Diseñar primero una cara base y producir las expresiones como un mismo set o editándolas desde esa base. Mantener idénticos tamaño, ángulo, posición de ojos/nariz/boca, iluminación y estilo. Cambiar solo los rasgos que expresan la emoción.
- Definir antes de generar la cuadrícula el número de celdas, márgenes y tamaño de cada celda. Usar 6 expresiones (2 × 3) cuando se necesite un set corto, o hasta 9 (3 × 3) si la secuencia realmente pide más matices. No apretar rostros hasta que sean difíciles de recortar.
- Entregar preferiblemente PNG con alfa real y una expresión por archivo lista para montaje, además de la hoja completa como referencia. Si se usa fondo blanco para facilitar la generación o el recorte, tratarlo como fondo opaco: no es transparencia. Recortar por celda y limpiar el blanco de los bordes antes de superponer; halos claros pueden delatar el montaje sobre un fondo oscuro.
- Registrar orden de lectura, nombre de cada expresión, dimensiones del lienzo/celda, punto de anclaje y archivo base. Hacer que todas las variantes encajen en la misma posición sin reescalado manual distinto.
- La base del plano puede ser el cuerpo/ropa sin rostro, una cabeza limpia o una cara neutra. Elegir la mínima pieza que necesite cambiar: si la cámara queda en primer plano, puede bastar con sustituir solo el rostro; no rehacer un cuerpo entero por cada emoción.
- No usar nueve expresiones por defecto: el set debe responder a cambios narrativos reconocibles y pausas de voz. Una transición breve y legible suele funcionar mejor que alternar celdas muy rápido.
- Antes de darlo por utilizable, probar el recorte y la superposición sobre el fondo real del plano, comprobar bordes, escala, mirada y saltos entre expresiones. La hoja es una fuente de piezas, no el arte final del plano.

Esta técnica es una opción para episodios futuros. En HIST-003 puede explorarse para un primer plano de Labán, siempre después de aprobar el guion y revisar el diseño del personaje; no implica rehacer automáticamente los artes de episodios anteriores.

## Reglas técnicas de capas y cámara

Para escoger entre corte directo, disolvencia superpuesta, oclusión, luz, movimiento de cámara y otras opciones, consulta el [catálogo de transiciones visuales](technical/TRANSICIONES-VISUALES.md). Evitar usar el dip a negro como paso automático entre planos.

Resultado del [SPIKE-001](technical/spikes/SPIKE-001-resultado.md); allí están el detalle, los ejemplos y la fórmula completa.

- **Cámara multiplano:** una sola cámara (x, y, zoom) mueve cada capa según su profundidad `p`: cielo ≈ 0,1, montañas ≈ 0,3, plano medio ≈ 0,7, personajes 1,0 y primer plano ≈ 1,3.
- **Tamaño de fondo:** antes de pedirlo, calcular los extremos del encuadre de cada capa a lo largo de todo el plano, añadir margen y densidad de píxeles para el zoom máximo. Como estimación conservadora por eje: `(ventana + p·|recorrido|)/s_min + 2m`, con `m ≈ 48 px` como punto de partida. La fórmula exacta está en el spike. El prompt especifica ancho y alto mínimos calculados y cobertura; “panorámico” por sí solo no es una instrucción suficiente. Para un plano vertical fijo sin recorrido, pedir al menos 1080 × 1920; con movimiento, pedir las dimensiones calculadas, que pueden excederlo en ambos ejes. Las capas deben compartir coordenadas y escala visual; pueden exportarse recortadas si se registran sus offsets.
- **Solape:** cada capa lejana continúa por detrás de la cercana; nunca cortar una capa justo donde empieza la siguiente.
- **Transparencia:** PNG RGBA con alfa real y bordes suaves. Un tablero gris/blanco dentro de los píxeles no es transparencia.
- **Personajes:** pose sostenida + respiración + balanceo como base; separar piezas con pivote y solape solo cuando haya un gesto. Ocultar los pies en caminatas limitadas.
- **Atmósfera:** polvo, viento, luz y sombra deterministas y discretos, al servicio de un beat.

## Animación limitada para primeros planos

### Cambio progresivo de expresión

Mostrar dos o tres ilustraciones del mismo personaje en el mismo plano, cada una con una expresión más avanzada (por ejemplo, Agar serena → sonrisa leve → alegría visible). Mantener **idénticos** posición y tamaño de la cabeza, mirada, ropa, fondo, cámara, paleta y dirección de luz. La variación debe concentrarse en ojos, cejas y boca; si el resto salta entre imágenes, la transición se percibe como un error.

- Sincronizar cada cambio con una pausa, palabra o giro emocional de la voz. Sostener cada imagen lo suficiente para que se lea la expresión.
- Usar corte breve, fundido corto o una bajada momentánea de luz entre variantes según la escena. Revisar los fotogramas intermedios: un fundido largo puede superponer dos caras y producir una doble imagen.
- Pedir las variantes como un **set registrado**, con el mismo lienzo y encuadre. `public/assets/characters/agar/agar-closeup-warm-desert-light.png` sirve como referencia de estilo y primera expresión; las otras variantes todavía no existen. Al ser un primer plano compuesto con fondo, cambiar toda la imagen exige coincidencia exacta del escenario. Si no se logra, preparar una base fija y variantes de rostro/cabeza con alfa real.

### Movimiento localizado para diálogo

Sostener casi inmóvil el plano y animar solo una pieza que concentra la atención, como la boca de un personaje que habla. Preparar una base sin boca dibujada encima, o una zona limpia para cubrirla, y 2–4 formas de boca transparentes registradas en el mismo lugar (cerrada, abierta y una o dos intermedias). Cambiarlas al ritmo de sílabas y pausas de una **voz de personaje**; no hace falta reproducir cada fonema. Un parpadeo o gesto mínimo puede acompañar, pero la acción principal debe seguir legible.

- La boca debe conservar estilo, color, perspectiva y sombra del rostro. Verificar bordes y solape sobre varios cuadros; una pieza pegada sin integración rompe la ilusión.
- Si la pista es narrador externo y el personaje no habla en la escena, no mover su boca como si dijera esa narración. Decidir primero quién habla y marcar cualquier diálogo dramatizado como tal en el guion.
- Separar solo la pieza que el plano necesita. También sirve para una mano, un objeto o una tela en movimiento sobre un encuadre quieto; el resto del arte puede permanecer fijo.
- Estas técnicas son opciones para futuros planos aprobados, no una orden de rehacer HIST-001 ni de generar variantes sin revisión de arte.

## Seres celestiales y lo sobrenatural

Representar lo celestial según la historia y con sobriedad. Un ángel puede aparecer como una silueta recortada por una luz posterior, una sombra proyectada o una presencia luminosa sugerida. No usar alas, halos, rasgos de querubín ni una figura humana detallada como solución automática: decidirlo para cada relato.

La oscuridad y el contraste crean misterio, pero la escena debe seguir siendo amable de mirar y la acción debe entenderse sin depender de efectos intensos.

## Color y luz

Partir de paisajes terrosos y apagados para los escenarios, con sombras profundas y luz cálida reservada para guiar la mirada o señalar un cambio emocional. Ajustar la paleta a cada episodio; esta guía no impone colores exactos.

## Cierre de marca reutilizable

- Todos los Reels terminan con la marca de Ismael después del remate. **Desde 2026-11-17 (decisión de la persona, ver `docs/investigacion/RETENCION-REELS.md`):** sting y símbolo de **~1 s**, integrados sobre el último plano y sin pantalla negra aparte, para no romper el bucle. No hay CTA hablado; la invitación va en el copy. HIST-001 y HIST-002 conservan su placa aprobada de 3 s.
- Sobre el último plano del episodio: resplandor tenue y oscurecimiento parcial detrás del símbolo oficial claro de Ismael. No recrear ni deformar el logo. La placa de 3 s con fondo oscuro cálido propio es la de HIST-001 y HIST-002.
- Mantener la animación contenida y consistente: entrada suave del símbolo con un leve acercamiento y una pausa breve para que se reconozca.
- Sincronizar el mismo sonido de marca con la aparición del símbolo. Para el sting de ~1 s, preparar una versión corta (≈1–1,5 s con salida suave) del mismo sonido; conservar el original descargado y documentar la licencia. No sustituirlo por un efecto distinto en cada episodio.
- El sting y el sonido forman parte de una plantilla reutilizable común a todos los episodios; la transición de entrada puede variar según la historia.
- Sonido elegido para la firma recurrente: `public/assets/audio/sfx/mixkit-orchestral-happy-prompt-636.wav` (4,05 s originales). Existe una versión de hasta 3 s para la placa anterior; la versión de ~1 s se prepara en el plan del primer episodio que la use. La persona aprobó usarlo como sonido común; revisar que el recorte y la mezcla funcionen en el render de revisión.
- **Marca de agua (opcional, pendiente de diseño):** el símbolo de Ismael pequeño y semitransparente durante el video, fuera de las zonas de interfaz. El logo propio no reduce el alcance en Instagram.

## Aplicación en el flujo

- **Ideas e investigación:** no inventar imágenes como hechos bíblicos; separar lo que narra el texto de las decisiones visuales.
- **Guion:** escribir para una narración clara; no meter indicaciones de cámara o arte en el texto narrado. Registrar aparte la escena del gancho, el título en pantalla, los giros, la revelación y el remate en bucle que conduce al sting de marca (estructura en `docs/FLUJO-DE-TRABAJO.md`).
- **Gancho visual:** el primer fotograma muestra el caso moderno concreto (con la excepción explícita de "sin elementos modernos" solo para esa escena) o el momento más tenso del relato, con acción o rostro legible, que se entienda sin sonido y funcione como portada. Duración 0–3 s. Sin plano de establecimiento lento ni personaje diminuto. Preparar solo los personajes, fondos y objetos que esa acción requiera.
- **Ritmo:** un evento visual cada 2–3 s (corte, movimiento de cámara, gesto con sprite, expresión, capa o texto clave), alternando escalas de plano. Los sprites marcan momentos (gancho, reacción a cada giro, revelación) y no deben mover todo de forma constante. Sobre animación limitada con sprites (12 fps en "doses", anticipación y asentamiento, contraste de movimiento), ver §4.3 de `docs/investigacion/RETENCION-REELS.md`.
- **Zonas seguras (1080 × 1920):** dejar libres ~250 px arriba, ~670 px abajo y ~120 px a la derecha. Rostros y acción en el tercio central; subtítulos por encima del tercio inferior.
- **Desglose y recursos:** traducir cada beat a planos, capas, poses y elementos realmente necesarios. Evitar pedir arte que no se usa.
- **Arte:** preparar capas reutilizables y fondos del tamaño que requiera el movimiento de cámara; dejar vacíos donde irán personajes y textos.
- **Producción:** buscar profundidad con desplazamientos de capas, movimientos suaves y encuadres; no añadir efectos por decoración.

Todo workflow o skill propio del proyecto que genere o revise historias, guiones, recursos visuales o animación debe consultar esta dirección visual cuando esa etapa afecte la imagen. Las skills oficiales de Remotion son referencias técnicas y no se editan para incluir criterios específicos de Ismael.
