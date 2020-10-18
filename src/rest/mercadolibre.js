import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

export const expomeli = axios.create({ baseURL: API_BASE_URL })

export const getItemsByQuery = async (query) => {
  try {
    const { data } = await expomeli.get(`${API_BASE_URL}/items?q=${query}`)
    return data
  } catch (error) {
    console.error(`Could not get items by "${query}"`, error)
    return error
  }
}

export const getItemById = async (id) => {
  try {
    const { data } = await expomeli.get(`${API_BASE_URL}/items/${id}`)
    return data
  } catch (error) {
    console.error(`Could not get item "${id}"`, error)
    return error
  }
}
