/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        grape: {
          DEFAULT: '#6D28D9',
          deep: '#2E1065',
          ink: '#0B0710'
        },
        lime: {
          DEFAULT: '#D7FF00',
          dim: '#9FBF00'
        }
      },
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace']
      },
      screens: {
        xs: '420px'
      }
    }
  },
  plugins: []
};
