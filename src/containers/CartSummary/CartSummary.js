import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useCheckoutSelection, useI18n } from 'api'
import { cartItemType } from 'utils'

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      ...theme.typography.body2,
      display: 'grid',
      gridGap: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius * 2,
      backgroundColor: theme.palette.background.default,
    },
    items: {},
    itemRow: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '140px 1fr 1fr',
    },
    itemCol: {
      '&:last-child': {
        textAlign: 'right',
      },
    },
    summary: {
      textAlign: 'right',
    },
  }),
  { name: 'Cart' },
)

function CartSummary(props) {
  const { className, items, totals } = props
  const classes = useStyles(props)

  const { t } = useI18n()

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.items}>
        {items?.map((item, idx) => (
          <div key={idx} className={classes.itemRow}>
            <span className={classes.itemCol}>{item.product?.name}</span>
            <span className={classes.itemCol}>x{item.quantity}</span>
            <span className={classes.itemCol}>{item.totalPrice}</span>
          </div>
        ))}
      </div>

      <div className={classes.summary}>
        <div>
          + {t(__translationGroup)`Shipping`}: {totals.shippingPrice}
        </div>
      </div>

      <div className={classes.summary}>
        <div>
          {t(__translationGroup)`Total`}: {totals.grandTotalPrice}
        </div>
      </div>
    </div>
  )
}

const totalsType = PropTypes.shape({
  grandTotalPrice: PropTypes.string.isRequired,
  shippingPrice: PropTypes.string.isRequired,
})

CartSummary.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(cartItemType).isRequired,
  totals: totalsType.isRequired,
}

function CartSummaryContainer(props) {
  const { items, totals } = useCheckoutSelection()

  return <CartSummary items={items} totals={totals} {...props} />
}

export default CartSummaryContainer
