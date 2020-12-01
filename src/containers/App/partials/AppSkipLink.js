import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Link from 'components/Link'

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: theme.zIndex.appBar + 1,
    top: -100,
    left: 0,
    padding: theme.spacing(1, 2),
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

  return (
    <Link className={classnames(classes.root, className)} {...other}>
      Skip to content
    </Link>
  )
})

AppSkipLink.propTypes = {
  className: PropTypes.string,
}

export default AppSkipLink
