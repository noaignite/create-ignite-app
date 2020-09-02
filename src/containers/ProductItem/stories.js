import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { product } from 'api/mock'
import ProductItem from './ProductItem'

const stories = storiesOf('Containers/ProductItem', module)

export const Default = () => <ProductItem product={product} />

stories.add('Default', Default)

export default ProductItem
