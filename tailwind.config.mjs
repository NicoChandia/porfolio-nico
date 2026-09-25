/** @type {import('tailwindcss').Config} */
// Los colores salen de variables CSS definidas en src/layouts/Layout.astro
// (una paleta para modo claro y otra para modo oscuro).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bg: token('bg'),
				surface: token('surface'),
				line: token('line'),
				fg: token('fg'),
				muted: token('muted'),
				accent: token('accent'),
				'accent-soft': token('accent-soft'),
				'on-accent': token('on-accent'),
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [],
}
