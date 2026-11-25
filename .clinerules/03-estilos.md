# Estilos

- Estiliza con clases de Tailwind en el HTML. No uses `style=""` ni bloques `<style>` en los componentes.
- Colores, tipografías, esquinas, bordes y sombras salen **solo** de los tokens de `src/styles/global.css`.
  La paleta por defecto de Tailwind está desactivada: `bg-blue-500`, `text-red-600`, etc. **no existen**.
- No agregues colores ni cambies valores de tokens por tu cuenta: los valores salen del brief.
- CSS escrito a mano solo en `global.css` y solo si Tailwind no puede hacerlo.

## Tokens (los valores los pone el brief)

| Token | Clases | Uso |
| --- | --- | --- |
| `fondo` / `superficie` | `bg-fondo`, `bg-superficie` | Fondo de página / tarjetas y bloques |
| `texto` / `texto-suave` | `text-texto`, `text-texto-suave` | Texto principal / secundario |
| `borde` | `border-borde` | Líneas finas (separadores) |
| `marca` / `marca-contraste` | `bg-marca text-marca-contraste` | Color de la marca y el texto que va encima |
| `font-titulos` / `font-texto` | `font-titulos`, `font-texto` | Tipografías (h1–h3 ya usan `font-titulos`) |
| `rounded-marca` | `rounded-marca` | Esquinas de tarjetas, botones, imágenes |
| `borde-marca` | `borde-marca` | Borde con el grosor y color de la marca |
| `shadow-marca` | `shadow-marca` | Sombra de la marca |

Usa `rounded-marca`, `borde-marca` y `shadow-marca` en lugar de `rounded-lg`, `border-2` o `shadow-md`: así la forma se cambia en un solo lugar.

## Aplicar la identidad (secciones 3, 4 y 5 del brief)

Todo se hace en `src/styles/global.css`, salvo el ancho máximo:

1. **Paleta:** reemplaza el valor de cada `--color-*` por el hex del brief.
2. **Tipografías:** por cada archivo de `pack/fuentes/`, un `@font-face` con `url("../../pack/fuentes/archivo")` (ver el ejemplo en el comentario de `global.css`). Luego `--font-titulos` y `--font-texto` con el nombre de la fuente primero y la genérica al final: `"Nombre", sans-serif`.
3. **Forma:** `--radius-marca`, `--borde-ancho` y `--shadow-marca` con los valores del brief.
4. **Ancho máximo:** la clase `max-w-*` en `src/components/ui/Contenedor.astro`.
5. Quita el comentario `POR DEFINIR` de cada valor que completes.

## Encabezado y menú (sección 7 del brief)

No construyas un menú nuevo: el tipo de menú y si queda fijo se eligen en `encabezado` de `src/datos/sitio.ts`; los enlaces, en `menu`.

## Responsive (obligatorio)

- Diseña primero para celular (sin prefijo) y luego amplía con `sm:` (640 px), `md:` (768 px), `lg:` (1024 px).
- Nada puede provocar scroll horizontal a 360 px: imágenes con `w-full` o `max-w-full`, textos largos que bajen de línea, grillas de 1 columna en celular.
- La disposición del brief dice cómo se ve en celular y en computadora: respeta las dos.
- Al terminar, indica al estudiante que revise a **360 px, 768 px y 1280 px** (en Chrome: `F12` > ícono de celular).
