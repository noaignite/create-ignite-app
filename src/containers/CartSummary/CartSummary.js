import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { useCheckoutSelection, useI18n } from 'api'
import { cartItemType } from 'utils'

const CartSummaryRoot = styled('div', {
  name: 'CartSummary',
  slot: 'Root',
})(({ theme }) => ({
  ...theme.typography.body2,
  display: 'grid',
  gridGap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.default,
}))

const CartSummaryRow = styled('div', {
  name: 'CartSummary',
  slot: 'Row',
})(({ theme }) => ({
  display: 'grid',
  gridGap: theme.spacing(2),
  gridTemplateColumns: '140px 1fr 1fr',
}))

const CartSummaryCol = styled('div', {
  name: 'CartSummary',
  slot: 'Col',
})({
  '&:last-child': {
    textAlign: 'right',
  },
})

function CartSummary(props) {
  const { items, totals } = props

  const { t } = useI18n()

  return (
    <CartSummaryRoot>
      <div>
        {items?.map((item, idx) => (
          <CartSummaryRow key={idx}>
            <CartSummaryCol>{item.product?.name}</CartSummaryCol>
            <CartSummaryCol>x{item.quantity}</CartSummaryCol>
            <CartSummaryCol>{item.totalPrice}</CartSummaryCol>
          </CartSummaryRow>
        ))}
      </div>

      <Typography align="right" variant="inherit">
        + {t(__translationGroup)`Shipping`}: {totals.shippingPrice}
      </Typography>

      <Typography align="right" variant="inherit">
        {t(__translationGroup)`Total`}: {totals.grandTotalPrice}
      </Typography>
    </CartSummaryRoot>
  )
}

const totalsType = PropTypes.shape({
  grandTotalPrice: PropTypes.string.isRequired,
  shippingPrice: PropTypes.string.isRequired,
})

CartSummary.propTypes = {
  items: PropTypes.arrayOf(cartItemType).isRequired,
  totals: totalsType.isRequired,
}

function CartSummaryContainer(props) {
  const { items, totals } = useCheckoutSelection()

  return <CartSummary items={items} totals={totals} {...props} />
}

export default CartSummaryContainer
