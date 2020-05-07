import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Media from '@oakwood/oui/Media'
import { useCartHandlers } from 'api'
import { cartItemType } from 'utils'
import RouterLink from 'containers/RouterLink'
import CrossIcon from 'components/icons/Cross'
import MinusIcon from 'components/icons/Minus'
import PlusIcon from 'components/icons/Plus'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import Link from 'components/Link'
import Typography from 'components/Typography'

export const styles = (theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  actionButtons: {
    marginTop: 'auto',
  },
  actionButton: {
    minWidth: 35,
    padding: theme.spacing(0.5),
    'span&:hover': {
      backgroundColor: 'transparent',
      cursor: 'auto',
    },
  },
  removeButton: {
    alignSelf: 'flex-start',
  },
})

const CartItem = React.forwardRef(function CartItem(props, ref) {
  const { cartItem, classes, className, ...other } = props

  const { onItemIncrease, onItemDecrease, onItemRemove } = useCartHandlers()
  const { product } = cartItem

  const handleIncrease = React.useCallback(
    (event) => {
      if (onItemIncrease) {
        onItemIncrease(event.currentTarget.value)
      }
    },
    [onItemIncrease],
  )

  const handleDecrease = React.useCallback(
    (event) => {
      if (onItemDecrease) {
        onItemDecrease(event.currentTarget.value)
      }
    },
    [onItemDecrease],
  )

  const handleRemove = React.useCallback(
    (event) => {
      if (onItemRemove) {
        onItemRemove(event.currentTarget.value)
      }
    },
    [onItemRemove],
  )

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <RouterLink href="/product/[...uri]" as={`/product/${product.uri}`}>
        <Media component="img" src={product.media?.thumb?.[0]} alt={product.name} />
      </RouterLink>

      <div className={classes.content}>
        <Link
          component={RouterLink}
          href="/product/[...uri]"
          as={`/product/${product.uri}`}
          variant="body2"
        >
          {product.name}
        </Link>

        <Typography color="textSecondary" variant="body2">
          {cartItem.priceEach}
        </Typography>

        <ButtonGroup className={classes.actionButtons}>
          <Button className={classes.actionButton} onClick={handleDecrease} value={cartItem.id}>
            <MinusIcon fontSize="small" />
          </Button>

          <Button
            className={classes.actionButton}
            component="span"
            tabIndex="-1"
            role={undefined}
            aria-disabled={undefined}
          >
            {cartItem.quantity}
          </Button>

          <Button className={classes.actionButton} onClick={handleIncrease} value={cartItem.id}>
            <PlusIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>

      <IconButton
        className={classes.removeButton}
        onClick={handleRemove}
        value={cartItem.id}
        size="small"
      >
        <CrossIcon fontSize="small" />
      </IconButton>
    </div>
  )
})

CartItem.propTypes = {
  cartItem: cartItemType,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

CartItem.uiName = 'CartItem'

export default withStyles(styles)(CartItem)
