import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import MuiLink from '@material-ui/core/Link'

export const styles = theme => ({
  // Extend with `underline="animate"` and leave internal underline variants untouched. Reason being
  // this solution does not wrap around text when breaking into multiple lines. Use where you see fit.
  underlineAnimate: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -1,
      right: 0,
      left: 0,
      height: 1,
      background: 'currentColor',
    },
    '&:hover::after': {
      animation: `$oakwood-link-underline 750ms ${theme.transitions.easing.easeInOut} forwards`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        animation: 'none',
      },
    },
  },
  '@keyframes oakwood-link-underline': {
    '0%': { transform: 'scaleX(1)', transformOrigin: 'right center' },
    '35%': { transform: 'scaleX(0)', transformOrigin: 'right center' },
    '65%': { transform: 'scaleX(0)', transformOrigin: 'left center' },
    '100%': { transform: 'scaleX(1)', transformOrigin: 'left center' },
  },
})

const Link = React.forwardRef(function Link(props, ref) {
  const { classes, className: classNameProp, underline: underlineProp, ...other } = props

  let underline = underlineProp
  if (underline === 'animate') {
    underline = 'none'
  }

  const className = classnames(
    {
      [classes.underlineAnimate]: underlineProp === 'animate',
    },
    classNameProp,
  )

  return <MuiLink className={className} underline={underline} ref={ref} {...other} />
})

Link.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  underline: PropTypes.oneOf(['none', 'hover', 'always', 'animate']),
}

Link.uiName = 'Link'

export default withStyles(styles)(Link)
