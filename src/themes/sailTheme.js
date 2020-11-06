module.exports = ({theme}) => {
  return (key) => {
    let value = theme(key)

    if(key === 'colors.primary' && typeof value === 'undefined'){
      return '#000'
    }

    return value;
  }
}