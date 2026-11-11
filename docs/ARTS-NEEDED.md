# Artes necesarios — episodio 01

Los recursos iniciales ya se copiaron a `public/assets/`. Este checklist marca lo que ya está disponible y lo que hace falta para que quede listo para animación. No hace falta terminar todo antes de armar un animatic.

## 1. Agar — recibida, falta preparar capas/poses
- **Archivos:** `public/assets/characters/agar/agar-weary-traveler-full-body.png` y `agar-closeup-warm-desert-light.png`.
- Personaje de cuerpo entero en pose 3/4, mirando hacia la derecha (hacia quien se encontrará).
- Vestuario de viajera del antiguo Cercano Oriente, manto sencillo y coherente entre escenas; expresión cansada, digna, no caricaturesca.
- Para animación por capas: entregar cabeza, torso, brazo superior e inferior/mano por separado, idealmente con zonas ocultas bajo las articulaciones para que no aparezcan huecos al rotar.
- Si prefieres empezar simple, una ilustración completa con brazos separados es suficiente.

## 2. Ángel del Señor — silueta recibida con alfa real
- **Archivo:** `public/assets/characters/angel/angel-warm-backlit-silhouette.png`.
- La dirección aprobada para este episodio es sugerirlo primero con una sombra y luego con una silueta a contraluz; mantener el rostro sin detalle, sin alas ni halo.
- La imagen recibida ya es una figura aislada con transparencia real y sirve como capa única para el animatic. Para un gesto articulado o una sombra final ajustada al suelo harán falta piezas o arte adicional según el plano aprobado.

## 3. Escenario del desierto y fuente — capas iniciales recibidas
- **Carpeta:** `public/assets/backgrounds/shur-spring/`.
- Hay un fondo completo de referencia y capas candidatas de cielo, montañas, camino/fuente y primer plano. Las capas recibidas muestran un tablero blanco/gris opaco en los píxeles; falta generar o preparar transparencia real antes de componerlas.
- El Reel es vertical 9:16, pero los fondos pueden ser panorámicos o más grandes que 1080 × 1920 para permitir paneos, recorridos y acercamientos. Deben cubrir el encuadre durante todo el movimiento de cámara.
- Camino árido, fuente/pozo sencillo, horizonte despejado. Evitar elementos modernos.
- Entregar capas separadas si quieres parallax (cielo, montes, terreno/pozo). Una sola ilustración de fondo también sirve para el primer animatic.

## 4. Logo de Ismael — recibido para el cierre
- **Archivos:** `public/assets/brand/ismael-logo-wordmark.png`, `ismael-symbol.png` y variantes/iconos.
- Usar el logo oficial de la app, sin recrearlo ni cambiar proporciones o colores.
- El wordmark disponible tiene fondo blanco; los símbolos transparentes permiten más flexibilidad para elegir el fondo de cierre.
- El render puede quedar listo con una placa neutra temporal, pero el Reel no se considera final sin el logo recibido.

## 5. Audio — puede venir después
- Voz: `.wav` o `.mp3`, una lectura tranquila, cálida y clara. Ideal grabar seco, sin música, y mantener pausas entre frases.
- Si quieres probar voz generada, primero evaluamos Kokoro local con el mismo texto y escogemos timbre/pronunciación antes de automatizar episodios.
- Música/efectos: solo recursos propios o con licencia para publicar en Instagram. Sin audio aún podemos montar el animatic.

## Guía de exportación
- PNG transparente para personajes raster; SVG con `viewBox` para vectores.
- sRGB, sin texto incrustado que deba cambiarse luego; los subtítulos se agregan en la composición.
- Por cada personaje, añade una hoja con poses/expresiones o un dibujo rápido que indique qué piezas están separadas.
- No fuerces los fondos a 9:16. El tamaño del arte debe cubrir el recorrido previsto de cámara; el 9:16 corresponde a la ventana de salida.
