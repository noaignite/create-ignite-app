import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { cartItemType } from '~/api'
import { useCentraSelection, useI18n } from '~/context'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'

const CartRoot = styled('div', {
  name: 'Cart',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
})

const CartItems = styled('div', {
  name: 'Cart',
  slot: 'Items',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  flexGrow: 1,
  marginBottom: theme.spacing(2),
}))

function Cart(props) {
  const { CartItemProps, items } = props

  const { t } = useI18n()

  if (!items?.length) {
    return (
      <Typography sx={{ m: 'auto', textAlign: 'center' }} component="p" variant="subtitle1">
        {t(__translationGroup)`Empty cart`}
      </Typography>
    )
  }

  return (
    <CartRoot>
      <CartItems>
        {items.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} {...CartItemProps} />
        ))}
      </CartItems>

      <CartSummary />
    </CartRoot>
  )
}

Cart.propTypes = {
  CartItemProps: PropTypes.object,
  items: PropTypes.arrayOf(cartItemType).isRequired,
}

function CartContainer(props) {
  const {
    selection: { items },
  } = useCentraSelection()

  return <Cart items={items} {...props} />
}

export default CartContainer
