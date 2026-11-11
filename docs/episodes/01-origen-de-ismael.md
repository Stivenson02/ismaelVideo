# Episodio 01 — Agar: vista y escuchada

**Código de historia:** HIST-001  
**Estado:** guion y render `review-02` aprobados por la persona; publicación pendiente de confirmar derechos de voz TTS  
**Referencia:** Génesis 16:7–14, RVR1960  
**Formato objetivo:** Reel vertical 1080 × 1920, 30 fps  
**Duración del animatic aprobado:** 1001 cuadros (~33,37 s): audio de referencia de 30,35 s y cierre fijo de 3 s  
**Idea central:** Agar atraviesa el desierto y es encontrada por el ángel del Señor. Su historia invita a recordar que Dios ve y escucha a quien atraviesa el dolor.

## Guion narrado — versión aprobada para HIST-001

### Gancho

¿Alguna vez has sentido que nadie ve lo que estás viviendo?

### Historia

Agar huía por el desierto. Allí, junto a una fuente, el ángel del Señor la encontró y la llamó por su nombre. Le preguntó de dónde venía y hacia dónde iba. Después le anunció que tendría un hijo, y que debía llamarlo Ismael, porque Dios había oído su aflicción.

### Enseñanza

La historia de Agar nos recuerda que, aun en medio del dolor, podemos hablar con Dios y confiar en que él nos ve y nos escucha.

### Invitación

Si estas historias te ayudan, síguenos para compartir más.

**Nota para futuras versiones:** cuando Ismael esté disponible en Play Store, se puede actualizar la invitación para incluir la descarga. No anunciarla antes de que esté publicada.

## Criterio editorial

- La narración es una adaptación breve; no presenta la pregunta del ángel como cita textual.
- La pregunta del ángel se narra en estilo indirecto; no es una cita textual de RVR1960.
- La enseñanza es una aplicación para la vida actual, no una promesa textual de que toda situación difícil tendrá una resolución inmediata.
- El pasaje incluye una instrucción del ángel a Agar para volver. Este borrador no la desarrolla; si se incorpora, tratarla con contexto y cuidado, sin convertirla en consejo general para personas en situaciones de daño.

## Desglose preliminar de escenas

| Beat | Contenido narrado | Función visual |
|---|---|---|
| Gancho | “¿Alguna vez has sentido que nadie ve lo que estás viviendo?” | Desierto amplio; Agar pequeña en cuadro; texto de gancho legible. |
| Huida | Agar huía por el desierto. | Recorte de Agar a distancia sobre el fondo de Shur; deriva lateral mínima, sin ciclo de piernas. |
| Encuentro | Junto a una fuente, el ángel del Señor la encontró y la llamó por su nombre. | Agar y mensajero recortados en plano medio; sombra estilizada breve y revelación a contraluz. |
| Pregunta | Le preguntó de dónde venía y hacia dónde iba. | Plano medio casi fijo; mantener la narración indirecta, sin comillas. |
| Promesa | Le anunció un hijo y el nombre Ismael, porque Dios había oído su aflicción. | Reacción de Agar con luz cálida discreta. No mostrar al bebé ni descendencia. |
| Enseñanza | Aun en medio del dolor, podemos hablar con Dios y confiar en que nos ve y escucha. | Pose serena y subtítulos legibles. |
| Invitación | Si estas historias te ayudan, síguenos para compartir más. | Cerrar la voz antes de la placa de marca reutilizable. |
| Cierre de marca | Sin narración adicional. | End card estándar de Ismael durante 3 s, con símbolo oficial y sting sincronizado. |

## Propuesta visual del episodio

- **Agar:** mujer humana de apariencia natural, adulta y digna, con ropa sencilla de viajera antigua. El diseño es una decisión de arte, no una descripción física afirmada por el pasaje.
- **Presencia del ángel:** sugerirla primero con una silueta humana oscura recortada por luz cálida; mantener el rostro sin detalle y evitar alas o halo. Una sombra larga en el suelo puede insinuar la presencia antes de mostrar la silueta.
- **Animación de este animatic:** usar `shur-spring-full-scene-reference.png` como fondo plano compuesto. No simular parallax con las capas actuales, porque muestran tablero opaco y no están registradas. Aplicar acercamientos y reencuadres cortos dentro de su cobertura; personajes con poses sostenidas, balanceo/deriva mínima.
- **Atmósfera:** tonos terrosos apagados y sombras profundas, con luz cálida como acento. Misteriosa y cinematográfica, sin oscurecer tanto que se pierdan Agar, los subtítulos o la acción.
- **Gancho:** plano amplio del desierto; acercamiento lento hacia Agar, aislada en el camino.
- **Encuentro:** paneo hasta la fuente; primero aparece la sombra, luego la silueta a contraluz.
- **Pregunta y promesa:** plano medio de Agar y la presencia; gesto mínimo del mensajero o movimiento de luz. Acercamiento a la reacción de Agar al oír la promesa.
- **Enseñanza e invitación:** sostener un plano sereno y permitir que se lean los subtítulos; terminar el CTA hablado antes del cierre común.
- **Cierre de marca:** 3 s con fondo oscuro cálido, símbolo claro de Ismael, fundido, acercamiento leve, pausa final y el sting corto. Reutilizar la misma placa en todos los Reels.

