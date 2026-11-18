# Investigación — Retención en Reels narrativos animados

**Fecha:** 2026-11-17
**Motivo:** el primer Reel publicado (HIST-001, *Agar: vista y escuchada*) tuvo 453 vistas, 115 espectadores y **~10 s de tiempo medio de visionado**.
**Alcance:** comparar la estructura de los shorts animados y narrativos con alta retención con el modelo actual de Ismael. Proponer cambios para el próximo episodio, que incluirá animación con sprites.
**Estado:** propuestas aprobadas por la persona el 2026-11-17: estructura de retención como regla de guion, sin CTA hablado y sting de marca de ~1 s. Ya están aplicadas en `docs/FLUJO-DE-TRABAJO.md`, `docs/DIRECCION-VISUAL.md` y las skills `ismv-guion` e `ismv-revision`. Primer uso: guion v1 de HIST-004. Sigue pendiente la versión corta de HIST-002. **Ajuste de la persona (2026-11-17):** el gancho preferido es un **caso moderno concreto** del día a día (no una pregunta genérica), con un puente al relato; y no se usan palabras como "morir" o "quemar" por sensibilidad de las plataformas.

### Cómo leer las fuentes

Cada hallazgo lleva su nivel de evidencia:

- **[Oficial]**: la plataforma o un directivo de la plataforma.
- **[Secundaria]**: prensa que cita una fuente oficial.
- **[Práctica]**: heurística repetida por creadores y herramientas, sin un estudio verificable detrás.

> Ninguna plataforma publica umbrales "buenos" de retención. Las cifras de referencia que circulan vienen de vendedores de herramientas y sirven como orientación, no como meta exacta.

---

## 1. Diagnóstico del Reel de Ismael (HIST-001)

### 1.1 Números

| Métrica | Valor | Lectura |
|---|---|---|
| Duración | 33,4 s (30,4 s de voz + 3 s de placa) | Dentro de la guía de 30–45 s. |
| Tiempo medio de visionado | ~10 s | **~30 % del video.** La mediana que reportan herramientas de terceros ronda el 45 % [Práctica]. |
| Vistas / espectadores | 453 / 115 → ~3,9 vistas por persona | Puede reflejar repeticiones reales, pero también reproducciones propias o del equipo. Conviene revisarlo antes de concluir que hubo bucle. |

Instagram calcula el tiempo medio como *tiempo total / vistas iniciales* [Oficial, Help Center]. Si hubo muchas vistas del equipo o pruebas, el número real del público puede ser distinto. Además, desde marzo de 2025 YouTube cuenta una vista de Short apenas empieza la reproducción, aunque la persona deslice de inmediato [Oficial].

### 1.2 Línea de tiempo y dónde se va la gente

| Segundo | Beat | Qué pasa en pantalla | Riesgo de abandono |
|---|---|---|---|
| 0,0–3,3 | Gancho | Pregunta general: "¿Alguna vez has sentido que nadie ve lo que estás viviendo?". Plano amplio del desierto, Agar pequeña, push-in lento. | **Alto.** No hay conflicto, sorpresa ni personaje legible. La pregunta es emocional pero genérica: sirve para muchos videos y no promete nada concreto. |
| 3,3–5,1 | Huida | "Agar huía por el desierto." Mismo fondo, reencuadre. | **Alto.** No explica de qué huye ni por qué importa. El contexto que daría tensión (Sara, el maltrato, el embarazo) no aparece. |
| 5,1–9,8 | Encuentro | Sombra y silueta del ángel. | **Aquí cae la media de 10 s.** El primer momento visual fuerte llega en el segundo 7–9, cuando ya se fue la mayoría. |
| 9,8–12,6 | Pregunta | Plano medio casi fijo. | Medio. |
| 12,6–19,2 | Promesa | Primer plano de Agar. El nombre "Ismael" es el clímax. | El punto más fuerte queda a mitad del video. |
| 19,2–26,6 | Enseñanza | Plano sereno, subtítulo largo. | **Alto.** Son 7,4 s de reflexión sin historia. |
| 26,6–30,4 | Invitación | "Si estas historias te ayudan, síguenos…" | **Muy alto.** Pedir que te sigan avisa que el video terminó [Práctica]. |
| 30,4–33,4 | Placa de marca | Logo y sting durante 3 s. | **Muy alto.** Rompe el bucle de repetición. |

