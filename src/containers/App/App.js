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
import SearchIcon from 'components/icons/Search'
import IconButton from 'components/IconButton'
import Toolbar from 'components/Toolbar'
import AppAppBar from './partials/AppAppBar'
import AppBackdrop from './partials/AppBackdrop'
import AppCartDrawer from './partials/AppCartDrawer'
import AppFooter from './partials/AppFooter'
import AppNavDrawer from './partials/AppNavDrawer'
import AppSkipLink from './partials/AppSkipLink'
import { useApp } from './AppContext'

const BREAKPOINT_KEY_DOWN = 'sm'
const BREAKPOINT_KEY_UP = 'md'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  isPreloading: {},
  isLoading: {},
  appBar: {},
  appBarToolbar: {},
  appBarMobilePush: {
    [theme.breakpoints.down(BREAKPOINT_KEY_DOWN)]: {
      marginLeft: 'auto',
    },
  },
  appBarDesktopPush: {
    [theme.breakpoints.up(BREAKPOINT_KEY_UP)]: {
      marginLeft: 'auto',
    },
  },
  brandIconButton: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  main: {
    flexGrow: 1,
    outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
  },
})

const App = React.forwardRef(function App(props, ref) {
  const { children, classes, menuFooter, menuPrimary, ...other } = props

  const {
    appBarColor,
    isBackdropOpen,
    isCartMenuOpen,
    isLoading,
    isMediaReady,
    isNavMenuOpen,
    isSearchOpen,
    isSomeMenuOpen,
    onAppBarBurgerClick,
    onAppBarCartClick,
    onAppBarSearchClick,
  } = useApp()

  const burgerIconButton = (
    <IconButton
      onClick={onAppBarBurgerClick}
      edge="start"
      size="small"
      aria-haspopup="true"
      aria-expanded={isNavMenuOpen}
      aria-label="Toggle main menu"
    >
      {isNavMenuOpen ? <CrossIcon /> : <BurgerIcon />}
    </IconButton>
  )

  const searchIconButton = (
    <IconButton
      onClick={onAppBarSearchClick}
      size="small"
      aria-haspopup="true"
      aria-expanded={isSearchOpen}
      aria-label="Toggle search"
    >
      {isSearchOpen ? <CrossIcon /> : <SearchIcon />}
    </IconButton>
  )

  const brandIconButton = (
    <IconButton
      className={classes.brandIconButton}
      component={RouterLink}
      href="/"
      aria-label="Go to the homepage"
    >
      <BrandIcon style={{ width: 'auto' }} />
    </IconButton>
  )

  const cartIconButton = (
    <IconButton
      onClick={onAppBarCartClick}
      edge="end"
      size="small"
      aria-haspopup="true"
      aria-expanded={isCartMenuOpen}
      aria-label="Toggle cart menu"
    >
      {isCartMenuOpen ? <CrossIcon /> : <CartIcon amount={3} />}
    </IconButton>
  )

  return (
    <div
      className={classnames(classes.root, {
        [classes.isPreloading]: !isMediaReady,
        [classes.isLoading]: isLoading,
      })}
      ref={ref}
      {...other}
    >
      <AppSkipLink href={`#${SITE_MAIN_ID}`}>Skip to content</AppSkipLink>

      <AppAppBar
        className={classes.appBar}
        color={appBarColor}
        disableTransparency={isSomeMenuOpen}
        id={SITE_HEADER_ID}
      >
        <Toolbar className={classes.appBarToolbar}>
          {burgerIconButton}

          <div className={classes.appBarDesktopPush} />
          {searchIconButton}
          <div className={classes.appBarMobilePush} />

          {brandIconButton}
          {cartIconButton}
        </Toolbar>
      </AppAppBar>

      <AppNavDrawer menu={menuPrimary} open={isNavMenuOpen} />
      <AppCartDrawer open={isCartMenuOpen} />

      <main className={classes.main} id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </main>

      <AppFooter menu={menuFooter} id={SITE_FOOTER_ID} />

      <AppBackdrop open={isBackdropOpen} loading={isLoading} />
    </div>
  )
})

App.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  menuFooter: PropTypes.arrayOf(menuLinkType).isRequired,
  menuPrimary: PropTypes.arrayOf(menuLinkType).isRequired,
}

export default withStyles(styles)(App)
