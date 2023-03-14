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
        sidebar: "#F9FBFC",
        title: "#1A1A1A",
        dim: "#9196A6",
      },
    },
  },
  plugins: [],
};
