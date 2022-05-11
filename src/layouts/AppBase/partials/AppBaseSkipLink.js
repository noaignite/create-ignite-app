import * as React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { useI18n } from '~/context'

export const AppBaseSkipLinkRoot = styled(Button)(({ theme }) => ({
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

function AppBaseSkipLink(props) {
  const { t } = useI18n()

  return (
    <AppBaseSkipLinkRoot {...props}>{t(__translationGroup)`Skip to content`}</AppBaseSkipLinkRoot>
  )
}

export default AppBaseSkipLink
