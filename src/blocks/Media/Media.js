import * as React from 'react'
import OuiMedia from '@oakwood/oui/Media'
import { mediaType } from 'utils'
import Container from 'components/Container'
import Section from 'components/Section'

const Media = React.forwardRef(function Media(props, ref) {
  const { mediaProps, ...other } = props

  return (
    <Section ref={ref} {...other}>
      <Container>
        <OuiMedia {...mediaProps} />
      </Container>
    </Section>
  )
})

Media.propTypes = {
  mediaProps: mediaType.isRequired,
}

export default Media
