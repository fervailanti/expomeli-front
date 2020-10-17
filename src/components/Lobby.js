import React from 'react'

// This is just a kind of readme in home route...

const emoji = (emoji) => (
  <span role="img" aria-label="emoji">
    {emoji}
  </span>
)

const L = ({ to, children }) => (
  <a href={to} target="_blank" className="text-blue-400" rel="noopener noreferrer">
    {children}
  </a>
)

const Lobby = () => {
  return (
    <section className="layout">
      <div className="lobby">
        <div className="mb-4">
          <h1>¡Hola! {emoji('👋')}</h1>
          <p>Ya puedes empezár a encontrar productos en el buscardor de acá arriba {emoji('👆')}</p>
          <p className="mb-4">Existen dos rutas más (aparte de la actual):</p>
          <ul className="mb-5">
            <li>
              <code>/items?search=</code> para motrar los resultados de la búsqueda.
            </li>
            <li>
              <code>items/:id</code> para mostrar el detalle de un producto puntual seleccionado.
            </li>
          </ul>
          <p className="font-thin">
            <b>Nota</b>: Al ser un proyecto con finalidad de test, <i>no permite la compra</i>, y
            solo mostrarán 4 productos por búsqueda. Además, no se montrarán todos los detalles
            disponibles de los productos, solo los más destacados de estos.
          </p>
        </div>
        <div>
          <h2>Stack</h2>
          <p className="mb-4">
            <b>_Frontend</b>: está construido esencialmente con{' '}
            <L to="https://es.reactjs.org/">React</L> (Hooks),{' '}
            <L to="https://reactrouter.com/">React Router</L>,{' '}
            <L to="https://tailwindcss.com/">TailwindCSS</L>,{' '}
            <L to="https://github.com/axios/axios">Axios</L>,{' '}
            <L to="https://testing-library.com/docs/react-testing-library/intro">Testing Library</L>{' '}
            y un par más de paquetes detallados en el <code>package.json</code>.
          </p>
          <p>
            <b>_BFF (Backend For Frontend)</b>: está hecho con <L to="https://nodejs.org/">Node</L>{' '}
            y entorno a <L to="https://expressjs.com/">Express</L>. Se encarga principalmente de
            devolver la data preparada para su consumo en el Frontend. Tiene comunicación con las
            siguientes API's de MercadoLibre:
          </p>
          <ul className="mt-4 break-words">
            <li>
              <L to="https://api.mercadolibre.com/sites/MLA/search?q=​:query">
                https://api.mercadolibre.com/sites/MLA/search?q=​:query
              </L>
            </li>
            <li>
              <L to="https://api.mercadolibre.com/items/​:id">
                https://api.mercadolibre.com/items/​:id
              </L>
            </li>
            <li>
              <L to="https://api.mercadolibre.com/items/​:id​/description">
                https://api.mercadolibre.com/items/​:id​/description
              </L>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2>Autor</h2>
          <p>
            Desarrollado por <b>Fernando Vailanti</b> en Buenos Aires, Argentina.
          </p>
          <p>
            Puedes encontrarme en <L to="https://github.com/fervailanti">GitHub</L>,{' '}
            <L to="https://www.linkedin.com/in/fernando-vailanti-559b96164/">LinkedIn</L>,{' '}
            <L to="https://medium.com/@fernandovailanti">Medium</L> y{' '}
            <L to="mailto:fernandovailanti17@gmail.com">Gmail</L>.
          </p>
          <p>¡Saludos! {emoji('💪')}</p>
        </div>
      </div>
    </section>
  )
}

export default Lobby
