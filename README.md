# Mi sitio: plantilla del proyecto 2

Astro 7 + Tailwind CSS 4 + Motion 14, **sin estilo visual**: el diseño sale de tu plan, a través del brief.
Las instrucciones completas están en los PDF del proyecto: **Manual de entorno**, **Plan del sitio y pack con IA** y **Cómo trabajar**.

## Arrancar

```bash
npm install
npm run dev
```

Abre http://localhost:4321 en Chrome. Si ves **"Tu marca va aquí"** en grises y las tarjetas aparecen al bajar, el entorno funciona.

## Tu pack

Todo lo tuyo vive en la carpeta `pack/`. Para juntarlo, arrastra tu carpeta `pack` dentro del proyecto y elige **Reemplazar**.

| Qué | Dónde |
| --- | --- |
| Tu plan en PDF | `pack/plan.pdf` |
| Brief (lo genera la IA) | `pack/brief.md` |
| Prompts (los genera la IA) | `pack/prompts.md` |
| Fuentes | `pack/fuentes/` |
| Imágenes | `pack/imagenes/` |
| Logo y SVG | `pack/logos/` |

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Sitio en vivo en http://localhost:4321 |
| `npm run verificar` | Formatea, revisa la marca (contraste, colores, fuentes), revisa tipos y compila |
| `npm run build` | Genera la versión final en `dist/` |
| `npm run preview` | Muestra la versión final de `dist/` |

## Reglas del agente

Las instrucciones que sigue Cline están en `.clinerules/`. No las borres. El registro de cada tarea queda en `CAMBIOS.md`.
