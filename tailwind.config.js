/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer-background-color': 'rgb(41, 38, 38)',
      },
      minHeight: {
        'footer-min-height': '120px',
      }
    },
  },
  plugins: [],
}

