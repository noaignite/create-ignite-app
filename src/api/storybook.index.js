import { sleep } from 'utils'
import { cartItem } from './mock'

const actionWithPromise = (eventName) => async (...args) => {
  await sleep(300)
  return console.log(eventName, ...args) // eslint-disable-line no-console
}

export function useCartHandlers() {
  return {
    onItemAdd: actionWithPromise('onItemAdd'),
    onItemIncrease: actionWithPromise('onIncrease'),
    onItemDecrease: actionWithPromise('onDecrease'),
    onItemRemove: actionWithPromise('onRemove'),
  }
}

export function useCart() {
  const cartHandlers = useCartHandlers()

  return {
    totals: {
      grandTotalPrice: '124 EUR',
      itemsTotalPrice: '120 EUR',
      shippingPrice: '4 EUR',
      totalQuantity: 6,
    },
    items: new Array(3).fill(cartItem),
    ...cartHandlers,
  }
}
