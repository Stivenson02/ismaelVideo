# Catálogo y convención de archivos

`public/assets/` es la biblioteca fija de recursos del estudio. Los nombres de archivo van en minúscula, sin espacios ni tildes. Las generaciones completas que solo sirven como referencia se guardan en `concepts/`; no se tratan como capas listas para animar.

## Organización

- `characters/<personaje>/`: arte de personajes y referencias.
- `backgrounds/<escenario>/`: fondos completos y sus capas, que pueden ser panorámicos o mayores que el cuadro vertical.
- `props/`: objetos aislados reutilizables.
- `concepts/episodes/<episodio>/`: imágenes guía de escenas y conceptos de episodio.
- `social/<episodio>/`: portadas y artes de publicación aprobados, con tipografía/logotipo oficiales compuestos desde recursos existentes.
- `concepts/biblical-stories/`: ideas visuales de historias todavía no producidas.
- `concepts/testimonios/estilo/`: referencias de estilo de la línea de testimonios (2D moderno; 4 imágenes recibidas el 2026-11-19). Se adjuntan en los prompts; no son arte para animar.
- `brand/`: logos e iconos oficiales copiados del proyecto Ismael.
- `audio/`: narración, música y efectos.

El Reel mantiene una ventana de cámara de 1080 × 1920; el arte de fondo no está limitado a esas dimensiones. Calcula ancho y alto por capa para cubrir el recorrido de cámara previsto (fórmula en [`technical/spikes/SPIKE-001-resultado.md`](technical/spikes/SPIKE-001-resultado.md)); “panorámico” sin altura calculada no basta. Para un plano vertical fijo pide al menos 1080 × 1920; para recorridos, pide la medida calculada más margen y solape. Las capas actuales de `shur-spring/` miden 941 × 1672 (menos que la ventana), no tienen solape entre sí y su tablero es opaco: sirven para un animatic, no para recorridos de cámara.

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
| Voz de referencia episodio 01 | `public/assets/audio/narration/01-ismail-origin-reference.wav` | WAV PCM 48 kHz mono | Recibida; TTS de 30,35 s para ritmo de animatic; no aprobada para publicación |
| Narración final episodio 01 | `public/assets/audio/narration/01-ismail-origin.wav` | WAV 48 kHz mono o estéreo | Pendiente de selección y aprobación de voz/licencia |
| Música episodio 01 | `public/assets/audio/music/01-desert-theme.wav` | WAV/MP3 autorizado | Opcional |
| Sonido de cierre de marca | `public/assets/audio/sfx/mixkit-orchestral-happy-prompt-636.wav` | WAV, original 4,05 s | Original descargado de Mixkit, se conserva intacto ([licencia](https://mixkit.co/license/modal/sfxFree/)) |
| Sting de cierre (uso) | `public/assets/audio/sfx/ismael-outro-sting.wav` | WAV 44,1 kHz estéreo, 2,90 s | Copia del original con salida suave; usado por `src/video/brand/IsmaelOutro.tsx` |
| Sting corto integrado (uso) | `public/assets/audio/sfx/ismael-outro-sting-short.wav` | WAV 44,1 kHz estéreo, 1,00 s | Derivado del original de Mixkit (primer segundo, salida suave desde 0,7 s) para el cierre de ~1 s de los Reels en bucle; lo usa `src/video/brand/IsmaelSting.tsx` (HIST-004). Misma licencia que el original |
| Efectos de ambiente episodio 01 | `public/assets/audio/sfx/` | WAV/MP3 autorizado | Opcionales |
| HIST-002, personajes y apoyos | `public/assets/characters/{abraham,sarah,abimelech,hook-02,gerar-support}/` | PNG RGBA | Recibidos desde Descargas; piezas con alfa real, en revisión. La mujer del gancho ya coincide con el frame; el recorte anterior de hombre se conserva como `person-old-man-unused.png`. Abraham y Abimelec tienen variantes de cuerpo entero; registro para transición pendiente de revisión. |
| HIST-002, pose reflexiva para el cierre | `public/assets/characters/hook-02/person-affected-reflective.png` | PNG | Arte “Thoughtful woman in warm cut-paper” recibido desde Descargas; nueva pose de medio cuerpo de la misma mujer, usada espejada en storyboard para mirar hacia el sobre. |
| HIST-002, prop y fondo del gancho | `public/assets/props/hook-02/`, `public/assets/backgrounds/hook-02/` | PNG RGBA / PNG | Mano-sobre aislado con alfa; fondo mesa 941 × 1672 opaco, candidato a animatic estático. |
| HIST-002, estudios de escenarios | `public/assets/concepts/episodes/abraham-sara-abimelech/background-studies/` | PNG | Cuatro panoramas 2172 × 724 y tres guías verticales de 941 × 1672 o 1024 × 1536. Son referencias/placas estáticas; cobertura insuficiente para cámara multiplano final. |
| HIST-002, frames guía | `public/assets/concepts/episodes/abraham-sara-abimelech/frames/` | PNG | Composiciones estáticas de 941 × 1672 para revisar, no son capas. Incluye el frame de Abimelec dormido `frame-abimelech-sleeping-amber-shadows.png` para animatic (push-in sobre placa opaca); el frame con sobre en escena bíblica está marcado `do-not-use`; también hay frame de susurro y cierre de Abimelec. |
| HIST-004, piezas procesadas | `backgrounds/{judah-town-square-night,tamar-father-house,hist-004-modern-bedroom,enaim-road}/`, `characters/{judah,tamar,hook-04,shelah,hist-004-crowd}/`, `props/hist-004/` | PNG RGBA + `*.set.json` / `*.layers.json` | Recibidas el 2026-11-19 y procesadas con `tools/ismv_prep.py`; en `review`. Las hojas de sprites miden 418 × 627 o 512 × 768 por cuadro: sirven para el animatic y necesitan ampliarse ×2 para el video final. Registro en `docs/episodes/04-juda-tamar-preproduccion.md` |
| HIST-004, narración | `audio/narration/04-juda-tamar-01-gancho.mp3` … `-10-cita-juda.mp3` + `.words.json` | MP3 de Fish | Recibida el 2026-11-19 (Joss; citas con Yuli y GABRIEL-VO) y medida. Referencia para el animatic: falta confirmar el plan y el permiso comercial |
| HIST-004, portada (guía) | `concepts/episodes/juda-tamar/instagram-cover-guide.png` | PNG 941 × 1672 | Guía recibida y aprobada |
| HIST-004, portada de Reels y Shorts | `social/hist-004/instagram-reel-cover.png` | PNG 1080 × 1920 | Propuesta compuesta el 2026-11-20 (guía + "GÉNESIS 38" + título + símbolo oficial, `Still` `JudaTamarCover`); pendiente de aprobación |
| HIST-002, portada de Instagram | `public/assets/concepts/episodes/abraham-sara-abimelech/instagram-cover-guide.png` → `public/assets/social/hist-002/instagram-reel-cover.png` | PNG | Guía recibida de 941 × 1672; falta aprobación y composición final de tipografía/símbolo oficial a 1080 × 1920. |

Las referencias visuales de otras historias que llegaron junto con los artes de Agar están organizadas en `public/assets/concepts/biblical-stories/` para retomarlas cuando se elija cada episodio.

## Bandeja de entrada y sets procesados (desde 2026-11-19)

Las imágenes crudas del generador se dejan en `art-inbox/<hist>/<ID>/` (no se versiona; ver `art-inbox/README.md`). La preproducción (`tools/ismv_prep.py`, método en [`technical/ANIMACION-POR-CAPAS.md`](technical/ANIMACION-POR-CAPAS.md)) escribe aquí las piezas listas:

| Tipo | Carpeta de salida | Archivos |
|---|---|---|
| Hoja de sprites | `characters/<personaje>/<set>/` | `<set>-<cuadro>.png` por cada cuadro (nombres de la tabla de entrega, p. ej. `modern-woman-m1-espera.png`) y `<set>.set.json` (lienzo, ancla, cuadros, registro y avisos) |
| Base de diseño | `characters/<personaje>/` | `<personaje>-…-base.png` (referencia; no se anima) |
| Set por ediciones | `characters/<personaje>/<set>/` | `<set>-base.png`, `<set>-pose-NN.png`, `<set>-face-<nombre>.png`, `<set>-face-<nombre>-on-pose-NN.png`, `<set>-blink.png`, `<set>.set.json` |
| Fondo por capas | `backgrounds/<escenario>/` | `<escenario>-l0.png` (lejana, opaca), `-l1.png`, `-l2.png`…, `<escenario>-full-reference.png`, `<escenario>.layers.json` |
| Prop | `props/<hist>/` | un PNG RGBA por objeto |
| Voz | `audio/narration/` | un audio de Fish por frase del guion de voz (`<NN-episodio>-NN-<tramo>.mp3`) y su `<archivo>.words.json` con los tiempos |

Todas las piezas de un set comparten el lienzo, así que se superponen sin reescalar. Los parches son lienzos completos transparentes salvo el rostro. Las hojas de QA y los videos de revisión quedan en `art-inbox/<hist>/<ID>/_qa/`.

## Sets para animación limitada

Para un cambio de expresión, agrupa las variantes bajo `characters/<personaje>/` con un nombre base y sufijos de expresión o número de pose. Registra en el checklist del episodio qué archivo es la base y el orden de aparición. Todas las variantes de un plano deben compartir dimensiones, encuadre, posición de rasgos, ropa, luz y fondo; no marques una variante como disponible hasta comprobar el archivo real. El primer plano actual de Agar es una referencia compuesta, no un set de tres expresiones terminado.

Para diálogo con boca animada, guarda la base limpia y las formas de boca como piezas separadas con transparencia real y el mismo sistema de coordenadas. Documenta posición de anclaje, tamaño, orden de capas y qué forma corresponde al reposo. Si la base tiene la boca pintada y no existe una zona limpia, registra la limpieza como recurso pendiente: superponer bocas sobre el dibujo actual puede dejar rasgos duplicados. Consulta `docs/DIRECCION-VISUAL.md` para decidir cuándo usar estas dos técnicas.

### Hojas de expresiones / sprites faciales

Una hoja de expresiones puede contener 6 rostros en cuadrícula 2 × 3 o hasta 9 en 3 × 3 para recortarlos como sprites y cambiar solo la cara sobre una base fija. Por cada set registra personaje, pose/ángulo, orden y nombre de expresiones, cantidad de filas/columnas, dimensiones de celda, anclaje y versión de la base. Conserva la hoja original de referencia y exporta cada rostro recortado como PNG RGBA con alfa real para composición. Un lienzo blanco ayuda como fondo de generación/recorte, pero sigue siendo opaco: retirar el fondo y limpiar halos antes de montar sobre otra escena. No clasificar la hoja como capas listas hasta confirmar continuidad, bordes, escala y recortes individuales.

Para el posible set de Labán en HIST-003, la propuesta inicial es un arte de referencia con 6 o 9 expresiones de la misma cara en celdas iguales; el fondo blanco puede facilitar separar las piezas, pero la entrega de montaje debe quedar transparente. La ficha y el guion aún están pendientes de aprobación, así que es una exploración futura y no un recurso encargado o aprobado.

## Nombres de capas
Usa prefijos consistentes: `agar-head`, `agar-torso`, `agar-arm-upper-l`, `agar-arm-lower-l`, `agar-hand-l`, `messenger-head`, `messenger-arm-right`. Si el formato fuente tiene capas, nómbralas así antes de exportar. Cada pieza debe tener suficiente solape para que las uniones no se abran al girar.

## Versiones
No reemplazar una entrega aprobada sin conservarla. Sufijos solo para variantes: `agar-v02.png`. El episodio usa su composición dentro de `src/video/episodes/ismael-origin/`; el render aprobado se guarda como `public/videos/ismael-001-origen.mp4` y una versión de revisión puede llevar `-review-01`.
