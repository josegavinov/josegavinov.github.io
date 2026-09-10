---
titulo: API del bot de WhatsApp
descripcion: Servicio en FastAPI que atiende el WhatsApp de un negocio, interpreta lo que le escriben con Gemini y agenda la cita.
problema: Un bot que agenda no basta con que responda; tiene que entender lo que le escriben.
tecnologias:
  - Python
  - FastAPI
  - Gemini
  - WhatsApp Business API
  - Google Calendar API
  - OAuth 2.0
privado: true
contexto: profesional
rol: El servicio completo, de punta a punta
orden: 1
destacado: true
---

## Qué es

El cerebro detrás del bot de ARIAA. Cuando alguien escribe al WhatsApp de un
negocio, este servicio recibe el mensaje, lo interpreta, sostiene la
conversación y termina agendando una cita —sin que nadie del negocio tenga que
estar mirando el teléfono.

## Cómo está construido

Escrito en **Python con FastAPI**, con la comprensión del lenguaje delegada a
**Gemini**. La diferencia entre un bot de árbol de decisiones y este es que el
usuario no tiene que aprenderse las palabras mágicas: escribe como le sale y el
modelo se encarga de extraer la intención.

## Integraciones

- **WhatsApp Business API (Meta)** — el canal por el que entran y salen los
  mensajes. En integración: el proceso de revisión de Meta sigue en curso.
- **Google Calendar vía OAuth 2.0** — para que la cita quede en el calendario
  real del negocio y no en una base de datos aparte que nadie mira. También en
  validación.

Los dos son procesos de aprobación de terceros, así que lo dejo dicho tal cual:
funcionando en desarrollo, pendientes de validación para producción.

## Por qué es la pieza que más me enseñó

Es un servicio que habla con cuatro sistemas que no controlo —Meta, Google, el
modelo y el panel— y cada uno falla a su manera. Diseñarlo obliga a decidir qué
pasa cuando el modelo devuelve algo inesperado, cuando la API de terceros
responde tarde, o cuando el usuario cambia de idea a mitad de la conversación.
