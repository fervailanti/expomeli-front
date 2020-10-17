import React from 'react'
import '../styles/spinner.css'

const Spinner = (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
)

export const WithLoader = (Component) => ({ isLoading, ...props }) => {
  return isLoading ? Spinner : <Component {...props} />
}
