// @inheritedComponent Snackbar

import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { IconButton, Snackbar, Typography } from '@mui/material'
import { useGlobalHandlers, useI18n } from '~/context'
import { Close as CloseIcon } from '~/components/icons'

const AppCookieBarRoot = styled(Snackbar, {
  name: 'AppCookieBar',
  slot: 'Root',
})(({ theme }) => ({
  left: 'auto',
  right: 0,
  bottom: 0,
  [theme.breakpoints.up('sm')]: {
    maxWidth: '50%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '25%',
  },
}))

const AppCookieBarContent = styled('div', {
  name: 'AppCookieBar',
  slot: 'Content',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 'var(--cia-toolbar-spacing)',
  margin: 'var(--cia-toolbar-spacing)',
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.background.default,
}))

const AppCookieBar = React.memo(function AppCookieBar(props) {
  const { open, ...other } = props

  const { t } = useI18n()
  const { onCookieBarClose } = useGlobalHandlers()

  return (
    <AppCookieBarRoot
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      open={open}
      {...other}
    >
      <AppCookieBarContent>
        <Typography variant="body2">
          {t(
            __translationGroup,
          )`We use cookies to give you the best user experience. By using our website you agree to our privacy policy.`}
        </Typography>

        <IconButton
          onClick={onCookieBarClose}
          color="inherit"
          edge="end"
          size="small"
          aria-label={t(__translationGroup)`Close cookie bar`}
        >
          <CloseIcon />
        </IconButton>
      </AppCookieBarContent>
    </AppCookieBarRoot>
  )
})

AppCookieBar.propTypes = {
  open: PropTypes.bool,
}

export default AppCookieBar
