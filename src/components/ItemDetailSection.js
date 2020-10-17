import React from 'react'

const ItemDetailSection = ({ title, description }) => (
  <div className="detail-section">
    <p className="title">{title}</p>
    <p className="description">{description}</p>
  </div>
)

export default ItemDetailSection
