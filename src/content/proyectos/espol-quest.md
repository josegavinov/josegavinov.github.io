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
rol: "Backend del servicio de juego, CRUD del CMS en Rails y las pantallas de misiones y trivia"
orden: 7
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

## Mi parte

Levanté la estructura del repositorio y la primera versión del servicio de
juego —modelos de misiones, preguntas y respuestas, sus endpoints y los datos
semilla— que empezó en **Flask** antes de que el equipo migrara la API a Ruby
on Rails. Sobre Rails hice el CRUD del CMS de misiones y trivias.

Del lado del frontend, el catálogo de misiones con su estado por jugador, la
trivia con retroalimentación inmediata y la pantalla de administración. Más el
script de pruebas del backend.
