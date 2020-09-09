import * as React from 'react'
import { cartItem } from 'api/mock'
import CartItem from './CartItem'

export default {
  title: 'Containers/CartItem',
  component: CartItem,
}

const Template = (args) => <CartItem {...args} />

export const Default = Template.bind({})
Default.args = {
  cartItem,
}
