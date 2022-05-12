import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { ButtonBase, Link } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { cartItemType } from '~/api'
import { useCentraHandlers, useI18n } from '~/context'
import { ASPECT_RATIOS, CENTRA_CART_ITEM_UNIQUE_KEY } from '~/utils/constants'
import { AddIcon, RemoveIcon } from '~/components'
import RouterLink from '../RouterLink'

const CartItemRoot = styled('article')(({ theme }) => ({
  ...theme.typography.body2,
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
}))

const CartItemContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}))

const CartItemRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

const CartItemActionbar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing('auto', 0, -1),
}))

const CartItemQuantity = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const CartItemQuantityButton = styled(ButtonBase)(({ theme }) => ({
  minWidth: 35,
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
  textAlign: 'center',
}))

function CartItem(props) {
  const { cartItem, disableActions } = props
  const { product } = cartItem

  const { decreaseItem, increaseItem, removeItem } = useCentraHandlers()
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
        <MediaReveal {...ASPECT_RATIOS.product}>
          <Media src={product.media?.standard?.[0]} alt={product.name} />
        </MediaReveal>
      </RouterLink>

      <CartItemContent>
        <CartItemRow>
          <Link component={RouterLink} href={`/product/${product.uri}`}>
            {product.name}
          </Link>

          <span>{cartItem.priceEach}</span>
        </CartItemRow>

        <CartItemRow>
          <span>
            {t(__translationGroup)`Size`}: {cartItem.size}
          </span>
        </CartItemRow>

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
