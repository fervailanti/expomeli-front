import React from 'react'
import InputSearch from '../InputSearch'
import { render } from '@testing-library/react'

it('InputSearch component should render correctly', () => {
  const tree = render(<InputSearch onSearch={(e) => e} />)
  expect(tree.container).toMatchSnapshot()
})
