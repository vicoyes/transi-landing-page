/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#7A3EFE",
				"primary-soft": "#EBE4FF",
				"gold": "#C6A87C",
				"gold-light": "#E5D4B8",
				"cream": "#FDFBF7",
				"cream-dark": "#F2EFE9",
				"text-main": "#2D2A32",
				"text-light": "#6B6671",
			},
			fontFamily: {
				"serif": ["Playfair Display", "serif"],
				"sans": ["Lato", "sans-serif"]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		},
	},
	plugins: [],
}
