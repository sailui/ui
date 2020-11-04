const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = () => {
  return ({addComponents, addUtilities, addBase, theme, postcss}) => {
    addBase(require('./typography'))

    addComponents(require('./components/btn'))
    addComponents(require('./components/card'))
    addComponents(require('./components/badge'))
    addComponents(require('./components/alert'))
    addComponents(require('./components/container'))

    require('@tailwindcss/custom-forms')({addUtilities, addComponents, theme, postcss})
  }
}