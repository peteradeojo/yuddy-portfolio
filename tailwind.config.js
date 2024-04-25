const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,jsx,css}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Josefin', 'Helvetica', 'sans-serif'],
				'bold': ['Josefin Bold', 'Helvetica', 'sans-serif'],
			}
		},
	},
	plugins: [daisyui],
};
