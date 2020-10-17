import React, { useState } from 'react'
import { images } from '../images'

const InputSearch = ({ onSearch }) => {
  const [query, setSearch] = useState('')

  const onInputChange = (e) => setSearch(e.target.value)

  const onSubmit = (e) => {
    onSearch(query)
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="search-box">
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={onInputChange}
        placeholder="Buscar productos, marcas y más..."
      />
      <button type="submit" className="search-btn">
        <img src={images.searchIcon} className="search-icon" alt="search_icon" />
      </button>
    </form>
  )
}

export default InputSearch
