# Introducción

## Qué es Ismael Studio
Un pequeño taller audiovisual local para contar pasajes e historias bíblicas en videos breves de Instagram. Ismael es la marca de la app; los videos cierran con su logo oficial. El tono busca ser cálido, claro y respetuoso con el texto bíblico.

## Método visual
Usamos animación 2D minimalista de recortes, con una atmósfera cinematográfica, misteriosa y emocional. Apilamos fondos, personajes y elementos de primer plano; los paneos, acercamientos y desplazamientos entre capas dan movimiento sin dibujar cada cuadro. El formato vertical define la ventana de cámara, no el tamaño del fondo: los escenarios pueden ser panorámicos y recorrerlos es parte clave de la animación. Los detalles se mantienen simples y legibles en formato vertical.

Lo celestial se sugiere según la historia con siluetas, contraluz, sombras o luz; no se representa siempre de la misma forma. La dirección visual completa está en [`DIRECCION-VISUAL.md`](DIRECCION-VISUAL.md). Las skills propias del proyecto deben consultarla cuando trabajen una etapa visual.

## Flujo de producción
El flujo completo —idea, investigación, historia, guion, recursos, gate, plan, ejecución y revisión— está en [`FLUJO-DE-TRABAJO.md`](FLUJO-DE-TRABAJO.md). Esta lista resume la producción después de aprobar el plan:
1. **Desglose visual:** beat, duración, plano, personaje, acción, texto/audio y artes necesarios.
2. **Arte:** usar o preparar personajes, fondos, objetos y marca según el catálogo; la persona revisa artes nuevos.
3. **Animatic:** montar siluetas/ilustraciones en Remotion y revisar ritmo antes de pulir.
4. **Audio:** grabación humana o TTS local después de elegir y probar una voz. Música/efectos deben ser propios o contar con permiso de uso.
5. **Animación y subtítulos:** sincronizar la voz, mover piezas y cámara, mantener texto en zona segura.
6. **Render y revisión:** generar el MP4 del objetivo aprobado y revisar encuadre móvil, pronunciación, subtítulos, marca y audio.
7. **Entrega:** guardar el MP4 final en `public/videos/` y registrar la versión aprobada.

## Herramientas
- **Next.js:** panel de control local.
- **Remotion:** composición, previsualización y render programático.
- **React + TypeScript:** estructura reutilizable de escenas.
- **Audio:** archivos locales. La voz queda por definir. Kokoro.js corre localmente, pero la ficha oficial del modelo actual solo enumera voces en inglés estadounidense y británico; no lo tomamos como solución de narración en español. Podemos evaluar motores locales con voces españolas —Piper es un candidato— o grabación humana. Revisar la muestra y la licencia del modelo de voz antes de adoptarlo.

No se usa captura de pantalla para exportar. Remotion genera el video directamente. Next y Remotion son herramientas locales; el MP4 y el repositorio se pueden mover a otro equipo.

## Licencia y costos

Remotion publica una licencia gratuita para personas y equipos de hasta tres integrantes, incluso para uso comercial, según sus condiciones actuales. Para equipos más grandes puede aplicar una licencia paga. Revisa la [página oficial de licencia](https://www.remotion.dev/docs/license/pricing) antes de ampliar el equipo o cambiar el uso del estudio. No hay costo por render local en el flujo de este proyecto mientras aplique esa elegibilidad.

Kokoro.js funciona localmente con `kokoro-js`, pero la [ficha oficial del modelo](https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX) solo lista voces estadounidenses y británicas en inglés. No lo instalamos como voz del Reel en español.

## Estado actual
El flujo de producción vive en `docs/FLUJO-DE-TRABAJO.md` y sus siete skills ISMV están en `.agents/skills/`. El episodio 01 tiene un primer borrador narrativo y recursos visuales recopilados. `SPIKE-001` documenta qué piezas sirven para animatic y qué fondos deben limpiarse o regenerarse para el montaje final. Antes de planear código, hay que alinear los beats de `story.ts` con el guion aprobado y elegir el objetivo: animatic o video final.





