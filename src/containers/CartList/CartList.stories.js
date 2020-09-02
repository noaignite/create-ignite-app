import * as React from 'react'
import CartList from './CartList'

export default {
  title: 'Containers/CartList',
  component: CartList,
}

const Template = (args) => <CartList {...args} />

export const Default = Template.bind({})
Default.args = {}
