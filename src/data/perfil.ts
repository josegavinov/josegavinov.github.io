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
	// TODO: email de contacto que quieras mostrar públicamente (déjalo vacío para ocultarlo).
	email: '',
	github: 'https://github.com/josegavinov',
	// TODO: confirmar la URL real de LinkedIn (la del README estaba incompleta).
	linkedin: '',
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
