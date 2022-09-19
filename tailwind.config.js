const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Varela Round', ...fontFamily.sans],
      muli: ['Muli', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          100: '#fcea81',
          200: '#fcce00',
          300: '#fef5c0',
          400: '#fff7ec',
          500: '#ffb145',
        },
        green: {
          100: '#effbf7',
          200: '#1dd292',
        },
        gray: {
          100: '#ebebeb',
          200: '#eeeeee',
          300: '#707070',
          400: '#fafafa',
        },
        dark: '#252525'
      },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
