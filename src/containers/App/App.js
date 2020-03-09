import * as React from 'react'
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
import { useAppContext } from './AppContext'

export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  isPreloading: {},
  isLoading: {},
  appBar: {},
  appBarToolbar: {
    justifyContent: 'space-between',
  },
  main: {
    flexGrow: 1,
    outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
  },
}

const App = props => {
  const { children, classes, menuFooter, menuPrimary } = props

  const {
    isAppBarFixed,
    isCartMenuOpen,
    isLoading,
    isMediaReady,
    isNavMenuOpen,
    onAppBarBurgerClick,
    onAppBarCartClick,
  } = useAppContext()

  const burgerIconButton = (
    <IconButton
      onClick={onAppBarBurgerClick}
      color="inherit"
      edge="start"
      size="small"
      aria-haspopup="true"
      aria-expanded={isNavMenuOpen}
      aria-label="Toggle main menu"
    >
      {isNavMenuOpen ? <CrossIcon /> : <BurgerIcon />}
    </IconButton>
  )

  const brandIconButton = (
    <IconButton component={RouterLink} color="inherit" href="/" aria-label="Go to the homepage">
      <BrandIcon style={{ width: 'auto' }} />
    </IconButton>
  )

  const cartIconButton = (
    <IconButton
      onClick={onAppBarCartClick}
      color="inherit"
      edge="end"
      size="small"
      aria-haspopup="true"
      aria-expanded={isCartMenuOpen}
      aria-label="Toggle cart menu"
    >
      {isCartMenuOpen ? <CrossIcon /> : <CartIcon />}
    </IconButton>
  )

  return (
    <div
      className={classnames(classes.root, {
        [classes.isPreloading]: !isMediaReady,
        [classes.isLoading]: isLoading,
      })}
    >
      <AppSkipLink href={`#${SITE_MAIN_ID}`}>Skip to content</AppSkipLink>

      <AppAppBar
        className={classes.appBar}
        position={isAppBarFixed ? 'fixed' : 'sticky'}
        id={SITE_HEADER_ID}
      >
        <Toolbar
          className={classes.appBarToolbar}
          component={Container}
          maxWidth={false}
          disableGutters
        >
          <div>{burgerIconButton}</div>
          <div>{brandIconButton}</div>
          <div>{cartIconButton}</div>
        </Toolbar>
      </AppAppBar>

      <AppNavMenu menu={menuPrimary} />

      <AppCartMenu />

      <main className={classes.main} id={SITE_MAIN_ID} role="main" tabIndex="-1">
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
  menuFooter: PropTypes.arrayOf(menuLinkType).isRequired,
  menuPrimary: PropTypes.arrayOf(menuLinkType).isRequired,
}

export default withStyles(styles)(App)
