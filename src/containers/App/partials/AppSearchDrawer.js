// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import withStyles from '@material-ui/core/styles/withStyles'
import SearchIcon from 'components/icons/Search'
import Container from 'components/Container'
import IconButton from 'components/IconButton'
import TextField from 'components/TextField'
import { useAppHandlers } from '../AppContext'
import AppDrawer from './AppDrawer'

export const styles = (theme) => ({
  paper: {
    backgroundColor: theme.palette.background.default,
  },
  form: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  textField: {},
  inputBase: {},
  input: {},
  submitButton: {},
})

const AppSearchDrawer = React.forwardRef(function AppSearchDrawer(props, ref) {
  const { classes, className, open, ...other } = props

  const { onSearchMenuClose } = useAppHandlers()

  const valueRef = React.useRef('')
  const [value, setValue] = React.useState('')
  const handleChange = React.useCallback((event) => {
    valueRef.current = event.target.value
    setValue(event.target.value)
  }, [])

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    Router.pushRoute(`/search/${valueRef.current}`).then(() => window.scrollTo(0, 0))
  }, [])

  const submitButton = (
    <IconButton
      className={classes.submitButton}
      disabled={!value}
      type="submit"
      aria-label="Search"
    >
      <SearchIcon />
    </IconButton>
  )

  return (
    <AppDrawer
      classes={{
        paper: classes.paper,
      }}
      onClose={onSearchMenuClose}
      open={open}
      anchor="top"
      ref={ref}
      {...other}
    >
      <Container
        className={classes.form}
        onSubmit={handleSubmit}
        component="form"
        maxWidth="md"
        role="search"
        action=""
      >
        <TextField
          className={classes.textField}
          placeholder="Search products"
          onChange={handleChange}
          value={value}
          InputProps={{
            className: classes.inputBase,
            endAdornment: submitButton,
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
            className: classes.input,
            autoCapitalize: 'off',
            autoComplete: 'off',
            autoCorrect: 'off',
            maxLength: 100,
            spellCheck: 'false',
          }}
          type="search"
          fullWidth
          autoFocus
        />
      </Container>
    </AppDrawer>
  )
})

AppSearchDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
}

AppSearchDrawer.uiName = 'AppSearchDrawer'

export default withStyles(styles)(React.memo(AppSearchDrawer))
