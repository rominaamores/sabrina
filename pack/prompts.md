# Prompts

## Prompt 01 · Global · Identidad

**Tarea:** Aplicar exclusivamente la paleta, tipografías, forma y animación aprobadas, sin inventar decisiones ni contenido.
**Datos:** brief, secciones 3, 4, 5 y 6.
**Pega estos archivos (versión actual, con su ruta):**
- `src/styles/global.css`
- `src/components/ui/Contenedor.astro`
- `src/datos/sitio.ts`
- `brief.md` (secciones 3 a 6)

**Devuélveme completos:**
- `src/styles/global.css` (REEMPLAZA)
- `src/components/ui/Contenedor.astro` (REEMPLAZA)
- `src/datos/sitio.ts` (REEMPLAZA)

**Borrar:** nada

**Terminado cuando:**
- Los siete tokens de color coinciden exactamente con el brief, sin agregar otros colores.
- Las tipografías usan `@font-face` desde `pack/fuentes/`, solo cuando estén definidos los nombres exactos y se confirme la licencia.
- La forma corresponde a `9999px`, `0px`, `none`, `max-w-5xl`, con animación `sutil`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

No inventes archivos, grosores ni licencias de fuentes. Si faltan, detente y pregunta antes de implementar esa parte.

## Prompt 02 · Global · Marco

**Tarea:** Configurar los datos del sitio, menú, encabezado fijo, pie de página y páginas vacías del mapa, retirando las secciones de ejemplo de Inicio.
**Datos:** brief, secciones 1, 2, 7, 8 y 10.
**Pega estos archivos (versión actual, con su ruta):**
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro` (si hay logo)
- `brief.md` (secciones 1, 7, 8 y 10)

**Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/pages/bio.astro` (NUEVO)
- `src/pages/catalogo.astro` (NUEVO)
- `src/pages/contacto.astro` (NUEVO)
- `src/components/Encabezado.astro` (REEMPLAZA, si hay logo)

**Borrar:**
- `src/components/inicio/Portada.astro`
- `src/components/inicio/Comprobacion.astro`
- `src/components/inicio/Pasos.astro`

**Terminado cuando:**
- El menú muestra Inicio, Sobre Sabrina, Catálogo y Contacto, con las rutas exactas del brief.
- El encabezado permanece fijo al desplazarse y el pie contiene los textos y enlaces aprobados.
- Cada página existe, sin contenido de ejemplo, y tiene su título de pestaña una vez definido.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

No inventes logo, títulos de pestaña ni datos de contacto.

## Prompt 03 · Inicio · Bienvenida

**Tarea:** Construir la sección de bienvenida con su fotografía, título, texto, eslogan y botón.
**Datos:** brief, sección 9, Página Inicio, Sección Bienvenida.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
- `brief.md` (sección 9, Página Inicio)

**Devuélveme completos:**
- `src/components/inicio/Bienvenida.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)

**Borrar:** nada

**Disposición:** celular: imagen principal grande y contenido debajo, con título, texto, eslogan y botón / computadora: texto a la izquierda e imagen a la derecha.

**Referencia:** 1b, tipografía estética y femenina para el h1; 2b, distribución del encabezado y ubicación del logo, que debe conservarse desde el marco.

**Terminado cuando:**
- Se muestra el título "Bienvenida a Sabrina" y el texto exacto del brief.
- La imagen `foto-principal.jpg` aparece con su texto alternativo.
- El botón "Descubre el catálogo" lleva a `/catalogo`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 04 · Sobre Sabrina · Nuestra historia

**Tarea:** Construir la sección de historia de la marca con los dos párrafos y la fotografía personal.
**Datos:** brief, sección 9, Página Sobre Sabrina, Sección Nuestra historia.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/bio.astro`
- `brief.md` (sección 9, Página Sobre Sabrina)

**Devuélveme completos:**
- `src/components/bio/NuestraHistoria.astro` (NUEVO)
- `src/pages/bio.astro` (REEMPLAZA)

**Borrar:** nada

**Disposición:** celular: título y texto encima de la fotografía / computadora: bloque de texto a la izquierda y fotografía a la derecha.

**Referencia:** 1b, tipografía estética y femenina para el h1.

**Terminado cuando:**
- Aparece el título "Nuestra historia" y los dos párrafos originales sin cambios.
- Se muestra `foto-personal.jpg` con el texto alternativo indicado.
- No se inventan las palabras destacadas con `<span>`; se solicita su definición.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 05 · Catálogo · Introducción al catálogo

