import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = theme => ({
  root: {
    position: 'relative',
  },
  spacing: ({ spacingRule = 'margin' }) => ({
    [`${spacingRule}Top`]: theme.spacing(4),
    [`${spacingRule}Bottom`]: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      [`${spacingRule}Top`]: theme.spacing(6),
      [`${spacingRule}Bottom`]: theme.spacing(6),
    },
  }),
  regular: {
    ...theme.mixins.verticalRhythm(4),
    [theme.breakpoints.up('md')]: {
      ...theme.mixins.verticalRhythm(6),
    },
  },
  dense: theme.mixins.verticalRhythm(2),
})

const Section = React.forwardRef(function Section(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'section',
    disableSpacing,
    rhythm,
    spacingRule,
    ...other
  } = props

  return (
    <Component
      className={classnames(
        classes.root,
        {
          [classes[rhythm]]: rhythm !== false,
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
  disableSpacing: PropTypes.bool,
  rhythm: PropTypes.oneOf(['regular', 'dense', false]),
  spacingRule: PropTypes.oneOf(['padding', 'margin']),
}

Section.uiName = 'Section'

export default withStyles(styles)(Section)
