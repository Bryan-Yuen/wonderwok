/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '815px',
      // => @media (min-width: 815px) { ... }
    },
    extend: {
      colors: {
        'footer-background-color': 'rgb(41, 38, 38)',
        'about-page-alt-background-color': 'rgb(236, 236, 236);',
      },
      minHeight: {
        'footer-min-height': '120px',
      }
    },
  },
  plugins: [],
}

