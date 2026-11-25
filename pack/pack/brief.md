# Brief de la marca

## 1. Marca

| Campo | Decisión |
|---|---|
| Nombre de la marca | Sabrina |
| Tipo | Ficticia |
| Qué hace, en una frase | Es una página donde su creadora vende ropa de segunda mano. |
| Para quién es (público) | Mujeres jóvenes de 15 a 20 años interesadas en ropa de segunda mano, moda femenina y precios accesibles. |
| Personalidad (3 adjetivos) | Accesible, cercana, femenina |
| Eslogan | Luce bien por dentro y por fuera. |
| Descripción para Google (máx. 155 caracteres) | Sabrina es tu tienda de ropa de segunda mano de confianza: moda femenina, precios accesibles y looks únicos que te hacen sentir tan bien como te ves. |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/plan.pdf`).

| Ref | Sitio | Detalle que tomamos | Dónde se aplica |
|---|---|---|---|
| 1a | https://www.benefitcosmetics.com/en-us/face/blush | Distribución ordenada y estética de imágenes para mostrar claramente las prendas. | Catálogo de ropa, lista de prendas. |
| 1b | https://www.benefitcosmetics.com/en-us/face/blush | Tipografía estética y femenina para los títulos principales. | Títulos principales `<h1>` de las páginas. |
| 2a | https://flowerknows.co | Colores femeninos alineados con la personalidad de la marca. | Encabezado, pie de página y nombres de las prendas. |
| 2b | https://flowerknows.co | Distribución ordenada del menú de navegación y ubicación clara del nombre de la marca. | Encabezado y navegación. |

## 3. Paleta de color

La identidad visual utiliza exactamente siete colores, definidos mediante códigos hexadecimales. Estos se aplican a los fondos, textos, tarjetas, botones y elementos destacados.

| Token | Hex | Para qué se usa |
|---|---|---|
| `fondo` | `#fee7e6` | Fondo principal de las páginas. |
| `superficie` | `#ffffff` | Tarjetas y bloques destacados. |
| `texto` | `#000000` | Texto principal. |
| `texto-suave` | `#6b4a3a` | Texto secundario y etiquetas. |
| `borde` | `#f7d1d5` | Líneas y bordes. |
| `marca` | `#e8989a` | Botones, círculos de íconos y elementos destacados. |
| `marca-contraste` | `#721819` | Títulos y textos destacados sobre el color de marca. |

La combinación de colores busca transmitir una estética femenina, cercana y delicada, manteniendo la legibilidad del contenido.

## 4. Tipografías

Las tipografías se encuentran en `pack/fuentes/` y se utilizan para diferenciar los títulos del contenido informativo.

| Uso | Nombre de la fuente | Archivo(s) en `pack/fuentes/` | Grosores |
|---|---|---|---|
| Títulos | Roslindale Display Narrow | `Roslindale-DisplayNarrowBlack-Testing.ttf` | Black (900) |
| Texto | General Sans | `GeneralSans-Regular.ttf`, `GeneralSans-Semibold.ttf` | Regular (400), Semibold (600) |

Roslindale Display Narrow se utiliza en los títulos principales para reforzar la personalidad femenina de Sabrina. General Sans se emplea en párrafos, descripciones, botones, precios y elementos de navegación para facilitar la lectura.

La versión Testing de Roslindale requiere verificar sus permisos de uso antes de una publicación comercial.

## 5. Forma

| Decisión | Opciones | Decisión |
|---|---|---|
| Esquinas (`radio`) | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora | `9999px` |
| Grosor de borde | `0px` sin borde · `1px` · `2px` · `3px` | `0px` |
| Sombra | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | `none` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho | `max-w-5xl` |

Los botones principales tienen forma de píldora, mientras que las tarjetas y fotografías utilizan esquinas suavemente redondeadas. Se prioriza una apariencia limpia, sin sombras decorativas ni bordes marcados.

## 6. Animación

| Decisión | Opciones | Decisión |
|---|---|---|
| Intensidad | `ninguna` · `sutil` · `marcada` | `sutil` |

Las animaciones se utilizan de manera discreta para acompañar la navegación sin distraer del contenido. Se incluyen transiciones suaves y cambios de color al pasar el cursor sobre determinados elementos interactivos.

