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
              <code>/items/:id</code> para mostrar el detalle de un producto puntual seleccionado.
            </li>
          </ul>
          <p className="font-thin">
            <b>Nota</b>: Al ser un proyecto con finalidad de test, <i>no permite la compra</i>, y
            solo se mostrarán 4 productos por búsqueda. Además, no se montrarán todos los detalles
            disponibles de los productos, solo los más destacados de estos.
          </p>
        </div>
        <div>
          <h2>Stack</h2>
          <p className="mb-4">
            <L to="https://github.com/fervailanti/expomeli-front">
              <b>_Frontend</b>
            </L>
            : está construido esencialmente con <L to="https://es.reactjs.org/">React</L> (Hooks),{' '}
            <L to="https://reactrouter.com/">React Router</L>,{' '}
            <L to="https://tailwindcss.com/">TailwindCSS</L>,{' '}
            <L to="https://github.com/axios/axios">Axios</L>,{' '}
            <L to="https://testing-library.com/docs/react-testing-library/intro">Testing Library</L>{' '}
            y un par más de paquetes detallados en el <code>package.json</code>.
          </p>
          <p>
            <L to="https://github.com/fervailanti/expomeli-api">
              <b>_API (Backend For Frontend)</b>
            </L>
            : está hecho principalmente en <L to="https://nodejs.org/">Node.js</L> y{' '}
            <L to="https://expressjs.com/">Express</L>, además de{' '}
            <L to="https://github.com/standard-things/esm#readme">ES Modules</L> y{' '}
            <L to="https://github.com/axios/axios">Axios</L>. Se encarga principalmente de manejar
            la información y prepararla para su consumo en el Frontend. Tiene comunicación con los
            siguientes endpoints de MercadoLibre:
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
            Desarrollado por <b>Fernando Vailanti</b> en Buenos Aires, Argentina {emoji('🇦🇷')}
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
