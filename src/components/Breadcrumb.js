import React from 'react'
import { images } from '../images'

const Breadcrumb = ({ categories = [] }) => (
  <div className="flex flex-wrap items-center mb-3 lg:mb-5">
    {categories.map((category, index) => [
      <p key={index} className="font-thin text-sm lg:text-base">
        {category}
      </p>,
      <img
        key={'img' + index}
        src={images.rightChevron}
        alt="arrow-icon"
        className="h-3 mx-2 last:hidden"
      />
    ])}
  </div>
)

export default Breadcrumb
