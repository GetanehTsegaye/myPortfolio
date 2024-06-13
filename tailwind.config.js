/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7C33C",
        customGray: "#34353A",
        secondary: "#F9F9F9",
        sectionGray: "#31333B",
        cardGray: "#3D3E42",
        hoverYellow: "#F0BF6C",
        clothBlack: "#020202",
        clothLightBlack: "#101113",
      },
    },
  },
  plugins: [],
};
