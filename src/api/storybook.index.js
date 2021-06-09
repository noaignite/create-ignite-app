import actionWithPromise from 'api/utils/actionWithPromise'

export { default as CheckoutContext } from './CheckoutContext'
export * from './CheckoutContext'

export { default as GlobalContext } from './GlobalContext'
export * from './GlobalContext'

export { default as I18nContext } from './I18nContext'
export * from './I18nContext'

export const addNewsletterSubscriber = actionWithPromise('addNewsletterSubscriber')