**Tarea:** Construir la introducción del catálogo con título, texto y botón de navegación interna.
**Datos:** brief, sección 9, Página Catálogo, Sección Introducción al catálogo.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/catalogo.astro`
- `brief.md` (sección 9, Página Catálogo, Introducción al catálogo)

**Devuélveme completos:**
- `src/components/catalogo/IntroduccionCatalogo.astro` (NUEVO)
- `src/pages/catalogo.astro` (REEMPLAZA)

**Borrar:** nada

**Disposición:** celular: título, texto y botón apilados / computadora: bloque introductorio superior antes de la cuadrícula de prendas.

**Referencia:** 1b, tipografía estética y femenina para el h1.

**Terminado cuando:**
- El título es exactamente "Encuentra tu próximo favorito".
- El texto coincide con el brief.
- "Ver todas las prendas" lleva a la lista de prendas de esta misma página, cuando se defina el id de destino.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 06 · Catálogo · Lista de prendas

**Tarea:** Construir la cuadrícula de las doce prendas con sus fotografías, títulos, descripciones y precios exactos.
**Datos:** brief, sección 9, Página Catálogo, Sección Lista de prendas.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/catalogo.astro`
- `brief.md` (sección 9, Página Catálogo, Lista de prendas)

**Devuélveme completos:**
- `src/components/catalogo/ListaPrendas.astro` (NUEVO)
- `src/pages/catalogo.astro` (REEMPLAZA)

**Borrar:** nada

**Disposición:** celular: una columna de tarjetas con imagen, nombre, descripción y precio / computadora: cuadrícula de tres columnas con las doce prendas en orden.

**Referencia:** 1a, distribución ordenada y estética de imágenes; 2a, colores femeninos para los nombres de prendas.

**Terminado cuando:**
- Aparecen las doce prendas en el orden del brief.
- Todos los títulos, descripciones y precios coinciden exactamente, incluyendo puntuación, mayúsculas y errores originales.
- Las doce imágenes tienen sus nombres de archivo y textos alternativos correctos.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 07 · Contacto · Hablemos de moda

**Tarea:** Construir la sección de contacto con título, texto, tarjeta de contacto, enlaces, íconos SVG y botón de WhatsApp.
**Datos:** brief, sección 9, Página Contacto, Sección Hablemos de moda; sección 10.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
- `brief.md` (secciones 9, Página Contacto, y 10)

**Devuélveme completos:**
- `src/components/contacto/HablemosDeModa.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)

**Borrar:** nada

**Disposición:** celular: título, texto y tarjeta de contacto en una columna / computadora: contenido de contacto a la izquierda y espacio de imagen a la derecha, integrado con la siguiente sección.

**Referencia:** 1b, tipografía estética y femenina para el h1.

**Terminado cuando:**
- Se muestran el título, texto, correo, teléfono, Instagram y TikTok exactamente como en el brief.
- Los enlaces `mailto:`, WhatsApp, Instagram y TikTok llevan a los destinos aprobados.
- El botón "Escríbenos por WhatsApp" usa el enlace exacto del brief; los íconos y efectos no definidos se consultan antes de implementarse.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 08 · Contacto · Imagen final

**Tarea:** Incorporar la imagen final y colocar sobre ella el texto aprobado.
**Datos:** brief, sección 9, Página Contacto, Sección Imagen final.
**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
- `brief.md` (sección 9, Página Contacto, Imagen final)

**Devuélveme completos:**
- `src/components/contacto/ImagenFinal.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)

**Borrar:** nada

**Disposición:** celular: imagen debajo del contenido de contacto, con texto superpuesto / computadora: imagen a la derecha del contenido de contacto, con texto superpuesto.

**Referencia:** ninguna

**Terminado cuando:**
- Se utiliza `imagen-final-contacto.jpg`.
- El texto sobre la imagen dice exactamente "Tu próxima prenda favorita merece una segunda historia."
- La imagen se integra con la sección de contacto sin modificar el contenido existente y tiene un alt definido.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 09 · Todas las páginas · Revisión final

**Tarea:** Revisar todas las páginas y corregir únicamente errores de implementación, sin cambiar decisiones ni contenido aprobado.
**Datos:** brief completo, secciones 1 a 10.
**Pega estos archivos (versión actual, con su ruta):**
- `brief.md`
- `src/pages/index.astro`
- `src/pages/bio.astro`
- `src/pages/catalogo.astro`
- `src/pages/contacto.astro`
- `src/components/inicio/Bienvenida.astro`
- `src/components/bio/NuestraHistoria.astro`
- `src/components/catalogo/IntroduccionCatalogo.astro`
- `src/components/catalogo/ListaPrendas.astro`
- `src/components/contacto/HablemosDeModa.astro`
- `src/components/contacto/ImagenFinal.astro`
- `src/components/Encabezado.astro`
- `src/components/ui/Contenedor.astro`
- `src/styles/global.css`
- `src/datos/sitio.ts`

**Devuélveme completos:**
- Cada archivo de la lista anterior que necesite corrección (REEMPLAZA).
- No devuelvas archivos que no requieran cambios.

**Borrar:** nada

**Terminado cuando:**
- Todas las páginas se revisaron a 360, 768 y 1280 px, sin desbordamientos ni scroll horizontal.
- Todas las imágenes tienen atributos `alt` y se comprueba que cargan correctamente.
- Todos los enlaces y botones funcionan y los textos, colores, fuentes y disposiciones coinciden con el brief.
- No se agregaron secciones, textos, imágenes, colores ni funcionalidades que no estén aprobados.
- `npm run verificar` termina sin errores.
