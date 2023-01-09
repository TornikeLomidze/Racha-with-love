/*  ~  tailwind config  ~  */

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Eurostile LT Std GEO_Mt', 'sans-serif'],
        monserat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        black: {
          DEFAULT:'#000000',
        },
        white: {
          DEFAULT: '#ffffff',
          50: 'rgba(255, 255, 255, .5)',
          60: 'rgba(255, 255, 255, .6)',
          80: 'rgba(255, 255, 255, .8)'
        },
        gray: {
          DEFAULT: '#f8f8f8',
          100: '#5F729B',
        },
        blue: {
          DEFAULT: '#25304A',
          30: 'rgba(95, 114, 155, .3)',
          38: 'rgba(37, 48, 74, .38)',
          50: 'rgba(37, 48, 74, .5)',
          70: 'rgba(95, 114, 155, .7)',
        }, 
        red: {
          DEFAULT: '#BA4E62',
        }, 
      },
      borderRadius: {
        DEFAULT: '16px',
        0: '0',
        4: '4px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        round: '50%'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px'
      },
      boxShadow: {
        DEFAULT: '0px 8px 16px #00000014',
        none: '0px 0px 0px transparent'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'lg2': '1025px',
        'xl': '1280px',
        'lp': '1722px',
        'hd': '1920px',
      }
    }
  }
}