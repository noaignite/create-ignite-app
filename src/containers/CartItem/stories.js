import * as React from 'react'
import { cartItems } from '~/api/__mock__'
import CartItem from './CartItem'

export default {
  title: 'Containers/CartItem',
  component: CartItem,
}

const Template = (args) => <CartItem {...args} />

export const Default = Template.bind({})
Default.args = {
  cartItem: cartItems[0],
}
