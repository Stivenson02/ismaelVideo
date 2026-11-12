---
name: ismv-recursos
description: Desglosa un guion aprobado en recursos de arte y audio, audita la biblioteca existente y entrega checklist y prompts solo para los elementos que faltan.
---

# ISMV Recursos

Prepara el levantamiento de recursos para una historia sin crear código ni declarar listo un archivo solo porque existe.

## Fuentes

- Lee `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md`, `docs/DIRECCION-VISUAL.md`, `docs/ASSET-CATALOG.md` y el episodio identificado en `docs/episodes/INDEX.md`.
- Consulta el resultado de un spike técnico cuando ayude a evaluar una técnica, formato, rig, alfa o movimiento de cámara.
- No edites las skills oficiales de Remotion; aplica la dirección de Ismael desde esta skill y los documentos del proyecto.
- Para narración, usa [Fish Audio, texto a voz](https://fish.audio/es/app/text-to-speech/) como herramienta fija del proyecto y consulta `public/assets/audio/README.md`. Registra voz, archivo, fecha/plan de generación y derechos; una referencia interna no equivale a voz publicable.

## Auditoría

1. Desglosa el guion aprobado por escena y acción necesaria: mini escena del gancho cotidiano, puente, beats bíblicos, imagen de enseñanza y remate/transición a la placa. Para cada una registra duración estimada, plano, acción y recursos; no presupongas que el gancho se resuelve con subtítulos.
2. Inspecciona la biblioteca `public/assets/` y confirma la existencia real de cada archivo. Cuando la imagen afecte la decisión, mírala; comprueba alfa, formato, tamaño, legibilidad, transparencia real, capas, solapes y cobertura del movimiento de cámara.
3. Clasifica cada elemento como `idea`, `disponible`, `animatic`, `final` o `no requerido`, con la razón. Una cuadrícula dibujada dentro del PNG no es transparencia. Distingue arte compuesto de capas independientes.
4. **Calcula el lienzo antes de escribir el prompt de un fondo.** Usa la cámara, profundidad de capa, desplazamiento y zoom aprobados junto con `docs/technical/spikes/SPIKE-001-resultado.md`; registra ancho y alto mínimos por escena/capa. Para un plano vertical fijo pide al menos 1080 × 1920. Con paneo, tilt, parallax o zoom, pide las dimensiones calculadas para que cada capa cubra toda la ventana durante el recorrido, con margen y solape. No aceptes “panorámico” como especificación suficiente ni supongas que una imagen ancha también tiene altura para llenar 9:16. Si el generador devuelve un lienzo insuficiente, clasifícalo como concepto/guía y pide extensión o regeneración antes de considerarlo utilizable.
5. Incluye personaje, fondo, utilería, marca, voz, música/efectos, textos y portada vertical para Instagram, también para la escena cotidiana del gancho y cualquier regreso visual al final. Señala qué recurso se puede reutilizar entre apertura y remate; no pidas piezas que el guion no necesita.
6. Crea prompts para los recursos ausentes o insuficientes, incluida la portada social del episodio, respetando `docs/DIRECCION-VISUAL.md` y las fichas escritas de personaje del episodio; no hagas obligatorio adjuntar imágenes de personaje. Deja claro si un prompt produciría una imagen guía, una capa, una pieza de personaje o un arte de publicación.
7. Si un plano propone cambio de expresión, inventaría cada variante del set y comprueba registro de rostro, encuadre, luz y fondo. Si propone diálogo con boca animada, verifica base limpia, formas transparentes, anclaje y voz de personaje aprobada. No cuentes el primer plano actual de Agar como variantes o piezas de boca inexistentes.
8. Si conviene cambiar solo la cara en un primer plano, considera una hoja de expresiones/sprites: 6 rostros en cuadrícula 2 × 3 o hasta 9 en 3 × 3, derivados de una misma cara base. Especifica cantidad, dimensiones iguales por celda, ángulo, anclaje y nombres/orden de las emociones; conserva la hoja y solicita además recortes individuales PNG RGBA con alfa real. Un fondo blanco no cuenta como transparencia: si se usa para generar o recortar, registra la limpieza de bordes/fondo como tarea y revisa halos sobre la escena final. Compara esta opción con rehacer cuerpos o cabezas completas y pide solo las piezas que el plano necesita. Consulta las reglas de hojas de expresiones en `docs/DIRECCION-VISUAL.md` y `docs/ASSET-CATALOG.md`.

9. Para cada cambio entre escenas, elige una transición que responda a la acción y a los recursos reales; usa `docs/technical/TRANSICIONES-VISUALES.md` como catálogo. Si se propone una disolvencia, comprueba registro de encuadres y capas; si se propone oclusión o wipe, incluye una capa capaz de cubrir el cuadro. No presupongas dip a negro.

## Construcción obligatoria de prompts visuales

- Lee `docs/DIRECCION-VISUAL.md` e incluye **completa y literalmente** la sección “Base común para prompts de diseño” en cada prompt visual que entregues, junto con el sujeto, la acción, el plano, la composición, el formato, el tamaño y la separación de capas que pide ese recurso.
- Mantén continuidad mediante una ficha escrita por personaje dentro del episodio: rasgos distintivos, edad aparente, cabello/barba, vestuario y paleta. Repite esa ficha sin variaciones en todos los prompts donde aparezca. No exijas que la persona adjunte una imagen de personaje en cada generación.
- No prometas identidad exacta de rostro solo por repetir texto. Si una transición requiere variantes registradas, pide un set conjunto desde el diseño base o indica que requiere edición sobre ese diseño; clasifica resultados independientes como pendientes de revisión de continuidad.
- Para escenas modernas aprobadas (por ejemplo el gancho cotidiano), añade una excepción breve y explícita a “sin elementos modernos”; no la apliques a escenas bíblicas.
- Los prompts de fondos incluyen explícitamente formato vertical de salida y dimensiones mínimas calculadas para ese plano. Si todavía no se conoce el recorrido de cámara, registra la dimensión como pendiente y limita el prompt a una imagen guía; no inventes “panorámico” como sustituto del cálculo.
- En un fondo por capas, pide capas separadas sobre un mismo lienzo y sistema de coordenadas, con solape suficiente detrás de las capas cercanas. En una imagen guía compuesta, declara que es solo una referencia estática, no un paquete de capas.
- La portada social usa lienzo vertical, conserva una zona de título segura y deja la tipografía y el logotipo oficial para composición editable posterior.

Actualiza el checklist del episodio y el catálogo solo cuando cambie su inventario estable. Mantén los originales. La persona revisa los artes nuevos antes de que pasen a `final`. Entrega un resumen de bloqueos y qué objetivo permiten los recursos actuales: animatic o video final.
