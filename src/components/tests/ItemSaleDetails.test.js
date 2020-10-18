import React from 'react'
import ItemSaleDetails from '../ItemSaleDetails'
import { render } from '@testing-library/react'

it('ItemSaleDetails component should render correctly', () => {
  const tree = render(
    <ItemSaleDetails
      image="https://picsum.photos/500"
      condition="Nuevo"
      soldQty={5}
      title="iPhone 11"
      price="$ 157.880,80"
    />
  )
  expect(tree.container).toMatchSnapshot()
})
