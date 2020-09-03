import * as React from 'react'
import { product } from 'api/mock'
import ProductItem from './ProductItem'

export default {
  title: 'Containers/ProductItem',
  component: ProductItem,
}

const Template = (args) => <ProductItem {...args} />

export const Default = Template.bind({})
Default.args = {
  product,
}
