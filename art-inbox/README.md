# Bandeja de artes crudos

Aquí se dejan las imágenes **tal como salen del generador**, antes de la preproducción. Git ignora todo menos este archivo: los crudos no se versionan, y las piezas procesadas van a `public/assets/`.

```text
art-inbox/
  hist-004/
    MOD/                  ← una carpeta por personaje
      base.png            ← diseño aprobado (fondo verde #00FF00)
      sprite-m1.png       ← hoja de sprites: todos los cuadros de un movimiento
      sprite-m2.png
      _qa/                ← lo genera la herramienta
    JUDA/  TAMAR/         ← igual: base(s) + sprite-<plano>.png
    (opcional) pose-02.png, face-dolida.png, blink.png… si un gesto se hace por ediciones de la base
    F1/                   ← fondo por capas
      full.png            ← escena completa
      l0.png  l1.png  l2.png
    PROPS/
      judah-seal.png …
```

Los nombres exactos de cada archivo están en la tabla de entrega del documento de prompts del episodio (`docs/episodes/<slug>-prompts.md`). También puedes pegar las imágenes en el chat: el agente las guarda aquí con el nombre correcto.

Proceso y comandos: [`docs/technical/ANIMACION-POR-CAPAS.md`](../docs/technical/ANIMACION-POR-CAPAS.md).
