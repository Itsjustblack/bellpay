/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				false: ["False", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				heroImage: "url('/src/assets/images/bgImage.png')",
				rough: "url('/src/assets/images/roughBg.png')",
				confetti: "url('/src/assets/images/confetti.png')",
				heroBg: "url('/src/assets/icons/productsHeroBg.svg')",
			},
			animation: {
				"bounce-slow": "bounce 2s linear infinite",
			},
		},
	},
	plugins: [],
};
