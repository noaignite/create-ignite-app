import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useCheckoutSelection, useI18n } from 'api'
import { cartItemType } from 'utils'
import CartItem from 'containers/CartItem'
import CartSummary from 'containers/CartSummary'
import { Typography } from 'components'

export const useStyles = makeStyles(
  (theme) => ({
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
    emptyLabel: {
      margin: 'auto',
      textAlign: 'center',
    },
  }),
  { name: 'Cart' },
)

function Cart(props) {
  const { CartItemProps, className, items } = props
  const classes = useStyles(props)

  const { t } = useI18n()

  if (!items?.length) {
    return (
      <Typography className={classes.emptyLabel} component="p" variant="subtitle1">
        {t(__translationGroup)`Empty cart`}
      </Typography>
    )
  }

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.items}>
        {items.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} {...CartItemProps} />
        ))}
      </div>

      <CartSummary className={classes.summary} />
    </div>
  )
}

Cart.propTypes = {
  CartItemProps: PropTypes.object,
  className: PropTypes.string,
  items: PropTypes.arrayOf(cartItemType).isRequired,
}

function CartContainer(props) {
  const { items } = useCheckoutSelection()

  return <Cart items={items} {...props} />
}

export default CartContainer
