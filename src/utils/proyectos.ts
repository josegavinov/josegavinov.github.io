import { getCollection } from 'astro:content';

// Los proyectos marcados como `borrador` son plantillas por completar: se ven
// en `npm run dev` para poder trabajarlos, pero nunca salen en el build público.
export async function obtenerProyectos() {
	const proyectos = await getCollection('proyectos', ({ data }) =>
		import.meta.env.DEV ? true : !data.borrador,
	);
	return proyectos.sort((a, b) => a.data.orden - b.data.orden);
}
