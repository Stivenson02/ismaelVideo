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

## Testimonios

Si el código corresponde a un testimonio (nombre "Testimonio —", documento en `docs/testimonios/`):
- Parte del guion aprobado y de su desglose visual.
- Usa la **Dirección común testimonios** y las reglas de representación de `docs/DIRECCION-VISUAL.md`, adjuntando las referencias de `public/assets/concepts/testimonios/estilo/`.
- La ficha del personaje respeta el consentimiento: genérico por defecto, o con parecido solo si está autorizado. Nunca uses el nombre real ni datos que identifiquen en los prompts.
- El guion de voz va en `docs/testimonios/<slug>-voz.md`, con los mismos audios por frase. Indica si lo lee la persona (con las instrucciones de grabación de `docs/testimonios/README.md` §2) o si se genera en Fish como "voz recreada".
- Todo lo demás (escenas, capas, hojas de sprites, tabla de entrega) funciona igual.

## Auditoría

1. Desglosa el guion aprobado por escena y acción necesaria: mini escena del gancho cotidiano, puente, beats bíblicos, imagen de enseñanza y remate/transición a la placa. Para cada una registra duración estimada, plano, acción y recursos; no presupongas que el gancho se resuelve con subtítulos.
2. Inspecciona la biblioteca `public/assets/` y confirma la existencia real de cada archivo. Cuando la imagen afecte la decisión, mírala; comprueba alfa, formato, tamaño, legibilidad, transparencia real, capas, solapes y cobertura del movimiento de cámara.
3. Clasifica cada elemento como `idea`, `disponible`, `animatic`, `final` o `no requerido`, con la razón. Una cuadrícula dibujada dentro del PNG no es transparencia. Distingue arte compuesto de capas independientes.
4. **Calcula el lienzo antes de escribir el prompt de un fondo.** Usa la cámara, profundidad de capa, desplazamiento y zoom aprobados junto con `docs/technical/spikes/SPIKE-001-resultado.md`; registra ancho y alto mínimos por escena/capa. Para un plano vertical fijo pide al menos 1080 × 1920. Con paneo, tilt, parallax o zoom, pide las dimensiones calculadas para que cada capa cubra toda la ventana durante el recorrido, con margen y solape. No aceptes “panorámico” como especificación suficiente ni supongas que una imagen ancha también tiene altura para llenar 9:16. Si el generador devuelve un lienzo insuficiente, clasifícalo como concepto/guía y pide extensión o regeneración antes de considerarlo utilizable.
5. Incluye personaje, fondo, utilería, marca, voz, música/efectos, textos y portada vertical para Instagram, también para la escena cotidiana del gancho y cualquier regreso visual al final. Señala qué recurso se puede reutilizar entre apertura y remate; no pidas piezas que el guion no necesita.
6. Crea prompts para los recursos ausentes o insuficientes, incluida la portada social del episodio, respetando `docs/DIRECCION-VISUAL.md` y las fichas escritas de personaje del episodio; no hagas obligatorio adjuntar imágenes de personaje. Deja claro si un prompt produciría una imagen guía, una capa, una pieza de personaje o un arte de publicación.
7. Si un plano propone cambio de expresión, inventaría cada variante del set y comprueba registro de rostro, encuadre, luz y fondo. Si propone diálogo con boca animada, verifica base limpia, formas transparentes, anclaje y voz de personaje aprobada. No cuentes el primer plano actual de Agar como variantes o piezas de boca inexistentes.
8. **Personajes animados: método de capas** (`docs/technical/ANIMACION-POR-CAPAS.md`). Cada personaje lleva una **base de diseño** ✋. Cada movimiento de un plano se pide como **hoja de sprites**: una imagen con todos sus cuadros en cuadrícula (4 → 2 × 2 en 2:3; 6 → 3 × 2 en 1:1), con los cambios de cara y los parpadeos que el guion usa de verdad. Esta es la forma preferida por la persona. La alternativa, cuando haga falta más resolución, es pedir cada cuadro como **edición de la base**. Nunca se piden dibujos sueltos. Dos hojas del mismo personaje no coinciden exactamente: el paso de una a otra cae en un corte. Un giro de cabeza o de cuerpo es otra base o se resuelve con corte, cámara u oclusión.
9. **Voz:** entrega `docs/episodes/<slug>-voz.md` con el texto aprobado dividido en audios de una frase o tramo, por debajo del límite de caracteres de Fish (~500): nombre de archivo, plano, caracteres, interpretación y un bloque listo para copiar por audio. Las citas bíblicas van en audios propios. No cambies el texto aprobado.

