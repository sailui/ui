let mix = require('laravel-mix')

let plugins = [
  require('postcss-import'),
  require('tailwindcss')(),
  require('postcss-nested')
]

mix.postCss('src/base.css', '', plugins)
  .postCss('src/components.css', '', plugins)
  .postCss('src/bundled.css', '', plugins)

