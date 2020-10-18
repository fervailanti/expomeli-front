import React from 'react'
import Lobby from '../Lobby'
import { render } from '@testing-library/react'

it('Lobby component should render correctly', () => {
  const tree = render(<Lobby />)
  expect(tree.container).toMatchSnapshot()
})
