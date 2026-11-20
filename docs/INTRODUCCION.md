# Introducción

## Qué es Ismael Studio
Un pequeño taller audiovisual local para contar pasajes e historias bíblicas en videos breves de Instagram. Ismael es la marca de la app; los videos cierran con su logo oficial. El tono busca ser cálido, claro y respetuoso con el texto bíblico.

Desde 2026-11-19 hay una segunda línea: **testimonios animados**. Son historias reales que las personas escriben, convertidas en un guion en primera persona (casi siempre anónimo) y animadas en estilo 2D moderno con la misma técnica. Guía, autorización y flujo en [`testimonios/README.md`](testimonios/README.md).

Desde 2026-11-19 está **en estudio** una tercera línea: **YouTube para niños y familia**. Es un programa largo (8–12 min, 16:9) para niños de 6 a 10 años, con un trío fijo de personajes que recorre historias bíblicas a partir de problemas de la vida real. Todavía no entra al flujo de producción. Investigación, propuestas y decisiones pendientes en [`youtube/README.md`](youtube/README.md).

## Método visual
Usamos animación 2D minimalista de recortes, con una atmósfera cinematográfica, misteriosa y emocional. Apilamos fondos, personajes y elementos de primer plano; los paneos, acercamientos y desplazamientos entre capas dan movimiento sin dibujar cada cuadro. El formato vertical define la ventana de cámara, no el tamaño del fondo: los escenarios pueden ser panorámicos y recorrerlos es parte clave de la animación. Los detalles se mantienen simples y legibles en formato vertical.

Lo celestial se sugiere según la historia con siluetas, contraluz, sombras o luz; no se representa siempre de la misma forma. La dirección visual completa está en [`DIRECCION-VISUAL.md`](DIRECCION-VISUAL.md). Las skills propias del proyecto deben consultarla cuando trabajen una etapa visual.

## Flujo de producción
El flujo completo —idea, investigación, historia, guion, recursos, gate, plan, ejecución y revisión— está en [`FLUJO-DE-TRABAJO.md`](FLUJO-DE-TRABAJO.md). Esta lista resume la producción después de aprobar el plan:
1. **Desglose visual:** beat, duración, plano, personaje, acción, texto/audio y artes necesarios.
2. **Arte:** usar o preparar personajes, fondos, objetos y marca según el catálogo; la persona revisa artes nuevos.
3. **Animatic:** montar siluetas/ilustraciones en Remotion y revisar ritmo antes de pulir.
4. **Audio:** generar la narración en Fish Audio después de aprobar el guion; descargar el archivo local y sincronizarlo con escenas y subtítulos. Música/efectos deben ser propios o contar con permiso de uso.
5. **Animación y subtítulos:** sincronizar la voz, mover piezas y cámara, mantener texto en zona segura.
6. **Render y revisión:** generar el MP4 del objetivo aprobado y revisar encuadre móvil, pronunciación, subtítulos, marca y audio.
7. **Entrega:** guardar el MP4 final en `public/videos/` y registrar la versión aprobada.

## Herramientas
- **Next.js:** panel de control local.
- **Remotion:** composición, previsualización y render programático.
- **React + TypeScript:** estructura reutilizable de escenas.
- **Audio:** [Fish Audio, texto a voz](https://fish.audio/es/app/text-to-speech/) es la herramienta fija elegida para narrar los episodios. El audio descargado se trabaja como archivo local. HIST-001 tiene una voz Fish temporal; antes de publicar cualquier episodio hay que acreditar los derechos comerciales de la generación y la voz usadas. El procedimiento y las fuentes están en `public/assets/audio/README.md`.

No se usa captura de pantalla para exportar. Remotion genera el video directamente. Next y Remotion son herramientas locales; el MP4 y el repositorio se pueden mover a otro equipo.

## Licencia y costos

Remotion publica una licencia gratuita para personas y equipos de hasta tres integrantes, incluso para uso comercial, según sus condiciones actuales. Para equipos más grandes puede aplicar una licencia paga. Revisa la [página oficial de licencia](https://www.remotion.dev/docs/license/pricing) antes de ampliar el equipo o cambiar el uso del estudio. No hay costo por render local en el flujo de este proyecto mientras aplique esa elegibilidad.

La elección de Fish Audio reemplaza la evaluación pendiente de motores locales de narración. La composición y el render siguen funcionando localmente con el audio descargado.

## Estado actual
El flujo de producción vive en `docs/FLUJO-DE-TRABAJO.md`: ocho skills llevan la historia desde la idea hasta el cierre de entrega y `ismv-producciones` lista su estado. HIST-001 tiene guion y render `review-02` aprobados por la persona. Antes de publicar se deben confirmar los derechos de uso comercial de su voz Fish o regenerarla en Fish bajo condiciones autorizadas.





