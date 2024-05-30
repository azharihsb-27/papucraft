/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['src/**/*.html', 'src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#D03939',
        primary_dark: '#B73131',
      },
      fontFamily: {
        poppins: 'Poppins'
      }
    },
  },
  plugins: [],
};
