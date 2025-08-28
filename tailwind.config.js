/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // sans: ['Manrope', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif']
      },
      zIndex: {
        base: '0',
        content: '1',
        floating: '5',
        nav: '10',
      },
    }
  },
}