10. Para cada cambio entre escenas, elige una transición que responda a la acción y a los recursos reales; usa `docs/technical/TRANSICIONES-VISUALES.md` como catálogo. Si se propone una disolvencia, comprueba registro de encuadres y capas; si se propone oclusión o wipe, incluye una capa capaz de cubrir el cuadro. No presupongas dip a negro.

## Construcción obligatoria de prompts visuales

- Lee `docs/DIRECCION-VISUAL.md` e incluye **completa y literalmente** la sección “Base común para prompts de diseño” en cada **prompt de generación** (bases de personaje, escenas completas, props, portada), junto con el sujeto, la acción, el plano, la composición, el formato, el tamaño y el fondo de croma que pide ese recurso.
- Las **hojas de sprites** son prompts de generación: llevan la Dirección común, la base adjunta, la cuadrícula, la posición fija de la figura en cada celda y un renglón por cuadro (reglas en `docs/technical/ANIMACION-POR-CAPAS.md` §3).
- Los **prompts de edición** (capas de fondo y, si se usan, poses o caras sobre una base) usan la plantilla de edición de `docs/technical/ANIMACION-POR-CAPAS.md` §4 y **no** repiten la Dirección común: el estilo ya viene en la imagen adjunta, y repetirlo invita al generador a redibujar todo. Cada edición dice qué imagen adjuntar, qué cambia y qué debe seguir idéntico.
- Fondo de generación: verde liso `#00FF00` para personajes y props. Para capas de fondo, usa magenta `#FF00FF` cuando la capa lleve vegetación verde saturada. Revisa que la ficha del personaje no use el color del croma.
- Formato: pide una proporción que el generador ofrezca (2:3, 3:4, 4:5, 9:16, 1:1) a la mayor resolución disponible y anota el lienzo final; la preproducción escala al tamaño calculado.
- Fondos por capas: pide primero la escena completa (`full`) y luego cada capa como edición de esa escena (quitar lo cercano y pintar lo que hay detrás; aislar el primer plano sobre croma). No pidas "tres capas en un archivo": el generador no lo entrega.
- Mantén continuidad mediante una ficha escrita por personaje dentro del episodio: rasgos distintivos, edad aparente, cabello/barba, vestuario y paleta. Repite esa ficha sin variaciones en todos los prompts donde aparezca. No exijas que la persona adjunte una imagen de personaje en cada generación.
- No prometas identidad exacta de rostro solo por repetir texto. Si una transición requiere variantes registradas, pide un set conjunto desde el diseño base o indica que requiere edición sobre ese diseño; clasifica resultados independientes como pendientes de revisión de continuidad.
- Para escenas modernas aprobadas (por ejemplo el gancho cotidiano), añade una excepción breve y explícita a “sin elementos modernos”; no la apliques a escenas bíblicas.
- Los prompts de fondos incluyen explícitamente formato vertical de salida y dimensiones mínimas calculadas para ese plano. Si todavía no se conoce el recorrido de cámara, registra la dimensión como pendiente y limita el prompt a una imagen guía; no inventes “panorámico” como sustituto del cálculo.
- En un fondo por capas, pide capas separadas sobre un mismo lienzo y sistema de coordenadas, con solape suficiente detrás de las capas cercanas. En una imagen guía compuesta, declara que es solo una referencia estática, no un paquete de capas.
- La portada social usa lienzo vertical, conserva una zona de título segura y deja la tipografía y el logotipo oficial para composición editable posterior.

## Documento de prompts

Entrega `docs/episodes/<slug>-prompts.md`, el único lugar de donde la persona copia los prompts (el checklist enlaza a él y no los duplica). Debe contener:

- reglas de generación resumidas y la plantilla de edición;
- orden de creación por fases (fondos → props → cada personaje: base ✋ y sus hojas de sprites), con dependencias y prioridad;
- un bloque de texto listo para copiar por cada imagen (cada hoja con su cuadrícula y la descripción de cada cuadro), con lo que hay que adjuntar;
- la **tabla de entrega**: ID → carpeta y nombre exacto en `art-inbox/<hist>/<ID>/` → destino en `public/assets/` → comando de preproducción.

Actualiza el checklist del episodio y el catálogo solo cuando cambie su inventario estable. Mantén los originales. La persona revisa los artes nuevos antes de que pasen a `final`. Entrega un resumen de bloqueos y qué objetivo permiten los recursos actuales: animatic o video final. Cuando lleguen las imágenes, el siguiente paso es `ismv-preproduccion`.
