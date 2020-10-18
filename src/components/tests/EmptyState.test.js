import React from 'react'
import EmptyState from '../EmptyState'
import { render } from '@testing-library/react'

it('EmptyState component should render correctly', () => {
  const tree = render(<EmptyState />)
  expect(tree.container).toMatchSnapshot()
})
