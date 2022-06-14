import { sleep } from '@noaignite/utils'
import { products } from '~/api/__mock__'

export default async function fetchProduct(id) {
  await sleep(500)
  console.log('fetchProduct', id) // eslint-disable-line no-console

  return { product: products.find((product) => product.product === id) }
}
