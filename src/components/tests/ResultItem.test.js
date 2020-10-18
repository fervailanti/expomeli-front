import React from 'react'
import ResultItem from '../ResultItem'
import { render } from '@testing-library/react'

it('ResultItem component should render correctly', () => {
  const tree = render(
    <ResultItem
      image="https://picsum.photos/500"
      title="iPhone 11"
      price="$ 179.499,99"
      action={() => null}
      condition="Nuevo"
      freeShipping
    />
  )
  expect(tree.container).toMatchSnapshot()
})
