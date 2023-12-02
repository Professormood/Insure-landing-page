/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      DarkViolet: "hsl(256, 26%, 20%)",
      GrayishBlue: "hsl(216, 30%, 68%)",
      VeryDarkViolet: "hsl(270, 9%, 17%)",
      DarkGrayishViolet: "hsl(273, 4%, 51%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
    },
    fontFamily:{
      Dmserif:"DM Serif Display, serif",
      Karla:"'Karla, sans-serif"
    },
    extend: {},
  },
  plugins: [],
};
