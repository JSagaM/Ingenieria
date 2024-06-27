/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inter", "sans-serif"],
        secondary: ["Oswald", "sans-serif"],
      },
      colors: {
        "custom-light-blue": "#EAEFFE",
        "background-main": "#F5F5FB",
        "custom-orange": "#F0B84B",
        "custom-blue": "#5161FF",
        "hover-blue": "#7F8BFF",
        "custom-green": "#58DA5C",
        "custom-dark": "#3D3D3D",
      },
      shadows:{
        "blue-shadow": "0px 8px 28px 0px rgba(81, 97, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
