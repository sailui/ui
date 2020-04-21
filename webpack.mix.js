let mix = require('laravel-mix')

mix.postCss('src/css/ui.css', 'dist/css/', [
  require('postcss-import'),
  require('tailwindcss')('./tailwind.config.js'),
  require('postcss-nested')
])

