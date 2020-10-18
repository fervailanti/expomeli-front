import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const meli = axios.create({ baseURL: API_BASE_URL })

export const getItemsByQuery = (query) => meli.get(`/items?q=${query}`)

export const getItemById = (id) => meli.get(`/items/${id}`)
