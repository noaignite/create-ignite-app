import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from '~/utils/constants'
import AppBase from '../AppBase'
import { AppCartDrawer, AppFooter, AppHeader, AppNavDrawer, AppSearchDrawer } from './partials'

const AppMain = styled('main')({
  flexGrow: 1,
  outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
})

function App(props) {
  const { children, headerColor, headerMode } = props

  return (
    <AppBase>
      <AppHeader id={SITE_HEADER_ID} headerColor={headerColor} headerMode={headerMode} />

      <AppMain id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </AppMain>

      <AppFooter id={SITE_FOOTER_ID} />

      <AppCartDrawer />
      <AppNavDrawer />
      <AppSearchDrawer />
    </AppBase>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  headerColor: PropTypes.string,
  headerMode: PropTypes.string,
}

export default App
