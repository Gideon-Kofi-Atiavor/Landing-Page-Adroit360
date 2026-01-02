/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./indext.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' }, // start small and invisible
          '100%': { transform: 'scale(1)', opacity: '1' }, // grow to normal
        },
      },
      animation: {
        zoomIn: 'zoomIn 2s ease-in-out forwards', // 2s smooth zoom
      },
    },
  },
  plugins: [],
};

