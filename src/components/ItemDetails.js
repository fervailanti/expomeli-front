import React from 'react'
import ItemDetailSection from './ItemDetailSection'
import ItemSaleDetails from './ItemSaleDetails'
import { formatPrice } from '../utils/formatPrice'
import { formatCondition } from '../utils/formatCondition'
import { WithLoader } from './WithLoader'
import { images } from '../images'

const ItemDetails = ({ item, onBack }) => {
  const { picture, condition, sold_quantity, title, price, description } = item

  const backButton = (
    <button onClick={onBack} className="flex items-center font-thin mb-3 lg:mb-5 hover:text-blue">
      <img src={images.returnArrow} className="h-4 mr-2" alt="go-back-arrow" />
      Volver al listado
    </button>
  )

  return (
    <>
      {onBack && backButton}
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
    </>
  )
}

export default WithLoader(ItemDetails)
