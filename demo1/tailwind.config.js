module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      primary: '#EE142F',
      black: '#000000',
      white: '#FFFFFF',
      'grey-light': '#F3F3F3',
      grey: '#D1D1D1',
      'grey-dark': '#8F8F8F',
      'grey-darker': '#6C6C6C',
      peach: '#F1A760',
      olive: '#999539',
    },
    extend: {
      maxWidth: {
        '7xl': '80rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
