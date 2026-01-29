// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.liderardesdelaseriedad.com', // Cambia por tu dominio real
	integrations: [tailwind()],
});
