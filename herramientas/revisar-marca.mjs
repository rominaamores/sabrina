/*
  Revisor de marca: comprueba que src/styles/global.css cumple los límites del brief.
  Lo ejecuta `npm run verificar` (o solo: `npm run marca`). Si algo falla, explica qué y termina con error.

  1. Colores: existen exactamente los 7 tokens del brief, en formato #rrggbb.
  2. Contraste: los pares de texto llegan a 4.5:1 (WCAG AA).
  3. Tipografías: cada archivo de un @font-face existe (en pack/fuentes/).
*/

import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

const CSS = "src/styles/global.css";
const BRIEF = "pack/brief.md";
const TOKENS = ["fondo", "superficie", "texto", "texto-suave", "borde", "marca", "marca-contraste"];
const PARES = [
  ["texto", "fondo"],
  ["texto", "superficie"],
  ["texto-suave", "fondo"],
  ["marca-contraste", "marca"],
];
const MINIMO = 4.5;

// Sin comentarios: los ejemplos explicativos de global.css no cuentan.
const css = readFileSync(CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
const errores = [];

// 1. Colores
const colores = {};
for (const [, nombre, valor] of css.matchAll(/--color-([a-z0-9-]+):\s*([^;]+);/g)) {
  colores[nombre] = valor.trim();
}
for (const nombre of Object.keys(colores)) {
  if (!TOKENS.includes(nombre)) {
    errores.push(
      `Color --color-${nombre} no está en el brief. Solo se permiten: ${TOKENS.join(", ")}.`,
    );
  }
}
for (const nombre of TOKENS) {
  if (!colores[nombre]) errores.push(`Falta el color --color-${nombre} en ${CSS}.`);
  else if (!/^#[0-9a-f]{6}$/i.test(colores[nombre])) {
    errores.push(`--color-${nombre}: "${colores[nombre]}" debe ser un hex de 6 dígitos (#1a1a1a).`);
  }
}

// 2. Contraste (fórmula WCAG 2.x)
const luminancia = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contraste = (a, b) => {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const tabla = [];
for (const [frente, fondo] of PARES) {
  const a = colores[frente];
  const b = colores[fondo];
  if (!/^#[0-9a-f]{6}$/i.test(a ?? "") || !/^#[0-9a-f]{6}$/i.test(b ?? "")) continue;
  const valor = contraste(a, b);
  const ok = valor >= MINIMO;
  tabla.push(`  ${ok ? "OK " : "MAL"}  ${frente} sobre ${fondo}: ${valor.toFixed(2)}:1`);
  if (!ok) {
    errores.push(
      `Contraste insuficiente: ${frente} (${a}) sobre ${fondo} (${b}) = ${valor.toFixed(2)}:1. Mínimo ${MINIMO}:1.`,
    );
  }
}

// 3. Tipografías (las rutas de url() son relativas a global.css)
for (const [, ruta] of css.matchAll(/url\(\s*["']?([^"')]+\.(?:woff2?|ttf|otf))["']?\s*\)/gi)) {
  if (!existsSync(join(dirname(CSS), ruta))) {
    errores.push(
      `La fuente "${basename(ruta)}" no existe. Copia el archivo en pack/fuentes/ con ese nombre exacto.`,
    );
  }
}

// Resultado
console.log("Revisión de marca");
console.log(tabla.join("\n"));

const pendientes = existsSync(BRIEF)
  ? (readFileSync(BRIEF, "utf8").match(/POR DEFINIR/g) ?? []).length
  : 0;
if (pendientes > 0) console.log(`  Aviso: el brief tiene ${pendientes} campos POR DEFINIR.`);

if (errores.length > 0) {
  console.error("\nLa marca no cumple los límites del brief:");
  for (const error of errores) console.error(`  - ${error}`);
  process.exit(1);
}
console.log("  Marca OK.");
