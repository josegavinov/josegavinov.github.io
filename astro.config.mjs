// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// El repo se llama `josegavinov.github.io`, así que GitHub Pages sirve el
	// sitio en la raíz del dominio y no hace falta configurar `base`.
	site: 'https://josegavinov.github.io',
});
