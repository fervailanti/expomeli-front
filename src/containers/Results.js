import React, { useEffect, useState } from 'react'
import ResultsList from '../components/ResultsList'
import { useHistory, Redirect } from 'react-router-dom'
import { getItemsByQuery } from '../rest/mercadolibre'
import qs from 'query-string'

const Results = ({ location }) => {
  const history = useHistory()
  const [isLoading, toggleLoader] = useState(true)
  const { search } = qs.parse(location.search)
  const [results, setResults] = useState([])

  const goToItemDetail = (id) => {
    history.push({ pathname: `/items/${id}`, state: { prevSearch: search } })
  }

  useEffect(() => {
    toggleLoader(true)
    getItemsByQuery(search)
      .then(({ data }) => setResults(data))
      .catch((error) => {
        console.log(error)
        setResults({ items: [], categories: [] })
      })
      .finally(() => toggleLoader(false))
  }, [search])

  const content = {
    redirect: () => <Redirect to="/" />,
    results: () => <ResultsList results={results} onItem={goToItemDetail} isLoading={isLoading} />
  }

  return <section className="layout">{!search ? content.redirect() : content.results()}</section>
}

export default Results
