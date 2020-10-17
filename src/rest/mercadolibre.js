import axios from 'axios'

const meli = axios.create({ baseURL: 'https://expomeli.herokuapp.com/api' })

export const getItemsByQuery = (query) => meli.get(`/items?q=${query}`)

export const getItemById = (id) => meli.get(`/items/${id}`)