**Conclusión:** el Reel arranca en tono de *reflexión devocional* y no de *historia*. El conflicto nunca se plantea y el final dedica ~14 s (42 % del video) a contenido que no es relato. La duración es razonable; el problema es **qué pasa en los primeros 3 s y cómo se reparte la tensión**.

### 1.3 Ritmo visual

- 6 planos en 30 s, es decir, **un cambio cada ~5 s**. La práctica habitual en shorts que retienen es un cambio visual cada 2–3 s [Práctica, cifras dispares].
- Todo el movimiento es de la misma clase: push-ins lentos y respiración. Si todo se mueve igual, el ojo deja de registrar cambios.
- **Sin música ni efectos de sonido.** Instagram muestra menos los reels en silencio [Oficial]. Sin sonido ambiente, la voz TTS queda sola y el video se siente más lento.
- Subtítulos por frase completa, de hasta 14 palabras en pantalla. Para quien mira sin sonido se leen bien, pero no marcan ritmo.

### 1.4 Lo que sí funciona y conviene conservar

- La estética 2D cinematográfica, la luz cálida como acento y la silueta del ángel a contraluz son reconocibles y propias.
- El rigor bíblico: separar narración, cita y dramatización. Es justo lo que se critica a los canales virales de Biblia hecha con IA (ver §2.6).
- Una duración corta.
- HIST-002 ya muestra un gancho mucho más fuerte: "Te mintieron. Tú confiaste. Y tú pagaste las consecuencias." Pero dura 78 s y tiene 12 beats; ahí el riesgo es la longitud (§3.6).

---

## 2. Qué dice la investigación

### 2.1 Qué premian las plataformas

- **Instagram:**
  - Predice sobre todo si vas a **compartir, ver hasta el final, dar like y abrir la página del audio** [Oficial, *Instagram Ranking Explained*, 2023].
  - Adam Mosseri (2025): las tres señales que más pesan son **tiempo de visionado, likes por alcance y envíos por DM por alcance**. Los envíos pesan más ante quienes no te siguen, es decir, para crecer [Secundaria].
  - Mosseri: "los primeros tres segundos de un reel son súper importantes". Instagram añadió a Insights la métrica **skip rate**: el % de vistas que se saltan el reel en los primeros 3 s [Secundaria/Oficial].
  - Instagram muestra menos los reels en silencio, los de "mayormente texto" y los que llevan la marca de agua de otra app. **El logo propio no reduce alcance** (Mosseri, 2024) [Oficial/Secundaria].
- **TikTok:** ver un video completo es una señal "fuerte". Ni los seguidores ni los éxitos previos son factores directos [Oficial]. Cada video compite por sí solo.
- **YouTube Shorts:** mide **"Stayed to watch"** (cuántos pasan de los primeros segundos) y el **% medio visto** solo entre quienes se quedaron [Oficial].

**Patrón común:** pasar los 3 s → terminar → repetir o compartir. En un relato bíblico, lo que provoca *compartir por DM* es una **revelación o emoción que dan ganas de mandarle a alguien** ("mira, no sabía esto").

### 2.2 El gancho (0–3 s)

- Hay tres capas de gancho que se pueden apilar [Práctica, John Scott / Social Media Examiner]:
  1. **Visual:** una imagen que intriga.
  2. **Hablado:** una frase que abre curiosidad.
  3. **Texto en pantalla:** una frase corta que añade subtexto. Es el más infrautilizado.
- Técnicas recomendadas [Práctica]:
  - abrir con **el elemento más inesperado** de la historia;
  - juntar dos cosas que no encajan;
  - plantear **la pregunta de inmediato y terminar justo cuando se responde**. Es el modelo de Zack D. Films: "How Stitches Work", 31 s y ~253 M de vistas.
- Qué no debe ir al arranque [Práctica]: saludos, logos, "en este video…" ni **planos de establecimiento lentos**. El primer fotograma debe entenderse **sin sonido**.
- La guía creativa de TikTok (para anuncios, aplicable con cautela) pide presentar la propuesta en los primeros 3 s [Oficial].

### 2.3 Estructura narrativa

