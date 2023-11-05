/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        //  roboto: "'Roboto Slab', serif", // Adds a new `font-roboto` class 
        Raleway: "'Playfair Display', serif", // Adds a new `font-Raleway` class
      }},
  },
 plugins: [require("daisyui")],
}

