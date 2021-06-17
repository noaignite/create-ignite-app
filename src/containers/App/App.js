import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import withStyles from '@material-ui/core/styles/withStyles'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from 'utils/constants'
import AppContext from './AppContext'
import AppCartDrawer from './partials/AppCartDrawer'
import AppFooter from './partials/AppFooter'
import AppHeader from './partials/AppHeader'
import AppLoader from './partials/AppLoader'
import AppMarketDialog from './partials/AppMarketDialog'
import AppNavDrawer from './partials/AppNavDrawer'
import AppSearchDrawer from './partials/AppSearchDrawer'
import AppSkipLink from './partials/AppSkipLink'

const AppCookieBar = dynamic(
  () => import(/* webpackChunkName: "./partials/AppCookieBar" */ './partials/AppCookieBar'),
  { ssr: false },
)

export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
  },
}

function App(props) {
  const { children, classes, ...other } = props

  return (
    <div className={classes.root} {...other}>
      <AppSkipLink href={`#${SITE_MAIN_ID}`} />
      <AppHeader id={SITE_HEADER_ID} />

      <main className={classes.main} id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </main>

      <AppFooter id={SITE_FOOTER_ID} />

      <AppNavDrawer />
      <AppCartDrawer />
      <AppSearchDrawer />
      <AppMarketDialog />
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
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
