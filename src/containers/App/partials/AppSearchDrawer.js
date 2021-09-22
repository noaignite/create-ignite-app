// @inheritedComponent Drawer

import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { styled } from '@mui/system'
import { Drawer, IconButton, TextField } from '@mui/material'
import { useI18n } from 'api'
import { Search as SearchIcon } from 'components/icons'
import { useApp } from '../AppContext'

const AppCartDrawerRoot = styled(Drawer, {
  name: 'AppCartDrawer',
  slot: 'Root',
})(({ theme }) => ({
  zIndex: `${theme.zIndex.appBar - 1} !important`,
  '& .MuiDrawer-paper': {
    top: 'var(--cia-header-height)',
    backgroundColor: theme.palette.background.default,
  },
}))

const AppCartDrawerForm = styled('form', {
  name: 'AppCartDrawer',
  slot: 'Form',
})(({ theme }) => ({
  ...theme.mixins.contain('md'),
  width: '100%',
  padding: theme.spacing(0, 'var(--cia-container-spacing)', 2),
}))

const AppSearchDrawer = React.memo(function AppSearchDrawer(props) {
  const { isSearchMenuOpen, onSearchMenuClose, ...other } = props

  const { t } = useI18n()

  const valueRef = React.useRef('')
  const [value, setValue] = React.useState('')
  const handleChange = React.useCallback((event) => {
    valueRef.current = event.target.value
    setValue(event.target.value)
  }, [])

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    Router.push(`/search/${valueRef.current}`).then(() => window.scrollTo(0, 0))
  }, [])

  const submitButton = (
    <IconButton
      disabled={!value}
      size="small"
      type="submit"
      aria-label={t(__translationGroup)`Submit search`}
    >
      <SearchIcon />
    </IconButton>
  )

  return (
    <AppCartDrawerRoot onClose={onSearchMenuClose} open={isSearchMenuOpen} anchor="top" {...other}>
      <AppCartDrawerForm
        onSubmit={handleSubmit}
        role="search"
        // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
        // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
        action="#"
      >
        <TextField
          onChange={handleChange}
          value={value}
          placeholder={t(__translationGroup)`Search products`}
          variant="standard"
          InputProps={{
            endAdornment: submitButton,
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
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
      </AppCartDrawerForm>
    </AppCartDrawerRoot>
  )
})

AppSearchDrawer.propTypes = {
  isSearchMenuOpen: PropTypes.bool,
  onSearchMenuClose: PropTypes.func,
}

function AppSearchDrawerContainer(props) {
  const { isSearchMenuOpen, onSearchMenuClose } = useApp()

  return (
    <AppSearchDrawer
      isSearchMenuOpen={isSearchMenuOpen}
      onSearchMenuClose={onSearchMenuClose}
      {...props}
    />
  )
}

export default AppSearchDrawerContainer
