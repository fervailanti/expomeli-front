import React from 'react'
import Breadcrumb from '../Breadcrumb'
import { render } from '@testing-library/react'

it('Breadcrumb component should render correctly', () => {
  const tree = render(<Breadcrumb categories={['Apple', 'iPhone']} />)
  expect(tree.container).toMatchSnapshot()
})
