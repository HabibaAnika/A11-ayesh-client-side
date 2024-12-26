/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
         myFont: "'Dancing Script', cursive",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ]
}

