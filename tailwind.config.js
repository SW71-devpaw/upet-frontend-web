/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customSidebar: '#F0F6FF',
        customBlue: '#0A1B3E'
      },
      fontFamily: {
        'custom': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