## Checklist de recursos

### Imprescindibles para un primer animatic

- [x] **Agar**, referencias de cuerpo entero y primer plano. Rutas: `public/assets/characters/agar/agar-weary-traveler-full-body.png` y `agar-closeup-warm-desert-light.png`. Son referencias recibidas; falta preparar poses/capas para animarla.
- [x] **Desierto con camino y fuente/pozo.** Para este animatic usar como fondo plano `public/assets/backgrounds/shur-spring/shur-spring-full-scene-reference.png`. Las capas separadas con tablero opaco no se usan; los fondos panorámicos con alfa real se requieren para el video final, no para este objetivo.
- [x] **Mensajero del Señor**, silueta a contraluz con alfa real: `public/assets/characters/angel/angel-warm-backlit-silhouette.png`. Puede usarse como recorte en el animatic; la sombra proyectada se prepara por separado.
- [x] **Audio de referencia TTS** generado y unido para ajustar ritmo: `public/assets/audio/narration/01-ismail-origin-reference.wav` (30,35 s, mono, 48 kHz). Es una referencia interna; no se considera voz final aprobada para publicar.
- [x] **Textos en pantalla:** no necesitan arte externo; la composición genera el gancho y los subtítulos del guion sincronizados a la voz temporal.

### Cierre de marca fijo

- [x] **Logo oficial de Ismael**, copiado del proyecto de la app. Usar `public/assets/brand/ismael-symbol-light-variant.png` en el cierre común sobre fondo oscuro cálido; no recrear la marca ni usar el wordmark sobre blanco.

### Opcionales

- [ ] Música con permiso de uso para publicar: `public/assets/audio/music/01-desert-theme.wav`.
- [ ] Efectos de ambiente discretos, por ejemplo viento o agua, con permiso de uso: `public/assets/audio/sfx/`.
- [ ] Capas separadas y poses alternativas para Agar y el mensajero si queremos animación cut-out más rica.
- El sonido de cierre está recibido en `public/assets/audio/sfx/mixkit-orchestral-happy-prompt-636.wav` (4,05 s); el plan aprobado crea una copia de hasta 3 s para usarla en el cierre fijo.

**No se necesita para este guion:** diseño del bebé Ismael, multitudes para representar descendencia incontable, ni varias locaciones. La historia puede contarse con Agar, el mensajero, el desierto y la fuente.

## Decisiones aprobadas para el animatic

- Usar a Agar y al mensajero como recortes completos, sin rig ni ciclo de caminata.
- Usar el fondo compuesto completo, con reencuadres/zoom de cobertura comprobada; no usar las capas con tablero opaco.
- Incluir el audio TTS de 30,35 s como voz temporal de la revisión local; no considerarlo voz final para publicar.
- Fijar la composición en 1001 cuadros: 911 cuadros para la secuencia narrada y 90 cuadros para la placa estándar.
- Reutilizar el cierre común de 3 s con el símbolo claro y la copia corta del sting.
- Mantener el CTA “síguenos”; no mencionar Play Store.

## Brief de ejecución aprobado — animatic

- **Estado:** ejecución completa y `review-02` aprobado por la persona. Antes de publicar, confirmar permiso de uso comercial para la voz TTS o sustituirla por una voz autorizada.
- **Guion:** aprobado en este documento. `src/video/episodes/ismael-origin/story.ts` conserva texto/estructura anterior; alinearlo palabra por palabra sin reescribir el guion.
- **Recursos:** Agar y mensajero están disponibles como recortes completos. Usar el fondo compuesto completo de Shur, no las capas que tienen cuadrícula opaca. La imagen de Agar en la fuente y el primer plano son referencias compuestas.
- **Audio:** usar la voz TTS de 30,35 s como audio temporal en el animatic. Conservar el sting Mixkit original de 4,05 s y crear la copia de hasta 3 s indicada en el plan. No añadir música ni ambientes.
- **Duración:** 911 cuadros narrados + 90 cuadros de end card = 1001 cuadros (~33,37 s) a 30 fps.
- **Video final:** necesitará nuevo gate para voz publicable, fondos/capas finales, licencia de voz y revisión de arte.
- **Render aprobado por la persona:** `public/videos/ismael-001-origen-review-02.mp4`. La aprobación creativa no reemplaza la confirmación de derechos de voz.

## Archivos de producción

- Composición: `src/video/episodes/ismael-origin/Composition.tsx`
- Beats y tiempos: `src/video/episodes/ismael-origin/story.ts`
- Planos y cámara: `src/video/episodes/ismael-origin/shots.ts`
- Cierre común: `src/video/brand/IsmaelOutro.tsx`
- Render de revisión: `public/videos/ismael-001-origen-review-02.mp4` (anterior: `-review-01`)
- Render final (pendiente de otro gate): `public/videos/ismael-001-origen.mp4`
