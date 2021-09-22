import PropTypes from 'prop-types'
import productType from './productType'

const cartItemType = PropTypes.shape({
  item: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired,
  priceEach: PropTypes.string.isRequired,
  product: productType.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
})

export default cartItemType
