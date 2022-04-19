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

const productShape = {
  description: PropTypes.string,
  descriptionHtml: PropTypes.string,
  discountPercent: PropTypes.number,
  excerpt: PropTypes.string,
  excerptHtml: PropTypes.string,
  items: PropTypes.arrayOf(sizeType),
  media: mediaType,
  name: PropTypes.string,
  price: PropTypes.string,
  priceAsNumber: PropTypes.number,
  priceBeforeDiscount: PropTypes.string,
  priceBeforeDiscountAsNumber: PropTypes.number,
  sku: PropTypes.string,
  swatchColor: PropTypes.string,
  swatchImage: PropTypes.string,
  swatchName: PropTypes.string,
  uri: PropTypes.string,
  variantName: PropTypes.string,
}

const productType = PropTypes.shape(productShape)

// Creates recursive type checking of the properties.
productType.relatedProducts = PropTypes.arrayOf(productShape)
productType.relatedVariantProducts = PropTypes.arrayOf(productShape)

export default productType
