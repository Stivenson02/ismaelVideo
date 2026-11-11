# Catálogo y convención de archivos

`public/assets/` es la biblioteca fija de recursos del estudio. Los nombres de archivo van en minúscula, sin espacios ni tildes. Las generaciones completas que solo sirven como referencia se guardan en `concepts/`; no se tratan como capas listas para animar.

## Organización

- `characters/<personaje>/`: arte de personajes y referencias.
- `backgrounds/<escenario>/`: fondos completos y sus capas, que pueden ser panorámicos o mayores que el cuadro vertical.
- `props/`: objetos aislados reutilizables.
- `concepts/episodes/<episodio>/`: imágenes guía de escenas y conceptos de episodio.
- `concepts/biblical-stories/`: ideas visuales de historias todavía no producidas.
- `brand/`: logos e iconos oficiales copiados del proyecto Ismael.
- `audio/`: narración, música y efectos.

El Reel mantiene una ventana de cámara de 1080 × 1920; el arte de fondo no está limitado a esas dimensiones. Calcula su tamaño para cubrir el movimiento de cámara previsto (fórmula en [`technical/spikes/SPIKE-001-resultado.md`](technical/spikes/SPIKE-001-resultado.md)). Las capas actuales de `shur-spring/` miden 941 × 1672 (menos que la ventana), no tienen solape entre sí y su tablero es opaco: sirven para un animatic, no para recorridos de cámara.

| Recurso | Ruta esperada | Formato sugerido | Estado |
|---|---|---|---|
| Agar, cuerpo entero | `public/assets/characters/agar/agar-weary-traveler-full-body.png` | PNG | Recibido; alfa real, utilizable como capa única; no separado en piezas |
| Agar, primer plano | `public/assets/characters/agar/agar-closeup-warm-desert-light.png` | PNG | Recibido; referencia de expresión/estilo |
| Mensajero a contraluz | `public/assets/characters/angel/angel-warm-backlit-silhouette.png` | PNG | Recibido; ya tiene alfa real (figura aislada), utilizable como capa sin separar en piezas |
| Fondo completo del desierto | `public/assets/backgrounds/shur-spring/shur-spring-full-scene-reference.png` | PNG | Recibido; composición guía |
| Cielo | `public/assets/backgrounds/shur-spring/shur-spring-violet-dawn-sky.png` | PNG, capa candidata | Recibido; patrón de tablero opaco visible, falta transparencia real |
| Montañas distantes | `public/assets/backgrounds/shur-spring/shur-spring-distant-mountains.png` | PNG, capa candidata | Recibido; patrón de tablero opaco visible, falta transparencia real |
| Camino y fuente | `public/assets/backgrounds/shur-spring/shur-spring-path-and-spring.png` | PNG, capa candidata | Recibido; patrón de tablero opaco visible, falta transparencia real |
| Primer plano rocoso | `public/assets/backgrounds/shur-spring/shur-spring-rocky-foreground.png` | PNG, capa candidata | Recibido; patrón de tablero opaco visible, falta transparencia real |
| Escena guía de Agar en la fuente | `public/assets/concepts/episodes/ismael-origin/hagar-at-desert-spring.png` | PNG | Recibido; imagen compuesta de referencia |
| Ismael junto al pozo | `public/assets/concepts/episodes/ismael-origin/ishmael-by-desert-well.png` | PNG | Recibido como concepto; no requerido por el guion actual |
| Logo con nombre | `public/assets/brand/ismael-logo-wordmark.png` | PNG | Recibido desde el proyecto Ismael; fondo blanco |
| Símbolo transparente | `public/assets/brand/ismael-symbol.png` | PNG transparente | Recibido desde el proyecto Ismael |
| Símbolo variante clara | `public/assets/brand/ismael-symbol-light-variant.png` | PNG transparente | Recibido desde el proyecto Ismael |
| Iconos de aplicación | `public/assets/brand/ismael-app-icon-*.png` | PNG | Recibidos desde el proyecto Ismael |
| Narración episodio 01 | `public/assets/audio/narration/01-ismail-origin.wav` | WAV 48 kHz mono o estéreo | Pendiente de voz |
| Música episodio 01 | `public/assets/audio/music/01-desert-theme.wav` | WAV/MP3 autorizado | Opcional |
| Efectos episodio 01 | `public/assets/audio/sfx/` | WAV/MP3 autorizado | Opcional |

Las referencias visuales de otras historias que llegaron junto con los artes de Agar están organizadas en `public/assets/concepts/biblical-stories/` para retomarlas cuando se elija cada episodio.

## Nombres de capas
Usa prefijos consistentes: `agar-head`, `agar-torso`, `agar-arm-upper-l`, `agar-arm-lower-l`, `agar-hand-l`, `messenger-head`, `messenger-arm-right`. Si el formato fuente tiene capas, nómbralas así antes de exportar. Cada pieza debe tener suficiente solape para que las uniones no se abran al girar.

## Versiones
No reemplazar una entrega aprobada sin conservarla. Sufijos solo para variantes: `agar-v02.png`. El episodio usa su composición dentro de `src/video/episodes/ismael-origin/`; el render aprobado se guarda como `public/videos/ismael-001-origen.mp4` y una versión de revisión puede llevar `-review-01`.
