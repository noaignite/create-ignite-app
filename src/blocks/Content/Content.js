import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Container from 'components/Container'
import Html from 'components/Html'
import Section from 'components/Section'

export const styles = (theme) => ({
  root: {
    '@global': {
      'h1, h2, h3, h4, h5, h6, p, ol, ul': {
        maxWidth: theme.breakpoints.values.sm,
      },
      blockquote: {
        maxWidth: theme.breakpoints.values.lg,
      },
      'figure, img': {
        maxWidth: '100%',
        [theme.breakpoints.up('lg')]: {
          maxWidth: theme.breakpoints.values.md,
        },
      },
    },
  },
})

const Content = React.forwardRef(function Content(props, ref) {
  const { children, classes, className, content, ...other } = props

  const componentProps = {}
  if (content) {
    componentProps.dangerouslySetInnerHTML = { __html: content }
  } else {
    componentProps.children = children
  }

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <Container>
        <Html {...componentProps} />
      </Container>
    </Section>
  )
})

Content.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  content: PropTypes.string,
}

Content.uiName = 'Block/Content'

export default withStyles(styles)(Content)
