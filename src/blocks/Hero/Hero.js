import * as React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@mui/styles'
import { mediaType } from '@oakwood/oui-utils'
import { Media, MediaReveal } from '@oakwood/oui'
import { RouterLink } from 'containers'
import { Button, Container, Typography } from 'components'

const BREAKPOINT_KEY = 'sm'

export const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '75vh',
    color: theme.palette.getContrastText(theme.palette.text.primary),
    textAlign: 'center',
    [theme.breakpoints.up(BREAKPOINT_KEY)]: {
      minHeight: 650,
    },
  },
  background: {
    ...theme.mixins.absolute(0),
    zIndex: -1,
  },
  media: {
    height: '100%',
  },
  main: {},
  heading: theme.mixins.fluidType('sm', 'xl', 45, 132),
  excerpt: {
    ...theme.mixins.contain('sm'),
    marginTop: theme.spacing(2),
  },
  ctaArea: theme.mixins.absolute(0),
  cta: {
    marginTop: 'calc(20px + 3vh)',
  },
})

function Hero(props) {
  const { backgroundMediaProps, classes, ctaLabel, ctaUrl, heading, excerpt, renderIndex } = props

  return (
    <section className={classes.root}>
      {backgroundMediaProps && (
        <MediaReveal className={classes.background}>
          <Media
            className={classes.media}
            {...(backgroundMediaProps?.component === 'video'
              ? { autoPlay: true, muted: true, loop: true, playsInline: true }
              : {})}
            {...backgroundMediaProps}
            priority={renderIndex === 0}
          />
        </MediaReveal>
      )}

      <Container className={classes.main} maxWidth="md">
        <Typography className={classes.heading} component="h1" variant="h2">
          {heading}
        </Typography>

        <Typography className={classes.excerpt}>{excerpt}</Typography>

        {ctaUrl && <RouterLink className={classes.ctaArea} href={ctaUrl} aria-label={ctaLabel} />}

        {ctaLabel && ctaUrl && (
          <Button
            className={classes.cta}
            component={RouterLink}
            href={ctaUrl}
            color="inherit"
            variant="outlined"
          >
            {ctaLabel}
          </Button>
        )}
      </Container>
    </section>
  )
}

Hero.propTypes = {
  backgroundMediaProps: mediaType,
  classes: PropTypes.object.isRequired,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
  excerpt: PropTypes.string,
  heading: PropTypes.string,
  renderIndex: PropTypes.number.isRequired,
}

export default withStyles(styles)(Hero)
