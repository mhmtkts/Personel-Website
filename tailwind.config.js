/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Inter, sans-seri",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
