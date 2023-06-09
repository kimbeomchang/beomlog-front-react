/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/App.tsx',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			light: {
				'bg-page-1': '#F8F9FA',
				'bg-page-2': '#FFFFFF',
				'bg-element-1': '#FFFFFF',
				'bg-element-2': '#F8F9FA',
				'bg-element-3': '#E9ECEF',
				'bg-element-4': '#DEE2E6',
				'text-1': '#212529',
				'text-2': '#495057',
				'text-3': '#868E96',
				'text-4': '#CED4DA',
			},
			dark: {
				'bg-page-1': '#121212',
				'bg-page-2': '#121212',
				'bg-element-1': '#1E1E1E',
				'bg-element-2': '#1E1E1E',
				'bg-element-3': '#252525',
				'bg-element-4': '#2E2E2E',
				'text-1': '#ECECEC',
				'text-2': '#D9D9D9',
				'text-3': '#ACACAC',
				'text-4': '#595959',
			},
			transparent: 'transparent',
			red: '#FF0000',
			green: '#00FF00',
			blue: '#0000FF',
			yellow: '#FFFF00',
			white: '#FFFFFF',
			magenta: '#FF00FF',
			cyan: '#00FFFF',
		},
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],
};
