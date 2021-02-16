import * as React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import BackgroundMedia from '@oakwood/oui/BackgroundMedia'
import Media from '@oakwood/oui/Media'
import MediaReveal from '@oakwood/oui/MediaReveal'
import { mediaType } from 'utils'
import RouterLink from 'containers/RouterLink'
import BlockButton from 'components/BlockButton'
import Button from 'components/Button'
import Container from 'components/Container'
import Section from 'components/Section'
import Typography from 'components/Typography'

const BREAKPOINT_KEY_UP = 'sm'

export const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '75vh',
    color: theme.palette.getContrastText(theme.palette.text.primary),
    textAlign: 'center',
    [theme.breakpoints.up(BREAKPOINT_KEY_UP)]: {
      minHeight: 650,
    },
  },
  content: {},
  backgroundWrapperSticky: {
    top: 'var(--coa-sticky-top)',
    '$root:first-child &': {
      top: 'var(--coa-initial-sticky-top)',
    },
  },
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
  const {
    backgroundAttachment = 'static',
    backgroundMediaProps,
    classes,
    ctaLabel,
    ctaUrl,
    heading,
    excerpt,
    renderIndex,
  } = props

  return (
    <Section className={classes.root} disableSpacing>
      {backgroundMediaProps && (
        <BackgroundMedia
          classes={{ wrapperSticky: classes.backgroundWrapperSticky }}
          attachment={backgroundAttachment}
        >
          <MediaReveal>
            <Media
              {...(backgroundMediaProps?.component === 'video'
                ? { autoPlay: true, muted: true, loop: true, playsInline: true }
                : {})}
              {...backgroundMediaProps}
              priority={renderIndex === 0}
            />
          </MediaReveal>
        </BackgroundMedia>
      )}

      <Container className={classes.content} maxWidth="md">
        <Typography className={classes.heading} component="h1" variant="h2">
          {heading}
        </Typography>

        <Typography className={classes.excerpt}>{excerpt}</Typography>

        {ctaUrl && (
          <BlockButton
            className={classes.ctaArea}
            component={RouterLink}
            href={ctaUrl}
            aria-label={ctaLabel}
          />
        )}

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
    </Section>
  )
}

Hero.propTypes = {
  backgroundAttachment: PropTypes.oneOf(['static', 'fixed', 'sticky']),
  backgroundMediaProps: mediaType,
  classes: PropTypes.object.isRequired,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
  excerpt: PropTypes.string,
  heading: PropTypes.string,
  renderIndex: PropTypes.number.isRequired,
}

export default withStyles(styles)(Hero)
