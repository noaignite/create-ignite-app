import * as React from 'react'
import { Button, styled } from '@mui/material'

export const AppBaseSkipLinkRoot = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.appBar + 1,
  top: -100,
  left: 0,
  '&:focus': {
    top: 0,
  },
}))

function AppBaseSkipLink(props) {
  return (
    <AppBaseSkipLinkRoot color="text" variant="contained" {...props}>
      Skip to content
    </AppBaseSkipLinkRoot>
  )
}

export default AppBaseSkipLink
