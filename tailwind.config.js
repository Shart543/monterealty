/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F6EF',
          200: '#F2EBE1',
          300: '#EBE0D3',
          400: '#E1D1C0',
          500: '#D5BFA9',
          600: '#C7A98E',
          700: '#B89274',
          800: '#9A765A',
          900: '#7E604A',
        },
        gold: {
          light: '#E8C87A',
          DEFAULT: '#D4AF37',
          dark: '#B8962E',
        },
        ink: {
          light: '#8A8A8A',
          DEFAULT: '#444444',
          dark: '#111111',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Marcellus', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(212,175,55,0.25)',
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
