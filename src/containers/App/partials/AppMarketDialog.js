// @inheritedComponent Dialog

import * as React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useCheckout, useI18n } from 'api'
import { Close as CloseIcon } from 'components/icons'
import { useApp } from '../AppContext'

const TransitionComponent = React.forwardRef(function TransitionComponent(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AppMarketDialog = React.memo(function AppMarketDialog(props) {
  const { isMarketMenuOpen, onMarketMenuClose, ...other } = props

  const { location, countries, languages, updateCountry, updateLanguage } = useCheckout()
  const { t } = useI18n()

  const isBreakpointUp = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  const handleCountryChange = React.useCallback(
    (event) => {
      updateCountry(event.target.value)
    },
    [updateCountry],
  )

  const handleLanguageChange = React.useCallback(
    (event) => {
      updateLanguage(event.target.value)
    },
    [updateLanguage],
  )

  return (
    <Dialog
      TransitionComponent={!isBreakpointUp ? TransitionComponent : undefined}
      fullScreen={!isBreakpointUp}
      onClose={onMarketMenuClose}
      open={isMarketMenuOpen}
      maxWidth="xs"
      fullWidth
      aria-labelledby="cia-market-menu-title"
      {...other}
    >
      <DialogTitle variant="subtitle1" id="cia-market-menu-title">
        {t(__translationGroup)`Choose country and shipping`}

        {onMarketMenuClose && (
          <IconButton
            sx={{
              position: 'absolute',
              right: (theme) => theme.spacing(1),
              top: 5,
            }}
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
          id="cia-market-menu-country" // Makes `label` and `helperText` accessible for screen readers.
        >
          {countries.map((country) => (
            <MenuItem key={country.country} value={country.country}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          onChange={handleLanguageChange}
          value={location?.language?.language}
          label={t(__translationGroup)`Choose language`}
          variant="standard"
          margin="normal"
          fullWidth
          select
          id="cia-market-menu-language" // Makes `label` and `helperText` accessible for screen readers.
        >
          {languages.map((language) => (
            <MenuItem key={language} value={language.language}>
              {language.name}
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
