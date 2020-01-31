import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = theme => ({
  root: {
    '@global': {
      h1: theme.typography.h3,
      h2: theme.typography.h4,
      h3: theme.typography.h5,
      h4: theme.typography.h6,
      h5: theme.typography.h6,
      h6: theme.typography.h6,
      'h1, h2, h3, h4, h5, h6, p, ol, ul, li, img': {
        margin: '1.2em 0 0',
        '&:first-child': {
          marginTop: 0,
        },
      },
      blockquote: {
        margin: '40px auto',
        textAlign: 'center',
        '& p': {
          ...theme.typography.h3,
          maxWidth: 'initial',
        },
        '& cite': theme.typography.caption,
      },
      figure: {
        margin: '40px 0',
      },
      figcaption: {
        ...theme.typography.caption,
        margin: '10px 0 0',
      },
      'ol, ul': {
        paddingLeft: '1.25em',
      },
      img: {
        display: 'block',
      },
      hr: {
        height: 1,
        border: 'none',
        backgroundColor: theme.palette.divider,
      },
      a: {
        color: 'inherit',
        textDecoration: 'underline',
      },
    },
  },
})

const Html = React.forwardRef(function Html(props, ref) {
  const { children, className, classes, component: Component = 'div', ...other } = props

  return (
    <Component className={classnames(classes.root, className)} ref={ref} {...other}>
      {children}
    </Component>
  )
})

Html.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

Html.uiName = 'Html'

export default withStyles(styles)(Html)
