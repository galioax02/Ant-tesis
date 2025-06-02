/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['liebling', 'sans-serif'],
        },
        colors: {
          primary: '#ffffff', 
          secondary: '#002496'
        },
      },
    },
    plugins: [],
  }
  