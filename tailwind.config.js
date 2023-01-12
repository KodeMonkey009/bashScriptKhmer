/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    fontFamily:{
      'khmer': ['Noto Sans Khmer', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}