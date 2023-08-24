/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        gray: "	#808080",
        yellow: "#ffec00",
        "dark-yellow": "#ffff00",
        orange: "#ff9300",
      },
    },
  },
  plugins: [],
};
