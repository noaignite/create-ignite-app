import * as React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Snackbar, styled, Typography } from '@mui/material'
import { useGlobalHandlers, useI18n } from '~/contexts'
import { CloseIcon } from '~/components'

const AppBaseCookieBarRoot = styled(Snackbar)(({ theme }) => ({
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

const AppBaseCookieBarContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 'var(--cia-toolbar-spacing)',
  margin: 'var(--cia-toolbar-spacing)',
  backgroundColor: theme.vars.palette.text.primary,
  color: theme.vars.palette.text.contrastText,
}))

function AppBaseCookieBar(props) {
  const { open, ...other } = props

  const { t } = useI18n()
  const { onCookieBarClose } = useGlobalHandlers()

  return (
    <AppBaseCookieBarRoot
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      open={open}
      {...other}
    >
      <AppBaseCookieBarContent>
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
      </AppBaseCookieBarContent>
    </AppBaseCookieBarRoot>
  )
}

AppBaseCookieBar.propTypes = {
  open: PropTypes.bool,
}

export default AppBaseCookieBar
