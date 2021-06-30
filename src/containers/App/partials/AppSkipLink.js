import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useI18n } from 'api'
import { Button } from 'components'

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: theme.zIndex.appBar + 1,
    top: -100,
    left: 0,
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),
    '&:focus': {
      top: 0,
    },
  },
}))

const AppSkipLink = React.memo(function AppSkipLink(props) {
  const { className, ...other } = props
  const classes = useStyles(props)

  const { t } = useI18n()

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {t(__translationGroup)`Skip to content`}
    </Button>
  )
})

AppSkipLink.propTypes = {
  className: PropTypes.string,
}

export default AppSkipLink
