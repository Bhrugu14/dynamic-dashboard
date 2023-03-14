/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FigTree: ["Figtree", "sans-serif"],
      },
      colors: {
        background: "#e9eff2",
      },
    },
  },
  plugins: [],
};
