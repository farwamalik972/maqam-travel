/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        brand: "#70452F",
        "brand-dark": "#4B2D20",
        "brand-light": "#F0E3D5",
        gold: "#D2AA63",
        "gold-light": "#F6EBD5",
        ivory: "#FAF5EE",
        forest: "#38251D",
        ink: "#30231D",
        muted: "#79685D",
        border: "#E8DCCF",
        camel: "#B9845A",
        "camel-light": "#D9B18C",
        cream: "#FFF9F1",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
