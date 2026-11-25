# Brief de la marca

## 1. Marca

| Campo | Decisión |
| --- | --- |
| Nombre de la marca | Sabrina |
| Tipo | ficticia |
| Qué hace, en una frase | es una página donde su creadora vende ropa de segunda mano |
| Para quién es (público) | vender ropa de segunda mano; es para mujeres jóvenes de 15 a 20 años |
| Personalidad (3 adjetivos) | accesible, cercana, femenina |
| Eslogan | luce bien por dentro y por fuera |
| Descripción para Google (máx. 155 caracteres) | Sabrina es tu tienda de ropa de segunda mano de confianza: moda femenina, precios accesibles y looks únicos que te hacen sentir tan bien como te ves. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
| --- | --- | --- | --- |
| 1a | https://www.benefitcosmetics.com/en-us/face/blush | Distribución ordenada y estética de imágenes para mostrar claramente las prendas. | Catálogo de ropa, lista de prendas |
| 1b | https://www.benefitcosmetics.com/en-us/face/blush | Tipografía estética y femenina para los títulos principales. | Títulos h1 |
| 2a | https://flowerknows.co | Colores femeninos aplicados al navbar, footer y nombres de prendas. | Encabezado, pie de página y catálogo |
| 2b | https://flowerknows.co | Distribución ordenada del navbar y ubicación clara del logo. | Encabezado y logo |

Nota: el segundo sitio utiliza las etiquetas 1a y 1b en el plan. Se identifican como 2a y 2b para distinguir las cuatro referencias de la plantilla.

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token | Hex | Para qué se usa |
| --- | --- | --- |
| `fondo` | #fee7e6 | Fondo de toda la página |
| `superficie` | #ffffff | Tarjetas, bloques destacados |
| `texto` | #000000 | Texto principal |
| `texto-suave` | #6b4a3a | Texto secundario, etiquetas |
| `borde` | #f7d1d5 | Líneas y bordes |
| `marca` | #e8989a | Color principal: botones, resaltados |
| `marca-contraste` | #721819 | Texto que va encima de marca |

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
| --- | --- | --- | --- |
| Títulos | Roslindale Display Narrow | POR DEFINIR | POR DEFINIR |
| Texto | General Sans | POR DEFINIR | Semibold, Regular |

Nota: el plan especifica los nombres de las tipografías, pero no los nombres exactos de sus archivos ni sus licencias.

## 5. Forma

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | `9999px` |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | `0px` |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | `none` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | `max-w-5xl` |

## 6. Animación

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Intensidad | `ninguna` · `sutil` · `marcada` | `sutil` |

## 7. Logo y menú

| Decisión | Opciones | Decisión |
| --- | --- | --- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre" | POR DEFINIR |
| Tipo de menú | `barra` (enlaces siempre visibles) · `desplegable` (botón "Menú" en celular y tablet, barra en computadora) · `desplegable-siempre` (botón en todas las pantallas) | `barra` |
| Encabezado fijo arriba al bajar | `sí` · `no` | `sí` |

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
| --- | --- | --- | --- | --- |
| Inicio | `/` | `src/pages/index.astro` | Inicio | POR DEFINIR |
| Sobre Sabrina | `/bio` | `src/pages/bio.astro` | Sobre Sabrina | POR DEFINIR |
| Catálogo | `/catalogo` | `src/pages/catalogo.astro` | Catálogo | POR DEFINIR |
| Contacto | `/contacto` | `src/pages/contacto.astro` | Contacto | POR DEFINIR |

## 9. Contenido por página

Una sub-sección por página del mapa, y dentro sus secciones en orden de arriba hacia abajo.
La **disposición** describe el boceto en palabras (el agente no ve imágenes).
La primera sección de Inicio lleva el título principal (`<h1>`); en las demás páginas, la primera sección también lleva el `<h1>` de esa página.

### Página: Inicio (`/`)

#### Sección: Bienvenida

