const img = (route) => require(`./gallery/${route}`)

export const images = {
  mercadolibreFull: img('mercadolibre_logo_full.png'),
  mercadolibreReduced: img('mercadolibre_logo_reduced.png'),
  searchIcon: img('search_icon.svg'),
  emptySearchIcon: img('empty_search_icon.svg'),
  rightArrow: img('right_arrow.svg'),
  returnArrow: img('return_arrow.svg')
}
