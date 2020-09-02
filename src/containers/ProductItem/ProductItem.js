import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Media from '@oakwood/oui/Media'
import MediaLoader from '@oakwood/oui/MediaLoader'
import { ASPECT_RATIOS } from 'src/site.config'
import { productType } from 'utils'
import RouterLink from 'containers/RouterLink'
import Link from 'components/Link'
import MediaLink from 'components/MediaLink'
import Typography from 'components/Typography'

export const styles = (theme) => ({
  root: {},
  mediaArea: {},
  contentArea: {
    padding: theme.spacing(1),
  },
  name: {},
  price: {},
  priceAfterDiscount: {},
  priceBeforeDiscount: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
    textDecoration: 'line-through',
  },
})

const ProductItem = React.forwardRef(function ProductItem(props, ref) {
  const { classes, className, product, ...other } = props

  const linkProps = {
    component: RouterLink,
    href: '/product/[...uri]',
    as: `/product/${product.uri}`,
  }

  let priceBeforeDiscount = null
  if (product.price !== product.priceBeforeDiscount) {
    priceBeforeDiscount = product.priceBeforeDiscount
  }

  return (
    <article className={classnames(classes.root, className)} ref={ref} {...other}>
      <MediaLink className={classes.mediaArea} {...linkProps}>
        <MediaLoader lazy {...ASPECT_RATIOS.product}>
          <Media component="img" src={product.media?.standard?.[0]} alt={product.name} />
        </MediaLoader>
      </MediaLink>

      <div className={classes.contentArea}>
        <Link className={classes.name} variant="body2" {...linkProps}>
          {product.name}
        </Link>

        <Typography className={classes.price} variant="body2">
          <span className={classes.priceAfterDiscount}>{product.price}</span>
          {priceBeforeDiscount && (
            <span className={classes.priceBeforeDiscount}>{priceBeforeDiscount}</span>
          )}
        </Typography>
      </div>
    </article>
  )
})

ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  product: productType.isRequired,
}

ProductItem.uiName = 'ProductItem'

export default withStyles(styles)(ProductItem)
