# Portafolio — guía de desarrollo

Sitio estático hecho con [Astro](https://astro.build) + TypeScript. Se compila a
HTML plano y se publica en GitHub Pages.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run build` | Compila el sitio a `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el build |
| `npm run check` | Verifica tipos y errores de Astro |

## Añadir un proyecto

Crea un archivo `.md` en `src/content/proyectos/`. El nombre del archivo es la
URL (`mi-proyecto.md` → `/proyectos/mi-proyecto`).

```markdown
---
titulo: Nombre del proyecto
descripcion: Una frase sobre qué problema resuelve.
tecnologias:
  - Node.js
  - PostgreSQL
repo: https://github.com/josegavinov/mi-proyecto
demo: https://ejemplo.com          # opcional
orden: 2                            # menor número = aparece primero
destacado: true                     # sale en la portada
borrador: false                     # true = lo marca como plantilla
---

El contenido en markdown va aquí.
```

Los campos están validados en `src/content.config.ts`: si te falta uno o pones un
tipo equivocado, el build falla con un mensaje claro en vez de publicar algo roto.

## Editar tus datos

Nombre, título, redes y lista de tecnologías viven en `src/data/perfil.ts`.

## Despliegue

Hay dos caminos. El primero es el bueno; el segundo es el plan B si GitHub
Actions no está disponible.

### A) Automático (GitHub Actions)

`.github/workflows/deploy.yml` compila y publica en cada push a `main`.
Activarlo una vez: **Settings → Pages → Source: GitHub Actions**.

### B) Manual, sin Actions

Si Actions está bloqueado (por ejemplo por un problema de facturación en la
cuenta), publica desde tu máquina:

```bash
npm run deploy
```

Compila y empuja `dist/` a la rama `gh-pages`. Activarlo una vez:
**Settings → Pages → Source: Deploy from a branch → `gh-pages` / (root)**.

Con este camino tienes que correr `npm run deploy` cada vez que quieras
publicar cambios; no basta con hacer push a `main`.

El sitio queda en https://josegavinov.github.io
