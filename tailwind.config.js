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
        customOrange: '#FF4500',
        customBlack:'#E5E7EB',
        customred:'#FF1500',
        customyellow:'#FFA500',
        customgray:'#2B2B2B',
        customgradient: 'linear-gradient(90deg, #4A90E2, #7ED321, #F5A623)',
      },
      fontFamily:{
        headingg: ['Black Ops One', 'system-ui'],
        body: ['Roboto', 'sans-serif'],
        head: ['Caveat'],
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
