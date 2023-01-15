/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      navy: '#051139',
      blue: '#1e50ff',
      purple: '#aa00ff',
      cyan: '#5699ff',
      'gary-dark': '#0e0e0e',
      'blue-dark': '#081956',
      // for text
      'color-title': '#333',
      'color-body': '#666',
      'color-field': '#b8b8b8',
      'color-disable': '#ebebeb',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
        xl: '4.5rem',
      },
    },
    boxShadow: {
      DEFAULT: '0px 24px 80px rgba(0, 0, 0, 0.8)',
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate"),],
}
