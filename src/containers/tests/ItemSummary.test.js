import React from 'react'
import * as api from '../../rest/mercadolibre'
import { render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { autor } from '../../utils/constants'
import ItemSummary from '../ItemSummary'

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

const locationMock = {
  state: {
    prevSearch: 'iphone'
  }
}

describe('ItemSummary container should work correctly', () => {
  it('Should request and show the data from the API with id param', async () => {
    const getItemById = jest.spyOn(api, 'getItemById').mockResolvedValue({ autor, item: itemMock })

    const { findByText } = render(
      <MemoryRouter initialEntries={['/items/TESTID1234']}>
        <Route path="/items/:id">
          <ItemSummary location={locationMock} />
        </Route>
      </MemoryRouter>
    )

    await findByText('iPhone 11 64 Gb')
    await findByText('$ 174.999,99')

    expect(getItemById).toHaveBeenCalledTimes(1)
    expect(getItemById).toHaveBeenCalledWith('TESTID1234')
  })
})
