import * as React from 'react'
import { styled } from '@mui/system'
import { useRemoteConfig } from '~/contexts'

export const AppStoreMessageRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'var(--cia-header-toolbar-secondary-height)',
  padding: '0 var(--cia-toolbar-spacing)',
  backgroundColor: theme.vars.palette.primary.main,
  color: theme.vars.palette.primary.contrastText,
  textAlign: 'center',
}))

const AppStoreMessageLabel = styled('p')(({ theme }) => ({
  ...theme.typography.body2,
  margin: 0,
  lineHeight: 1,
}))

const AppStoreMessage = React.memo(function AppStoreMessage(props) {
  const { storeMessage } = useRemoteConfig()

  return (
    <AppStoreMessageRoot {...props}>
      <AppStoreMessageLabel dangerouslySetInnerHTML={{ __html: storeMessage }} />
    </AppStoreMessageRoot>
  )
})

export default AppStoreMessage
