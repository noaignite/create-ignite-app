import { cartItems } from '~/api/__mock__'
import CartItem from './CartItem'

export default {
  component: CartItem,
}

export const Default = {
  args: {
    cartItem: cartItems[0],
  },
}
