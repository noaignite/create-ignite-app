import * as React from 'react'
import PropTypes from 'prop-types'
import { mediaType } from '@noaignite/oui/utils'
import { Media as OuiMedia, MediaReveal } from '@noaignite/oui'

function Media(props) {
  const { mediaProps, renderIndex } = props

  return (
    <section>
      <MediaReveal width={mediaProps.width} height={mediaProps.height}>
        <OuiMedia
          {...(mediaProps?.component === 'video'
            ? { autoPlay: true, muted: true, loop: true, playsInline: true }
            : {})}
          {...mediaProps}
          priority={renderIndex === 0}
        />
      </MediaReveal>
    </section>
  )
}

Media.propTypes = {
  mediaProps: mediaType.isRequired,
  renderIndex: PropTypes.number.isRequired,
}

export default Media