- Enlazar los momentos con **"pero… / por eso…"** en lugar de "y entonces…". Cada "pero" abre un conflicto nuevo y funciona como **re-gancho** a mitad de video [Práctica, John Scott; Jenny Hoyos].
- Método de Jenny Hoyos, conocida por superar el 100 % de retención gracias a los bucles [Práctica]: escribir **primero el gancho y la última frase**, luego el **presagio** (la expectativa que se paga al final) y por último el resto.
- **Cierre:** la revelación que prometía el gancho, colocada en el último ~15 % [Práctica].
- **Final en bucle:** la última frase enlaza con la primera, para que la repetición se sienta continua y el % visto pueda superar el 100 % [Práctica].
- Despedidas, "gracias por ver", pantallas finales y pedir que te sigan **le dicen al espectador que ya terminó**. Desliza y se pierde el bucle [Práctica, consistente entre fuentes].

### 2.4 Ritmo, imagen y sonido

- **Cambio visual cada 2–3 s** [Práctica, sin estudio controlado]. En animación 2D no tiene que ser un corte: sirve un push-in, un cambio de expresión, una capa que entra, un gesto o un texto clave.
- **Voz:** 140–160 palabras por minuto, es decir, ~70–80 palabras en 30 s [Práctica]. Con TTS conviene recortar los silencios al inicio y entre frases.
- **Subtítulos:** la mayoría ve los feeds sin sonido (cifras de 80–85 %, según la fuente). Los subtítulos aumentan el alcance (+16 % en una prueba A/B de Facebook) [Secundaria]. Las mejoras atribuidas al subtítulo animado palabra por palabra no se pueden verificar [Práctica].
- **Zonas seguras en 1080×1920** [Práctica]: dejar libres ~250 px arriba, ~670 px abajo y ~120 px a la derecha. Rostros y acción en el tercio central; subtítulos por encima del tercio inferior.
- **Sonido:** música y efectos "solo si sirven a la historia" [Práctica]. Un reel sin audio de fondo es justo lo que Instagram dice que muestra menos [Oficial].

### 2.5 Marca

- El **logo propio** como marca de agua no penaliza [Oficial, Mosseri].
- En anuncios de Reels, mostrar la marca **en los primeros 5 s** aumenta la recordación (Meta/Toluna) [Secundaria]. Es un dato de publicidad, no de historias orgánicas, pero indica que **la marca no tiene que esperar al final**.
- Los bloques de cierre de 3–5 s bajan la tasa de finalización y rompen el bucle [Práctica].

### 2.6 Contenido bíblico en formato corto

- Los canales con más alcance dramatizan con tono de entretenimiento (p. ej. la "AI Bible" de Pray.com). La crítica principal es **adornar y presentarlo como Biblia** [Secundaria, NPR 2025]. El rigor de Ismael es una ventaja que hay que conservar.
- Los canales de shorts bíblicos animados con publicación frecuente rondan una mediana de **~28 s** por video [Práctica, vidIQ].
- Hay señales de que los canales bíblicos hechos en masa con IA se exponen a la política de contenido inauténtico [Práctica, fuente débil]. La autoría propia importa.
- **No se encontraron datos** que comparen historias poco conocidas con historias famosas, ni que midan ganchos polémicos en contenido de fe. Esas tácticas son hipótesis para probar.

---

## 3. Comparativa: modelo actual vs. modelo recomendado

| Área | Ismael hoy (HIST-001) | Modelo de alta retención | Propuesta |
|---|---|---|---|
| **Primer fotograma** | Plano amplio, personaje pequeño | Acción o rostro legible, el momento más tenso | Abrir en el **clímax visual** o en primer plano con emoción. |
| **Gancho hablado** | Pregunta de reflexión general ("¿Alguna vez…?") | Contradicción, sorpresa o pregunta concreta de *esta* historia | Gancho **específico del relato** (ver §4.1). La pregunta de vida puede ir al final, como bucle. |
| **Texto en pantalla** | El mismo subtítulo que la voz | Texto corto con subtexto, distinto de la voz | Añadir un **título de gancho** de 3–6 palabras en 0–3 s. |
| **Conflicto** | No se plantea (no se dice de qué huye Agar) | Conflicto en los primeros 5 s | Plantear **quién sufre, qué pierde y quién la ataca** antes del segundo 5. |
| **Conectores** | "Allí… Después…" (y entonces) | "Pero… / Por eso…" | Reescribir los beats con giros. Un re-gancho cada 5–8 s. |
| **Clímax** | En el segundo 13–19 (50 %) | En el último 15 % | Mover la revelación al final (~25–30 s). |
| **Enseñanza** | Bloque de 7,4 s | Integrada en la revelación o en una línea | **Una frase de ≤ 3 s** pegada al clímax. |
| **CTA** | "Síguenos…" hablado (3,8 s) | Sin CTA, o CTA en texto o en el copy | Pasar el CTA al copy o a un texto pequeño. *Decisión pendiente.* |
| **Cierre de marca** | Placa de 3 s | Logo integrado, sting ≤ 1 s, final en bucle | Marca de agua discreta + sting de ~1 s. *Decisión pendiente* (choca con la regla de 2–3 s). |
| **Cambio visual** | Cada ~5 s, todo con push-in lento | Cada 2–3 s, con variedad | Alternar cámara, gesto con sprite, expresión, entrada de capa, texto. |
| **Audio** | Solo voz | Voz + ambiente + efectos en los momentos clave + música | Viento, agua, pasos, un golpe de sonido en cada giro y música baja con licencia. |
| **Duración** | 33 s (HIST-002: 78 s) | ~25–35 s, una pregunta, una revelación | Objetivo de **30 s** con ~70–80 palabras. HIST-002 debería tener una versión corta. |

