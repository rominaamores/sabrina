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

**Borrar:** nada.

**Terminado cuando:**
- Los siete tokens de color coinciden exactamente con el brief, sin agregar otros colores:
  - `fondo`: `#fee7e6`
  - `superficie`: `#ffffff`
  - `texto`: `#000000`
  - `texto-suave`: `#6b4a3a`
  - `borde`: `#f7d1d5`
  - `marca`: `#e8989a`
  - `marca-contraste`: `#721819`
- Las tipografías utilizan `@font-face` desde `pack/fuentes/`, con los archivos:
  - `Roslindale-DisplayNarrowBlack-Testing.ttf` para títulos, grosor 900.
  - `GeneralSans-Regular.ttf` para textos, grosor 400.
  - `GeneralSans-Semibold.ttf` para textos destacados, grosor 600.
- Se utilizan las fuentes como recursos del proyecto académico, sin asumir una licencia comercial para la versión Testing de Roslindale.
- La forma corresponde a `9999px`, `0px`, `none` y `max-w-5xl`, con animación `sutil`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

No inventes archivos, grosores, licencias ni colores adicionales.

---

## Prompt 02 · Global · Marco

**Tarea:** Configurar los datos del sitio, menú, encabezado fijo, pie de página y páginas vacías del mapa, retirando las secciones de ejemplo de Inicio.

**Datos:** brief, secciones 1, 2, 7, 8 y 10.

**Pega estos archivos (versión actual, con su ruta):**
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro`
- `brief.md` (secciones 1, 7, 8 y 10)

**Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/pages/bio.astro` (NUEVO)
- `src/pages/catalogo.astro` (NUEVO)
- `src/pages/contacto.astro` (NUEVO)
- `src/components/Encabezado.astro` (REEMPLAZA)

**Borrar:**
- `src/components/inicio/Portada.astro`
- `src/components/inicio/Comprobacion.astro`
- `src/components/inicio/Pasos.astro`

**Terminado cuando:**
- El menú muestra Inicio, Sobre Sabrina, Catálogo y Contacto, con las rutas `/`, `/bio`, `/catalogo` y `/contacto`.
- El encabezado presenta el nombre «Sabrina» como identidad principal, centrado, con los enlaces de navegación debajo.
- El encabezado permanece fijo al desplazarse.
- El pie contiene el texto: «Moda de segunda mano. © 2026 Sabrina. Todos los derechos reservados.»
- Los datos de contacto son:
  - Correo: `rominaamores0@gmail.com`
  - Instagram: `@heartlessabri`
  - TikTok: `@popstar.sabri`
  - WhatsApp: `+593 987097831`
- Las páginas tienen los siguientes títulos de pestaña:
  - Inicio: `Sabrina`
  - Sobre Sabrina: `Sabrina | Sobre Sabrina`
  - Catálogo: `Sabrina | Catálogo`
  - Contacto: `Sabrina | Contacto`
- Cada página existe sin contenido de ejemplo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

No inventes información de la marca ni datos de contacto adicionales.

---

## Prompt 03 · Inicio · Bienvenida

**Tarea:** Construir la sección de bienvenida con su fotografía, título, texto, eslogan y botón.

**Datos:** brief, sección 9, Página Inicio, Sección Bienvenida.

**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/index.astro`
- `brief.md` (sección 9, Página Inicio)

**Devuélveme completos:**
- `src/components/inicio/Bienvenida.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)

**Borrar:** nada.

**Disposición:** celular: imagen principal grande y contenido debajo, con título, texto, eslogan y botón / computadora: texto a la izquierda e imagen a la derecha.

**Referencia:** 1b, tipografía estética y femenina para el h1; 2b, distribución del encabezado y ubicación del nombre de la marca, que debe conservarse desde el marco.

