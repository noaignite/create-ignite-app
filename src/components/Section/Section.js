import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = (theme) => ({
  root: ({ spacingRule = 'margin' }) => ({
    ...theme.mixins.section(spacingRule),
    position: 'relative',
  }),
  // Applying spacing to root and thereafter canceling via `disableSpacing`
  // allows for the css variable `--section-spacing` to still be applied for
  // nested styling use.
  disableSpacing: ({ spacingRule = 'margin' }) => ({
    [`${spacingRule}Top`]: 0,
    [`${spacingRule}Bottom`]: 0,
  }),
  regular: {
    ...theme.mixins.verticalRhythm(4, '*:not([aria-hidden])'),
    [theme.breakpoints.up('sm')]: theme.mixins.verticalRhythm(6, '*:not([aria-hidden])'),
  },
  dense: theme.mixins.verticalRhythm(2, '*:not([aria-hidden])'),
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
          [classes.disableSpacing]: disableSpacing,
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

export default withStyles(styles)(Section)
