---
titulo: ESPOL Quest
descripcion: Videojuego de plataformas 2D para que los estudiantes nuevos reconozcan el campus Gustavo Galindo antes de pisarlo.
problema: Un campus que no conoces es un mapa que no sabes leer.
tecnologias:
  - TypeScript
  - React
  - Phaser
  - Ruby on Rails
  - PostgreSQL
repo: https://github.com/josegavinov/espol-quest
contexto: academico
rol: Backend en Ruby on Rails y modelo de datos
orden: 2
destacado: false
---

## Qué es

Un juego de plataformas 2D ambientado en el campus Gustavo Galindo de ESPOL.
En lugar de un plano estático, recorres el campus jugando: la orientación se
aprende explorando.

Proyecto de la materia Lenguajes de Programación, junto a Kevin Gálvez y
Jorge del Campo.

## Cómo está construido

Dos servicios separados que hablan por HTTP:

- **Frontend** — React con TypeScript y Phaser para el motor del juego
- **Backend** — API en Ruby on Rails con PostgreSQL

Separar el motor del juego de la API permitió que cada parte avanzara sin
bloquear a la otra, y que el estado del jugador viva en la base de datos y no
en el navegador.
