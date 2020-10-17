import React from 'react'

const ResultItem = ({ image, title, price, action, freeShipping, condition }) => (
  <div className="item">
    <img src={image} className="img" alt="product" onClick={action} />
    <div className="main">
      <p className="condition">{condition}</p>
      <p className="title" onClick={action}>
        {title}
      </p>
      <p className="price">{price}</p>
      {freeShipping && <p className="tag">Envío gratis</p>}
    </div>
  </div>
)

export default ResultItem
