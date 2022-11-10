import * as React from 'react'
import PropTypes from 'prop-types'
import { Container, styled } from '@mui/material'
import { Html } from '~/components'

const ContentRoot = styled('section')({
  margin: 'var(--cia-section-spacing) 0',
})

function Content(props) {
  const { children, text } = props

  const componentProps = {}
  if (text) {
    componentProps.dangerouslySetInnerHTML = { __html: text }
  } else {
    componentProps.children = children
  }

  return (
    <ContentRoot>
      <Container maxWidth="md">
        <Html {...componentProps} />
      </Container>
    </ContentRoot>
  )
}

Content.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Content
