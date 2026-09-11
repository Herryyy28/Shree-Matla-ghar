/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#FBF8F3',
          100: '#F7F2E8', // Warm Cream
          200: '#E8D5B7', // Sand
          300: '#D9B88E',
          400: '#C76B45', // Terracotta
          500: '#A65E3B', // Primary Clay
          600: '#8A4A2C',
          700: '#6B3820',
          800: '#4A2514',
          900: '#3A241A', // Deep Earth
          950: '#22130D',
        },
        sage: {
          50: '#F4F6F3',
          100: '#E6EBE1',
          200: '#CBD6C2',
          300: '#AABEA0',
          400: '#8BA580',
          500: '#7A8B68', // Sage Accent
          600: '#5F6F4F',
          700: '#47533B',
        },
        charcoal: {
          DEFAULT: '#252525',
          light: '#3D3D3D',
          dark: '#181818',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'earth': '0 4px 20px -2px rgba(58, 36, 26, 0.08)',
        'earth-lg': '0 10px 30px -4px rgba(58, 36, 26, 0.12)',
        'clay-glow': '0 0 25px rgba(199, 107, 69, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