**Terminado cuando:**
- Se muestra el título «Bienvenida a Sabrina» y el texto exacto del brief.
- La imagen `pack/imagenes/foto-principal.jpg.jpeg` aparece con su texto alternativo «Foto principal de Sabrina».
- Se presenta el eslogan «Luce bien por dentro y por fuera».
- El botón «Descubre el catálogo» lleva a `/catalogo`.
- La imagen se importa utilizando `astro:assets` y el componente `<Image />`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 04 · Sobre Sabrina · Nuestra historia

**Tarea:** Construir la sección de historia de la marca con los dos párrafos originales, las palabras destacadas y la fotografía personal.

**Datos:** brief, sección 9, Página Sobre Sabrina, Sección Nuestra historia.

**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/bio.astro`
- `brief.md` (sección 9, Página Sobre Sabrina)

**Devuélveme completos:**
- `src/components/bio/NuestraHistoria.astro` (NUEVO)
- `src/pages/bio.astro` (REEMPLAZA)

**Borrar:** nada.

**Disposición:** celular: fotografía y contenido textual organizados verticalmente / computadora: fotografía a la izquierda y bloque de texto a la derecha.

**Referencia:** 1b, tipografía estética y femenina para el h1.

**Terminado cuando:**
- Aparece el título «Nuestra historia» y los dos párrafos originales sin cambios.
- Se muestra `pack/imagenes/foto-personal.jpg.jpeg` con el texto alternativo «Foto personal de Sabrina».
- Se destacan mediante `<span>` la palabra «especiales» y la frase «reflejen tu personalidad», ambas del primer párrafo.
- La fotografía aparece a la izquierda y el texto a la derecha en computadora, de acuerdo con la distribución aprobada.
- Se utiliza `<Image />` de `astro:assets` para la fotografía.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 05 · Catálogo · Introducción al catálogo

**Tarea:** Construir la introducción del catálogo con título, texto y botón de navegación interna.

**Datos:** brief, sección 9, Página Catálogo, Sección Introducción al catálogo.

**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/catalogo.astro`
- `brief.md` (sección 9, Página Catálogo, Introducción al catálogo)

**Devuélveme completos:**
- `src/components/catalogo/IntroduccionCatalogo.astro` (NUEVO)
- `src/pages/catalogo.astro` (REEMPLAZA)

**Borrar:** nada.

**Disposición:** celular: título, texto y botón apilados / computadora: bloque introductorio superior antes de la cuadrícula de prendas.

**Referencia:** 1b, tipografía estética y femenina para el h1.

**Terminado cuando:**
- El título es exactamente «Encuentra tu próximo favorito».
- El texto coincide con el brief.
- El botón «Ver todas las prendas» lleva a `#lista-prendas` dentro de la misma página.
- La sección introductoria utiliza el identificador `introduccion-catalogo`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 06 · Catálogo · Lista de prendas

**Tarea:** Construir la cuadrícula de las doce prendas con sus fotografías, títulos, descripciones y precios exactos.

**Datos:** brief, sección 9, Página Catálogo, Sección Lista de prendas.

**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/catalogo.astro`
- `brief.md` (sección 9, Página Catálogo, Lista de prendas)

**Devuélveme completos:**
- `src/components/catalogo/ListaPrendas.astro` (NUEVO)
- `src/pages/catalogo.astro` (REEMPLAZA)

**Borrar:** nada.

**Disposición:** celular: cuadrícula de dos columnas de tarjetas con imagen, nombre, descripción y precio / computadora: cuadrícula de tres columnas con las doce prendas en orden.

**Referencia:** 1a, distribución ordenada y estética de imágenes; 2a, colores femeninos para los nombres de prendas.

**Terminado cuando:**
- Aparecen las doce prendas en el orden del brief.
- Todos los títulos, descripciones y precios coinciden exactamente con el brief, incluyendo puntuación, mayúsculas y errores originales.
- Las doce imágenes tienen sus nombres de archivo y textos alternativos correctos.
- Las fotografías se importan desde `pack/imagenes/` y utilizan `<Image />` de `astro:assets`.
- La sección de productos utiliza el identificador `lista-prendas`, para que funcione el botón de navegación interna.
- Los nombres de las prendas utilizan el color `marca-contraste`.
- Se mantiene la cuadrícula de dos columnas en celular y tres columnas en computadora.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 07 · Contacto · Hablemos de moda

**Tarea:** Construir la sección de contacto con título, texto, tarjeta de contacto, enlaces, íconos PNG originales y botón de WhatsApp.

**Datos:** brief, sección 9, Página Contacto, Sección Hablemos de moda; sección 10.

**Pega estos archivos (versión actual, con su ruta):**
- `src/pages/contacto.astro`
- `brief.md` (secciones 9, Página Contacto, y 10)

**Devuélveme completos:**
- `src/components/contacto/HablemosDeModa.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)

