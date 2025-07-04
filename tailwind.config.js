export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Deep navy blue
        },
        secondary: {
          DEFAULT: '#0891b2', // Professional teal
        },
        accent: {
          DEFAULT: '#f59e0b', // Gold/amber
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(8, 145, 178, 0.5)',
      }
    },
  },
  plugins: [],
}