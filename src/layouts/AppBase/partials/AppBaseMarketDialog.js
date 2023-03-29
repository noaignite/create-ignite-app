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
import { t } from '@lingui/macro'
import {
  useCentraHandlers,
  useCentraSelection,
  useGlobalHandlers,
  useGlobalState,
} from '~/contexts'
import { CloseIcon } from '~/components'

const TransitionComponent = React.forwardRef(function TransitionComponent(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AppBaseMarketDialog = React.memo(function AppBaseMarketDialog(props) {
  const { isMarketMenuOpen, ...other } = props

  const { onMarketMenuClose } = useGlobalHandlers()
  const { updateCountry, updateLanguage } = useCentraHandlers()
  const { location, countries, languages } = useCentraSelection()

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
        Choose country and shipping
        {onMarketMenuClose && (
          <IconButton
            sx={{
              position: 'absolute',
              right: (theme) => theme.spacing(1),
              top: 5,
            }}
            onClick={onMarketMenuClose}
            color="inherit"
            aria-label="Close market menu"
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent>
        <Typography variant="body2" paragraph>
          {t`Please select the country to which your order will be sent. This will give you accurate
          pricing, delivery times and shipping costs for your destination.`}
        </Typography>

        <TextField
          onChange={handleCountryChange}
          value={location.country}
          label={t`Choose country`}
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
          label={t`Choose language`}
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

AppBaseMarketDialog.propTypes = {
  isMarketMenuOpen: PropTypes.bool,
}

function AppBaseMarketDialogContainer(props) {
  const { isMarketMenuOpen } = useGlobalState()

  return <AppBaseMarketDialog isMarketMenuOpen={isMarketMenuOpen} {...props} />
}

export default AppBaseMarketDialogContainer
