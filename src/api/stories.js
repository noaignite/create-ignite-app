import { withProps } from 'recompose'
import { menuPrimary, menuFooter } from './mock'

export const withCmsContext = () => {
  return withProps({
    menuPrimary,
    menuFooter,
  })
}

export const useCartContext = () => ({
  cartItems: [],
  onDecrease: console.log, // eslint-disable-line no-console
  onIncrease: console.log, // eslint-disable-line no-console
  onRemove: console.log, // eslint-disable-line no-console
})
