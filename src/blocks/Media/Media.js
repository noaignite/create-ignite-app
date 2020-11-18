import * as React from 'react'
import OuiMedia from '@oakwood/oui/Media'
import MediaReveal from '@oakwood/oui/MediaReveal'
import { mediaType } from 'utils'
import Container from 'components/Container'
import Section from 'components/Section'

function Media(props) {
  const { mediaProps } = props

  return (
    <Section disableSpacing>
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
}

Media.propTypes = {
  mediaProps: mediaType.isRequired,
}

export default Media
