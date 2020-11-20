const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addComponents, addUtilities, addBase, theme, postcss}) {
  let sailTheme = require('./themes/sailTheme')({theme})
  let formTheme = require('./themes/formTheme')({theme: sailTheme})

  addBase(require('./typography'))

  addComponents(require('./components/btn')({theme: sailTheme}))
  addComponents(require('./components/badge')({theme: sailTheme}))
  addComponents(require('./components/card'))
  addComponents(require('./components/alert'))
  addComponents(require('./components/container'))
  addComponents(require('./components/link')({theme: sailTheme}))

  require('@tailwindcss/custom-forms')({
    addUtilities,
    addComponents,
    postcss,
    theme: formTheme
  })
})