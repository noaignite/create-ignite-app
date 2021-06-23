import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { useCheckoutSelection, useI18n } from 'api'
import { productType } from 'utils'

export const styles = (theme) => ({
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
})

function CartSummary(props) {
  const { classes, className, items: itemsProp, totals: totalsProp } = props

  const { t } = useI18n()
  const selection = useCheckoutSelection()

  const items = itemsProp || selection?.items
  const totals = totalsProp || selection?.totals

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

const itemType = PropTypes.shape({
  product: productType.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
})

const totalsType = PropTypes.shape({
  grandTotalPrice: PropTypes.string.isRequired,
  shippingPrice: PropTypes.string.isRequired,
})

CartSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(itemType),
  totals: totalsType,
}

export default withStyles(styles)(CartSummary)
