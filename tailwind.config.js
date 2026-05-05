/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F1115', // Dynasty Black
          light: '#F7F7F5', // Off White
          accent: '#D6DB2B', // Dynasty Lime-Gold
          card: '#1B2027', // Deep Charcoal
          muted: '#A8AD16', // Muted Gold-Olive
          text: '#A7ADB5', // Soft Gray
          border: '#2B2F36', // Border Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
