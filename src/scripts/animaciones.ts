/*
  Animaciones del sitio con Motion.
  Los componentes no importan Motion: solo añaden un atributo al HTML.

    data-revelar           -> el elemento aparece al entrar en pantalla
    data-revelar-cascada   -> sus hijos aparecen uno tras otro

  La intensidad sale de la sección 6 del brief y se elige en src/datos/sitio.ts
  (animacion: "ninguna" | "sutil" | "marcada"). Llega aquí por el atributo
  data-animacion de <html>.

  Cada animación ocurre una sola vez y se desactiva si el usuario
  pidió menos movimiento en su sistema (prefers-reduced-motion).
*/

import { animate, inView, stagger } from "motion";

const INTENSIDADES = {
  sutil: { desplazamiento: 16, duracion: 0.5, escalonado: 0.08 },
  marcada: { desplazamiento: 48, duracion: 0.9, escalonado: 0.15 },
};

export function iniciarAnimaciones(): void {
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nivel = document.documentElement.dataset.animacion;
  if (reducirMovimiento || (nivel !== "sutil" && nivel !== "marcada")) return;

  const { desplazamiento, duracion, escalonado } = INTENSIDADES[nivel];

  document.querySelectorAll<HTMLElement>("[data-revelar]").forEach((elemento) => {
    inView(
      elemento,
      () => {
        animate(
          elemento,
          { opacity: [0, 1], y: [desplazamiento, 0] },
          { duration: duracion, ease: "easeOut" },
        );
      },
      { amount: 0.3 },
    );
  });

  document.querySelectorAll<HTMLElement>("[data-revelar-cascada]").forEach((grupo) => {
    const hijos = Array.from(grupo.children) as HTMLElement[];
    inView(
      grupo,
      () => {
        animate(
          hijos,
          { opacity: [0, 1], y: [desplazamiento, 0] },
          { duration: duracion, ease: "easeOut", delay: stagger(escalonado) },
        );
      },
      { amount: 0.2 },
    );
  });
}
