import PropTypes from 'prop-types'
import categoryType from './categoryType'

const mediaType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.shape({
    full: PropTypes.arrayOf(PropTypes.string),
    standard: PropTypes.arrayOf(PropTypes.string),
    thumb: PropTypes.arrayOf(PropTypes.string),
  }),
])

const sizeType = PropTypes.shape({
  item: PropTypes.string,
  name: PropTypes.string,
  stock: PropTypes.string,
})

const swatchType = PropTypes.shape({
  color: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
})

const productShape = {
  categories: PropTypes.arrayOf(categoryType),
  category: PropTypes.string,
  categoryName: PropTypes.arrayOf(PropTypes.string),
  categoryUri: PropTypes.string,
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
  relation: PropTypes.string,
  showAsNew: PropTypes.bool,
  showAsOnSale: PropTypes.bool,
  uri: PropTypes.string,
  variant_swatch: swatchType,
  variantName: PropTypes.string,
}

const productType = PropTypes.shape(productShape)

// Creates recursive type checking of the properties.
productType.relatedProducts = PropTypes.arrayOf(productShape)
productType.relatedVariantProducts = PropTypes.arrayOf(productShape)

export default productType
