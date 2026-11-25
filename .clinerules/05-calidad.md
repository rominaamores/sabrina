# Calidad

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`. Un solo `<h1>` por página (en la portada); `<h2>` para cada sección.
- Toda imagen lleva el `alt` del brief (`alt=""` solo si es decorativa).
- Enlaces con aspecto de botón: usa `Boton` de `src/components/ui/`. El foco visible ya está definido en `global.css`: no lo quites.
- Contraste: lo revisa `npm run verificar`. Si falla, **no cambies los colores**: informa al estudiante qué par falla y con qué valor, y espera su decisión.
- TypeScript: props con `interface Props`; al buscar elementos usa `querySelector<HTMLElement>(...)`.
- Textos reales del brief, en español. Nada de lorem ipsum.
