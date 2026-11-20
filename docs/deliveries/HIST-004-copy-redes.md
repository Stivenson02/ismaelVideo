# HIST-004 — Tamar, Judá y las pruebas que no pudo negar

**Revisión creativa:** aprobada por la persona el 20 de noviembre de 2026, después de ver `review-01` ([informe](../episodes/04-juda-tamar-review-01.md)).
**Estado de publicación:** **listo para revisión de copy; publicación pendiente: voz.**
1. **Voz:** los 10 audios se generaron con la **cuenta gratuita** de Fish Audio (confirmado el 2026-11-20).
   - Las voces son de uso libre, pero los términos de Fish limitan a uso personal y no comercial lo generado sin plan pago. Por eso no son publicables en la cuenta de la marca.
   - Hay que regenerarlos en un plan pago y volver a renderizar el MP4 de publicación.
   - Antes de pagar, conviene confirmar con el soporte de Fish que esas voces de la comunidad se pueden usar comercialmente (ver "Pendientes").
2. **Portada:** aprobar la portada propuesta.

El copy, la portada y el montaje no cambian. **No subas todavía** `ismael-004-juda-tamar-publicacion.mp4`: lleva la voz de la cuenta gratuita.

## Video de publicación (Instagram Reels y YouTube Shorts)

- **Archivo:** sin la etiqueta de revisión, el mismo para las dos redes.
  - Ruta en el proyecto: `public/videos/ismael-004-juda-tamar-publicacion.mp4`
  - Ruta local en Windows (no es una URL pública): `C:\Users\StivenAndresMaldonad\Documents\lk\ismaelVideo\public\videos\ismael-004-juda-tamar-publicacion.mp4`
- **Formato:** 1080 × 1920, 30 fps, H.264, **43 s**, en bucle: el final empalma con el inicio.
- **Contenido:** sin música; el sting de Ismael está integrado.
- **No subir** `ismael-004-juda-tamar-review-01.mp4`: lleva la etiqueta "ANIMATIC DE REVISIÓN · VOZ TEMPORAL".

## Portada

- **Propuesta, pendiente de tu aprobación:** `public/assets/social/hist-004/instagram-reel-cover.png` (1080 × 1920). Es la imagen guía aprobada, con "GÉNESIS 38", el título "Las pruebas que no pudo negar" y el símbolo oficial de Ismael. El texto queda dentro del recorte 3:4 de la cuadrícula de Instagram.
- **Instagram:** súbela como portada del Reel.
- **YouTube Shorts:** si la app te deja subir una miniatura, usa la misma portada. Si solo deja elegir un fotograma, el mejor es el **segundo 34**: Tamar sostiene el sello y el bastón, con la cita en pantalla.

## Instagram (Reels): caption listo para copiar

```text
¿Alguna vez esperaste una promesa que nunca llegó… y encima te culparon a ti?

A Tamar le pasó algo parecido, pero mucho más grave. Judá le prometió a su hijo Selá y nunca cumplió. Ella tomó un riesgo y se quedó con tres pruebas: el sello, el cordón y el bastón de Judá. Cuando él ordenó castigarla, ella las mostró, y Judá tuvo que reconocerlo: «Más justa es ella que yo» (Génesis 38:26).

Quien promete, responde por su promesa.

¿Te ha pasado? Cuéntanos en los comentarios y comparte esta historia con alguien que necesite escucharla. Síguenos para más historias de la Biblia.

Génesis 38 · Narración con voz generada por IA.

#HistoriasBíblicas #Biblia #Génesis38 #FeCristiana #Tamar
```

## YouTube (Shorts)

**Título** (69 caracteres; el máximo es 100):

```text
Judá nunca cumplió su promesa… y Tamar tenía las pruebas | Génesis 38
```

Alternativa: `Te prometió algo y nunca cumplió: la historia de Tamar y Judá`

**Descripción, lista para copiar:**

```text
Judá le prometió algo a Tamar y nunca cumplió. Cuando quiso castigarla, ella mostró las pruebas que él no pudo negar: su sello, su cordón y su bastón.

Judá tuvo que reconocerlo: «Más justa es ella que yo» (Génesis 38:26).

Quien promete, responde por su promesa.

¿Te ha pasado algo parecido? Cuéntalo en los comentarios y suscríbete para más historias de la Biblia en animación.

Lectura: Génesis 38. Citas de la Reina-Valera 1960. Narración con voz generada por IA.

#HistoriasBíblicas #Biblia #Shorts
```

**Etiquetas** (campo "Etiquetas" de YouTube Studio; 445 caracteres, unos 468 con el conteo de YouTube, que suma comillas a las etiquetas con espacios; el máximo es 500). Incluyen variantes sin tilde, porque YouTube dice que las etiquetas ayudan sobre todo cuando la gente escribe con erratas:

```text
Judá y Tamar, Juda y Tamar, Tamar y Judá, Tamar y Juda, Génesis 38, Genesis 38, historia de Tamar, Tamar en la Biblia, Judá en la Biblia, más justa es ella que yo, mas justa es ella que yo, sello cordón y bastón, promesa incumplida, historias bíblicas, historias biblicas, historias de la Biblia, Biblia animada, historias bíblicas animadas, animación cristiana, Antiguo Testamento, reflexión cristiana, Biblia para jóvenes, fe cristiana, Ismael
```

## Notas para publicar

- **Enseñanza:** "Quien promete, responde por su promesa." es una aplicación del relato, no una cita bíblica. Las únicas citas textuales son Gn 38:25 y Gn 38:26, en el video y en el copy.
- **Vocabulario:** igual que en el guion, el copy no usa "morir" ni "quemar". Tampoco anuncia la descarga de la app de Ismael.
- **Contenido generado:** el video es animación 2D hecha con imágenes generadas y voz sintética de narrador, sin imitar a personas reales.
  - Los términos de Fish piden declarar que el contenido se creó con IA; por eso los dos textos terminan con "Narración con voz generada por IA".
  - Al subirlo, revisa también si Instagram o YouTube te piden marcarlo como contenido generado o alterado con IA, y márcalo si corresponde.
- **Calidad:** la persona aprobó publicar con la resolución actual de los personajes. Ampliar las hojas de sprites ×2 queda como mejora opcional para próximas versiones.

## Pendientes antes de publicar

1. **Regenerar la voz en un plan pago de Fish:**
   - Mismos 10 textos de `docs/episodes/04-juda-tamar-voz.md`, con las mismas voces (Joss, Yuli y GABRIEL-VO) si su licencia permite uso comercial, y los mismos nombres de archivo.
   - Después: medir con `voz`, ajustar en `story.ts` y `shots.ts` los cuadros que se muevan y renderizar de nuevo con `render:juda-tamar-publicacion`.
   - Anotar el plan y la fecha en el "Registro de la voz".
   - Antes de regenerar, preguntar al soporte de Fish si en un plan pago Joss, Yuli y GABRIEL-VO (voces de la comunidad) se pueden usar comercialmente. La FAQ solo lo garantiza para voces verificadas "que te pertenecen". Si no se puede, elegir voces oficiales o propias que sí lo permitan y registrarlas.
2. **Portada:** aprobar la propuesta o pedir cambios de título o encuadre.

**Preparado:** 2026-11-20
