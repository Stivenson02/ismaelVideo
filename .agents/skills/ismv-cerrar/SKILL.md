---
name: ismv-cerrar
description: Crea el documento de entrega de un video Ismael con el copy listo para Instagram (Reels) y YouTube (Shorts) —título y descripción de cada red—, el MP4 de publicación sin etiqueta de revisión, la portada y el estado de publicación. Usar después de que la persona apruebe la revisión; no publica ni sube archivos.
---

# ISMV Cerrar

Prepara el paquete local de entrega de una historia revisada. La salida principal es un Markdown con todo lo que la persona copia y sube a cada red, más las rutas del MP4 y de la portada. Cada video se publica en **Instagram (Reels)** y en **YouTube (Shorts)** con el mismo MP4 vertical.

## Entrada

- Recibe un código `HIST-###` o un nombre inequívoco registrado en `docs/episodes/INDEX.md`.
- Debe existir un render concreto y una revisión aprobada por la persona. Si la revisión está pendiente, no marques el video como aprobado; informa el paso de revisión requerido.
- **Render de publicación:** se sube un MP4 sin la etiqueta "ANIMATIC DE REVISIÓN · VOZ TEMPORAL", por ejemplo `public/videos/ismael-NNN-<slug>-publicacion.mp4`.
  - Si la composición tiene la variante sin etiqueta (`<Composición>Publicacion`, con el script `render:<slug>-publicacion`), renderízala.
  - Si no la tiene, agrégala: es la misma composición con la etiqueta apagada, sin otro cambio de contenido.
  - El MP4 de revisión no se sube.
- **Portada:** busca la portada vertical aprobada en `public/assets/social/<hist>/`.
  - Si solo existe la imagen guía (`public/assets/concepts/episodes/<episodio>/`), puedes componer una **propuesta** con el título y el símbolo oficial, en una `Still` de Remotion. Queda pendiente de aprobación.
  - No inventes una aprobación.

## Fuentes

Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/episodes/INDEX.md`, el documento del episodio, el plan ejecutado, el informe de revisión y `docs/DIRECCION-VISUAL.md` cuando afecte el copy o el cierre.

Confirma en disco que existen el MP4 y la portada indicados. Usa el archivo aceptado más reciente; no adivines ni renombres renders.

## Entrega

Crea `docs/deliveries/<HIST-###>-copy-redes.md` con:

- código y título de la historia;
- estado de revisión y cualquier condición pendiente para publicar;
- ruta relativa y ruta absoluta de Windows del **MP4 de publicación**, identificadas como rutas locales y no URL pública, con formato y duración (1080 × 1920 sirve para Reels y Shorts);
- ruta de la portada vertical, o su estado (aprobada, propuesta o pendiente). Para Shorts, la miniatura es la portada si la app permite subirla; si no, un fotograma sugerido del video, con su segundo;
- **Instagram (Reels):** un caption listo para copiar:
  - el gancho en la primera línea, que es lo que se ve antes de "más";
  - la historia en dos o tres frases;
  - la enseñanza;
  - la referencia bíblica;
  - la invitación (comentar, compartir o seguir);
  - 3–5 hashtags pertinentes;
- **YouTube (Shorts):**
  - un **título** de hasta 100 caracteres, que empiece por el gancho y nombre la historia o el pasaje; opcionalmente, un título alternativo;
  - una **descripción** lista para copiar: las dos primeras líneas con el gancho y la historia, después la enseñanza, la referencia y la invitación (comentar o suscribirse), y al final 3 hashtags (`#Shorts` es opcional);
  - **etiquetas** separadas por comas, de hasta **500 caracteres** (YouTube suma comillas a las que tienen espacios; deja margen y cuenta con un script). Van los nombres de los personajes y el pasaje, sus variantes sin tilde y con erratas comunes, el tema, una frase clave de la cita y la marca;
- notas para quien publica:
  - la enseñanza es una aplicación del relato, no una cita;
  - qué decide cada red: miniatura y etiquetas de contenido generado con IA o voz sintética, si la plataforma las pide (revisar en la app; no afirmes requisitos que no comprobaste);
- la fecha de preparación.

**Cómo escribir el copy:**

- Escribe en el idioma y tono de la marca. Los dos textos cuentan lo mismo con la extensión de cada red.
- Conserva el guion aprobado. Usa solo citas textuales con su referencia; no conviertas paráfrasis en citas.
- Evita las palabras que el guion quitó por sensibles en redes (por ejemplo, "morir" o "quemar").
- Si la narración es una voz de IA (Fish), los dos textos terminan con una línea breve que lo declara, por ejemplo "Narración con voz generada por IA.", porque los términos de Fish lo piden.
- No anuncies la descarga de Ismael mientras la app no esté publicada. No añadas afirmaciones teológicas nuevas ni textos que contradigan el episodio.

## Testimonios

- El copy cuenta la historia con el alias (o el nombre, si está autorizado), fiel a lo que la persona escribió. Sin promesas ni consejos médicos, y sin datos que la autorización no cubra.
- Indica "Testimonio real" y, si aplica, "nombre cambiado para proteger su identidad" y "voz recreada", en Instagram y en YouTube.
- El gate de publicación exige la autorización escrita, que debe cubrir las dos plataformas, y la revisión previa de la persona cuando se pactó. Si falta, el estado es **publicación pendiente: autorización**.

## Gate de publicación

- Distingue la aprobación creativa del permiso para publicar cada arte, música, efecto o voz.
- **Voz Fish:** solo es publicable si se generó con un plan pago que dé uso comercial y si la voz elegida lo permite. Una voz "de uso libre" generada con la cuenta gratuita sigue siendo de uso no comercial (`public/assets/audio/README.md`). Si no consta, el estado es **publicación pendiente: voz**.
- El paquete incluye una portada vertical propia del episodio. La imagen guía puede vivir en `public/assets/concepts/episodes/<episodio>/`; el arte aprobado para publicar va en `public/assets/social/<hist>/` y usa el símbolo oficial, nunca un logo generado.
- Si el informe o las fuentes registran derechos sin confirmar, crea el documento de copy, pero etiqueta el estado **listo para revisión de copy; publicación pendiente** y especifica el recurso y la decisión pendiente. No declares el MP4 listo para publicar.
- No elimines, alteres ni sustituyas el render aprobado. No subas el video, no publiques el copy, no envíes mensajes y no registres el episodio como publicado.
- La persona conserva la decisión final para aprobar el copy y publicar. Actualiza el índice solo para reflejar con precisión la entrega del copy y los bloqueos, nunca para inferir una aprobación o publicación.

## Resultado

Entrega el enlace al Markdown local, los dos copys listos para copiar, el título de YouTube y las rutas del MP4 y de la portada. Resume cualquier condición pendiente. No arranques servidores, no ejecutes pruebas y no hagas commits.
