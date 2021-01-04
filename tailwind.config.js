const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
        gray: colors.blueGray,
        green: colors.teal,
        red: colors.rose,
      },
    },
    fontFamily: {
      mono: ["Source Code Pro", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
