/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        color1: "#00ADB5",
        color2: "#EEEEEE",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
