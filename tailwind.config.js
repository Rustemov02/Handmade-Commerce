/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      fontFamily: { 
        sans : ['Open Sans'],
        roboto : ['Roboto'],
        merri : ["Merriweather"],
        edu : ["Edu AU VIC WA NT Pre"]
      } 
    }
  },
  plugins: [],
}

