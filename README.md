# Ismael Studio

Estudio creativo local para producir Reels narrativos de Ismael con ilustración 2D por capas, movimiento de cámara, voz y música. El contenido final se renderiza como MP4 vertical; no se graba la pantalla y no depende de un despliegue web.

## Qué estamos construyendo

- Next.js es el panel local para organizar episodios y su estado.
- El panel se levanta con `npm run dev` en `http://localhost:3007`; su inicio muestra producciones desde `docs/episodes/INDEX.md` y las historias con plan pueden tener un storyboard previo a ejecución.
- Remotion es el escenario de composición, la previsualización y el render MP4.
- Las escenas usan ilustraciones propias en capas para reutilizar personajes, fondos y objetos.
- El montaje prioriza encuadres, acercamientos y movimientos suaves; no requiere animar cada cuadro.
- La voz y los efectos se preparan como archivos y se sincronizan en la composición.
- La narración se genera siempre en [Fish Audio, texto a voz](https://fish.audio/es/app/text-to-speech/) y se descarga al proyecto; los derechos de cada generación se registran antes de publicar.
- `docs/` es la fuente de contexto del proyecto para personas y otras AIs.

## Primera pieza

`docs/episodes/01-origen-de-ismael.md` contiene el guion de trabajo basado en Génesis 16:7–14 (RVR1960), centrado en el anuncio del nombre Ismael. Es una adaptación narrativa corta, no una lectura completa del pasaje. El cierre de cada Reel reserva un espacio para el logo oficial.

## Carpetas

- `src/app/`: panel Next.js.
- `src/video/`: composiciones y lógica temporal de Remotion.
- `public/assets/characters/`: personajes y piezas separadas.
- `public/assets/backgrounds/`, `props/`, `audio/`, `brand/`: biblioteca reutilizable.
- `public/videos/`: MP4 finales renderizados; no se versionan por defecto.
- `docs/`: visión, flujo, guías de arte, inventario y guiones.

## Uso local

```bash
npm run dev                 # panel del estudio
npm run remotion            # previsualizar la composición
npm run render:ismael-origin # exportar el Reel a public/videos/
```

La instalación de dependencias se hace una sola vez con `npm install`. Este proyecto está pensado para trabajar localmente. El repositorio puede sincronizarse con GitHub; los videos exportados, modelos descargados y material bruto se excluyen de Git para no inflar el repositorio.

## Skills para agentes\n\nSe instalaron en `.agents/skills/` las 13 skills oficiales de Remotion v4.0.542 (creación, composición, marcado, audio, captions, Studio, render, licencia y otras). El archivo `AGENTS.md` indica el contexto del proyecto y cuándo consultarlas.\n\n## Acuerdos de trabajo

1. Antes de crear arte final, confirmar los diseños de personajes y marca en `docs/ARTS-NEEDED.md`.
2. Guardar artes con los nombres y formatos de `docs/ASSET-CATALOG.md`.
3. Mantener separados el contenido narrativo (`story.ts`) y el diseño de composición.
4. No inventar detalles bíblicos como si fueran citas. Marcar cualquier dramatización en el guion.
5. No reemplazar ni generar el logo oficial; dejar el cierre en espera hasta recibir el arte.
6. No iniciar un servidor al terminar una tarea de código. El usuario lo ejecuta cuando quiera.
7. No crear commits salvo que el usuario lo pida.

## Contexto rápido para otra AI

Empieza por este archivo y luego lee `docs/INTRODUCCION.md`, el episodio que estés editando y `docs/ASSET-CATALOG.md`. Sigue las instrucciones de `AGENTS.md`. Si un recurso falta, no lo inventes: registra su ruta esperada y pide el arte al usuario cuando el trabajo llegue a ese punto.

