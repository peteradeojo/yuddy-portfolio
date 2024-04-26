const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,jsx,css}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Josefin', 'Helvetica', 'sans-serif'],
				bold: ['Josefin Bold', 'Helvetica', 'sans-serif'],
				lighter: ['Josefin Light', 'Helvetica', 'sans-serif'],
			},
			keyframes: {
				'slide-up': {
					'0%': { opacity: '100%' },
					'30%': { opacity: '70%' },
					'50%': { opacity: '50%' },
					'90%': { opacity: '0' },
					'100%': { opacity: 0, display: 'none' },
				},
				'slide-down': {
					'0%': { opacity: '0' },
					'30%': { opacity: '30%' },
					'50%': { opacity: '50%' },
					'90%': { opacity: '70%' },
					'100%': { opacity: '100%', display: 'block' },
				},
			},
			animation: {
				'slide-up': 'slide-up .3s linear forwards',
				'slide-down': 'slide-down .3s linear forwards',
			},
		},
	},
	plugins: [daisyui],
};
