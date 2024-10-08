/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
      colors: {
        "green-color": "#27AE60",
        "gray-color": "#828282",
        "card-color": "#212121",
        "bg-color": "#171717",
        "menu-color": "#172554",
      },
      backgroundImage: {
        "open-menu": "url('../assets/menu.svg')",
        "close-menu": "url('../assets/close.svg')",
      },
    },
  },
  plugins: [],
};
