import { withProps } from 'recompose'
import { menuPrimary, menuFooter } from './mock'

export const withCmsContext = withProps({
  menuPrimary,
  menuFooter,
})

export const useCart = () => ({
  cartItems: [],
  onDecrease: console.log, // eslint-disable-line no-console
  onIncrease: console.log, // eslint-disable-line no-console
  onRemove: console.log, // eslint-disable-line no-console
})
