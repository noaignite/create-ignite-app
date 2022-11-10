import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'
import { SITE_MAIN_ID, SITE_ROOT_ID } from '~/utils/constants'
import { GlobalStateContext } from '~/contexts'
import { AppBaseCookieBar, AppBaseLoader, AppBaseMarketDialog, AppBaseSkipLink } from './partials'

const AppBaseRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

function AppBase(props) {
  const { children } = props

  return (
    <AppBaseRoot id={SITE_ROOT_ID}>
      <AppBaseSkipLink href={`#${SITE_MAIN_ID}`} />

      {children}

      <AppBaseMarketDialog />
      <AppBaseLoader />

      <GlobalStateContext.Consumer>
        {({ isCookieBarOpen }) => {
          // Will only fetch `AppBaseCookieBar` chunk if user has not consented.
          return isCookieBarOpen ? <AppBaseCookieBar open /> : null
        }}
      </GlobalStateContext.Consumer>
    </AppBaseRoot>
  )
}

AppBase.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  headerColor: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  headerMode: PropTypes.string,
}

export default AppBase
