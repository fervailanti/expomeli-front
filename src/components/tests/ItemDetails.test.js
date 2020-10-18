import React from 'react'
import ItemDetails from '../ItemDetails'
import { render } from '@testing-library/react'

const itemMock = {
  id: 'TESTID1234',
  title: 'iPhone 11 64 Gb',
  price: {
    currency: 'ARS',
    amount: 174999,
    decimals: 99
  },
  picture: 'https://picsum.photos/500',
  condition: 'new',
  free_shipping: true,
  sold_quantity: 13,
  description: 'lorem ipsum'
}

it('ItemDetails component should render correctly', () => {
  const tree = render(<ItemDetails item={itemMock} onBack={() => null} />)
  expect(tree.container).toMatchSnapshot()
})