- **id:** POR DEFINIR
- **Título:** Bienvenida a Sabrina
- **Texto:** Aquí encontrarás prendas de segunda mano llenas de estilo, listas para comenzar una nueva historia contigo. Explora nuestra selección de ropa femenina, descubre piezas únicas y crea looks que reflejen tu personalidad sin gastar de más. Queremos inspirarte a experimentar con tu estilo y darle una segunda oportunidad a tus prendas favoritas.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Eslogan: Luce bien por dentro y por fuera.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/foto-principal.jpg` — foto principal de Sabrina
- **Botones** (texto → destino, o "ninguno"): Descubre el catálogo → `/catalogo`
- **Disposición** (celular / computadora):
  - celular: encabezado superior; imagen principal grande; debajo, título, texto, eslogan y botón.
  - computadora: encabezado superior; bloque de texto a la izquierda e imagen grande a la derecha. El bloque de texto contiene título, texto, eslogan y botón.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b para el título principal; 2b para el encabezado.

### Página: Sobre Sabrina (`/bio`)

#### Sección: Nuestra historia

- **id:** POR DEFINIR
- **Título:** Nuestra historia
- **Texto:** Somos una tienda de ropa de segunda mano que busca darles una nueva oportunidad a prendas especiales y ayudarte a encontrar looks que reflejen tu personalidad.

  Creemos que cada prenda puede tener una nueva historia. Por eso, reunimos opciones femeninas, versátiles y accesibles para que explores tu estilo, experimentes con la moda y encuentres piezas que te hagan sentir bien.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Frases o palabras destacadas con `<span>`: POR DEFINIR cuáles.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/foto-personal.jpg` — foto personal de Sabrina
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora):
  - celular: encabezado superior; título y bloque de texto; imagen debajo del contenido.
  - computadora: encabezado superior; bloque de texto a la izquierda e imagen a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b para el título principal.

### Página: Catálogo (`/catalogo`)

#### Sección: Introducción al catálogo

- **id:** POR DEFINIR
- **Título:** Encuentra tu próximo favorito
- **Texto:** Explora nuestra selección de ropa de segunda mano y descubre prendas únicas para crear looks a tu manera.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Ver todas las prendas → lista de prendas en esta misma página; ancla POR DEFINIR
- **Disposición** (celular / computadora):
  - celular: título, texto y botón apilados antes de las prendas.
  - computadora: título, texto y botón en el bloque introductorio superior, antes de la cuadrícula de prendas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b para el título principal.

#### Sección: Lista de prendas

- **id:** POR DEFINIR
- **Título:** POR DEFINIR
- **Texto:** POR DEFINIR
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):

  - Prenda 1
    - Título: Falda Jean
    - Descripción: Minifalda jean de tiro alto con lavado desteñido, detalles rasgados y un volante plisado con dobladillo deshilachado.
    - Precio: $15,00

  - Prenda 2
    - Título: Saco rosado
    - Descripción: Bolero corto color rosa pastel, de manga larga, con cierre frontal de lazo de satén.
    - Precio: $5,00

  - Prenda 3
    - Título: Top negro
    - Descripción: Top corto negro con escote corazón, fruncido central y tirantes con cadenas doradas.
    - Precio: $7,00

  - Prenda 4
    - Título: Falda de cuadros negra
    - Descripción: Minifalda de corte recto con estampado de cuadros en negro, blanco y rojo.
    - Precio: $7,00

  - Prenda 5
    - Título: Top beige de manga larga
    - Descripción: Top corto en beige con rayas negras, manga larga y escote redondo.
    - Precio: $15,00

  - Prenda 6
    - Título: Top blanco
    - Descripción: Top corto blanco con escote redondo y bordes negros, adornado con un lazo negro y broche circular de perlas.
    - Precio: $8,00

  - Prenda 7
    - Título: Vestido ajustado celeste
    - Descripción: Vestido corto ajustado en azul celeste, con cuello polo en V y manga corta.
    - Precio: $15,00

  - Prenda 8
    - Título: Top rosado
    - Descripción: Top sin mangas en rosa palo, con cuello polo en V y ajuste entallado.
    - Precio: $20,00

  - Prenda 9
    - Título: Vestido floral
    - Descripción: Vestido corto blanco con estampado de rosas rosadas, corsé con escote corazón, mangas abullonadas y falda de volantes en capas.
    - Precio: $20,00

  - Prenda 10
    - Título: Falda de cuadros morada
    - Descripción: Minifalda plisada de tiro alto con estampado de cuadros en tonos rosa, morado y negro.
    - Precio: $10,00

  - Prenda 11
    - Título: falda de cuadros roja.
    - Descripción: Una prende original que puedes llevar con diferentes tops para crear diferentes estilos.
    - Precio: $10,00

  - Prenda 12
    - Título: Falda plisada
    - Descripción: Una prenda coqueta y juvenil para crear outfits llenos de personalidad.
    - Precio: $10,00

- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/prenda-01-falda-jean.jpg` — falda jean
  - `pack/imagenes/prenda-02-saco-rosado.jpg` — saco rosado
  - `pack/imagenes/prenda-03-top-negro.jpg` — top negro
  - `pack/imagenes/prenda-04-falda-cuadros-negra.jpg` — falda de cuadros negra
  - `pack/imagenes/prenda-05-top-beige.jpg` — top beige de manga larga
  - `pack/imagenes/prenda-06-top-blanco.jpg` — top blanco
  - `pack/imagenes/prenda-07-vestido-celeste.jpg` — vestido ajustado celeste
  - `pack/imagenes/prenda-08-top-rosado.jpg` — top rosado
  - `pack/imagenes/prenda-09-vestido-floral.jpg` — vestido floral
  - `pack/imagenes/prenda-10-falda-cuadros-morada.jpg` — falda de cuadros morada
  - `pack/imagenes/prenda-11-falda-cuadros-roja.jpg` — falda de cuadros roja.
  - `pack/imagenes/prenda-12-falda-plisada.jpg` — falda plisada

- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora):
  - celular: prendas en una columna; cada tarjeta contiene fotografía, nombre, descripción y precio.
  - computadora: prendas en cuadrícula de tres columnas; cada tarjeta contiene fotografía, nombre, descripción y precio.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1a para distribución de imágenes; 2a para los colores de los nombres de las prendas.

### Página: Contacto (`/contacto`)

#### Sección: Hablemos de moda

- **id:** POR DEFINIR
- **Título:** Hablemos de moda
- **Texto:** ¿Tienes dudas sobre una prenda o quieres saber más sobre Sabrina? Estamos aquí para ayudarte. Escríbenos y encontremos juntas tu próximo look favorito.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Tarjeta de contacto.
  - Correo electrónico: rominaamores0@gmail.com → mailto:rominaamores0@gmail.com
  - Teléfono / WhatsApp: +593 987097831 → https://wa.me/593987097831
  - Instagram: @heartlessabri → https://www.instagram.com/heartlessabri
  - TikTok: @popstar.sabri → https://www.tiktok.com/@popstar.sabri
  - Íconos SVG para contacto y redes sociales; diseños específicos POR DEFINIR.
  - Enlaces con efecto hover; efecto específico POR DEFINIR.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Escríbenos por WhatsApp → https://wa.me/593987097831
- **Disposición** (celular / computadora):
  - celular: encabezado superior; título y texto; tarjeta de contacto con los datos en una columna.
  - computadora: encabezado superior; título y tarjeta de contacto en un bloque de la izquierda; imagen a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b para el título principal.

#### Sección: Imagen final

- **id:** POR DEFINIR
- **Título:** POR DEFINIR
- **Texto:** Tu próxima prenda favorita merece una segunda historia.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): texto sobre la imagen final.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/imagen-final-contacto.jpg` — foto de Sabrina o de prendas del catálogo; contenido exacto POR DEFINIR.
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora):
  - celular: imagen final en el bloque inferior, con texto sobre ella.
  - computadora: imagen final a la derecha del contenido de contacto, con texto sobre ella.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

## 10. Contacto y pie de página

| Campo | Decisión |
| --- | --- |
| Correo | rominaamores0@gmail.com |
| Redes (nombre → enlace) | Instagram: @heartlessabri → https://www.instagram.com/heartlessabri; TikTok: @popstar.sabri → https://www.tiktok.com/@popstar.sabri |
| Texto del pie | Moda de segunda mano. © 2026 Sabrina. Todos los derechos reservados. |
