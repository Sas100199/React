  // tailwind.config.js
  module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // make sure your files are included
    darkMode:"class",
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
          worksans: ['Work Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
