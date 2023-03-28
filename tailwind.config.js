/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans'],
      },
      fontWeight: {
        extraBold: 900,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}