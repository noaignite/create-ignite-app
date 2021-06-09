import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { useCheckoutSelection } from 'api'
import CartItem from 'containers/CartItem'

export const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  items: {
    ...theme.mixins.verticalRhythm(1),
  },
  distribute: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  summary: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: 'auto',
  },
})

function Cart(props) {
  const { classes, className } = props

  const { items, totals } = useCheckoutSelection()

  return (
    <div className={classnames(classes.root, className)}>
      <div className={classes.items}>
        {items.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} />
        ))}
      </div>

      <div className={classes.summary}>
        <div className={classes.distribute}>
          <div>Subtotal:</div>
          <div>{totals.itemsTotalPrice}</div>
        </div>

        <div className={classes.distribute}>
          <div>Shipping:</div>
          <div>{totals.shippingPrice}</div>
        </div>

        <div className={classes.distribute}>
          <div>Total:</div>
          <div>{totals.grandTotalPrice}</div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(Cart)
