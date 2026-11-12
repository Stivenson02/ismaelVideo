---
name: ismv-cerrar
description: Crea el documento de entrega de un video Ismael con copy para redes, ruta local del MP4 y estado de publicación. Usar después de que la persona apruebe la revisión; no publica ni sube archivos.
---

# ISMV Cerrar

Prepara el paquete local de entrega de una historia revisada. La salida principal es un Markdown listo para que la persona copie el texto en redes y encuentre el MP4 aprobado.

## Entrada

- Recibe un código `HIST-###` o un nombre inequívoco registrado en `docs/episodes/INDEX.md`.
- Debe existir un render concreto y una revisión aprobada por la persona. Si la revisión está pendiente, no marques el video como aprobado; informa el paso de revisión requerido.
- Busca la portada vertical aprobada para Instagram en el episodio y confirma su ruta. Si todavía no existe, incluye la portada como recurso pendiente en el documento de entrega; no inventes una aprobación ni marques el paquete social completo.

## Fuentes

Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/episodes/INDEX.md`, el documento del episodio, el plan ejecutado, el informe de revisión humana y `docs/DIRECCION-VISUAL.md` cuando afecte el copy o el cierre.

Confirma en disco que existe el MP4 indicado por la revisión. Usa el archivo aceptado más reciente; no adivines ni renombres renders.

## Entrega

Crea `docs/deliveries/<HIST-###>-copy-redes.md` con:

- código y título de la historia;
- estado de revisión y cualquier condición pendiente para publicación;
- ruta relativa al MP4 dentro del proyecto y ruta absoluta de Windows, claramente identificadas como rutas locales y no URL pública;
- ruta de la portada visual aprobada para Instagram, o el estado pendiente si falta;
- un copy principal listo para copiar, con gancho, enseñanza bíblica, referencia y CTA vigente;
- hashtags breves y pertinentes, si aportan al canal;
- la fecha de preparación.

Escribe en el idioma y tono de la marca. Conserva el guion aprobado; no conviertas paráfrasis en citas bíblicas. No anuncies la descarga de Ismael mientras la app no esté publicada. No añadas afirmaciones teológicas nuevas ni textos que contradigan el episodio.

## Gate de publicación

- Distingue aprobación creativa del permiso para publicar cada arte, música, efecto o voz.
- El paquete de publicación incluye una portada vertical propia del episodio. La imagen guía puede vivir en `public/assets/concepts/episodes/<episodio>/`; el arte aprobado para publicar va en `public/assets/social/<episodio>/` y usa el símbolo oficial, nunca un logo generado.
- Si el informe o las fuentes registran derechos sin confirmar, crea el documento de copy, pero etiqueta el estado **listo para revisión de copy; publicación pendiente** y especifica el recurso y la decisión pendiente. No declares el MP4 listo para publicar.
- No elimines, alteres ni sustituyas el render aprobado. No subas el video, no publiques el copy, no envíes mensajes y no registres el episodio como publicado.
- La persona conserva la decisión final para aprobar el copy y publicar. Actualiza el índice solo para reflejar con precisión la entrega del copy y bloqueos, nunca para inferir una aprobación o publicación.

## Resultado

Entrega el enlace al Markdown local, el copy listo para copiar y la ruta del MP4. Resume cualquier condición pendiente. No arranques servidores, no ejecutes pruebas y no hagas commits.
