import { sleep } from 'utils'
import { cartItem, countries, global as globalData } from './mock'

function actionWithPromise(eventName) {
  return async (...args) => {
    await sleep(300)
    return console.log(eventName, ...args) // eslint-disable-line no-console
  }
}

export function useGlobal() {
  return globalData
}

export function useCheckoutHandlers() {
  return {
    addItem: actionWithPromise('addItem'),
    addVoucher: actionWithPromise('addVoucher'),
    decreaseItem: actionWithPromise('decreaseItem'),
    increaseItem: actionWithPromise('increaseItem'),
    removeItem: actionWithPromise('removeItem'),
    removeVoucher: actionWithPromise('removeVoucher'),
    setCountry: actionWithPromise('setCountry'),
    setItemQuantity: actionWithPromise('setItemQuantity'),
    setPaymentMethod: actionWithPromise('setPaymentMethod'),
    setShipmentMethod: actionWithPromise('setShipmentMethod'),
    submitCheckout: actionWithPromise('submitCheckout'),
  }
}

export function useCheckout() {
  const handlers = useCheckoutHandlers()

  return {
    countries,
    items: new Array(3).fill(cartItem),
    totals: {
      grandTotalPrice: '124 EUR',
      itemsTotalPrice: '120 EUR',
      shippingPrice: '4 EUR',
      totalQuantity: 6,
    },
    ...handlers,
  }
}

export const addNewsletterSubscriber = actionWithPromise('addNewsletterSubscriber')
