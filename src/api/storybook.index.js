import actionWithPromise from 'api/utils/actionWithPromise'

export { default as GlobalContext } from './GlobalContext'
export * from './GlobalContext'

export { default as CheckoutContext } from './CheckoutContext'
export * from './CheckoutContext'

export const addNewsletterSubscriber = actionWithPromise('addNewsletterSubscriber')
