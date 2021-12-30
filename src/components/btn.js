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
      "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-ring-offset-width": "0px",
      "--tw-ring-offset-color": "#fff",

      '&:hover': {
        backgroundColor: hoverColor
      },

      '&:focus': {
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "--tw-ring-color": tc(primaryColor).setAlpha(0.1).toString(),
        borderColor: tc(primaryColor).setAlpha(0.6).toString(),
        boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)",
        outline: 'none',
      }
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