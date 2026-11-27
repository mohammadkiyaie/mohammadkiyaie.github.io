/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17,25,40,0.75)",
          300: "rgba(255,255,255,0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: { 100: "#E4ECFF" },
        purple: "#CBACF9",
      },
    },
  },
  plugins: [],
};
