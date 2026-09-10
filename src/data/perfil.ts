// Datos personales del sitio. Todo lo editable en un solo lugar.
export const perfil = {
	nombre: 'Jose Gaviño Villacis',
	// El nombre se parte en dos líneas en la portada: pila sobre apellido.
	nombrePila: 'Jose',
	apellido: 'Gaviño',
	rol: 'Desarrollador Backend',
	titulo: 'Estudiante de Ingeniería en Computación — ESPOL',
	// Insignia de la barra superior. Ponlo en null para ocultarla.
	disponibilidad: 'Disponible',
	intro:
		'Me interesa el desarrollo backend y el diseño de software: entender cómo funcionan ' +
		'cada una de las tecnologías aplicadas y escribir código mantenible con arquitecturas ' +
		'limpias y modulares.',
	// Ficha de la columna derecha en la portada.
	ficha: [
		{ campo: 'Formación', valor: 'ESPOL' },
		{ campo: 'Carrera', valor: 'Ing. Computación' },
		{ campo: 'Enfoque', valor: 'Backend · APIs · Desarrollo' },
	],
	// Déjalo vacío si algún día quieres ocultar el email del sitio.
	email: 'josegavinovillacis14@gmail.com',
	github: 'https://github.com/josegavinov',
	// La `ñ` va percent-encoded (%C3%B1) para que el enlace sobreviva al
	// copiarlo entre herramientas; el navegador la muestra normal.
	linkedin: 'https://www.linkedin.com/in/gavi%C3%B1ojose',
	// Resumen corto para la portada. `fuerte: true` lo pinta en tinta y negrita.
	habilidades: [
		{ nombre: 'TypeScript', fuerte: true },
		{ nombre: 'Python', fuerte: true },
		{ nombre: 'C', fuerte: false },
		{ nombre: 'Java', fuerte: false },
		{ nombre: 'React', fuerte: false },
		{ nombre: 'Node.js', fuerte: false },
		{ nombre: 'PostgreSQL', fuerte: false },
		{ nombre: 'Docker', fuerte: false },
	],
	// Inventario completo para "Sobre mí", agrupado por área. Cada entrada
	// sale de un proyecto publicado: si algo no está en el portafolio,
	// tampoco está aquí.
	stack: [
		{
			area: 'Lenguajes',
			items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'Ruby'],
		},
		{
			area: 'Backend',
			items: ['FastAPI', 'Node.js', 'Flask', 'Ruby on Rails', 'APIs REST', 'Sockets TCP'],
		},
		{
			area: 'Frontend',
			items: ['React', 'Next.js', 'Astro', 'Phaser', 'Vite'],
		},
		{
			area: 'Bases de datos',
			items: ['PostgreSQL', 'MySQL', 'Prisma'],
		},
		{
			area: 'Integraciones e IA',
			items: ['Gemini', 'WhatsApp Business API', 'Google Calendar API', 'OAuth 2.0'],
		},
		{
			area: 'Cómputo paralelo',
			items: ['CUDA', 'OpenCL'],
		},
		{
			area: 'Herramientas',
			items: ['Docker', 'Git', 'Make', 'Postman', 'Vercel'],
		},
		{
			area: 'CI y pruebas',
			items: ['GitHub Actions', 'JUnit', 'ESLint'],
		},
	],
} as const;
