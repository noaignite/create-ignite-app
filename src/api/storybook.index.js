import { sleep } from '@noaignite/utils'
import { filter, products } from './__mock__'

export * from './CheckoutContext'
export * from './I18nContext'
export * from './SettingsContext'

export async function fetchProducts(query) {
  await sleep(500)
  console.log('fetchProducts', query) // eslint-disable-line no-console

  return { filter, products, productCount: products.length }
}
