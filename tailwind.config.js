/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4A90E2',
        customGreen: '#7ED321',
        customOrange: '#F5A623',
        customBlack:'#0A0809',
        customred:'#FF1500',
        customyellow:'#FBDE46',
        customgradient: 'linear-gradient(90deg, #4A90E2, #7ED321, #F5A623)',
      },
      fontFamily:{
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      screens:{
        md:{'max':'770px','min': '460px'},
        xl:{'max':'1030px','min':'780px'},
        lg:{'min':'780px'},
        sm:{'max':'430px','mim':'380px'},
        'esm':{'max':'379px'},
        'exsm':{'max':'330px'},
      },
      maxWidth: {
        custom: '100vw', // Correctly defined custom width
      },
      width:{
        customw:'90vw',
      },
    },
  },
  plugins: [],
}
