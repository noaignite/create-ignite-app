import PropTypes from 'prop-types'

const productType = PropTypes.shape({
  media: PropTypes.shape({
    full: PropTypes.arrayOf(PropTypes.string),
    standard: PropTypes.arrayOf(PropTypes.string),
    thumb: PropTypes.arrayOf(PropTypes.string),
  }),
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceBeforeDiscount: PropTypes.string,
  stock: PropTypes.number,
  uri: PropTypes.string.isRequired,
})

export default productType
