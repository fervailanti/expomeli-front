import React from 'react'
import ResultItem from './ResultItem'
import { formatPrice } from '../utils/formatPrice'
import { WithLoader } from './WithLoader'
import { formatCondition } from '../utils/formatCondition'
import Breadcrumb from './Breadcrumb'

const ResultsList = ({ results, onClick }) => {
  const { categories, items } = results
  return (
    <>
      <Breadcrumb categories={categories} />
      <div className="results-list">
        {items.map((item, index) => {
          const { id, picture, title, price, free_shipping, condition } = item
          const action = () => onClick(id)
          return (
            <ResultItem
              key={index}
              image={picture}
              title={title}
              freeShipping={free_shipping}
              condition={formatCondition(condition)}
              price={formatPrice(price)}
              action={action}
            />
          )
        })}
      </div>
    </>
  )
}

export default WithLoader(ResultsList)
