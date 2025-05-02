/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(187.77deg, #E63946 6%, #F9A826 248.9%)',
        'custom-gradient-0': 'linear-gradient(94.55deg, #2e86ab 0.52%, #133645 217.56%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: {
        'custom-gradient': 'linear-gradient(187.77deg, #E63946 6%, #F9A826 248.9%)',
      }
    },
  },
  plugins: [],
}

