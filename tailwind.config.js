/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('../public/assets/mainBg.png')",
        "main2-bg": "url('../public/assets/main2-bg.png')",
        "prime-Bg": "url('../public/assets/primeBg.png')",
        "legacy-bg": "url('../public/assets/legacy.png')",
      },
      fontFamily: {
        "font-poppin": ["Poppins", "sans-serif"],
        "font-quiche": ["quiche-sans"],
      },

      container: {
        center: true,
        screens: {
          xl: "1160px",
          md: "667px",
          sm: "354px",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        pantone1: "#0D1D2C",
        pantone2: "#CA8342",
      },
      backgroundColor: {
        colors: {
          current: "currentColor",
          white: "#ffffff",
          pantone1: "#0D1D2C",
          pantone2: "#CA8342",
        },
      },
    },
  },
  plugins: [],
};
