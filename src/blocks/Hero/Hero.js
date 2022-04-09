import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { RouterLink } from '~/containers'

const HeroRoot = styled('section', {
  name: 'Hero',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 550,
  color: theme.palette.common.white, // Use `common.white` as color is based on image not theme mode.
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
}))

const HeroMediaReveal = styled(MediaReveal, {
  name: 'Hero',
  slot: 'MediaReveal',
})(({ theme }) => ({
  ...theme.mixins.absolute(0),
  zIndex: -1,
  '& *:not(style)': {
    height: '100%',
  },
}))

const HeroMain = styled('div', {
  name: 'Hero',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  ...theme.mixins.contain('sm'),
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
}))

const HeroHeading = styled('h1', {
  name: 'Hero',
  slot: 'Heading',
})(({ theme }) => ({
  ...theme.typography.h3,
  margin: 0,
  fontSize: `max(${theme.typography.h3.fontSize}, 3.2vw)`,
}))

const HeroButton = styled(Button, {
  name: 'Hero',
  slot: 'Button',
})(({ theme }) => ({
  // Makes entire Hero block clickable.
  position: 'static',
  '&:before': {
    ...theme.mixins.absolute(0),
    content: '""',
  },
}))

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
          <HeroButton component={RouterLink} href={ctaUrl} color="inherit" variant="outlined">
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
  renderIndex: PropTypes.number.isRequired,
}

export default Hero
