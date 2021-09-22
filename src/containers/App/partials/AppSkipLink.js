import * as React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { useI18n } from 'api'

export const AppSkipLinkRoot = styled(Button, {
  name: 'AppSkipLink',
  slot: 'Root',
})(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.appBar + 1,
  top: -100,
  left: 0,
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.getContrastText(theme.palette.text.primary),
  '&:focus': {
    top: 0,
  },
}))

const AppSkipLink = React.memo(function AppSkipLink(props) {
  const { t } = useI18n()

  return <AppSkipLinkRoot {...props}>{t(__translationGroup)`Skip to content`}</AppSkipLinkRoot>
})

export default AppSkipLink
