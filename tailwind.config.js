/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0C10",
        dark_gray: "#C5C6C7",
        gray: "#C5C6C7",
        cyan: "#66FCF1",
        aquamarine: "#45A29E",
      },
      backgroundImage:{
        about: "url('./assets/about.jpeg')",
      }
    },
  },
  plugins: [],
};