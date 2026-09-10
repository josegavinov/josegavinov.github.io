// Datos personales del sitio. Todo lo editable en un solo lugar.
export const perfil = {
	nombre: 'Jose Gaviño Villacis',
	titulo: 'Estudiante de Ingeniería en Computación — ESPOL',
	lema: 'Aprendiendo cada segundo del día',
	ubicacion: 'Ecuador',
	intro:
		'Me interesa el desarrollo backend y el diseño de software: entender cómo funcionan ' +
		'las tecnologías desde sus cimientos y escribir código mantenible con arquitecturas ' +
		'limpias y modulares.',
	// Déjalo vacío si algún día quieres ocultar el email del sitio.
	email: 'josegavinovillacis14@gmail.com',
	github: 'https://github.com/josegavinov',
	// La `ñ` va percent-encoded (%C3%B1) para que el enlace sobreviva al
	// copiarlo entre herramientas; el navegador la muestra normal.
	linkedin: 'https://www.linkedin.com/in/gavi%C3%B1ojose',
	habilidades: [
		'Java',
		'Python',
		'JavaScript',
		'TypeScript',
		'Node.js',
		'React',
		'MySQL',
		'PostgreSQL',
		'HTML',
		'CSS',
		'Git',
		'Docker',
	],
} as const;
