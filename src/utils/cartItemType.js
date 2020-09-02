import PropTypes from 'prop-types'
import productType from './productType'

const cartItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  priceEach: PropTypes.string.isRequired,
  product: productType.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
})

export default cartItemType
