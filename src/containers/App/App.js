import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from 'src/site.config'
import { menuLinkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import BrandIcon from 'components/icons/Brand'
import BurgerIcon from 'components/icons/Burger'
import CartIcon from 'components/icons/Cart'
import CrossIcon from 'components/icons/Cross'
import Container from 'components/Container'
import IconButton from 'components/IconButton'
import Toolbar from 'components/Toolbar'
import AppAppBar from './partials/AppAppBar'
import AppBackdrop from './partials/AppBackdrop'
import AppCartMenu from './partials/AppCartMenu'
import AppFooter from './partials/AppFooter'
import AppNavMenu from './partials/AppNavMenu'
import AppSkipLink from './partials/AppSkipLink'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  isLoading: {},
  isMounting: {},
  appBar: {},
  appBarToolbar: {
    justifyContent: 'space-between',
  },
  nav: {},
  navlist: {
    display: 'flex',
    margin: 0,
  },
  navlistItem: {
    marginLeft: theme.spacing(4),
    '&:first-child': {
      marginLeft: 0,
    },
  },
  navlistItemText: {},
  main: {
    outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
    flexGrow: 1,
  },
})

const App = props => {
  const {
    children,
    classes,
    isCartMenuOpen,
    isLoading,
    isMounted,
    isNavMenuOpen,
    menuFooter,
    menuPrimary,
    onAppBarBurgerClick,
    onAppBarCartClick,
  } = props

  const brandIconButton = (
    <IconButton
      component={RouterLink}
      color="inherit"
      edge="start"
      href="/"
      aria-label="Go to the homepage"
    >
      <BrandIcon style={{ width: 'auto' }} />
    </IconButton>
  )

  const cartIconButton = (
    <IconButton
      onClick={onAppBarCartClick}
      color="inherit"
      size="small"
      aria-haspopup="true"
      aria-expanded={isCartMenuOpen}
      aria-label="Toggle cart menu"
    >
      {isCartMenuOpen ? <CrossIcon /> : <CartIcon />}
    </IconButton>
  )

  const burgerIconButton = (
    <IconButton
      onClick={onAppBarBurgerClick}
      color="inherit"
      size="small"
      edge="end"
      aria-haspopup="true"
      aria-expanded={isNavMenuOpen}
      aria-label="Toggle main menu"
    >
      {isNavMenuOpen ? <CrossIcon /> : <BurgerIcon />}
    </IconButton>
  )

  const className = classnames(classes.root, {
    [classes.isLoading]: isLoading,
    [classes.isMounting]: !isMounted,
  })

  return (
    <div className={className}>
      <AppSkipLink href={`#${SITE_MAIN_ID}`}>Skip to content</AppSkipLink>

      <AppAppBar className={classes.appBar} id={SITE_HEADER_ID}>
        <Toolbar
          className={classes.appBarToolbar}
          component={Container}
          maxWidth={false}
          disableGutters
        >
          <div>{brandIconButton}</div>
          <div>
            {cartIconButton}
            {burgerIconButton}
          </div>
        </Toolbar>
      </AppAppBar>

      <AppNavMenu menu={menuPrimary} />

      <AppCartMenu />

      <main
        className={classnames(classes.main, SITE_HEADER_ID)}
        role="main"
        id={SITE_MAIN_ID}
        tabIndex="-1"
      >
        {children}
      </main>

      <AppFooter menu={menuFooter} id={SITE_FOOTER_ID} />

      <AppBackdrop />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  isCartMenuOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  isMounted: PropTypes.bool,
  isNavMenuOpen: PropTypes.bool,
  menuFooter: PropTypes.arrayOf(menuLinkType).isRequired,
  menuPrimary: PropTypes.arrayOf(menuLinkType).isRequired,
  onAppBarBurgerClick: PropTypes.func,
  onAppBarCartClick: PropTypes.func,
}

export default withStyles(styles)(App)
