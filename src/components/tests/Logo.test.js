import React from 'react'
import Logo from '../Logo'
import { render } from '@testing-library/react'

it('Logo component should render correctly', () => {
  const tree = render(<Logo />)
  expect(tree.container).toMatchSnapshot()
})
