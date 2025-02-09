/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				skyBlue: "#00abf0", // Custom color
			},
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
};
