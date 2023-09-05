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
        'chosen-green': '#a1b356',
      },
      minHeight: {
        'screen-without-navBar': 'calc(100vh - 4.5rem)',
        'screen-with-contact': 'calc(100vh - 40rem)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
