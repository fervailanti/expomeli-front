import React, { useEffect, useState } from 'react'
import qs from 'query-string'
import ResultsList from '../components/ResultsList'
import { useHistory, Redirect } from 'react-router-dom'
import { getItemsByQuery } from '../rest/mercadolibre'

const Results = ({ location }) => {
  const history = useHistory()
  const [isLoading, toggleLoader] = useState(true)
  const { search } = qs.parse(location.search)
  const [results, setResults] = useState([])

  const goToItemDetail = (id) => {
    history.push(`/items/${id}`)
  }

  useEffect(() => {
    toggleLoader(true)
    getItemsByQuery(search)
      .then(({ data }) => setResults(data.items))
      .catch((error) => {
        console.log(error)
        setResults([])
      })
      .finally(() => toggleLoader(false))
  }, [search])

  const content = {
    redirect: () => <Redirect to="/" />,
    results: () => <ResultsList results={results} onClick={goToItemDetail} isLoading={isLoading} />
  }

  return <section className="layout">{!search ? content.redirect() : content.results()}</section>
}

export default Results
