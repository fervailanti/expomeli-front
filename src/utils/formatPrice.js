export const formatPrice = (price) => {
  const { currency, amount, decimals } = price
  const options = {
    ARS: '$',
    USD: 'U$S',
    PEN: 'S/',
    default: '$'
  }
  const formattedCurrency = options[currency] || options.default
  const fixedAmount = decimals ? `${amount},${decimals}` : amount
  return `${formattedCurrency} ${fixedAmount}`
}
