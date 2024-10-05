/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ralewaay: ["Raleway", "sans-serif"],
      },
      colors: {
        "primary-color": "#f9f9f9",
        "basic-color": "#D1D1D1",
        secondaryColor: "#666262",
      },
    },
  },
  plugins: [],
};