### 3.6 Nota sobre HIST-002

HIST-002 ya aplica un gancho de conflicto ("Te mintieron…") y una pregunta final que puede servir de bucle. Pero dura **78 s** con 12 beats: con 10 s de visionado medio, la mayoría no llegaría a la revelación ("Sara era su media hermana, sí. Pero también era su esposa."). Se recomienda evaluar una **versión de ~35 s** centrada en una sola pregunta. *Decisión pendiente de la persona;* la versión aprobada no se modifica.

---

## 4. Propuestas concretas

### 4.1 Guion: plantilla de 30 s

| Tiempo | Bloque | Función | Ejemplo con HIST-001 (solo ilustrativo, no es guion aprobado) |
|---|---|---|---|
| 0–2 s | **Gancho** | Imagen más tensa + frase con contradicción o pregunta concreta + texto corto | Imagen: Agar sola, exhausta, junto a la fuente; una sombra se alarga hacia ella. Voz: "Era esclava, estaba embarazada y huía sola por el desierto." Texto: "Nadie la buscó… excepto uno." |
| 2–8 s | **Conflicto** | Quién, qué pierde, por qué duele | De dónde huye, en una o dos frases fieles al texto (Gn 16:4–6), sin sensacionalismo. |
| 8–15 s | **Giro 1 ("pero…")** | Entra lo inesperado | "Pero alguien sí la encontró… y la llamó por su nombre." Silueta a contraluz. |
| 15–24 s | **Giro 2 / escalada** | Presión o pregunta | La pregunta: de dónde viene, a dónde va. Primer plano con cambio de expresión (sprite). |
| 24–29 s | **Revelación** | Paga lo que prometía el gancho | El nombre Ismael y su significado: "Dios oye". |
| 29–30 s | **Remate en bucle + marca** | La última frase enlaza con la primera | "…Y ella le puso nombre al Dios que la vio." Sting de ~1 s. Al repetirse, el gancho "Nadie la buscó…" vuelve a tener sentido. |

Reglas de escritura:

1. Escribir **primero el gancho y la última línea**, luego el resto.
2. Cada beat empieza con *pero / por eso / entonces sí*, no con "y después".
3. **Una sola pregunta** por video. Lo demás se corta o queda para otro episodio.
4. El gancho nace del relato (un hecho sorprendente y fiel al texto), no de una pregunta genérica de autoayuda.
5. La enseñanza cabe en **una frase**, o se deja implícita en la revelación y la pregunta final.
6. La regla de fidelidad no cambia: la sorpresa debe salir del texto bíblico. Nada de adornos presentados como cita.

### 4.2 Ritmo visual

- **Mapa de cambios:** en el desglose de planos, marcar un "evento visual" cada 2–3 s. Puede ser un corte, el inicio o fin de un movimiento de cámara, un gesto con sprite, un cambio de expresión, una capa que entra, un efecto de luz o un texto clave.
- **Variedad de escala:** alternar plano general, plano medio y primer plano. Evitar más de dos planos seguidos con la misma escala y el mismo tipo de movimiento.
- **Primer fotograma:** debe funcionar como portada. Rostro o acción en el centro, luz de acento, legible en miniatura y sin sonido.
- Respetar las zonas seguras (§2.4) al ubicar personajes y subtítulos.

### 4.3 Sprites en el próximo episodio

Usar los sprites para **marcar los momentos**, no para llenar todo el video de movimiento.

