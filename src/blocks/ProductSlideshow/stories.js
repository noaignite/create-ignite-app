import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { product } from 'api/mock'
import ProductSlideshow from './ProductSlideshow'

const stories = storiesOf('Blocks/ProductSlideshow', module)

const products = new Array(6).fill(product)

export const Default = () => <ProductSlideshow heading="Generic Heading" products={products} />

stories.add('Default', Default)

export default ProductSlideshow
