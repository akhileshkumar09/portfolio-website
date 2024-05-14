/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  
  // },
  // plugins: [],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 576px) { ... }

      'md': '850px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  }
}

