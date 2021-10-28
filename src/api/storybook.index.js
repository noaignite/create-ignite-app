import { filter, order, products } from './mock'
import sleep from './utils/sleep'

export { default as CheckoutContext } from './CheckoutContext'
export * from './CheckoutContext'

export { default as I18nContext } from './I18nContext'
export * from './I18nContext'

export { default as SettingsContext } from './SettingsContext'
export * from './SettingsContext'

export async function fetchProducts(query) {
  await sleep(500)
  console.log('fetchProducts', query) // eslint-disable-line no-console

  return { filter, products, productCount: products.length }
}

export function useReceipt() {
  return order
}
