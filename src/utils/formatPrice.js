import { CURRENCIES } from './constants'

export const formatPrice = (price) => {
  const { currency, amount, decimals } = price
  const formattedCurrency = CURRENCIES[currency] || CURRENCIES.default
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const fixedPrice = decimals ? `${formattedAmount},${decimals}` : formattedAmount
  return `${formattedCurrency} ${fixedPrice}`
}
