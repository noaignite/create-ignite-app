import { withProps } from 'recompose'
import { sleep } from 'utils'
import { menuPrimary, menuFooter } from './mock'

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
    cartItems: [],
    ...cartHandlers,
  }
}

export const withCmsContext = withProps({
  menuPrimary,
  menuFooter,
})
