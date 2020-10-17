import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../rest/mercadolibre'
import ItemDetails from '../components/ItemDetails'

const ItemSummary = () => {
  const { id } = useParams()
  const [isLoading, toggleLoader] = useState(true)
  const [item, setItem] = useState({})

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
      <ItemDetails item={item} isLoading={isLoading} />
    </section>
  )
}

export default ItemSummary
