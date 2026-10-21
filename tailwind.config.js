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
          ink: '#101112', // Primary text / dark buttons
          'ink-soft': '#2C2E2D',
          muted: '#6E7175', // Body copy on light
          faint: '#9CA0A2', // Kickers
          soft: '#F7F7F5', // Alt section / card surface
          cream: '#F6F3EA', // Nav bar
          line: 'rgba(16, 17, 18, 0.1)',
          'line-strong': 'rgba(16, 17, 18, 0.22)',
          olive: '#7A801A', // Accent on light surfaces
          lime: '#D6DB2B', // Dynasty lime
          'lime-hi': '#E4EB2E', // Accent on dark surfaces
          dark: '#0C0D10', // Dark sections
          'dark-2': '#141519', // Cards on dark
          'dark-line': 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        card: '14px',
      }
    },
  },
  plugins: [],
}
