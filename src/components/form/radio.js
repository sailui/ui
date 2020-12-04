const tc = require('tinycolor2')

module.exports = ({theme}) => {
  let primaryColor = theme('colors.primary')

  return {
    '.form-radio': {
      borderColor: '#e2e8f0',
      borderWidth: '1px',
      borderRadius: '100%',
      color: primaryColor,

      '&:focus': {
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "--tw-ring-color": tc(primaryColor).setAlpha(0.1).toString(),
        borderColor: tc(primaryColor).setAlpha(0.6).toString(),
        boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)",
      }
    },
  }
}