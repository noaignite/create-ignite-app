// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'
import { useI18n } from 'api'
import { Cart as CartIcon, Close as CloseIcon } from 'components/icons'
import { Button, IconButton, Toolbar, Typography } from 'components'
import RouterLink from '../../RouterLink'
import { useApp } from '../AppContext'
import AppDrawer from './AppDrawer'

const Cart = dynamic(() => import(/* webpackChunkName: "containers/Cart" */ 'containers/Cart'), {
  loading: () => <CircularProgress size={24} style={{ margin: '100px auto' }} />,
  ssr: false,
})

export const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {},
  toolbarLabel: {
    marginLeft: theme.spacing(1),
    transform: 'translateY(3px)', // Optically align to icon.
  },
  closeButton: {
    marginLeft: 'auto',
  },
  scrollContainer: {
    ...theme.mixins.scrollable,
    ...theme.mixins.scrollbars,
    display: 'inherit',
    flexDirection: 'inherit',
    flexGrow: 1,
    padding: 'var(--coa-toolbar-spacing)',
    paddingTop: 0,
  },
  cart: {
    flexGrow: 1,
  },
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
      <Toolbar className={classes.toolbar}>
        <CartIcon />
        <Typography className={classes.toolbarLabel} variant="body1">
          {t(__translationGroup)`Bag`}
        </Typography>

        <IconButton
          className={classes.closeButton}
          onClick={onCartMenuClose}
          edge="end"
          aria-label={t(__translationGroup)`Close cart menu`}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <div className={classes.scrollContainer}>
        {isVisible && <Cart className={classes.cart} />}
      </div>

      <div className={classes.footer}>
        <Button component={RouterLink} href="/checkout" variant="contained" fullWidth>
          {t(__translationGroup)`To checkout`}
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
