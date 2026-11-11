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

## Seres celestiales y lo sobrenatural

Representar lo celestial según la historia y con sobriedad. Un ángel puede aparecer como una silueta recortada por una luz posterior, una sombra proyectada o una presencia luminosa sugerida. No usar alas, halos, rasgos de querubín ni una figura humana detallada como solución automática: decidirlo para cada relato.

La oscuridad y el contraste crean misterio, pero la escena debe seguir siendo amable de mirar y la acción debe entenderse sin depender de efectos intensos.

## Color y luz

Partir de paisajes terrosos y apagados para los escenarios, con sombras profundas y luz cálida reservada para guiar la mirada o señalar un cambio emocional. Ajustar la paleta a cada episodio; esta guía no impone colores exactos.

## Aplicación en el flujo

- **Ideas e investigación:** no inventar imágenes como hechos bíblicos; separar lo que narra el texto de las decisiones visuales.
- **Guion:** escribir para una narración clara; no meter indicaciones de cámara o arte en el texto narrado.
- **Desglose y recursos:** traducir cada beat a planos, capas, poses y elementos realmente necesarios. Evitar pedir arte que no se usa.
- **Arte:** preparar capas reutilizables y fondos del tamaño que requiera el movimiento de cámara; dejar vacíos donde irán personajes y textos.
- **Producción:** buscar profundidad con desplazamientos de capas, movimientos suaves y encuadres; no añadir efectos por decoración.

Todo workflow o skill propio del proyecto que genere o revise historias, guiones, recursos visuales o animación debe consultar esta dirección visual cuando esa etapa afecte la imagen. Las skills oficiales de Remotion son referencias técnicas y no se editan para incluir criterios específicos de Ismael.
