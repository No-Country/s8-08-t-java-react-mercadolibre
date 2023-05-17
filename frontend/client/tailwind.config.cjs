/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEE602",
        secondary: "#FFF159",
        red: "#E40002",
        darkblue: "#2D3277",
        ligthblue: "#3483FA",
        green: "#00A650",
        grey: "#EDEDED"
      }
    }
  },
  plugins: []
};
