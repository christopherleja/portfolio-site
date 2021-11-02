const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        almond: "#f3e8c8",
        appPurple: "#3e1c44",
        sienna: "#C34609",
        blueDark: "#4F6D7A",
        blueLight: "#C0D6DF",
        grayLight: "#EAEAEA",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
