import { formatCondition } from '../formatCondition'

describe('Should translate product state', () => {
  it.each([
    ['new', 'Nuevo'],
    ['used', 'Usado'],
    ['asdf', 'Desconocido'],
    ['unknow', 'Desconocido']
  ])('Return correct value', (input, output) => {
    expect(formatCondition(input)).toBe(output)
  })
})
