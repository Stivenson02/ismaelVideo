# Dirección visual — Ismael Studio

## Identidad

Los Reels de Ismael usan **animación 2D minimalista de recortes**, con una atmósfera bíblica cinematográfica, misteriosa y emocional. La referencia a un tono de cómic oscuro sirve como orientación de ánimo; no se copian personajes, diseños ni recursos gráficos de una franquicia existente.

La imagen debe ser sencilla de producir y fácil de leer en pantalla vertical. El misterio acompaña el relato; no debe volverlo lúgubre, violento ni confuso.

## Técnicas de animación

- Construir escenas con planos ilustrados apilados: fondo, plano medio, personajes y primer plano.
- Tratar el formato vertical del Reel como la ventana de cámara, no como el tamaño máximo del arte. Los fondos pueden ser panorámicos, extra anchos o más altos que el cuadro para permitir recorridos de cámara.
- Diseñar el tamaño del fondo según el recorrido previsto: debe cubrir toda la ventana durante paneos y acercamientos, sin revelar bordes vacíos. Una composición puede recorrer un escenario más grande que 1080 × 1920.
- Usar movimiento de cámara, parallax y entradas/salidas para dar vida al escenario sin animar cada cuadro.
- Diseñar personajes como recortes reutilizables. Separar solo las piezas que la acción necesite; empezar con poses claras y movimientos suaves.
- Mantener pocos detalles, siluetas legibles y composición con espacio para subtítulos y textos.
- Reservar cambios de luz, sombra y movimiento para los momentos narrativos importantes.

## Reglas técnicas de capas y cámara

Resultado del [SPIKE-001](technical/spikes/SPIKE-001-resultado.md); allí están el detalle, los ejemplos y la fórmula completa.

- **Cámara multiplano:** una sola cámara (x, y, zoom) mueve cada capa según su profundidad `p`: cielo ≈ 0,1, montañas ≈ 0,3, plano medio ≈ 0,7, personajes 1,0 y primer plano ≈ 1,3.
- **Tamaño de fondo:** calcular los extremos del encuadre de cada capa a lo largo de todo el plano, añadir margen y luego la densidad de píxeles necesaria para el zoom máximo. Como estimación conservadora por eje: `(ventana + p·|recorrido|)/s_min + 2m`, con `m ≈ 48 px` como punto de partida. La fórmula exacta y sus supuestos están en el spike. Las capas deben compartir coordenadas y escala visual; pueden exportarse recortadas si se registran sus offsets.
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

- Todos los Reels terminan con la misma placa animada de Ismael, después del remate del episodio (con invitación hablada si el guion la incluye). Mantener su duración entre 2 y 3 segundos.
- Usar un fondo oscuro cálido y sencillo, con un resplandor tenue detrás del símbolo oficial claro de Ismael. No recrear ni deformar el logo.
- Mantener la animación contenida y consistente: fundido del fondo, entrada suave del símbolo con un leve acercamiento y pausa final para que se reconozca.
- Sincronizar el mismo sonido breve de marca con la aparición del símbolo. El sonido puede durar hasta 3 segundos; conservar el original descargado y documentar la licencia. No sustituirlo por un efecto distinto en cada episodio.
- La placa y el sonido forman parte de una plantilla reutilizable común a todos los episodios; la transición de entrada y el CTA hablado, cuando se use, pueden variar según la historia y el estado de la app.
- Sonido elegido para la firma recurrente: `public/assets/audio/sfx/mixkit-orchestral-happy-prompt-636.wav`. Su duración original es 4,05 segundos; preparar una versión de uso de máximo 3 segundos con salida suave. La persona aprobó usarlo como sonido común; revisar que el recorte y la mezcla funcionen con la placa en el render de revisión.

## Aplicación en el flujo

- **Ideas e investigación:** no inventar imágenes como hechos bíblicos; separar lo que narra el texto de las decisiones visuales.
- **Guion:** escribir para una narración clara; no meter indicaciones de cámara o arte en el texto narrado. Registrar aparte la mini escena del gancho, el puente al relato, la imagen de enseñanza y el remate que conduce a la placa.
- **Gancho visual:** dar a la pregunta o situación cotidiana una acción animada breve, literal o evocadora. Su duración orientativa es de 3–4 segundos, ajustada a la voz. Preparar solo los personajes, fondos y objetos que esa acción requiera, con lectura inmediata en móvil.
- **Desglose y recursos:** traducir cada beat a planos, capas, poses y elementos realmente necesarios. Evitar pedir arte que no se usa.
- **Arte:** preparar capas reutilizables y fondos del tamaño que requiera el movimiento de cámara; dejar vacíos donde irán personajes y textos.
- **Producción:** buscar profundidad con desplazamientos de capas, movimientos suaves y encuadres; no añadir efectos por decoración.

Todo workflow o skill propio del proyecto que genere o revise historias, guiones, recursos visuales o animación debe consultar esta dirección visual cuando esa etapa afecte la imagen. Las skills oficiales de Remotion son referencias técnicas y no se editan para incluir criterios específicos de Ismael.
