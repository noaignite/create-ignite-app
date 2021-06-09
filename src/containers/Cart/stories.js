import * as React from 'react'
import Cart from './Cart'

export default {
  title: 'Containers/Cart',
  component: Cart,
}

const Template = (args) => <Cart {...args} />

export const Default = Template.bind({})
Default.args = {}
