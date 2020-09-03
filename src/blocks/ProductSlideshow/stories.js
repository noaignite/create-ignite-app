import * as React from 'react'
import { blocks } from 'api/mock'
import ProductSlideshow from './ProductSlideshow'

export default {
  title: 'Blocks/ProductSlideshow',
  component: ProductSlideshow,
}

const Template = (args) => <ProductSlideshow {...args} />

export const Default = Template.bind({})
Default.args = blocks.ProductSlideshow
