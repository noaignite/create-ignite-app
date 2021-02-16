import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { capitalize } from '@material-ui/core/utils'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = {
  root: {
    position: 'relative',
  },
  guttersMargin: {
    marginTop: 'var(--coa-section-spacing)',
    marginBottom: 'var(--coa-section-spacing)',
  },
  guttersPadding: {
    paddingTop: 'var(--coa-section-spacing)',
    paddingBottom: 'var(--coa-section-spacing)',
  },
}

const Section = React.forwardRef(function Section(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'section',
    gutters = false,
    ...other
  } = props

  return (
    <Component
      className={classnames(
        classes.root,
        {
          [classes[`gutters${capitalize(String(gutters))}`]]: gutters !== false,
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
  gutters: PropTypes.oneOf(['margin', 'padding', false]),
}

export default withStyles(styles)(Section)
