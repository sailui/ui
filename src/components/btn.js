const tc = require('tinycolor2')

module.exports = ({theme}) => {
  let primaryColor = theme('colors.primary')
  let hoverColor = tc(primaryColor).clone()

  if(hoverColor.getBrightness() < 10){
    hoverColor.lighten(20);
  }
  else{
    hoverColor.darken(10)
  }

  hoverColor = hoverColor.toString()

  return {
    '.btn': {
      display: 'inline-block',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      transitionProperty: 'background-color, border-color, color, fill, stroke',
      transitionDuration: '200ms',
      cursor: 'pointer',
      borderRadius: '0.25rem',
      backgroundColor: primaryColor,
      color: '#fff',

      '&:hover': {
        backgroundColor: hoverColor
      },
    },

    '.btn-outline': {
      borderWidth: '1px',
      borderColor: primaryColor,
      color: primaryColor,
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: primaryColor,
        color: '#fff'
      }
    }
  }
}