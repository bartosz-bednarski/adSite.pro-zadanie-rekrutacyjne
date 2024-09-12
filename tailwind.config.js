/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgba(1, 71, 255, 1)",
        customBlackLight: "rgba(40, 40, 40, 1)",
        customBlackDark: "rgba(29, 29, 27, 1)",
        customWhite: "rgba(247, 247, 247, 1)",
        customWhiteText: "rgba(255, 255, 255, 1)",
      },
      height: {
        "904px": "904px",
      },
      fontFamily: {
        "Bebas-Neue": ["Bebas Neue", "sans-serif"],
        "Roboto-Condensed": ["Roboto Condensed", "sans-serif"],
        "Roboto-Flex": ["Roboto Flex", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Road.svg')",
      },
    },
  },
  plugins: [],
};
