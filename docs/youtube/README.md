# Ismael YouTube — niños y familia

Tercera línea de contenido de Ismael, **en estudio desde 2026-11-19**: un programa largo para YouTube (8–12 min por episodio) dirigido a niños de 6 a 10 años, para ver en familia. Un trío fijo de personajes recorre historias de la Biblia a partir de problemas de la vida real.

Nace de dos cosas:
- un comercial de Bible Chat que contaba problemas humanos comunes (no testimonios) y los atravesaba con una historia bíblica;
- la idea de la persona de llegar a los niños por YouTube, como las series de historias bíblicas animadas de su infancia.

## Estado

**Estudio.** Hay investigación, una propuesta de formato, un trío de personajes y un piloto en tratamiento. **Nada está aprobado.** Esta línea no entra al flujo de producción (`docs/FLUJO-DE-TRABAJO.md`) hasta que la persona tome las decisiones de abajo.

## Documentos

| Documento | Qué tiene |
|---|---|
| [`INVESTIGACION.md`](INVESTIGACION.md) | Bible Chat, programas bíblicos infantiles en YouTube, referentes seculares y reglas de YouTube para contenido infantil (COPPA, YouTube Kids, contenido inauténtico, IA), con fuentes |
| [`FORMATO.md`](FORMATO.md) | Tres propuestas de formato y la recomendada ("La carpa de los porqués"): cómo nos diferenciamos de Superlibro, regla del observador, formato de guion, estructura del episodio, dirección visual en borrador, voces, música, costo, fases y reglas de canal |
| [`PERSONAJES.md`](PERSONAJES.md) | Teoría del triángulo de caracteres y el trío propuesto: Tomi (preguntón inocente), Simón (inteligente) y Vale (fastidiada madura), más la abuela Ana y Matusalén |
| [`PILOTO.md`](PILOTO.md) | Piloto "¿Dios ve a los chiquitos?" (Zaqueo): escaleta de 8 min, muestra de guion y banco de 12 episodios |
| [`INDEX.md`](INDEX.md) | Registro de producciones `YT-###`; el panel lo muestra en la sección **YouTube** |

## Decisiones pendientes (de la persona)

En orden, porque cada una desbloquea la siguiente. Detalle y recomendaciones en [`FORMATO.md` §10](FORMATO.md#10-decisiones-abiertas).

1. **Formato:** A "La carpa de los porqués" (recomendado), B "Historia espejo" o C "Club de preguntas".
2. **Trío:** aprobar o ajustar nombres, edades y caracteres.
3. **Título** de la serie.
4. **Jesús en pantalla** (el piloto lo necesita).
5. **Voces:** Fish, actores o mixto, después de una prueba de casting.
6. **Canal:** nuevo canal infantil (recomendado) o dentro del actual.

## Qué sigue después de decidir

1. **Diseño:** prompts de las bases del trío, la abuela, Matusalén y la casa, con el método de [`../technical/ANIMACION-POR-CAPAS.md`](../technical/ANIMACION-POR-CAPAS.md); prueba de voces y maqueta de la canción.
2. **Adaptar el flujo:** las skills `ismv-*` trabajan hoy con `HIST-###`, Reels verticales y una voz narradora. Para YouTube necesitan códigos `YT-###`, escaleta, guion con diálogo, 16:9 y varias voces. También hace falta un spike de sincronía de labios.
3. **Piloto `YT-001`** por el flujo completo, y una prueba privada con familias antes de abrir el canal.

## Reglas que ya aplican mientras sea estudio

- La fidelidad bíblica es la misma de siempre: citas textuales marcadas, paráfrasis fiel y dramatización declarada.
- No se generan artes ni voces de esta línea hasta aprobar el diseño.
- No se tocan los Reels ni sus documentos aprobados por esta línea.
