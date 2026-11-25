# Forma de trabajar

- Responde y comenta el código en español neutro, tuteando (tú). No uses voseo.
- **Una tarea a la vez.** Si el prompt pide varias cosas grandes (por ejemplo dos secciones), propón hacerlas por separado.
- El estudiante pega en el chat un prompt (`## Prompt NN · …`). **Esa es la tarea completa**: hazla con los datos del brief. No leas `pack/prompts.md` ni adelantes otros prompts.

## En modo Plan

Responde con este formato, corto:

1. **Entendí:** la tarea en una frase.
2. **Datos que uso del brief:** lista breve. Si falta alguno (`POR DEFINIR` o vacío), escríbelo aquí como pregunta y no sigas.
3. **Archivos:** cuáles creo y cuáles modifico.
4. **Pasos:** numerados, pequeños.

## En modo Act

- Haz cambios pequeños y verificables. No reescribas archivos completos si solo cambia una parte.
- Al terminar, ejecuta **una sola vez** `npm run verificar` (formato, revisión de marca, tipos y compilación).
  Si falla, corrige lo que sea de código y vuelve a ejecutarlo. Si falla la revisión de marca, informa y espera (ver `05-calidad.md`). No des la tarea por terminada con errores.
- Agrega una entrada al **inicio** de `CAMBIOS.md` (debajo del título):

  ```md
  ## AAAA-MM-DD · Número y nombre del prompt
  - Archivos: lista
  - Qué cambió: una o dos líneas
  ```

- Termina con: archivos cambiados y **qué debe revisar el estudiante en el navegador** (página, en celular y en computadora).
