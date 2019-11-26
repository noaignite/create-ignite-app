import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Hidden from '@material-ui/core/Hidden'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from 'src/site.config'
import { linkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import BrandIcon from 'components/icons/Brand'
import BurgerIcon from 'components/icons/Burger'
import CrossIcon from 'components/icons/Cross'
import Container from 'components/Container'
import IconButton from 'components/IconButton'
import Link from 'components/Link'
import Toolbar from 'components/Toolbar'
import AppAppBar from './partials/AppAppBar'
import AppBackdrop from './partials/AppBackdrop'
import AppDrawer from './partials/AppDrawer'
import AppFooter from './partials/AppFooter'
import AppSkipLink from './partials/AppSkipLink'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  isMounting: {},
  isMenuOpen: {},
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
    isLoading,
    isMenuOpen,
    isMounted,
    menuFooter,
    menuPrimary,
    onMenuButtonClick,
  } = props

  const brandIconButton = (
    <IconButton
      component={RouterLink}
      color="inherit"
      edge="start"
      href="/"
      aria-label="Go to the homepage"
    >
      <BrandIcon fontSize="large" style={{ width: 'auto' }} />
    </IconButton>
  )

  const burgerIconButton = (
    <IconButton
      onClick={onMenuButtonClick}
      color="inherit"
      edge="end"
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      aria-label="Toggle navigation"
    >
      {isMenuOpen ? <CrossIcon fontSize="large" /> : <BurgerIcon fontSize="large" />}
    </IconButton>
  )

  const className = classnames(classes.root, {
    [classes.isLoading]: isLoading,
    [classes.isMounting]: !isMounted,
    [classes.isMenuOpen]: isMenuOpen,
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
          <Hidden mdUp>
            <div>{brandIconButton}</div>
            <div>{burgerIconButton}</div>
          </Hidden>

          <Hidden smDown>
            <div>{brandIconButton}</div>

            <nav className={classes.nav} aria-label="Main navigation">
              <ul className={classes.navlist}>
                {menuPrimary.map((menuItem, idx) => (
                  <li key={idx} className={classes.navlistItem}>
                    <Link
                      className={classes.navlistItemText}
                      component={RouterLink}
                      as={menuItem.href}
                      href="/[slug]"
                      variant="button"
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Hidden>
        </Toolbar>
      </AppAppBar>

      <AppDrawer menu={menuPrimary} />

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
  isLoading: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMounted: PropTypes.bool,
  menuFooter: PropTypes.arrayOf(linkType).isRequired,
  menuPrimary: PropTypes.arrayOf(linkType).isRequired,
  onMenuButtonClick: PropTypes.func,
}

export default withStyles(styles)(App)
