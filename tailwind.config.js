/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343f75', //blue logo
        secondary: '#ffc111', // yellow logo
        tertiary: '#810def', // purple new
        darkGray: '#939db1', // gray  
        
        quaternary: '#fca104', // orange
        quinary: '#17171e',

        darkOne: '#1d2334',
        darkTwo: '#212a3f',
        darkThree: '#2c3750',
      },
      backgroundColor: {
        primary: '#343f75', //blue logo
        secondary: '#ffc111',  //yellow logo
        tertiary: '#810def', // purple new


        quaternary: '#181e2c',
        quinary: '#fca104', // orange
        senary: '#3aba69', // green
        septenary: '#f65455', // red
        whiteBg: '#e6ebee' 
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Inter', 'Graphik', 'Merriweather', 'sans-serif', 'serif'],
        inter: ['Inter', 'Montserrat'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'xs': '390px',
        'sm': '448px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1024px',
        '3xl': '1280px',
        '4xl': '1360px',
        '5xl': '1440px',
        '6xl': '1500px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
