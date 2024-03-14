/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#f5f5dc', // Beige estándar
          light: '#fafaf0',   // Un beige más claro
          dark: '#e1e1b8',   // Un beige más oscuro
        },
      },
    },
  },
  plugins: [],
}
