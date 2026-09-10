---
titulo: GreenOil
descripcion: Plataforma que conecta restaurantes con el municipio para recolectar aceite vegetal usado y convertirlo en puntos y recompensas.
problema: El aceite usado de las cocinas termina donde no debería.
tecnologias:
  - TypeScript
  - Vite
repo: https://github.com/josegavinov/green-oil-web
demo: https://green-oil-web.vercel.app
contexto: personal
orden: 9
destacado: false
---

## Qué es

Un prototipo de plataforma que pone de acuerdo a dos partes que hoy no se
hablan: los restaurantes que generan aceite vegetal usado y el municipio que
podría recogerlo. El incentivo es un sistema de puntos y recompensas por cada
entrega.

## Qué es y qué no es

Es una **demo funcional**, no un producto. No hay backend: todo el estado vive
en el `localStorage` del navegador, y las contraseñas se guardan en claro
**a propósito**, para que en una demostración crear una cuenta y volver a
entrar sea instantáneo.

Lo digo aquí con todas las letras porque un prototipo que se presenta como
producto engaña a quien lo evalúa. El siguiente paso natural sería mover la
autenticación y las entregas a un backend real.
