import * as React from 'react'
import PropTypes from 'prop-types'
import { Button, styled, Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { RouterLink } from '~/containers'

const HeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 550,
  color: theme.vars.palette.common.white, // Use `common.white` as color is based on image not theme mode.
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
}))

const HeroMediaReveal = styled(MediaReveal)({
  position: 'absolute',
  zIndex: -1,
  inset: 0,
  '& *:not(style)': {
    height: '100%',
  },
})

const HeroMain = styled('div')(({ theme }) => ({
  ...theme.mixins.contain('sm'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingInline: 'var(--cia-container-spacing)',
}))

const HeroHeading = styled('h1')(({ theme }) => ({
  ...theme.typography.h3,
  margin: 0,
  fontSize: `max(${theme.typography.h3.fontSize}, 3.2vw)`,
}))

const HeroButton = styled(Button)({
  // Makes entire Hero block clickable.
  position: 'static',
  '&:before': {
    position: 'absolute',
    inset: 0,
    content: '""',
  },
})

function Hero(props) {
  const { mediaProps, ctaLabel, ctaUrl, heading, excerpt, renderIndex } = props

  return (
    <HeroRoot>
      {mediaProps && (
        <HeroMediaReveal>
          <Media
            {...(mediaProps?.component === 'video'
              ? {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                  playsInline: true,
                }
              : { alt: '' })}
            {...mediaProps}
            priority={renderIndex === 0}
          />
        </HeroMediaReveal>
      )}

      <HeroMain>
        <HeroHeading>{heading}</HeroHeading>

        {excerpt && <Typography>{excerpt}</Typography>}

        {ctaLabel && ctaUrl && (
          <HeroButton
            data-mui-color-scheme="dark"
            component={RouterLink}
            href={ctaUrl}
            variant="outlined"
          >
            {ctaLabel}
          </HeroButton>
        )}
      </HeroMain>
    </HeroRoot>
  )
}

Hero.propTypes = {
  mediaProps: PropTypes.object,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
  excerpt: PropTypes.string,
  heading: PropTypes.string.isRequired,
  renderIndex: PropTypes.number,
}

export default Hero
