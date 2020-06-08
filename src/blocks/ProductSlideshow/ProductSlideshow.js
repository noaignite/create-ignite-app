import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { productType } from 'utils'
import ProductItem from 'containers/ProductItem'
import Container from 'components/Container'
import Section from 'components/Section'
import Slideshow from 'components/Slideshow'
import SlideshowSlide from 'components/SlideshowSlide'
import Typography from 'components/Typography'

export const styles = (theme) => ({
  root: {
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
  },
  content: {
    ...theme.mixins.gutters(4),
  },
  slideshow: {
    overflow: 'visible',
  },
  slide: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: 480,
    },
  },
})

const ProductSlideshow = React.forwardRef(function ProductSlideshow(props, ref) {
  const { classes, className, heading, products, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} rhythm="regular" ref={ref} {...other}>
      {heading && (
        <Container className={classes.header} component="header" maxWidth="sm">
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </Container>
      )}

      <Container className={classes.content} maxWidth={false}>
        <Slideshow className={classes.slideshow} slidesPerView="auto">
          {products.map((product, idx) => (
            <SlideshowSlide key={idx} className={classes.slide}>
              <ProductItem product={product} />
            </SlideshowSlide>
          ))}
        </Slideshow>
      </Container>
    </Section>
  )
})

ProductSlideshow.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string,
  products: PropTypes.arrayOf(productType).isRequired,
}

ProductSlideshow.uiName = 'ProductSlideshow'

export default withStyles(styles)(ProductSlideshow)