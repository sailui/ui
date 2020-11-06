const tc = require('tinycolor2')

module.exports = ({theme}) => {
  return (key) => {
    let primaryColor = theme('colors.primary')
    let value = theme(key)

    if (key !== 'customForms') {
      return value
    }

    return {
      default: {
        'input, textarea, multiselect, select, checkbox, radio': {
          '&:focus': {
            boxShadow: `0 0 0 3px ${tc(primaryColor).setAlpha(0.2).toString()}`,
            borderColor: tc(primaryColor).setAlpha(0.4).toString(),
          },
        },

        'checkbox, radio': {
          color: primaryColor,
        },
      },
    }
  }
}