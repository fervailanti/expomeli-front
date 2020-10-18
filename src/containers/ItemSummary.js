import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getItemById } from '../rest/mercadolibre'
import ItemDetails from '../components/ItemDetails'
import qs from 'query-string'

const ItemSummary = ({ location }) => {
  const history = useHistory()
  const { id } = useParams()
  const [isLoading, toggleLoader] = useState(true)
  const [item, setItem] = useState({})

  const goBack = () => {
    const { prevSearch } = location.state
    const urlParams = qs.stringify({ search: prevSearch })
    history.push({ pathname: '/items', search: urlParams })
  }

  useEffect(() => {
    toggleLoader(true)
    getItemById(id)
      .then(({ data }) => {
        setItem(data.item)
      })
      .catch((error) => {
        console.log(error)
        setItem({})
      })
      .finally(() => toggleLoader(false))
  }, [id])

  return (
    <section className="layout">
      <ItemDetails item={item} isLoading={isLoading} onBack={goBack} />
    </section>
  )
}

export default ItemSummary
