/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rich-black' : '#0D1B2A',
        'oxford-blue' : '#1B263B'
      }
    },
  },
  plugins: [],
}

