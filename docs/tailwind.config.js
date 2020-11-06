module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        // primary: '#ff6394'
      }
    },
  },
  variants: {},
  plugins: [
    require('../src/sailui'),
  ],
}
