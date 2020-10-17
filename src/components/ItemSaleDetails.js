import React from 'react'

const ItemSaleDetails = ({ image, condition, soldQty, title, price }) => (
  <div className="sale">
    <img src={image} alt="product" className="product-img" />
    <div className="details">
      <div>
        <p className="hairline">{`${condition} | ${soldQty} vendidos`}</p>
        <p className="title">{title}</p>
        <p className="price">{price}</p>
      </div>
      <div className="flex flex-col items-center mb-8">
        <button className="btn mt-4">Comprar ahora</button>
        <button className="btn-ghost mt-4">Agregar al carrito</button>
      </div>
    </div>
  </div>
)

export default ItemSaleDetails
