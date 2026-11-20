---
name: ismv-preproduccion
description: Convierte los artes crudos y la voz de una historia en piezas listas para animar (sets registrados, capas, parches, tiempos de voz) y arma la hoja de animación por cuadro antes del gate.
---

# ISMV Preproducción

Toma lo que la persona generó con el documento de prompts y lo deja listo para que la animación solo tenga que ensamblar: piezas con alfa real y mismo lienzo, manifiestos, tiempos de voz y una hoja de animación cuadro a cuadro. No escribe código de Remotion ni aprueba artes.

## Fuentes

- Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/DIRECCION-VISUAL.md`, `docs/technical/ANIMACION-POR-CAPAS.md`, `docs/ASSET-CATALOG.md`, el episodio, su checklist de recursos y su documento de prompts (`docs/episodes/<slug>-prompts.md`, con la tabla de entrega).
- Herramienta: `tools/ismv_prep.py`. Si falta una dependencia: `python -m pip install -r tools/requirements.txt`.
- Voz: siempre [Fish Audio](https://fish.audio/es/app/text-to-speech/), generada por la persona. Consulta `public/assets/audio/README.md` para registrar voz, fecha, plan y derechos.

## Entrada

- Código `HIST-###` con guion aprobado y recursos en curso.
- Imágenes en `art-inbox/<hist>/<ID>/` con los nombres de la tabla de entrega. Si la persona las pega en el chat, guárdalas tú en esa ruta y con ese nombre; pregunta solo si no es inequívoco a qué prompt corresponde cada una.
- Narración descargada de Fish en `public/assets/audio/narration/`, cuando exista.

## Pasos

1. **Inventario.** Cruza la bandeja con la tabla de entrega: qué llegó, qué falta y qué sobra. Ejecuta `audit` sobre lo recibido y mira las imágenes. No proceses una pose ni una expresión si su base no está aprobada; repórtalo.
2. **Procesar personajes** hacia la ruta del checklist (`public/assets/characters/<personaje>/<set>/`):
   - **hojas de sprites** con `sprites --grid CxF --names …`, con los nombres de la tabla de entrega;
   - **bases de diseño** con `key`;
   - **ediciones**, si las hay, con `set`.

   Lee el resumen. Un cuadro que cambia más del 30 % respecto del anterior, un registro fallido o un cuadro chico (< ~1100 px de alto) se muestran a la persona con la propuesta concreta: ampliar la hoja, regenerarla o limitar con `regions`. Nunca lo escondas.
3. **Procesar fondos** con `layers --size <lienzo calculado> --depths <p por capa>` y revisa la prueba de parallax: el magenta indica huecos de cobertura o de solape. **Props** con `key`.
4. **QA visual.** Abre las hojas `_qa/*.png` y genera con `preview` un MP4 corto por gesto (12 fps en doses, con respiración). Muestra a la persona hojas y videos y anota lo que ve. Las piezas quedan en estado `review` hasta su aprobación; no las marques `final`.
5. **Intermedios** solo si un gesto aprobado salta demasiado y el cambio es un desplazamiento: `inbetween`. Revísalos; si muestran doble imagen, pide un cuadro más en vez de usarlos.
6. **Voz.** Con los audios de `<slug>-voz.md` en disco, ejecuta `voz <audios…>`, que deja un `.words.json` junto a cada audio. Comprueba que estén todos y que cada uno diga su frase. En un **testimonio** es igual. Si la persona grabó todo en una sola toma, primero corta las frases con `montar` (una línea por frase en `cortes.txt`, con los tiempos que da `voz` sobre la toma completa) y luego mide el resultado. Usa los **tiempos**; el texto de subtítulos y citas sale del guion aprobado, no de la transcripción. Registra duración, pausas y datos de Fish en el checklist.
7. **Hoja de animación.** Crea o actualiza `docs/episodes/<slug>-preproduccion.md` con:
   - registro de procesamiento (comando, salida, avisos, estado de revisión);
   - por plano: rango de cuadros (30 fps) anclado a las palabras de la voz, fondo/capas y claves de cámara, poses del sprite con su cuadro de entrada (12 fps), parches de expresión, parpadeos, textos en pantalla y transición;
   - un evento visual cada 2–3 s y el cierre de marca reservado, según `docs/FLUJO-DE-TRABAJO.md`;
   - pendientes y riesgos (piezas por regenerar, derechos de voz o música).
8. Actualiza estados en el checklist de recursos y `docs/episodes/INDEX.md`. Deriva a `ismv-preparar` cuando las piezas necesarias para el objetivo estén aprobadas.

## Límites

- No modificar `src/`: la composición se planea con `ismv-plan` y se ejecuta con `ismv-ejecute`.
- No sobrescribir una pieza aprobada sin conservar la anterior. Los crudos se quedan en la bandeja.
- No generar arte nuevo ni inventar cuadros que la persona no pidió. Los intermedios automáticos son una ayuda revisable, no arte aprobado.
- No arrancar servidores ni hacer commits.
