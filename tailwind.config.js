/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rich-black' : '#0D1B2A',
        'oxford-blue' : '#1B263B',
        'silverlake-blue' : '#778DA9'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : ""
        },
        ".scrollbar-webkit" : {
          '&::-webkit-scrollbar' : {
            width : "8px"
          },
          '&::-webkit-scrollbar-track' : {
            backgroundColor : "transparent"
          },
          '&::-webkit-scrollbar-thumb' :{
            backgroundColor : "#0D1B2A",
            borderRadius : "20px"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

