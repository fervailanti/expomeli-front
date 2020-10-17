import React from 'react'
import { images } from '../images'

const Logo = ({ type = 'lite', size = 'medium', onClick }) => {
  const variants = {
    full: images.mercadolibreFull,
    lite: images.mercadolibreReduced
  }
  const gauges = {
    small: 'h-10',
    medium: 'h-12',
    large: 'h-16'
  }
  return (
    <img
      src={variants[type]}
      className={`${gauges[size]} cursor-pointer`}
      alt="mercadolibre_logo"
      onClick={onClick}
    />
  )
}

export default Logo
