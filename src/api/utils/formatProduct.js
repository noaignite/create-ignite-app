function isRelationOfTypeVariant(product) {
  return product.relation === 'variant'
}

function sortByUri(product1, product2) {
  return product1.uri.localeCompare(product2.uri)
}

export default function formatProduct(product) {
  const { relatedProducts: relatedProductsProp, ...productProp } = product

  const newProduct = {
    ...productProp,
    href: `/products/${productProp.uri}`,
  }

  if (relatedProductsProp) {
    // Recursively format nested product instances.
    newProduct.relatedProducts = relatedProductsProp.map(formatProduct)

    // Add the product itself to it's variant array and sort to achieve same
    // order across all variants.
    newProduct.relatedVariantProducts = [
      productProp,
      ...newProduct.relatedProducts.filter(isRelationOfTypeVariant),
    ].sort(sortByUri)
  }

  return newProduct
}
