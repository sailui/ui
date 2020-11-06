const tc = require('tinycolor2')

module.exports = ({theme}) => {
  let primaryColor = theme('colors.primary')

  return {
    '.badge': {
      display: 'inline-block',
      paddingTop: '0',
      paddingBottom: '0',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.875rem',
      fontWeight: 700,
      backgroundColor: primaryColor,
      color: tc(primaryColor).getBrightness() < 200 ? '#fff' : '#000'
    },

    '.badge-dark': {
      backgroundColor: '#000',
      color: '#fff'
    },

    '.badge-light': {
      backgroundColor: '#edf2f7',
      color: '#000'
    },

    '.badge-blue': {
      backgroundColor: '#4299e1',
      color: '#fff'
    },

    '.badge-green': {
      backgroundColor: '#48bb78',
      color: '#fff'
    },

    '.badge-yellow': {
      backgroundColor: '#f6e05e',
      color: '#000'
    },

    '.badge-red': {
      backgroundColor: '#f56565',
      color: '#fff'
    }
  }
}