/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryDark: "#1E40AF",
        accentOrange: "#F97316",
        accentGreen: "#16A34A",
        softGray: "#F9FAFB",
      },
    },
  },
  plugins: [],
}