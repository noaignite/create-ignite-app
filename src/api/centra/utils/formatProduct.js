import getProductUrl from './getProductUrl'
import getProductVariants from './getProductVariants'

const defaultFormatters = {
  relatedVariantProducts: getProductVariants,
  href: getProductUrl,
}

export default function formatProduct(inProduct, inFormatters, filterProperties) {
  const formatters = {
    ...defaultFormatters,
    ...inFormatters,
  }

  // filter out properties using allowedProperties
  const product = filterProperties ? filterProduct(inProduct, filterProperties) : { ...inProduct }

  if (product.relatedProducts) {
    // Recursively format nested product objects.
    product.relatedProducts = product.relatedProducts.map((p) => formatProduct(p, inFormatters))
  }

  // go through all keys in options and run their transformer or set their value
  Object.entries(formatters).forEach(([optionKey, optionValue]) => {
    product[optionKey] = typeof optionValue === 'function' ? optionValue(product) : optionValue
  })

  return product
}

function filterProduct(product, filterEntries) {
  return filterEntries.reduce((acc, entry) => {
    if (typeof entry === 'string') {
      acc[entry] = product[entry]
    }

    if (typeof entry === 'object') {
      acc[entry.key] = entry.filter(product)
    }

    return acc
  }, {})
}
