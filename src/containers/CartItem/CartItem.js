import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Media from '@oakwood/oui/Media'
import MediaReveal from '@oakwood/oui/MediaReveal'
import { ASPECT_RATIOS, CENTRA_CART_ITEM_UNIQUE_KEY } from 'utils/constants'
import { useCheckoutHandlers, useI18n } from 'api'
import { cartItemType } from 'utils'
import RouterLink from 'containers/RouterLink'
import AddIcon from 'components/icons/Add'
import RemoveIcon from 'components/icons/Remove'
import Link from 'components/Link'

export const styles = (theme) => ({
  root: {
    ...theme.typography.body2,
    display: 'grid',
    gridTemplateColumns: '100px auto',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.default,
  },
  figure: {},
  image: {
    borderRadius: theme.shape.borderRadius,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  row: {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplateColumns: '1fr auto',
    '& + &': {
      marginTop: theme.spacing(0.5),
    },
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
  },
  quantityButton: {
    minWidth: 35,
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  quantityLabel: {},
  price: {},
  actionbar: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing('auto', 0, -1),
  },
  removeButton: {
    marginLeft: 'auto',
  },
})

function CartItem(props) {
  const { cartItem, classes, className } = props
  const { product } = cartItem

  const { onItemDecrease, onItemIncrease, onItemRemove } = useCheckoutHandlers()
  const { t } = useI18n()

  return (
    <article className={clsx(classes.root, className)}>
      <RouterLink href={`/product/${product.uri}`} aria-label={product.name}>
        <MediaReveal className={classes.figure} {...ASPECT_RATIOS.product}>
          <Media
            className={classes.image}
            src={product.media?.standard?.[0]}
            alt={product.name}
            {...ASPECT_RATIOS.product}
          />
        </MediaReveal>
      </RouterLink>

      <div className={classes.content}>
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

        <div className={classes.actionbar}>
          <span>{t(__translationGroup)`Quantity`}:</span>

          <div className={classes.quantity}>
            <ButtonBase
              className={classes.quantityButton}
              onClick={onItemDecrease}
              value={cartItem[CENTRA_CART_ITEM_UNIQUE_KEY]}
              aria-label={t(__translationGroup)`Decrease quantity to ${cartItem.quantity - 1}`}
            >
              <RemoveIcon color="inherit" fontSize="small" />
            </ButtonBase>

            <span className={classes.quantityLabel}>{cartItem.quantity}</span>

            <ButtonBase
              className={classes.quantityButton}
              onClick={onItemIncrease}
              value={cartItem[CENTRA_CART_ITEM_UNIQUE_KEY]}
              aria-label={t(__translationGroup)`Increase quantity to ${cartItem.quantity + 1}`}
            >
              <AddIcon color="inherit" fontSize="small" />
            </ButtonBase>
          </div>

          <Link // eslint-disable-line jsx-a11y/anchor-is-valid
            className={classes.removeButton}
            component={ButtonBase}
            onClick={onItemRemove}
            value={cartItem[CENTRA_CART_ITEM_UNIQUE_KEY]}
            color="primary"
          >
            {t(__translationGroup)`Remove`}
          </Link>
        </div>
      </div>
    </article>
  )
}

CartItem.propTypes = {
  cartItem: cartItemType.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(CartItem)
