---
name: ismv-testimonio
description: Recibe el testimonio escrito de una persona real y lo convierte en una historia lista para guionizar. Registra el consentimiento y el anonimato, protege los datos que la identifican, separa hechos de interpretación y propone el enfoque. Es el paso 1 de la línea de testimonios (equivale a ismv-historia); después sigue ismv-guion.
---

# ISMV Testimonio

Una persona escribe su testimonio; la persona usuaria lo pega en el chat o indica un archivo. Esta skill prepara la **historia**: qué pasó, en qué orden, cuál es la tensión, el giro y lo que la persona dice que Dios hizo. Además deja claro qué se puede mostrar y qué no. No escribe todavía la narración final: eso lo hace `ismv-guion`.

## Fuentes

- `AGENTS.md`, `docs/FLUJO-DE-TRABAJO.md` (línea de testimonios), `docs/testimonios/README.md` (anonimato, autorización y plantilla), `docs/DIRECCION-VISUAL.md` (línea de testimonios) y `docs/investigacion/RETENCION-REELS.md`.

## Entrada

- El texto del testimonio, pegado o en un archivo.
- Lo que se sabe del consentimiento. Si no se dice nada, se asume **anónimo**: alias, personaje genérico y voz recreada o de otra persona.
- Para retomar un testimonio existente: su código `HIST-###`.

## Privacidad primero

- **El texto original no entra al repositorio.** Guárdalo tal cual en `art-inbox/<hist>/TEXTO/original.md`, una carpeta que git ignora.
- En `docs/` todo se escribe ya **anonimizado**: alias en vez de nombre, sin apellidos, ciudades exactas, empresas, iglesias, hospitales, médicos, fechas exactas ni nombres de familiares.
- Si un dato identifica a alguien y la historia no lo necesita, se omite. Si la historia lo necesita, se generaliza ("una ciudad del norte", "su trabajo en una fábrica") y se marca en las notas como "detalle generalizado". **Nunca se inventa un dato para reemplazarlo.**

## Pasos

1. **Registrar.** Asigna el siguiente código libre `HIST-###` en `docs/episodes/INDEX.md`, con el nombre `Testimonio — <alias>: <título de trabajo>`. Guarda el original en `art-inbox/<hist>/TEXTO/original.md`. Crea `docs/testimonios/<slug>.md` desde la plantilla de `docs/testimonios/README.md`, con estado `story-draft`.
2. **Consentimiento y anonimato.** Llena la tabla de la plantilla: alias o nombre, voz (la persona lee el guion / voz recreada en Fish / otra persona), personaje genérico o con parecido, lugar, plataformas y autorización firmada (sí o pendiente). Sin autorización escrita se trabaja el borrador y el animatic; la versión final y la publicación quedan bloqueadas. Si hay menores, hace falta el permiso de su tutor y no se los identifica.
3. **Leer y mapear.** Divide la historia en: antes (quién era, qué vivía), crisis (qué perdió o temió), punto de quiebre, encuentro (lo que la persona dice que Dios hizo), después (cómo vive hoy) y una frase que lo resuma. En cada tramo separa:
   - **hechos** que la persona cuenta;
   - **su interpretación** ("sentí que Dios me habló");
   - lo que **falta o no queda claro**.

   Si falta algo esencial para entender la historia, escribe la pregunta concreta que la persona usuaria debería hacerle; no rellenes el hueco.
4. **Elegir el enfoque.** Propón uno o dos ángulos, cada uno con:
   - una sola pregunta central;
   - el **gancho** posible: el momento más fuerte de la historia o un caso cotidiano que conecte;
   - el giro y el cierre.

   Señala las frases textuales de la persona que valen oro: se pueden conservar casi literales en el guion.
5. **Temas sensibles.** Marca lo que pide cuidado:
   - salud y sanidad: se cuenta como su testimonio, sin consejo médico ni promesa para quien lo vea;
   - violencia, abuso, adicciones, suicidio o duelo: sobriedad, sin detalles gráficos;
   - palabras delicadas para las plataformas ("morir", "matar", "suicidio"…), que se parafrasean como en los guiones bíblicos.

   Un versículo, si se usa, es una elección del equipo, no algo que la persona dijo.
6. **Entregar** la propuesta en el documento (`story-draft`) y en el chat, con las preguntas pendientes. ✋ La persona usuaria aprueba el enfoque (o lo ajusta) antes de `$ismv-guion HIST-###`.

## Límites

- No inventes hechos, diálogos, lugares ni emociones que el texto no dice. "Mejorar" la historia consiste en elegir y ordenar, no en añadir.
- No contactes a la persona ni compartas su texto. No publiques, no arranques servidores y no hagas commits.
