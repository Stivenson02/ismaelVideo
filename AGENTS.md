# Instrucciones para agentes — Ismael Studio

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Propósito
Ayudar a producir Reels bíblicos narrativos para la marca Ismael, de forma local, con escenas 2D por capas, guiones cuidados y MP4 verticales listos para revisión.

## Antes de cambiar código
- Lee `README.md`, `docs/INTRODUCCION.md` y el documento del episodio relacionado.
- Sigue los estados, aprobaciones y límites de `docs/FLUJO-DE-TRABAJO.md`; no planifiques ni ejecutes código desde un guion o arte que siga en revisión.
- Para el flujo creativo usa la skill `ismv-*` de la etapa solicitada. `ismv-ejecute` trabaja una sola historia `HIST-###` y exige el plan aprobado de ese mismo código.
- Este proyecto usa Next.js App Router. Esta versión puede tener cambios recientes: lee la guía aplicable en `node_modules/next/dist/docs/` antes de modificar rutas, layouts o estilos.
- Conserva el alcance local; no agregues despliegue remoto, login, base de datos ni servicios pagos sin que el usuario los pida.
- No arranques el servidor al terminar. No corras `npm run dev`.
- No hagas commits salvo petición explícita.

## Contenido y artes
- Sigue `docs/DIRECCION-VISUAL.md` al crear o revisar historias con decisiones visuales, prompts, artes, escenas o animación. Las skills propias del proyecto también deben enlazar esta guía cuando su flujo afecte lo visual; no modifiques las skills oficiales de Remotion para meter criterios de marca.
- `src/video/episodes/*/story.ts` define los beats y tiempos del relato; no mezcles ahí detalles visuales de implementación.
- Usa recursos de `public/assets/` mediante rutas estables y el catálogo de `docs/ASSET-CATALOG.md`.
- Los fondos pueden superar las dimensiones verticales del Reel; diseña su tamaño según el recorrido de cámara y las capas/parallax previstos.
- Si un arte todavía no existe, conserva un placeholder bien visible; no sustituyas personajes o el logo con imágenes inventadas.
- Mantén el cierre de marca en todos los Reels y reserva su duración en la composición.
- Distingue las citas bíblicas del texto narrado y de la dramatización. No presentes paráfrasis como cita textual.
- Los artes y el contenido narrativo pasan por revisión del usuario antes de dar un episodio por finalizado.

## Formato del Reel
Predeterminado: 1080 × 1920, 30 fps, MP4 H.264. Una duración entre 30 y 45 segundos es una guía inicial, no una regla rígida.

## Verificación
No agregues ni ejecutes pruebas salvo que el usuario pida probar/verificar. Si se pide, prefiere lint/build y un render de muestra local; registra errores y limitaciones sin modificar contenido fuera del alcance.
