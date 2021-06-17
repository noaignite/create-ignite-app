// @inheritedComponent Dialog

import * as React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Slide from '@material-ui/core/Slide'
import { useCheckout, useI18n } from 'api'
import CloseIcon from 'components/icons/Close'
import IconButton from 'components/IconButton'
import MenuItem from 'components/MenuItem'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
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

  const { location, countries, onCountryChange } = useCheckout()
  const { t } = useI18n()

  const isBreakpointUp = useMediaQuery((theme) => theme.breakpoints.up('sm'))

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
          onChange={onCountryChange}
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
