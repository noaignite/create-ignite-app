export default function getProductVariants(inProduct) {
  if (!inProduct) {
    return []
  }

  const { relatedProducts, ...product } = inProduct

  return [product, ...(relatedProducts?.filter(isVariant) || [])].sort(sortByUri)
}

function isVariant(product) {
  return product.relation === 'variant'
}

function sortByUri(product1, product2) {
  if (!product1.uri || !product2.uri) {
    return 0
  }

  return product1.uri.localeCompare(product2.uri, 'en')
}
