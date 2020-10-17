const img = (route) => require(`./gallery/${route}`)

export const images = {
  mercadolibreFull: img('mercadolibre_logo_full.png'),
  mercadolibreReduced: img('mercadolibre_logo_reduced.png'),
  searchIcon: img('search_icon.svg'),
  rightChevron: img('right_chevron.svg')
}
