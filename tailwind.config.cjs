/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "vietnam-field": "url('/background.jpg')",
        "vietnam-sea": "url('/how-it-works-background.jpg')",
        "vietnam-mountain": "url('/1.jpg')",
        "vietnam-wooden": "url('/wooden.jpg')",
        "vietnam-smoke": "url('/smoke.png')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merienda: ["Merienda", "cursive"],
      },
    },
  },
  plugins: [],
};
