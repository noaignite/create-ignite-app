export default function getProductUrl(product) {
  if (!product) {
    return ''
  }

  return `/products/${product.uri}`
}
