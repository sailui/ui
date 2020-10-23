module.exports = {
  '.btn': {
    display: 'inline-block',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    transitionProperty: 'background-color, border-color, color, fill, stroke',
    transitionDuration: '200ms',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    backgroundColor: '#000',
    color: '#fff',

    '&:hover': {
      backgroundColor: '#2d3748'
    },
  },

  '.btn-outline': {
    borderWidth: '1px',
    borderColor: '#000',
    color: '#000',
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: '#2d3748',
      color: '#fff'
    }
  }
}