import { CURRENCIES, PRICE_FORMAT } from './constants'

export const formatPrice = (price) => {
  const { currency, amount, decimals } = price
  const formattedCurrency = CURRENCIES[currency] || CURRENCIES.default
  const formattedAmount = Intl.NumberFormat(PRICE_FORMAT).format(amount)
  const fixedPrice = decimals ? `${formattedAmount},${decimals}` : formattedAmount
  return `${formattedCurrency} ${fixedPrice}`
}
