import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

it('App should render correctly at Lobby ', () => {
  const app = render(<App />)
  expect(app.container).toMatchSnapshot()
  expect(screen.getByText('¡Hola!')).toBeTruthy()
})
