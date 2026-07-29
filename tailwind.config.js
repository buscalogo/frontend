/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e8942a',
          hover: '#d4831f',
          soft: '#fff4e5',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
