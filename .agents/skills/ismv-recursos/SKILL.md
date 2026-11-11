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

## Auditoría

1. Desglosa el guion aprobado por escena y acción necesaria: mini escena del gancho cotidiano, puente, beats bíblicos, imagen de enseñanza y remate/transición a la placa. Para cada una registra duración estimada, plano, acción y recursos; no presupongas que el gancho se resuelve con subtítulos.
2. Inspecciona la biblioteca `public/assets/` y confirma la existencia real de cada archivo. Cuando la imagen afecte la decisión, mírala; comprueba alfa, formato, tamaño, legibilidad, transparencia real, capas, solapes y cobertura del movimiento de cámara.
3. Clasifica cada elemento como `idea`, `disponible`, `animatic`, `final` o `no requerido`, con la razón. Una cuadrícula dibujada dentro del PNG no es transparencia. Distingue arte compuesto de capas independientes.
4. Los fondos pueden ser panorámicos o mayores que 1080 × 1920. Calcula requisitos según el recorrido de cámara del episodio; no los fuerces a 9:16.
5. Incluye personaje, fondo, utilería, marca, voz, música/efectos y textos, también para la escena cotidiana del gancho y cualquier regreso visual al final, pero no pidas piezas que el guion no necesita. Señala qué recurso se puede reutilizar entre apertura y remate.
6. Crea prompts para los recursos ausentes o insuficientes, respetando `docs/DIRECCION-VISUAL.md` y usando referencias existentes para mantener continuidad. Deja claro si un prompt produciría una imagen guía, una capa o una pieza de personaje.
7. Si un plano propone cambio de expresión, inventaría cada variante del set y comprueba registro de rostro, encuadre, luz y fondo. Si propone diálogo con boca animada, verifica base limpia, formas transparentes, anclaje y voz de personaje aprobada. No cuentes el primer plano actual de Agar como variantes o piezas de boca inexistentes.

Actualiza el checklist del episodio y el catálogo solo cuando cambie su inventario estable. Mantén los originales. La persona revisa los artes nuevos antes de que pasen a `final`. Entrega un resumen de bloqueos y qué objetivo permiten los recursos actuales: animatic o video final.
