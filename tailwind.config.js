/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-lg": "url('/src/assets/foot.png')",
      },
      fontFamily: {
        Poppins: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
