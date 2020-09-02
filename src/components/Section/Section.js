import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = (theme) => ({
  root: {
    position: 'relative',
  },
  padding: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  spacing: {
    '& > *:not([aria-hidden]) + *': {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(6),
      },
    },
  },
})

const Section = React.forwardRef(function Section(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'section',
    disablePadding,
    disableSpacing,
    ...other
  } = props

  return (
    <Component
      className={classnames(
        classes.root,
        {
          [classes.padding]: !disablePadding,
          [classes.spacing]: !disableSpacing,
        },
        className,
      )}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
  )
})

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disablePadding: PropTypes.bool,
  disableSpacing: PropTypes.bool,
}

Section.uiName = 'Section'

export default withStyles(styles)(Section)
