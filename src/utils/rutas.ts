// El sitio se publica bajo un subdirectorio (GitHub Pages), así que todo enlace
// interno debe llevar el prefijo `base` configurado en astro.config.mjs.
export function ruta(camino: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const limpio = camino.startsWith('/') ? camino : `/${camino}`;
	return `${base}${limpio}` || '/';
}
