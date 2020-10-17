export const formatCondition = (condition) => {
  const options = {
    new: 'Nuevo',
    used: 'Usado',
    default: 'Desconocido'
  }
  return options[condition] || options.default
}
