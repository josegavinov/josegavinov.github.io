import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md en src/content/proyectos/.
// Para añadir uno nuevo: copia un archivo existente y cambia el frontmatter.
const proyectos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
	schema: z.object({
		titulo: z.string(),
		descripcion: z.string(),
		tecnologias: z.array(z.string()),
		repo: z.url().optional(),
		demo: z.url().optional(),
		// Controla el orden en la lista: menor número aparece primero.
		orden: z.number().default(99),
		destacado: z.boolean().default(false),
		// Marca los proyectos que aún son plantilla, para no publicarlos por error.
		borrador: z.boolean().default(false),
	}),
});

export const collections = { proyectos };
