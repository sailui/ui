const tc = require('tinycolor2')

module.exports = ({theme}) => {
    var primaryColor = theme('colors.primary')
    var hoverColor = tc(primaryColor).clone()

    hoverColor.getBrightness() < 10 
    ? hoverColor.lighten(20) 
    : hoverColor.darken(10);

    hoverColor = hoverColor.toString()

    return {
        '.link': {
            transitionProperty: 'color',
            transitionDuration: '200ms',
            cursor: 'pointer',
            color: primaryColor,
            textDecoration: "underline",

            '&:hover': {
                color: hoverColor
            },
        },
    }
}