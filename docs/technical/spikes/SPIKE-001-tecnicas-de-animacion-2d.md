# SPIKE-001 — Técnicas 2D para escenarios por capas

**Estado:** investigación y revisión técnica completadas; pendiente de validar el animatic y los artes con el usuario. Resultado en [`SPIKE-001-resultado.md`](SPIKE-001-resultado.md)  
**Propósito:** mapear técnicas de animación tradicional y cut-out que permitan dar sensación de movimiento con ilustraciones por capas, fondos extensos y cámara virtual en Remotion.

## Pregunta

¿Qué técnicas podemos combinar para recorrer escenarios más grandes que el cuadro vertical, crear profundidad y animar personajes con poco detalle y esfuerzo razonable?

## Áreas a investigar

- Cámara multiplano y parallax con planos a distintas distancias.
- Fondos panorámicos y desplazamiento lateral continuo para caminatas y viajes.
- Paneos, tilt, zoom y recorridos de cámara sobre un escenario de gran tamaño.
- Overdraw y márgenes de seguridad para que los movimientos no revelen bordes vacíos.
- Manejo de capas PNG con alfa real frente a tableros de transparencia falsos generados dentro de la imagen.
- Animación limitada: poses sostenidas, ciclos cortos de caminata, respiración, gestos y movimiento de tela.
- Personajes recortables: pivotes, articulaciones, solapes y cuándo conviene separar piezas.
- Capas de atmósfera: sombras proyectadas, contraluz, polvo, viento, agua y cambios de luz.
- Transiciones entre planos y reutilización de fondos sin que se sientan repetidos.
- Cómo organizar estas técnicas como componentes/escenas reutilizables en Remotion.

## Entregables esperados

1. Catálogo breve de técnicas con ejemplos visuales, esfuerzo, límites y cuándo usar cada una.
2. Recomendaciones para preparar arte: tamaño de fondos, solapes, pivotes, márgenes y capas.
3. Mapa técnica → tipo de escena (caminar, llegada, conversación, revelación, viaje, cierre).
4. Propuesta de un animatic técnico corto usando el paisaje de Shur como caso de estudio, sin convertirlo todavía en animación final.
5. Actualización de `DIRECCION-VISUAL.md` y de las skills propias de producción cuando estas existan.

## Criterios de cierre

- Definir cómo calcular el tamaño mínimo del fondo para un recorrido de cámara dado.
- Elegir un conjunto pequeño de técnicas reutilizables para el primer episodio.
- Registrar qué recursos actuales sirven como capas y cuáles son solo referencias compuestas.
- Identificar las capas recibidas con cuadrícula opaca y decidir si conviene limpiarlas o regenerarlas con alfa real.
- Mantener el flujo compatible con 1080 × 1920 como ventana de cámara, permitiendo arte de mayor tamaño.

## Fuera de alcance por ahora

- Rehacer o generar nuevos artes.
- Construir rigs complejos o una biblioteca completa de componentes.
- Cambiar la duración o el guion del episodio 01.
