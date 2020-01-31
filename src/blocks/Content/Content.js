import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container'
import Html from 'components/Html'
import Section from 'components/Section'

const Content = React.forwardRef(function Content(props, ref) {
  const { children, content, ...other } = props

  const componentProps = {}
  if (content) {
    componentProps.dangerouslySetInnerHTML = { __html: content }
  } else {
    componentProps.children = children
  }

  return (
    <Section ref={ref} {...other}>
      <Container>
        <Html {...componentProps} />
      </Container>
    </Section>
  )
})

Content.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
}

Content.uiName = 'Block/Content'

export default Content