**Borrar:** nada.

**Disposición:** celular: título, texto y tarjeta de contacto en una columna, con la fotografía debajo / computadora: contenido de contacto a la izquierda y fotografía a la derecha.

**Referencia:** 1b, tipografía estética y femenina para el h1.

**Terminado cuando:**
- Se muestran el título, texto, correo, teléfono, Instagram y TikTok exactamente como en el brief.
- Los enlaces tienen los siguientes destinos:
  - Correo: `mailto:rominaamores0@gmail.com`
  - WhatsApp: `https://wa.me/593987097831`
  - Instagram: `https://www.instagram.com/heartlessabri`
  - TikTok: `https://www.tiktok.com/@popstar.sabri`
- El botón «Escríbenos por WhatsApp» utiliza el enlace exacto del brief.
- Se utilizan los cuatro íconos PNG originales:
  - `pack/logos/correo-electrónico.png`
  - `pack/logos/telefono.png`
  - `pack/logos/instagram.png`
  - `pack/logos/tiktok.png`
- Los íconos aparecen dentro de círculos rosados utilizando el color `marca`.
- Los enlaces presentan un efecto hover de cambio de color, utilizando `marca-contraste`.
- La tarjeta de contacto es blanca, con esquinas redondeadas y una distribución ordenada.
- La fotografía final se integra dentro del mismo componente, en lugar de crear una sección visual independiente.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

---

## Prompt 08 · Todas las páginas · Revisión final

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
- `src/components/Encabezado.astro`
- `src/components/ui/Contenedor.astro`
- `src/styles/global.css`
- `src/datos/sitio.ts`

**Devuélveme completos:**
- Cada archivo de la lista anterior que necesite corrección (REEMPLAZA).
- No devuelvas archivos que no requieran cambios.

**Borrar:** nada.

**Terminado cuando:**
- Todas las páginas se revisaron a 360, 768 y 1280 px, sin desbordamientos ni scroll horizontal.
- Todas las imágenes tienen atributos `alt` y cargan correctamente.
- Todos los enlaces y botones funcionan.
- Los textos, colores, fuentes y disposiciones coinciden con el brief.
- El menú presenta las cuatro páginas y el encabezado permanece fijo.
- La página de Inicio conserva su fotografía y botón hacia el catálogo.
- La página Sobre Sabrina conserva los dos párrafos originales, sus palabras destacadas y la fotografía a la izquierda en computadora.
- La página Catálogo muestra las doce prendas, con sus imágenes, descripciones y precios correctos.
- El botón «Ver todas las prendas» dirige correctamente a `#lista-prendas`.
- La página Contacto utiliza los cuatro íconos PNG originales, los enlaces aprobados y la fotografía final integrada en el componente `HablemosDeModa.astro`.
- La imagen final contiene la frase aprobada, superpuesta en la parte inferior.
- No se agregaron secciones, textos, imágenes, colores ni funcionalidades que no estén aprobados.
- `npm run verificar` termina sin errores.

Si se encuentra una diferencia entre el código y el brief, corrige únicamente la implementación para que coincida con las decisiones aprobadas. No inventes contenido ni modifiques los textos originales.