## 7. Logo y menú

| Decisión | Opciones | Decisión |
|---|---|---|
| Logo (archivo en `pack/logos/` + texto alternativo) | Archivo gráfico o «sin logo, solo nombre» | Sin logo gráfico en el encabezado. Se utiliza el nombre «Sabrina» centrado, con los enlaces de navegación debajo. |
| Tipo de menú | `barra` · `desplegable` · `desplegable-siempre` | `barra` |
| Encabezado fijo arriba al bajar | `sí` · `no` | `sí` |

El menú de navegación contiene cuatro enlaces: Inicio, Sobre Sabrina, Catálogo y Contacto. Se mantiene visible para facilitar el acceso a las diferentes páginas.

## 8. Mapa del sitio

| Página | Ruta | Archivo | Texto en el menú | Título de la pestaña |
|---|---|---|---|---|
| Inicio | `/` | `src/pages/index.astro` | Inicio | Sabrina |
| Sobre Sabrina | `/bio` | `src/pages/bio.astro` | Sobre Sabrina | Sabrina \| Sobre Sabrina |
| Catálogo | `/catalogo` | `src/pages/catalogo.astro` | Catálogo | Sabrina \| Catálogo |
| Contacto | `/contacto` | `src/pages/contacto.astro` | Contacto | Sabrina \| Contacto |

La estructura del sitio permite conocer la marca, explorar sus productos y acceder a los canales de contacto.

## 9. Contenido por página

Cada página se organiza en secciones con contenido y distribución específicos. Se utiliza un diseño adaptable a celulares y computadoras.

### Página: Inicio (`/`)

#### Sección: Bienvenida

- **id:** `bienvenida`
- **Título:** Bienvenida a Sabrina
- **Texto:** Aquí encontrarás prendas de segunda mano llenas de estilo, listas para comenzar una nueva historia contigo. Explora nuestra selección de ropa femenina, descubre piezas únicas y crea looks que reflejen tu personalidad sin gastar de más. Queremos inspirarte a experimentar con tu estilo y darle una segunda oportunidad a tus prendas favoritas.
- **Elementos:** Eslogan destacado: «Luce bien por dentro y por fuera».
- **Imágenes:** `pack/imagenes/foto-principal.jpg.jpeg` — texto alternativo: «Foto principal de Sabrina».
- **Botones:** Descubre el catálogo → `/catalogo`
- **Disposición:**
  - **Celular:** imagen principal grande en la parte superior. Debajo se presentan el título, el eslogan, el texto de bienvenida y el botón, organizados verticalmente.
  - **Computadora:** distribución en dos columnas. A la izquierda se ubican el título, el eslogan, el texto y el botón. A la derecha aparece una fotografía grande con esquinas redondeadas. Ambos bloques ocupan aproximadamente la mitad del ancho disponible.
- **Referencia aplicada:** 1b para el título principal y 2b para el encabezado.

### Página: Sobre Sabrina (`/bio`)

#### Sección: Nuestra historia

- **id:** `nuestra-historia`
- **Título:** Nuestra historia
- **Texto:**

  Somos una tienda de ropa de segunda mano que busca darles una nueva oportunidad a prendas especiales y ayudarte a encontrar looks que reflejen tu personalidad.

  Creemos que cada prenda puede tener una nueva historia. Por eso, reunimos opciones femeninas, versátiles y accesibles para que explores tu estilo, experimentes con la moda y encuentres piezas que te hagan sentir bien.

- **Elementos:** Se destacan mediante `<span>` la palabra «especiales» y la frase «reflejen tu personalidad», ambas del primer párrafo, para dar énfasis visual a conceptos relacionados con la identidad de Sabrina.
- **Imágenes:** `pack/imagenes/foto-personal.jpg.jpeg` — texto alternativo: «Foto personal de Sabrina».
- **Botones:** ninguno.
- **Disposición:**
  - **Celular:** fotografía grande en la parte superior. Debajo se presentan el título y los dos párrafos de texto, con las palabras y frases destacadas.
  - **Computadora:** distribución en dos columnas, con la fotografía a la izquierda y el título junto al texto a la derecha. La imagen presenta esquinas redondeadas.
