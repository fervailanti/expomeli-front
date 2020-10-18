import React from 'react'
import Results from '../Results'
import * as api from '../../rest/mercadolibre'
import { render } from '@testing-library/react'
import { autor } from '../../utils/constants'

const itemsMock = Array(4)
  .fill()
  .map((_, i) => ({
    id: `TEST${i}`,
    title: `iPhone 11 Pro ${i}`,
    price: {
      currency: 'ARS',
      amount: 34140 + i,
      decimals: 20 + i
    },
    picture: 'https://picsum.photos/90',
    condition: 'new',
    free_shipping: true
  }))

describe('Results container should handle all variants', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should request and show the data from the API with query (search)', async () => {
    const getItemsByQuery = jest.spyOn(api, 'getItemsByQuery').mockResolvedValue({
      autor,
      categories: ['Apple', 'iPhone'],
      items: itemsMock
    })

    const { findByText } = render(<Results location={{ search: '?search=iphone' }} />)

    await findByText('iPhone 11 Pro 1')
    await findByText('$ 34.141,21')

    expect(getItemsByQuery).toHaveBeenCalledTimes(1)
    expect(getItemsByQuery).toHaveBeenCalledWith('iphone')
  })

  it('Should return EmptyState if there is no results', async () => {
    const getItemsByQuery = jest.spyOn(api, 'getItemsByQuery').mockResolvedValue({
      autor,
      categories: [],
      items: []
    })

    const { findByText } = render(<Results location={{ search: '?search=cdamofadt' }} />)

    await findByText('¡Ups! No hay resultados para tu búsqueda.')

    expect(getItemsByQuery).toHaveBeenCalledTimes(1)
    expect(getItemsByQuery).toHaveBeenCalledWith('cdamofadt')
  })
})
