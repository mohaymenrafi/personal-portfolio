const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navy': '#0a192f',
        'light-navy':'#112240',
        'lightest-navy':'#233554',
        'slate':'#8892b0',
        'light-slate':'#a8b2d1',
        'lightest-slate':' #ccd6f6',
        'white':'#e6f1ff',
        'green':'#64ffda',
      },
      fontFamily:{
        'sans':['Calibre', ...defaultTheme.fontFamily.sans],
        'mono':['SF Mono', ...defaultTheme.fontFamily.sans]
      },
      fontSize:{
        '13':'13px',
      },
      spacing:{
        '100':'100px',
        '150':'150px',
        '540':'540px'
      },
      transitionDuration:{
        '65':'650ms'
      }
    },
  },
  plugins: [],
}