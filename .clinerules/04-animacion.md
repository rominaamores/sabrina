# Animación

No escribas código de Motion dentro de los componentes. Usa estos atributos en el HTML:

- `data-revelar`: el elemento aparece suavemente al entrar en pantalla.
- `data-revelar-cascada`: en un contenedor (por ejemplo un `<ul>`), sus hijos aparecen uno tras otro.

```astro
<h2 data-revelar>Servicios</h2>
<ul data-revelar-cascada>...</ul>
```

La intensidad (`ninguna`, `sutil`, `marcada`) sale de la sección 6 del brief y se cambia solo en `animacion` de `src/datos/sitio.ts`.
La lógica vive en `src/scripts/animaciones.ts`: ya respeta `prefers-reduced-motion` y anima una sola vez. No crees animaciones nuevas si el brief no las pide.
