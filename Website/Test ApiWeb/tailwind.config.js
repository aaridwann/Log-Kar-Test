/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '300': '18.75rem',
        '400': '25rem',
        '450': '28.125rem',
        '500': '31.25rem'
      }
    },
  },
  plugins: [],
}
