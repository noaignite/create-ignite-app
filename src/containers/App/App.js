import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from 'utils/constants'
import AppHeader from './partials/AppHeader'
import AppFooter from './partials/AppFooter'
import AppLoader from './partials/AppLoader'
import AppSkipLink from './partials/AppSkipLink'
import AppContext from './AppContext'

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

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
  },
})

function App(props) {
  const { children, ...other } = props
  const classes = useStyles(props)

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
