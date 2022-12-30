/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lec': '#191919',
        'dis': '#5C3D2E',
        'lab': '#03506F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}