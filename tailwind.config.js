/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '412px',
      // 'sm2': '480px',
      md: '768px',
      // 'md2': '1024px',
      lg: '976px',
      xl: '1280px',
    },
    
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },

    fontSize: {
      'sm': ['14px', '17px'],
      '2sm': ['16px', '20px'],
      'lg': ['18px', '25px'],
      'xl': ['20px', '24px'],
      '3xl': ['32px', '39px'],
      '4xl': ['48px', '59px'],
      '6xl': ['64px', '78px'],
    },
    extend: {
      colors: {
        brownlight: '#FFAB94',
        brown: '#DE836A',
        greenlight: '#6ADEBB',
        green: '#2D8F71',
      },

      spacing: {
        '-270': '-16.875rem',
        '-240': '-15rem',
        '-230': '-14.375rem',
        '-200': '-12.5rem',
        '-170': '-10.625rem',
        '-140': '-8.75rem',
        '75': '75rem',
        '97': '6.063rem',
        '167': '10.438rem',
        '220': '13.75rem',
        '340': '21.25rem',
        '380': '23.75rem',
        '530': '33.125rem',
        '622': '38.875rem',
        '720': '45rem',
        '768': '48rem',
      },

      animation: {
        // Desktop Version
        'updown1': 'hero_img1 5s ease-in-out 1.5s infinite',
        'updown2': 'hero_img2 5s ease-in-out 0.2s infinite',
        'updown3': 'hero_img3 5s ease-in-out 0.6s infinite',
        // Mobile Version
        'updown4': 'hero_img4 5s ease-in-out 1.5s infinite',
        'updown5': 'hero_img5 5s ease-in-out 0.2s infinite',
        'updown6': 'hero_img6 5s ease-in-out 0.6s infinite',
      },

      keyframes: {
        // Desktop Version
        hero_img1: {
          '0%, 100%': { transform: 'translate(340px, -230px)', opacity: '1' },
          '50%': { transform: 'translate(340px, -200px)' },
        },
        hero_img2: {
          '0%, 100%': { transform: 'translate(530px, -270px)', opacity: '1' },
          '50%': { transform: 'translate(530px, -240px)' },
        },
        hero_img3: {
          '0%, 100%': { transform: 'translate(720px, -170px)', opacity: '1' },
          '50%': { transform: 'translate(720px, -140px)' },
        },
        // Mobile Version
        hero_img4: {
          '0%, 100%': { transform: 'translate(-240px, -160px)', opacity: '1' },
          '50%': { transform: 'translate(-240px, -130px)' },
        },
        hero_img5: {
          '0%, 100%': { transform: 'translate(-160px, -192px)', opacity: '1' },
          '50%': { transform: 'translate(-160px, -162px)' },
        },
        hero_img6: {
          '0%, 100%': { transform: 'translate(-80px, -144px)', opacity: '1' },
          '50%': { transform: 'translate(-80px, -114px)' },
        },
      }
    },
  },
  plugins: [],
}
