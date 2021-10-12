import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { styled } from '@mui/system'
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

const AppRoot = styled('div', {
  name: 'App',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

const AppMain = styled('main', {
  name: 'App',
  slot: 'Main',
})({
  flexGrow: 1,
  outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
})

function App(props) {
  const { children, disableFooter, disableHeader, headerMode } = props

  return (
    <AppRoot>
      <AppSkipLink href={`#${SITE_MAIN_ID}`} />

      {!disableHeader && <AppHeader headerMode={headerMode} id={SITE_HEADER_ID} />}

      <AppMain id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </AppMain>

      {!disableFooter && <AppFooter id={SITE_FOOTER_ID} />}

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
    </AppRoot>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  disableFooter: PropTypes.bool,
  disableHeader: PropTypes.bool,
  headerMode: PropTypes.string,
}

export default App
