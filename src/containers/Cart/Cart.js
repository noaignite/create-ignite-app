import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { useCheckoutSelection } from 'api'
import CartItem from 'containers/CartItem'
import CartSummary from 'containers/CartSummary'

export const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  items: {
    ...theme.mixins.verticalRhythm(2),
    flexGrow: 1,
  },
  summary: {
    marginTop: 'var(--coa-toolbar-spacing)',
  },
})

function Cart(props) {
  const { classes, className } = props

  const { items } = useCheckoutSelection()

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.items}>
        {items.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} />
        ))}
      </div>

      <CartSummary className={classes.summary} />
    </div>
  )
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(Cart)
