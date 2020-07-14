import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CartList from './CartList'

const stories = storiesOf('Containers/CartList', module)

export const Default = () => <CartList />

stories.add('Default', Default)

export default CartList
