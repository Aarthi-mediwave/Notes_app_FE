/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      colors:{
        background:{
          bg:'#212121', //black
        },
        card:{
          100:'#FFA186', //orange
          200:'#75D9E7', //blue
          300:'#E775DA', //pink
          400:'#E2EB90', //lemon yellow
          500:'#A5F982', //pal green
          600:'#FFC575', //orange yellow
          700:'#585858', //Dark grey
          800:'#0000005C', //Medium grey
          900:'#00000029', //Light grey
          1000:'#759EFF', //blue
          1001:'#2B2B2B', //pal black
        },
        Button:{
          100:'#7BFF84', //Pal button green
        },
        text:{
          100:'#FFFFFF', //white
          200:'#F4F4F4', //header grey
          300:'#AAAAAA', //date grey
          400:'#EFEFEF', //para grey
        },
        fontSize: {
          xs: ['12px', '16px'],
          sm: ['14px', '20px'],
          sl: ['15px', '20px'],
          base: ['16px', '24px'],
          md: ['18px', '26px'],
          lg: ['20px', '28px'],
          xl: ['22px', '27px'],
          '1xl': ['24px', '29px'],
          '2xl': ['28px', '34px'],
          '3xl': ['32px', '39px'],
          '4xl': ['37px', '44px'],
        },
        screens: {
          xxs:'300px',
          xs: '420px',
          s: '500px',
          sm: '576px',
          xx: '700px',
          md: '800px',
          xmd: '992px',
          lg: '1100px',
          xlg: '1140px',
          xl: '1280px',
          '1xl':'1300px',
          '2xl': '1536px',
          '3xl': '1920px',
        },
        minWidth: {
          0: ['0px'],
          btn: ['125px'],
          full: ['100%'],
          min: ['min-content'],
          max: ['max-content'],
        }
      }
    },
  },
  plugins: [],
}

