import React from 'react'
import qs from 'query-string'
import Logo from '../components/Logo'
import InputSearch from '../components/InputSearch'
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
  const history = useHistory()

  const onSearch = (query) => {
    const urlParams = qs.stringify({ search: query })
    history.push({ pathname: '/items', search: urlParams })
  }

  const goHome = () => history.push({ pathname: '/items' })

  return (
    <header className="header">
      <span className="aligner">
        <Logo type="lite" size="small" onClick={goHome} />
        <InputSearch onSearch={onSearch} />
      </span>
    </header>
  )
}

export default SearchBox