| Uso | Cuándo | Cómo |
|---|---|---|
| **Acción del gancho** | 0–2 s | Un ciclo corto y legible: correr, caer, girar la cabeza, levantar la mano. Es lo que detiene el scroll. |
| **Reacción en cada giro** | Con cada "pero…" | Cambio de expresión (hoja de expresiones de `DIRECCION-VISUAL.md`) sincronizado con la palabra clave de la voz. |
| **Gesto de diálogo** | Solo si el personaje habla (voz dramatizada) | Bocas de 2–4 posiciones. No mover la boca con la voz del narrador (regla vigente). |
| **Reposo** | Entre momentos | Respiración, parpadeo o tela. Que sea un fondo vivo, no el foco. |
| **Revelación** | Último 15 % | El gesto más grande del video: mirar arriba, ponerse de pie, abrir las manos. |

Recomendaciones técnicas para que el sprite se vea con intención:

- **Animar en "doses":** 12 fps dentro de la composición de 30 fps (repetir cada dibujo 2–3 cuadros). Da el carácter de animación limitada 2D y reduce la cantidad de dibujos.
- **Anticipación → acción → asentamiento:** incluso con 3–4 cuadros por acción, un cuadro de anticipación y uno de asentamiento hacen que el gesto se lea.
- **Contraste de movimiento:** alrededor de un gesto grande, cámara quieta; alrededor de un plano estático, cámara en movimiento. Evitar que todo se mueva a la vez.
- **Registro:** mismo lienzo, mismo anclaje y misma escala para todas las celdas (ya está en la dirección visual). Probar la superposición sobre el fondo real antes de animar.
- **Sonido sincronizado:** cada gesto clave lleva un efecto (paso, roce de tela, golpe, agua). Así el movimiento se nota también con sonido.
- **Presupuesto de arte:** priorizar sprites para el **gancho** y la **revelación**. El resto puede seguir con recortes y cámara.

### 4.4 Audio

- Recortar los silencios de la voz TTS (sobre todo al inicio) y apuntar a 140–160 ppm.
- Añadir una **cama de música** baja con licencia comercial (registrarla en el catálogo de assets).
- **Ambiente** constante (viento, agua, multitud) y **acentos** en los giros: un golpe grave o una subida de cuerda.
- Fish Audio sigue siendo la herramienta de voz. Registrar voz, fecha, plan y derechos como pide `AGENTS.md`.

### 4.5 Subtítulos y texto

- **Título de gancho** en 0–3 s, de 3–6 palabras y distinto de lo que dice la voz.
- Subtítulos en bloques de **2–5 palabras**, cambiando con el ritmo de la voz. Resaltar la palabra clave de cada giro con el color de acento.
- No llenar la pantalla de texto: Instagram muestra menos los reels de "mayormente texto" [Oficial].
- Las citas bíblicas se distinguen visualmente de la narración (regla vigente).

### 4.6 Cierre, CTA y marca — decisiones pendientes

Estas propuestas **chocan con reglas actuales** y necesitan la aprobación de la persona antes de aplicarse:

1. **Acortar la placa de marca de 3 s a ~1 s** (sting y símbolo), o integrarla en la última imagen en lugar de una placa separada. La regla actual pide 2–3 s.
2. **Marca de agua discreta** con el símbolo de Ismael durante todo el video. No penaliza el alcance [Oficial].
3. **Quitar el CTA hablado** ("síguenos…") y pasarlo al copy de la publicación, o a un texto pequeño durante la revelación.
4. Como alternativa conservadora, **probar en A/B**: el mismo episodio publicado con placa de 3 s y con sting de 1 s, en momentos comparables.

---

## 5. Cómo medir el próximo video

Compararse **con uno mismo**: con 1–2 videos todavía no hay línea base. La idea es acumular 5–10 Reels y cambiar **una variable grande a la vez**.

| Métrica | Dónde | Qué indica | Meta orientativa |
|---|---|---|---|
| **Skip rate** (3 s) | Instagram Insights | Si funciona el gancho | Que baje respecto a HIST-001. |
| Tiempo medio de visionado | Instagram / TikTok | Retención total | > 15 s en un video de 30 s (> 50 %). |
| Gráfico de retención | Instagram / YouTube | En qué segundo cae la gente | Que no haya caídas bruscas en los cambios de beat. |
| **Envíos por alcance** | Instagram | Si la revelación dan ganas de compartirla | Que aumenten frente a HIST-001. |
| Stayed to watch | YouTube Shorts | Equivalente al skip rate | Que aumente. |
| Vistas por espectador | Instagram | Bucles reales | Descontar las vistas del equipo. |

