import { sleep } from 'utils'
import { cartItem, countries, global as globalData } from './mock'

const actionWithPromise = (eventName) => async (...args) => {
  await sleep(300)
  return console.log(eventName, ...args) // eslint-disable-line no-console
}

export function useGlobal() {
  return globalData
}

export function useCheckoutHandlers() {
  return {
    onCountryChange: actionWithPromise('onCountryChange'),
    onItemAdd: actionWithPromise('onItemAdd'),
    onItemDecrease: actionWithPromise('onItemDecrease'),
    onItemIncrease: actionWithPromise('onItemIncrease'),
    onItemQuantityChange: actionWithPromise('onItemQuantityChange'),
    onItemRemove: actionWithPromise('onItemRemove'),
    onPaymentMethodChange: actionWithPromise('onPaymentMethodChange'),
    onShipmentMethodChange: actionWithPromise('onShipmentMethodChange'),
    onSubmit: actionWithPromise('onSubmit'),
    onVoucherAdd: actionWithPromise('onVoucherAdd'),
    onVoucherRemove: actionWithPromise('onVoucherRemove'),
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

export const onNewsletterSignUp = actionWithPromise('onNewsletterSignUp')
