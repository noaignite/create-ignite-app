import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
  root: {
    ...theme.typography.body1,
    '@global': {
      h1: theme.typography.h3,
      h2: theme.typography.h4,
      h3: theme.typography.h5,
      h4: theme.typography.h6,
      h5: theme.typography.h6,
      h6: theme.typography.h6,
      'h1, h2, h3, h4, h5, h6, p, ol, ul, figure, img': {
        margin: '1.2em auto 0',
        '&:first-child': {
          marginTop: 0,
        },
      },
      blockquote: {
        margin: '2.8em auto',
        textAlign: 'center',
        '& p': {
          ...theme.typography.h3,
          maxWidth: 'initial',
        },
        '& cite': theme.typography.caption,
      },
      figure: {
        margin: '2.8em auto',
      },
      figcaption: {
        ...theme.mixins.container,
        ...theme.typography.caption,
        margin: theme.spacing(2, 0, 0),
      },
      'ol, ul': {
        paddingLeft: '1.25em',
      },
      img: {
        display: 'block',
        width: '100%',
      },
      hr: {
        height: 1,
        border: 'none',
        backgroundColor: theme.palette.divider,
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
      },
    },
  },
})

const Html = React.forwardRef(function Html(props, ref) {
  const { className, classes, component: Component = 'div', ...other } = props

  return <Component className={clsx(classes.root, className)} ref={ref} {...other} />
})

Html.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

export default withStyles(styles)(Html)