- **Referencia aplicada:** 1b para el título principal.

### Página: Catálogo (`/catalogo`)

#### Sección: Introducción al catálogo

- **id:** `introduccion-catalogo`
- **Título:** Encuentra tu próximo favorito
- **Texto:** Explora nuestra selección de ropa de segunda mano y descubre prendas únicas para crear looks a tu manera.
- **Elementos:** ninguno adicional.
- **Imágenes:** ninguna.
- **Botones:** Ver todas las prendas → `#lista-prendas`
- **Disposición:**
  - **Celular:** título centrado en la parte superior, seguido del texto introductorio y el botón, organizados verticalmente.
  - **Computadora:** título, texto y botón centrados dentro del bloque introductorio, antes de la cuadrícula de prendas.
- **Referencia aplicada:** 1b para el título principal.

#### Sección: Lista de prendas

- **id:** `lista-prendas`
- **Título:** ninguno; las prendas se presentan directamente después de la introducción.
- **Texto:** ninguno adicional; cada producto incluye su propia descripción.
- **Elementos:**

| Prenda | Título | Descripción | Precio |
|---|---|---|---|
| 1 | Falda Jean | Minifalda jean de tiro alto con lavado desteñido, detalles rasgados y un volante plisado con dobladillo deshilachado. | $15,00 |
| 2 | Saco rosado | Bolero corto color rosa pastel, de manga larga, con cierre frontal de lazo de satén. | $5,00 |
| 3 | Top negro | Top corto negro con escote corazón, fruncido central y tirantes con cadenas doradas. | $7,00 |
| 4 | Falda de cuadros negra | Minifalda de corte recto con estampado de cuadros en negro, blanco y rojo. | $7,00 |
| 5 | Top beige de manga larga | Top corto en beige con rayas negras, manga larga y escote redondo. | $15,00 |
| 6 | Top blanco | Top corto blanco con escote redondo y bordes negros, adornado con un lazo negro y broche circular de perlas. | $8,00 |
| 7 | Vestido ajustado celeste | Vestido corto ajustado en azul celeste, con cuello polo en V y manga corta. | $15,00 |
| 8 | Top rosado | Top sin mangas en rosa palo, con cuello polo en V y ajuste entallado. | $20,00 |
| 9 | Vestido floral | Vestido corto blanco con estampado de rosas rosadas, corsé con escote corazón, mangas abullonadas y falda de volantes en capas. | $20,00 |
| 10 | Falda de cuadros morada | Minifalda plisada de tiro alto con estampado de cuadros en tonos rosa, morado y negro. | $10,00 |
| 11 | Falda de cuadros roja | Una prenda original que puedes llevar con diferentes tops para crear diferentes estilos. | $10,00 |
| 12 | Falda plisada | Una prenda coqueta y juvenil para crear outfits llenos de personalidad. | $10,00 |

Los nombres de las prendas utilizan el color `marca-contraste`, mientras que los precios se presentan en etiquetas pequeñas para facilitar su identificación.

- **Imágenes:**

| Prenda | Archivo en `pack/imagenes/` | Texto alternativo |
|---|---|---|
| 1 | `prenda-01-falda-jean.jpg.jpeg` | Falda jean |
| 2 | `prenda-02-saco-rosado.jpg.jpeg` | Saco rosado |
| 3 | `prenda-03-top-negro.jpg.jpeg` | Top negro |
| 4 | `prenda-04-falda-cuadros-negra.jpg.jpeg` | Falda de cuadros negra |
| 5 | `prenda-05-top-beige.jpg.jpeg` | Top beige de manga larga |
| 6 | `prenda-06-top-blanco.jpg.jpeg` | Top blanco |
| 7 | `prenda-07-vestido-celeste.jpg.jpeg` | Vestido ajustado celeste |
| 8 | `prenda-08-top-rosado.jpg.jpeg` | Top rosado |
| 9 | `prenda-09-vestido-floral.jpg.jpeg` | Vestido floral |
| 10 | `prenda-10-falda-cuadros-morada.jpg.jpeg` | Falda de cuadros morada |
| 11 | `prenda-11-falda-cuadros-roja.jpg.jpeg` | Falda de cuadros roja |
| 12 | `prenda-12-falda-plisada.jpg.jpeg` | Falda plisada |

