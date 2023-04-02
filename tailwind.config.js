const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        white: {
          DEFAULT: "#FFFFFF",
          primary: "#FEFEFE",
        },
        grey: {
          100: "#C3C3C3",
          200: "#616161",
          300: "#424242",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
};
