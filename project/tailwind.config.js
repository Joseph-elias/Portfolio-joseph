/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      colors: {
        blue: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8bbdff',
          400: '#589aff',
          500: '#3378ff',
          600: '#1e5cf7',
          700: '#1549e9',
          800: '#173abd',
          900: '#1a3494',
        },
        teal: {
          50: '#effef7',
          100: '#dafeee',
          200: '#b8f9de',
          300: '#82f2c7',
          400: '#49e4ac',
          500: '#22cd8e',
          600: '#11a872',
          700: '#128660',
          800: '#13694d',
          900: '#125641',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};