- **Botones:** ninguno.
- **Disposición:**
  - **Celular:** cuadrícula de dos columnas con tarjetas blancas. Cada tarjeta contiene la fotografía, el nombre, la descripción y el precio.
  - **Computadora:** cuadrícula de tres columnas con tarjetas de productos. Se mantiene la misma jerarquía visual: fotografía, nombre, descripción y precio.
- **Referencia aplicada:** 1a para la distribución ordenada de fotografías y 2a para los colores de los nombres de las prendas.

### Página: Contacto (`/contacto`)

#### Sección: Hablemos de moda

- **id:** `titulo-hablemos-de-moda` (identificador del título principal).
- **Título:** Hablemos de moda
- **Texto:** ¿Tienes dudas sobre una prenda o quieres saber más sobre Sabrina? Estamos aquí para ayudarte. Escríbenos y encontremos juntas tu próximo look favorito.
- **Elementos:**
  - Tarjeta blanca con esquinas redondeadas que contiene los datos de contacto.
  - Correo electrónico: `rominaamores0@gmail.com` → `mailto:rominaamores0@gmail.com`
  - Teléfono / WhatsApp: `+593 987097831` → `https://wa.me/593987097831`
  - Instagram: `@heartlessabri` → `https://www.instagram.com/heartlessabri`
  - TikTok: `@popstar.sabri` → `https://www.tiktok.com/@popstar.sabri`
  - Cuatro íconos PNG originales del proyecto, colocados dentro de círculos rosados.
  - Efecto hover de cambio de color en los enlaces.
- **Íconos:**
  - `pack/logos/correo-electrónico.png`
  - `pack/logos/telefono.png`
  - `pack/logos/instagram.png`
  - `pack/logos/tiktok.png`
- **Imágenes:** ninguna dentro de la tarjeta de contacto; la fotografía se presenta en la sección visual contigua.
- **Botones:** Escríbenos por WhatsApp → `https://wa.me/593987097831`
- **Disposición:**
  - **Celular:** título y texto en la parte superior, seguidos de una tarjeta blanca con cuatro filas de información. Cada fila incluye un ícono dentro de un círculo rosado y el dato correspondiente. El botón de WhatsApp aparece al final de la tarjeta.
  - **Computadora:** título, texto y tarjeta de contacto en la columna izquierda; fotografía final en la columna derecha.
- **Referencia aplicada:** 1b para el título principal.

#### Sección: Imagen final

- **id:** `imagen-final-contacto` (identificador descriptivo de la sección visual).
- **Título:** ninguno; se utiliza una frase destacada sobre la fotografía.
- **Texto:** Tu próxima prenda favorita merece una segunda historia.
- **Elementos:** texto superpuesto en la parte inferior de la fotografía, sobre un fondo semitransparente en color vino para facilitar su lectura.
- **Imágenes:** `pack/imagenes/imagen-final-contacto.jpg.jpge.JPG` — texto alternativo: «Fotografía final de Sabrina o de prendas del catálogo».
- **Botones:** ninguno.
- **Disposición:**
  - **Celular:** fotografía grande debajo de la tarjeta de contacto, con esquinas redondeadas y texto superpuesto.
  - **Computadora:** fotografía a la derecha del contenido de contacto, con esquinas redondeadas y texto en la parte inferior.
- **Referencia aplicada:** ninguna.

La sección visual se integra dentro del componente `HablemosDeModa.astro`, junto con el contenido de contacto, para mantener ambas columnas alineadas.

## 10. Contacto y pie de página

| Campo | Decisión |
|---|---|
| Correo | `rominaamores0@gmail.com` |
| Instagram | `@heartlessabri` → `https://www.instagram.com/heartlessabri` |
| TikTok | `@popstar.sabri` → `https://www.tiktok.com/@popstar.sabri` |
| WhatsApp | `+593 987097831` → `https://wa.me/593987097831` |
| Texto del pie | Moda de segunda mano. © 2026 Sabrina. Todos los derechos reservados. |

El pie de página mantiene la identidad visual de Sabrina y presenta la información de cierre de manera sencilla, con una estética coherente con el resto del sitio.