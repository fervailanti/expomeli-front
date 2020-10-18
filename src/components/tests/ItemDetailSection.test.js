import React from 'react'
import ItemDetailSection from '../ItemDetailSection'
import { render } from '@testing-library/react'

it('ItemDetailSection component should render correctly', () => {
  const tree = render(
    <ItemDetailSection
      title="Descripción del producto"
      description="lorem ipsum lorem ipsum lorem ipsum lorem"
    />
  )
  expect(tree.container).toMatchSnapshot()
})
