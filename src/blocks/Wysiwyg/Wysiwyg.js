import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container'
import Html from 'components/Html'
import Section from 'components/Section'

const Wysiwyg = React.forwardRef(function Wysiwyg(props, ref) {
  const { children, ...other } = props

  return (
    <Section ref={ref} {...other}>
      <Container component={Html}>{children}</Container>
    </Section>
  )
})

Wysiwyg.propTypes = {
  children: PropTypes.node.isRequired,
}

Wysiwyg.uiName = 'Block/Wysiwyg'

export default Wysiwyg
