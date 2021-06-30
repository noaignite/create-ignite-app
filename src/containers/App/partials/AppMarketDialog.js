// @inheritedComponent Dialog

import * as React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Slide from '@material-ui/core/Slide'
import { useCheckout, useI18n } from 'api'
import { Close as CloseIcon } from 'components/icons'
import { IconButton, MenuItem, TextField, Typography } from 'components'
import { useApp } from '../AppContext'

export const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {},
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0.5),
  },
}))

const TransitionComponent = React.forwardRef(function TransitionComponent(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AppMarketDialog = React.memo(function AppMarketDialog(props) {
  const { isMarketMenuOpen, onMarketMenuClose, ...other } = props
  const classes = useStyles(props)

  const { location, countries, setCountry } = useCheckout()
  const { t } = useI18n()

  const isBreakpointUp = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  const handleCountryChange = React.useCallback(
    (event) => {
      setCountry(event.target.value)
    },
    [setCountry],
  )

  return (
    <Dialog
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
      TransitionComponent={!isBreakpointUp ? TransitionComponent : undefined}
      fullScreen={!isBreakpointUp}
      onClose={onMarketMenuClose}
      open={isMarketMenuOpen}
      maxWidth="xs"
      fullWidth
      aria-labelledby="coa-market-menu-title"
      {...other}
    >
      <DialogTitle disableTypography>
        <Typography component="h1" variant="subtitle1" id="coa-market-menu-title">
          {t(__translationGroup)`Choose country and shipping`}
        </Typography>

        {onMarketMenuClose && (
          <IconButton
            className={classes.closeButton}
            onClick={onMarketMenuClose}
            color="inherit"
            aria-label={t(__translationGroup)`Close market menu`}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent>
        <Typography variant="body2" paragraph>
          {t(
            __translationGroup,
          )`Please select the country to which your order will be sent. This will give you accurate pricing, delivery times and shipping costs for your destination.`}
        </Typography>

        <TextField
          onChange={handleCountryChange}
          value={location.country}
          label={t(__translationGroup)`Choose country`}
          margin="normal"
          fullWidth
          select
          id="coa-market-menu-country" // Makes `label` and `helperText` accessible for screen readers.
        >
          {countries.map((country) => (
            <MenuItem key={country.country} value={country.country}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
    </Dialog>
  )
})

AppMarketDialog.propTypes = {
  isMarketMenuOpen: PropTypes.bool,
  onMarketMenuClose: PropTypes.func,
}

function AppMarketDialogContainer(props) {
  const { isMarketMenuOpen, onMarketMenuClose } = useApp()

  return (
    <AppMarketDialog
      isMarketMenuOpen={isMarketMenuOpen}
      onMarketMenuClose={onMarketMenuClose}
      {...props}
    />
  )
}

export default AppMarketDialogContainer
