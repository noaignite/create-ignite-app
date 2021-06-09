// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useI18n } from 'api'
import RouterLink from 'containers/RouterLink'
import CloseIcon from 'components/icons/Close'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import Toolbar from 'components/Toolbar'
import Typography from 'components/Typography'
import { useApp } from '../AppContext'
import AppDrawer from './AppDrawer'

const Cart = dynamic(() => import(/* webpackChunkName: "containers/Cart" */ 'containers/Cart'), {
  loading: () => <CircularProgress size={24} style={{ margin: '100px auto' }} />,
  ssr: false,
})

export const useStyles = makeStyles((theme) => ({
  root: {},
  menuToolbar: {},
  menuButton: {
    marginLeft: 'auto',
  },
  menuLabel: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  scrollContainer: {
    ...theme.mixins.scrollable,
    ...theme.mixins.scrollbars,
    flexGrow: 1,
  },
  cart: {},
  footer: {},
}))

const AppCartDrawer = React.memo(function AppCartDrawer(props) {
  const { isCartMenuOpen, onCartMenuClose, ...other } = props
  const classes = useStyles(props)

  const { t } = useI18n()

  const [isVisible, setIsVisible] = React.useState(isCartMenuOpen) // Used to dynamically load the Cart.

  const handleExited = React.useCallback(() => {
    setIsVisible(false)
  }, [])

  React.useEffect(() => {
    if (isCartMenuOpen) {
      setIsVisible(true)
    }
  }, [isCartMenuOpen])

  return (
    <AppDrawer
      classes={{ root: classes.root }}
      SlideProps={{ onExited: handleExited }}
      onClose={onCartMenuClose}
      open={isCartMenuOpen}
      anchor="right"
      {...other}
    >
      <Toolbar className={classes.menuToolbar}>
        <IconButton
          className={classes.menuButton}
          onClick={onCartMenuClose}
          edge="end"
          aria-label={t('containers/App/AppCartDrawer/aria-closeButton', 'Close cart menu')}
        >
          <CloseIcon />
        </IconButton>

        <Typography className={classes.menuLabel} component="h1" variant="h4">
          {t('containers/App/AppCartDrawer/heading', 'Checkout')}
        </Typography>
      </Toolbar>

      <div className={classes.scrollContainer}>
        {isVisible && <Cart className={classes.cart} />}
      </div>

      <div className={classes.footer}>
        <Button component={RouterLink} href="/checkout" variant="contained" fullWidth>
          {t('containers/App/AppCartDrawer/checkoutLink', 'To checkout')}
        </Button>
      </div>
    </AppDrawer>
  )
})

AppCartDrawer.propTypes = {
  isCartMenuOpen: PropTypes.bool,
  onCartMenuClose: PropTypes.func,
}

function AppCartDrawerContainer(props) {
  const { isCartMenuOpen, onCartMenuClose } = useApp()

  return (
    <AppCartDrawer isCartMenuOpen={isCartMenuOpen} onCartMenuClose={onCartMenuClose} {...props} />
  )
}

export default AppCartDrawerContainer
