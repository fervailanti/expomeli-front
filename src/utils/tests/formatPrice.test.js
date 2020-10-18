import { formatPrice } from '../formatPrice'

describe('Should format API response "price" object correctly', () => {
  it('Should return a string', () => {
    const price = formatPrice({ amount: 234, decimals: 2, currency: 'ARS' })
    expect(typeof price).toBe('string')
  })

  it.each([
    [{ amount: 234, decimals: 2, currency: 'ARS' }, '$ 234,2'],
    [{ amount: 1976, decimals: 34, currency: 'ARS' }, '$ 1.976,34'],
    [{ amount: 45028, decimals: 9, currency: 'PEN' }, 'S/ 45.028,9'],
    [{ amount: 864814, decimals: 0, currency: 'USD' }, 'U$S 864.814'],
    [{ amount: 0, decimals: 2375, currency: 'USD' }, 'U$S 0,2375']
  ])('Should parse the object and return correct value', (input, output) => {
    expect(formatPrice(input)).toBe(output)
  })
})
