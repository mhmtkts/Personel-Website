/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Inter, sans-serif",
      },
      keyframes: {
        'scroll-wheel': {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(6px)', // Tekerleğin ne kadar aşağı ineceğini belirler
            opacity: '0.3',
          },
        },
      },
      animation: {
        'scroll-wheel': 'scroll-wheel 1.5s ease-in-out infinite',
      },
    },
  plugins: ["prettier-plugin-tailwindcss"],
  },
};
