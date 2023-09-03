/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'chosen-blue': '#81a1a4',
        'chosen-gray': '#ac9898',
        'chosen-gray2': '#797575',
        'chosen-cream': '#f3eed9',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
