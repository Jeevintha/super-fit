/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue : "#1a202c",
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
};