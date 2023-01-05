/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Open Sans", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      colors: {
        primeColor: "#2d3338",
        designColor: "#ecb501",
        wrapColor: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
