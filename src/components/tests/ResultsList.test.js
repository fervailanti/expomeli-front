import React from 'react'
import ResultsList from '../ResultsList'
import { render } from '@testing-library/react'
import { autor } from '../../utils/constants'

const itemsMock = {
  autor,
  categories: ['Apple', 'iPhone'],
  items: Array(4)
    .fill()
    .map((_, i) => ({
      id: `TEST${i}`,
      title: `iPhone 11 Pro ${i}`,
      price: {
        currency: 'ARS',
        amount: 34140 + i,
        decimals: 20 + i
      },
      picture: 'https://picsum.photos/90',
      condition: 'new',
      free_shipping: true
    }))
}

it('ResultsList component should render correctly', () => {
  const tree = render(<ResultsList results={itemsMock} onItem={() => null} />)
  expect(tree.container).toMatchSnapshot()
})
