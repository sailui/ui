let mix = require('laravel-mix')

let plugins = [
  require('postcss-import'),
  require('tailwindcss')(),
  require('postcss-nested')
]

mix.postCss('src/base.css', 'dist/', plugins)
  .postCss('src/components.css', 'dist/', plugins)
  .postCss('src/bundled.css', 'dist/', plugins)

