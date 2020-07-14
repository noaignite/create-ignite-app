import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { cartItem } from 'api/mock'
import CartItem from './CartItem'

const stories = storiesOf('Containers/CartItem', module)

export const Default = () => <CartItem cartItem={cartItem} />

stories.add('Default', Default)

export default CartItem
