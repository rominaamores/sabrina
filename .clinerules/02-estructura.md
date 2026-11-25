# Estructura: dónde va cada cosa

| Carpeta / archivo | Qué contiene |
| --- | --- |
| `src/pages/` | Una página por archivo, según el mapa del sitio del brief: `index.astro` = `/`, `servicios.astro` = `/servicios`. Solo importa el Layout y ordena secciones. Sin HTML largo, sin estilos, sin scripts. |
| `src/layouts/Layout.astro` | `<head>`, encabezado, pie y arranque de animaciones. Cada página lo usa con su `title` (del mapa del sitio). |
| `src/datos/sitio.ts` | Nombre, descripción, correo, pie, animación, menú y redes. Encabezado, pie y `<head>` leen de aquí. |
| `src/components/<pagina>/` | **Cada sección es un componente**, en la carpeta de su página: `src/components/inicio/Portada.astro`, `src/components/servicios/Lista.astro`. Nombres de archivo en español y PascalCase. |
| `src/components/` | Secciones que se repiten en varias páginas (por ejemplo `Contacto.astro`), además de `Encabezado` y `PiePagina`. |
| `src/components/ui/` | Piezas reutilizables: `Contenedor`, `Seccion`, `Boton`. **Antes de crear algo, revisa si ya existe aquí y úsalo.** |
| `src/styles/global.css` | Tokens de diseño (colores, tipografías, radio, borde, sombra) y estilos base. |
| `src/scripts/animaciones.ts` | Animaciones con Motion. |
| `pack/` | **Material del estudiante. Solo lectura: no lo modifiques.** `brief.md` (todas las decisiones), `prompts.md`, `plan.pdf`, `imagenes/`, `logos/` y `fuentes/`. |
| `public/` | Solo el favicon. |
| `CAMBIOS.md` | Registro de tareas: una entrada por tarea terminada. |

## Cómo crear una página nueva

1. Crea `src/pages/ruta.astro` (la ruta del mapa del sitio) con el Layout y su `title`:

   ```astro
   ---
   import Layout from "../layouts/Layout.astro";
   ---

   <Layout title="Título de la pestaña del brief">
     <!-- secciones en orden -->
   </Layout>
   ```

2. Agrega su enlace a `menu` en `src/datos/sitio.ts`: `{ texto: "Servicios", href: "/servicios" }`.

## Cómo crear una sección nueva

1. Crea `src/components/<pagina>/NombreSeccion.astro` usando `Seccion` como contenedor. Respeta la **disposición** del brief (celular primero).
2. Los datos (listas de servicios, productos, proyectos) van en el frontmatter del componente y se recorren con `map()`. Copia los textos del brief tal cual.
3. Impórtala en su página, en el orden del brief.

```astro
---
import Seccion from "../ui/Seccion.astro";

const servicios = [{ titulo: "Texto del brief", descripcion: "Texto del brief." }];
---

<Seccion id="servicios" titulo="Servicios">
  <ul class="grid gap-6 sm:grid-cols-2" data-revelar-cascada>
    {servicios.map((s) => (
      <li class="rounded-marca borde-marca bg-superficie p-6 shadow-marca">
        <h3 class="text-2xl font-bold">{s.titulo}</h3>
        <p class="mt-2 text-texto-suave">{s.descripcion}</p>
      </li>
    ))}
  </ul>
</Seccion>
```

La primera sección de cada página lleva el `<h1>` de esa página (no uses `titulo` de `Seccion`, que crea un `<h2>`).

## Imágenes

Usa solo los archivos que el brief nombra, desde `pack/imagenes/` o `pack/logos/` con el alias `@pack/`; si el archivo no existe, avisa y detente.
No pongas `width` ni `height` en `<Image />`: Astro lee las medidas reales y así la foto no se deforma ni se recorta.
El `alt` es el del brief.

```astro
---
import { Image } from "astro:assets";
import foto from "@pack/imagenes/foto.jpg";
---

<Image src={foto} alt="Texto alternativo del brief" class="rounded-marca" />
```
