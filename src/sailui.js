const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options = {
  exclude: [

  ]
}) {
  return function ({ addComponents, addUtilities, addBase, theme, postcss }) {
    let sailTheme = require('./themes/sailTheme')({ theme });
    addBase(require('./typography'))

    if (!options.exclude.includes('alert')) {
      addComponents(require('./components/alert'))
    }

    if (!options.exclude.includes('badge')) {

      addComponents(require('./components/badge')({theme: sailTheme}))
    }

    if (!options.exclude.includes('btn')) {
      addComponents(require('./components/btn')({ theme: sailTheme }))
    }

    if (!options.exclude.includes('card')) {
      addComponents(require('./components/card'))
    }

    if (!options.exclude.includes('container')) {
      addComponents(require('./components/container'))
    }

    if (!options.exclude.includes('link')) {
      addComponents(require('./components/link')({ theme: sailTheme }))
    }

    if (!options.exclude.includes('forms')) {
      addComponents(require('./components/form/checkbox')({ theme: sailTheme }))
      addComponents(require('./components/form/input')({ theme: sailTheme }))
      addComponents(require('./components/form/radio')({ theme: sailTheme }))
      addComponents(require('./components/form/select')({ theme: sailTheme }))
      addComponents(require('./components/form/textarea')({ theme: sailTheme }))

      let forms = require('@tailwindcss/forms')()
      forms.handler({ addBase, theme })
    }

  };
});