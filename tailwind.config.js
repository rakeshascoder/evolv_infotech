/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(88.06deg, #4A52C3 0%, #172D90 52%, #5157CA 100%)',
      },
    },
  },
  plugins: [],
};
