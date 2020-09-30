import * as React from 'react'
import OuiMedia from '@oakwood/oui/Media'
import MediaReveal from '@oakwood/oui/MediaReveal'
import { mediaType } from 'utils'
import Container from 'components/Container'
import Section from 'components/Section'

const Media = React.forwardRef(function Media(props, ref) {
  const { mediaProps, ...other } = props

  return (
    <Section disableSpacing ref={ref} {...other}>
      <Container>
        <MediaReveal>
          <OuiMedia
            {...(mediaProps?.component === 'video'
              ? { autoPlay: true, muted: true, loop: true, playsInline: true }
              : {})}
            {...mediaProps}
            lazy
          />
        </MediaReveal>
      </Container>
    </Section>
  )
})

Media.propTypes = {
  mediaProps: mediaType.isRequired,
}

export default Media
