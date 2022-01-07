const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addComponents, addUtilities, addBase, theme, postcss}) {
  let sailTheme = require('./themes/sailTheme')({theme})

  addBase(require('./typography'))

  addComponents(require('./components/card'))
  addComponents(require('./components/alert'))
  addComponents(require('./components/container'))
  addComponents(require('./components/btn')({theme: sailTheme}))
  addComponents(require('./components/badge')({theme: sailTheme}))
  addComponents(require('./components/link')({theme: sailTheme}))

  addComponents(require('./components/form/input')({theme: sailTheme}))
  addComponents(require('./components/form/select')({theme: sailTheme}))
  addComponents(require('./components/form/checkbox')({theme: sailTheme}))
  addComponents(require('./components/form/radio')({theme: sailTheme}))
  addComponents(require('./components/form/textarea')({theme: sailTheme}))

  let forms = require('@tailwindcss/forms')();
  forms.handler({addBase, theme})
})