**Registro sugerido:** después de cada publicación, anotar estas métricas en el documento de entrega (`docs/deliveries/HIST-###-copy-redes.md`), junto con la variable probada.

---

## 6. Resumen ejecutivo

1. **El problema principal está en los primeros 5 s:** el gancho es genérico, el plano está lejos y no hay conflicto. El primer momento visual fuerte llega en el segundo 7–9, cuando la media ya se fue.
2. **El final es demasiado largo:** ~14 s de enseñanza, CTA y placa (42 % del video).
3. **Para el próximo episodio:**
   - gancho específico del relato con imagen tensa, voz y texto apilados;
   - conflicto antes del segundo 5;
   - giros con "pero…" cada 5–8 s;
   - revelación al final y última frase en bucle;
   - cambio visual cada 2–3 s;
   - sprites concentrados en el gancho, las reacciones y la revelación;
   - música y efectos de sonido;
   - enseñanza de una línea.
4. **Decisiones pendientes de la persona:** acortar la placa de marca, quitar el CTA hablado, añadir marca de agua y hacer una versión corta de HIST-002.

---

## Fuentes

- Instagram — *Instagram Ranking Explained*: https://about.instagram.com/blog/announcements/instagram-ranking-explained
- Instagram Help Center, métricas de Reels: https://help.instagram.com/202865988324236/
- Mosseri, señales principales 2025: https://www.socialmediatoday.com/news/instagram-shares-algorithm-2025/738034/ · https://www.socialsamosa.com/news-2/instagram-reveals-key-factors-for-boosting-reach-8646916
- Mosseri, el logo propio no reduce alcance: https://www.socialmediatoday.com/news/instagram-clarifies-that-including-your-own-logo-on-a-reel-is-ok/730852/
- Anuncio de skip rate en Instagram: https://www.instagram.com/p/DNqi1j-N6vx/
- Skip rate y primeros 3 s: https://www.truefuturemedia.com/articles/lower-instagram-reels-skip-rate
- TikTok — *How TikTok recommends videos*: https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you
- TikTok Ads — buenas prácticas creativas: https://ads.tiktok.com/help/article/creative-best-practices
- YouTube — métricas de Shorts (*Stayed to watch*, *Engaged views*): https://support.google.com/youtube/answer/12220281
- John Scott — ganchos y bucles de curiosidad: https://www.socialmediaexaminer.com/youtube-shorts-hooks-and-curiosity-loops-that-explode-your-views/
- Jenny Hoyos — método de guion: https://knowt.com/note/e40546ff-6565-4b65-acd6-6d3d2717dabe/Meet-the-YouTuber-Who-Solved-Shorts-Jen
- Caso Zack D. Films: https://danielrusnok.substack.com/p/how-a-faceless-channel-engineered
- Retención y arranque: https://faceless.so/blog/youtube-shorts-retention-read-and-improve-it
- Benchmarks de retención (vendedores): https://www.shortimize.com/blog/youtube-shorts-retention-rate · https://www.bytecap.io/research/youtube-shorts-retention-benchmarks
- Ritmo de cortes: https://www.opus.pro/blog/ideal-youtube-shorts-length-format-retention · https://vidpros.com/video-clip-length/
- Finales y pantallas finales: https://subscribr.ai/youtube-strategy/youtube-shorts-low-watch-time-boost · https://www.trymypost.com/blog/youtube-shorts-end-screen-strategy-2026
- Ritmo de voz: https://syllaby.io/blog/voiceover-pacing-silence-trimming-retention-editing/
- Subtítulos: https://ai-media.tv/wp-content/uploads/Whitepaper_Engagement_and_Retention-Final.pdf
- Zonas seguras: https://www.revid.ai/instagram-reels-safe-zone
- Marca temprana en Reels (Meta/Toluna): https://tolunacorporate.com/what-makes-short-form-video-ads-work-meta-toluna-study/
- Biblia y contenido viral (NPR): https://npr.org/2025/09/07/nx-s1-5518263/ai-bible-christianity-content
- Shorts bíblicos animados (vidIQ): https://vidiq.com/youtube-stats/channel/@bibletruthsanimated/videos/
