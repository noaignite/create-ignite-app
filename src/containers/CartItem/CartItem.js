import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { ButtonBase, Link } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { ASPECT_RATIOS, CENTRA_CART_ITEM_UNIQUE_KEY } from 'utils/constants'
import { useCheckoutHandlers, useI18n } from 'api'
import { cartItemType } from 'utils'
import { Add as AddIcon, Remove as RemoveIcon } from 'components/icons'
import RouterLink from '../RouterLink'

const classes = {
  row: 'CiaCartItem-Row',
}

const CartItemRoot = styled('article', {
  name: 'CartItem',
  slot: 'Root',
})(({ theme }) => ({
  ...theme.typography.body2,
  display: 'grid',
  gridTemplateColumns: '100px auto',
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.default,
  [`& .${classes.row}`]: {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplateColumns: '1fr auto',
    '& + &': {
      marginTop: theme.spacing(0.5),
    },
  },
}))

const CartItemContent = styled('div', {
  name: 'CartItem',
  slot: 'Content',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}))

const CartItemActionbar = styled('div', {
  name: 'CartItem',
  slot: 'Actionbar',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing('auto', 0, -1),
}))

const CartItemQuantity = styled('div', {
  name: 'CartItem',
  slot: 'Quantity',
})({
  display: 'flex',
  alignItems: 'center',
})

const CartItemQuantityButton = styled(ButtonBase, {
  name: 'CartItem',
  slot: 'QuantityButton',
})(({ theme }) => ({
  minWidth: 35,
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
  textAlign: 'center',
}))

function CartItem(props) {
  const { cartItem, disableActions } = props
  const { product } = cartItem

  const { decreaseItem, increaseItem, removeItem } = useCheckoutHandlers()
  const { t } = useI18n()

  const onItemDecrease = React.useCallback(
    (event) => {
      decreaseItem(event.currentTarget.value)
    },
    [decreaseItem],
  )

  const onItemIncrease = React.useCallback(
    (event) => {
      increaseItem(event.currentTarget.value)
    },
    [increaseItem],
  )

  const onItemRemove = React.useCallback(
    (event) => {
      removeItem(event.currentTarget.value)
    },
    [removeItem],
  )

  return (
    <CartItemRoot>
      <RouterLink href={`/product/${product.uri}`} aria-label={product.name}>
        <MediaReveal className={classes.figure} {...ASPECT_RATIOS.product}>
          <Media className={classes.image} src={product.media?.standard?.[0]} alt={product.name} />
        </MediaReveal>
      </RouterLink>

      <CartItemContent>
        <div className={classes.row}>
          <Link component={RouterLink} href={`/product/${product.uri}`}>
            {product.name}
          </Link>

          <span className={classes.price}>{cartItem.priceEach}</span>
        </div>

        <div className={classes.row}>
          <span>
            {t(__translationGroup)`Size`}: {cartItem.size}
          </span>
        </div>

        {!disableActions && (
          <CartItemActionbar>
            <span>{t(__translationGroup)`Quantity`}:</span>

            <CartItemQuantity>
              <CartItemQuantityButton
                onClick={onItemDecrease}
                value={cartItem[CENTRA_CART_ITEM_UNIQUE_KEY]}
                aria-label={t(__translationGroup)`Decrease quantity to ${cartItem.quantity - 1}`}
              >
                <RemoveIcon color="inherit" fontSize="small" />
              </CartItemQuantityButton>

              <span>{cartItem.quantity}</span>

              <CartItemQuantityButton
                onClick={onItemIncrease}
                value={cartItem[CENTRA_CART_ITEM_UNIQUE_KEY]}
                aria-label={t(__translationGroup)`Increase quantity to ${cartItem.quantity + 1}`}
              >
                <AddIcon color="inherit" fontSize="small" />
              </CartItemQuantityButton>
            </CartItemQuantity>

            <Link // eslint-disable-line jsx-a11y/anchor-is-valid
              sx={{ ml: 'auto' }}
              component={ButtonBase}
              onClick={onItemRemove}
              value={cartItem[CENTRA_CART_ITEM_UNIQUE_KEY]}
              color="primary"
            >
              {t(__translationGroup)`Remove`}
            </Link>
          </CartItemActionbar>
        )}
      </CartItemContent>
    </CartItemRoot>
  )
}

CartItem.propTypes = {
  cartItem: cartItemType.isRequired,
  disableActions: PropTypes.bool,
}

export default CartItem
