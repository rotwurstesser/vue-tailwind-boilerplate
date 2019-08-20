module.exports = {
  theme: {
    colors: {
      indigo: '#5c6ac4',
      green: '#007ace',
      blue: '#007ace',
      red: '#de3618',
      cyan: '#1ea274',
      gray: '#777777',
      white: '#FFFFFF',
      semitransparent: 'rgba(1,1,1,0.5)',
      iceblue: '#4174e7'
    },
    extend: {}
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus']
  },
  "plugins": [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
  ]
};
