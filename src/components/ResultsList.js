import React from 'react'
import ResultItem from './ResultItem'
import { formatPrice } from '../utils/formatPrice'
import { WithLoader } from './WithLoader'
import { formatCondition } from '../utils/formatCondition'
import Breadcrumb from './Breadcrumb'
import EmptyState from './EmptyState'

const ResultsList = ({ results, onItem }) => {
  const { categories, items } = results
  const content = {
    empty: () => <EmptyState />,
    list: () =>
      items.map((item, index) => {
        const action = () => onItem(item.id)
        return (
          <ResultItem
            key={index}
            image={item.picture}
            title={item.title}
            freeShipping={item.free_shipping}
            condition={formatCondition(item.condition)}
            price={formatPrice(item.price)}
            action={action}
          />
        )
      })
  }
  return (
    <>
      {categories.length > 0 && <Breadcrumb categories={categories} />}
      <div className="results-list">{items.length ? content.list() : content.empty()}</div>
    </>
  )
}

export default WithLoader(ResultsList)
