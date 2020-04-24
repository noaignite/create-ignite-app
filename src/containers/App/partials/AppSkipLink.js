import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'components/Link'

export const styles = theme => ({
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
})

const AppSkipLink = React.forwardRef(function AppSkipLink(props, ref) {
  const { children, classes, className, ...other } = props

  return (
    <Link className={classnames(classes.root, className)} ref={ref} {...other}>
      {children}
    </Link>
  )
})

AppSkipLink.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

AppSkipLink.uiName = 'AppSkipLink'

export default withStyles(styles)(React.memo(AppSkipLink))
