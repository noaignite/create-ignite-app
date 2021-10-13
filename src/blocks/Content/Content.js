import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Container } from '@mui/material'
import { Html } from 'components'

const ContentRoot = styled('section', {
  name: 'Content',
  slot: 'Root',
})({
  margin: 'var(--cia-section-spacing) 0',
  '.wp-block-video, .wp-block-embed__wrapper': {
    display: 'block',
    position: 'relative',
    width: '100%',
    '&::before': {
      content: '""',
      display: 'block',
      paddingBottom: 'calc(9/16 * 100%)', // 16:9 aspect ratio
    },
    '& > *': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    '& > video, & > picture, & > img': {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
  },
})

function Content(props) {
  const { children, content } = props

  const componentProps = {}
  if (content) {
    componentProps.dangerouslySetInnerHTML = { __html: content }
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
  content: PropTypes.string,
}

export default Content
