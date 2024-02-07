/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
	],
	important: true,
	theme: {
		extend: {

			colors: {
				black: "#12151E",
				pink: "#fd2d78",
				accent: "#F6F1EF",
				accentHeader: "#F1F1F1",
				accentPodcast: "#f4c07f",
				accentMembership: "#acc4b8",
			},
			fontFamily: {
				body: ["Grandstander Variable", "sans-serif"],
				subtext: ["League Spartan", "sans-serif"],
			},
			fontSize: {
				"7xl": "5rem",
			},
		},
	},
	plugins: [],
};
