import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from 'utils/constants'
import RouterLink from 'containers/RouterLink'
import BrandIcon from 'components/icons/Brand'
import CartIcon from 'components/icons/Cart'
import CloseIcon from 'components/icons/Close'
import MenuIcon from 'components/icons/Menu'
import SearchIcon from 'components/icons/Search'
import IconButton from 'components/IconButton'
import Toolbar from 'components/Toolbar'
import AppAppBar from './partials/AppAppBar'
import AppFooter from './partials/AppFooter'
import AppLoader from './partials/AppLoader'
import AppNavDropdown from './partials/AppNavDropdown'
import AppSkipLink from './partials/AppSkipLink'
import { AppContext, useApp } from './AppContext'

const AppCartDrawer = dynamic(
  () => import(/* webpackChunkName: "./partials/AppCartDrawer" */ './partials/AppCartDrawer'),
  { ssr: false },
)
const AppNavDrawer = dynamic(
  () => import(/* webpackChunkName: "./partials/AppNavDrawer" */ './partials/AppNavDrawer'),
  { ssr: false },
)
const AppSearchDrawer = dynamic(
  () => import(/* webpackChunkName: "./partials/AppSearchDrawer" */ './partials/AppSearchDrawer'),
  { ssr: false },
)
const AppCookieBar = dynamic(
  () => import(/* webpackChunkName: "./partials/AppCookieBar" */ './partials/AppCookieBar'),
  { ssr: false },
)

const BREAKPOINT_KEY_DOWN = 'sm'
const BREAKPOINT_KEY_UP = 'md'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
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
  menuIconButton: {
    [theme.breakpoints.up(BREAKPOINT_KEY_UP)]: {
      display: 'none',
    },
  },
  searchIconButton: {},
  brandIconButton: {
    [theme.breakpoints.down(BREAKPOINT_KEY_DOWN)]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      marginLeft: 0, // Cancel margin of `edge="start"`
    },
  },
  brandIcon: {
    width: 'auto',
  },
  cartIconButton: {},
  navDropdown: {
    [theme.breakpoints.down(BREAKPOINT_KEY_DOWN)]: {
      display: 'none',
    },
  },
  main: {
    flexGrow: 1,
    paddingTop: 'var(--coa-initial-sticky-top, 0px)',
    outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
  },
}))

function App(props) {
  const { children, ...other } = props
  const classes = useStyles(props)

  const {
    appBarColor,
    hideHeader,
    isCartMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    onAppBarCartClick,
    onAppBarMenuClick,
    onAppBarSearchClick,
  } = useApp()

  const menuIconButton = (
    <IconButton
      className={classes.menuIconButton}
      onClick={onAppBarMenuClick}
      edge="start"
      size="small"
      aria-haspopup="true"
      aria-expanded={isNavMenuOpen}
      aria-label="Toggle main menu"
    >
      {isNavMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  )

  const searchIconButton = (
    <IconButton
      className={classes.searchIconButton}
      onClick={onAppBarSearchClick}
      size="small"
      aria-haspopup="true"
      aria-expanded={isSearchMenuOpen}
      aria-label="Toggle search"
    >
      {isSearchMenuOpen ? <CloseIcon /> : <SearchIcon />}
    </IconButton>
  )

  const brandIconButton = (
    <IconButton
      className={classes.brandIconButton}
      component={RouterLink}
      href="/"
      edge="start"
      aria-label="Go to the homepage"
    >
      <BrandIcon className={classes.brandIcon} />
    </IconButton>
  )

  const cartIconButton = (
    <IconButton
      className={classes.cartIconButton}
      onClick={onAppBarCartClick}
      edge="end"
      size="small"
      aria-haspopup="true"
      aria-expanded={isCartMenuOpen}
      aria-label="Toggle cart menu"
    >
      {isCartMenuOpen ? <CloseIcon /> : <CartIcon amount={3} />}
    </IconButton>
  )

  return (
    <div className={classes.root} {...other}>
      <AppSkipLink href={`#${SITE_MAIN_ID}`} />

      {!hideHeader && (
        <AppAppBar
          className={classes.appBar}
          color={appBarColor}
          disableTransparency={isSomeMenuOpen}
          id={SITE_HEADER_ID}
        >
          <Toolbar className={classes.appBarToolbar}>
            {menuIconButton}
            {brandIconButton}

            <AppNavDropdown className={classes.navDropdown} />

            <div className={classes.appBarDesktopPush} />
            {searchIconButton}
            <div className={classes.appBarMobilePush} />

            {cartIconButton}
          </Toolbar>
        </AppAppBar>
      )}

      <main className={classes.main} id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </main>

      <AppFooter id={SITE_FOOTER_ID} />

      <AppNavDrawer />
      <AppCartDrawer />
      <AppSearchDrawer />
      <AppLoader />

      <AppContext.Consumer>
        {({ isCookieBarOpen, onCookieBarClose }) => {
          // Will only fetch `AppCookieBar` chunk if user has not consented.
          return isCookieBarOpen ? <AppCookieBar onClose={onCookieBarClose} open /> : null
        }}
      </AppContext.Consumer>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
