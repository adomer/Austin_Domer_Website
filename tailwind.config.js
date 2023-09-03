/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'chosen-blue': '#81a1a4',
        'chosen-gray': '#ac9898',
        'chosen-gray2': '#797575',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
