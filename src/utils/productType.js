import PropTypes from 'prop-types'

const mediaType = PropTypes.shape({
  full: PropTypes.arrayOf(PropTypes.string).isRequired,
  standard: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumb: PropTypes.arrayOf(PropTypes.string),
})

const sizeType = PropTypes.shape({
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
})

const swatchType = PropTypes.shape({
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
})

const productType = PropTypes.shape({
  excerpt: PropTypes.string,
  href: PropTypes.string,
  inStock: PropTypes.bool,
  items: PropTypes.arrayOf(sizeType).isRequired,
  media: mediaType.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceBeforeDiscount: PropTypes.string,
  swatches: PropTypes.arrayOf(swatchType).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  uri: PropTypes.string.isRequired,
})

export default productType
