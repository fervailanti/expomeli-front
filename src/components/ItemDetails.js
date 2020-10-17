import React from 'react'
import ItemDetailSection from './ItemDetailSection'
import ItemSaleDetails from './ItemSaleDetails'
import { formatPrice } from '../utils/formatPrice'
import { formatCondition } from '../utils/formatCondition'
import { WithLoader } from './WithLoader'

const ItemDetails = ({ item }) => {
  const { picture, condition, sold_quantity, title, price, description } = item
  return (
    <div className="product">
      <ItemSaleDetails
        image={picture}
        condition={formatCondition(condition)}
        soldQty={sold_quantity}
        title={title}
        price={formatPrice(price)}
      />
      <ItemDetailSection title="Descripción del producto" description={description} />
    </div>
  )
}

export default WithLoader(ItemDetails)
