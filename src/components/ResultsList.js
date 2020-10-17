import React from 'react'
import ResultItem from './ResultItem'
import { formatPrice } from '../utils/formatPrice'
import { WithLoader } from './WithLoader'
import { formatCondition } from '../utils/formatCondition'

const ResultsList = ({ results, onClick }) => (
  <div className="results-list">
    {results.map((item, index) => {
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
)

export default WithLoader(ResultsList)
