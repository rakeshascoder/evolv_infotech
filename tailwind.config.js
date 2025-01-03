// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         screens: {
//           'customs': '900px', // Custom screen for 900px and above
//        // Custom screen for 1200px and above
//         },
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//       animation: {
//         scroll: 'scroll 10s linear infinite',
//       },
//       backgroundImage: {
//         'custom-gradient': 'linear-gradient(88.06deg, #4A52C3 0%, #172D90 52%, #5157CA 100%)',
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'customs': '1080px', // Custom screen for 900px and above
       // Custom screen for 1200px and above
      },
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

