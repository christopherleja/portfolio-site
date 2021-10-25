const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        almond: "#E8DAB2",
        appPurple: "#3e1c44",
        sienna: "#DD6E42",
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
