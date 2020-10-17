export const formatPrice = (price) => {
  const { currency, amount, decimals } = price
  const options = {
    ARS: '$',
    USD: 'U$S',
    PEN: 'S/',
    default: '$'
  }
  const formattedCurrency = options[currency] || options.default
  const formattedAmount = Intl.NumberFormat('de-DE').format(amount)
  const fixedPrice = decimals ? `${formattedAmount},${decimals}` : formattedAmount
  return `${formattedCurrency} ${fixedPrice}`
}
