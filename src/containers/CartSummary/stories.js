import * as React from 'react'
import CartSummary from './CartSummary'

export default {
  title: 'Containers/CartSummary',
  component: CartSummary,
}

const Template = (args) => <CartSummary {...args} />

export const Default = Template.bind({})
Default.args = {}
