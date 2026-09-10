---
titulo: AKLight
descripcion: Broker de mensajería publicación/suscripción escrito en C, con productor, consumidor y pruebas de carga, todo contenedorizado.
problema: Dos servicios que se llaman directamente quedan atados el uno al otro.
tecnologias:
  - C
  - Docker
  - Sockets
repo: https://github.com/josegavinov/ProyectoAKLight
contexto: academico
orden: 1
destacado: true
---

## Qué es

Un broker de mensajería que desacopla a quien produce datos de quien los
consume. El productor publica en el broker y sigue con lo suyo; el consumidor
lee cuando puede. Si uno se cae, el otro no se entera.

## Cómo está construido

Escrito en C, escuchando en el puerto 1883. El proyecto está partido en piezas
con responsabilidades separadas:

- `broker/` — el servidor que acepta conexiones y reparte los mensajes
- `producer/` y `consumer/` — los dos extremos de la conversación
- `common/` — el protocolo, la estructura de mensaje y la cola compartida
- `stress/` — pruebas de carga para ver dónde empieza a doler

Todo levanta con `docker compose`, así que los tres procesos corren aislados y
se puede reproducir el escenario completo en cualquier máquina.

## Por qué lo hice

Usar una cola de mensajes es fácil; entender por qué se comporta como se
comporta, no. Construir una desde los sockets obliga a decidir cosas que una
librería normalmente te esconde: qué hacer cuando la cola se llena, cómo
delimitar un mensaje en un flujo de bytes, qué pasa si el consumidor es más
lento que el productor.
