import React from 'react'
import { images } from '../images'

const EmptyState = () => (
  <div className="flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
    <img src={images.emptySearchIcon} className="h-20 md:mr-10" alt="empty-search" />
    <div>
      <p className="text-2xl mt-5 md:mt-0">¡Ups! No hay resultados para tu búsqueda.</p>
      <ul className="list-disc list-inside mt-3 md:mt-2 text-md font-thin">
        <li className="mb-2 md:mb-0">
          <b>Revisá la ortografía</b> de la palabra.
        </li>
        <li className="mb-2 md:mb-0">
          Utilizá <b>menos palabras</b> o <b>más genéricas</b>.
        </li>
        <li className="mb-2 md:mb-0">
          Revisá tu <b>conexión a internet</b>.
        </li>
      </ul>
    </div>
  </div>
)

export default EmptyState
