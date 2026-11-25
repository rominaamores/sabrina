/*
  Datos generales del sitio.
  Fuente: pack/brief.md, secciones 1, 6, 7, 8 y 10.
*/

export const sitio = {
  nombre: "Sabrina",
  descripcion:
    "Sabrina es tu tienda de ropa de segunda mano de confianza: moda femenina, precios accesibles y looks únicos que te hacen sentir tan bien como te ves.",
  correo: "rominaamores0@gmail.com",
  pie: "Moda de segunda mano. © 2026 Sabrina. Todos los derechos reservados.",
  animacion: "sutil" as "ninguna" | "sutil" | "marcada",
};

/* Configuración del encabezado */
export const encabezado = {
  menu: "barra" as "barra" | "desplegable" | "desplegable-siempre",
  fijo: true,
};

/* Menú principal */
export const menu: { texto: string; href: string }[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Sobre Sabrina", href: "/bio" },
  { texto: "Catálogo", href: "/catalogo" },
  { texto: "Contacto", href: "/contacto" },
];

/* Redes sociales */
export const redes: { nombre: string; href: string }[] = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/heartlessabri",
  },
  {
    nombre: "TikTok",
    href: "https://www.tiktok.com/@popstar.sabri",
  },
];
