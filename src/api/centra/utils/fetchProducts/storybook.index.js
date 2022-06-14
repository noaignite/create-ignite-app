import { sleep } from '@noaignite/utils'
import { filter, products } from '~/api/__mock__'

export default async function fetchProducts(query) {
  await sleep(500)
  console.log('fetchProducts', query) // eslint-disable-line no-console

  const queryLength = Object.values(query).reduce((acc, group) => acc + group.length, 0) - 1
  let filteredProducts = products.slice(Math.min(queryLength, products.length), products.length)

  // For test purposes
  if (query.search === 'empty') {
    filteredProducts = []
  }

  return { filter, products: filteredProducts, productCount: filteredProducts.length }
}
