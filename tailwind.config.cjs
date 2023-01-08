/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
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
    extend: {},
  },
  plugins: [],
}
