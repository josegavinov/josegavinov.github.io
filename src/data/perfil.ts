// Datos personales del sitio. Todo lo editable en un solo lugar.
export const perfil = {
	nombre: 'Jose Gaviño Villacis',
	// El nombre se parte en dos líneas en la portada: pila sobre apellido.
	nombrePila: 'Jose',
	apellido: 'Gaviño',
	rol: 'Desarrollador Backend',
	titulo: 'Estudiante de Ingeniería en Computación — ESPOL',
	// Insignia de la barra superior. Ponlo en null para ocultarla.
	disponibilidad: 'Disponible para prácticas',
	intro:
		'Me interesa el desarrollo backend y el diseño de software: entender cómo funcionan ' +
		'las tecnologías desde sus cimientos y escribir código mantenible con arquitecturas ' +
		'limpias y modulares.',
	// Ficha de la columna derecha en la portada.
	ficha: [
		{ campo: 'Formación', valor: 'ESPOL' },
		{ campo: 'Carrera', valor: 'Ing. Computación' },
		{ campo: 'Ubicación', valor: 'Ecuador' },
		{ campo: 'Enfoque', valor: 'Backend · APIs' },
	],
	// Déjalo vacío si algún día quieres ocultar el email del sitio.
	email: 'josegavinovillacis14@gmail.com',
	github: 'https://github.com/josegavinov',
	// La `ñ` va percent-encoded (%C3%B1) para que el enlace sobreviva al
	// copiarlo entre herramientas; el navegador la muestra normal.
	linkedin: 'https://www.linkedin.com/in/gavi%C3%B1ojose',
	// `fuerte: true` lo pinta en tinta y negrita; el resto queda en gris.
	habilidades: [
		{ nombre: 'Java', fuerte: true },
		{ nombre: 'Python', fuerte: true },
		{ nombre: 'Node.js', fuerte: false },
		{ nombre: 'JavaScript', fuerte: false },
		{ nombre: 'MySQL', fuerte: false },
		{ nombre: 'PostgreSQL', fuerte: false },
		{ nombre: 'Docker', fuerte: false },
		{ nombre: 'Git', fuerte: false },
	],
} as const;
