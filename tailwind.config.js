/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lighBlue: "#2b84ea",
        lighBlue300: "#4b94ed",
        lighBlue500: "#0b72e7",
        greenLight: "#61cea6", // Added the missing #
        grayText: "#818597",
        lightBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
}
