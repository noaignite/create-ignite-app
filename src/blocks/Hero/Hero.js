import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Media from '@oakwood/oui/Media'
import MediaLoader from '@oakwood/oui/MediaLoader'
import { linkType, mediaType } from 'utils'
import RouterLink from 'containers/RouterLink'
import { aspectRatios } from 'components/styles/extras'
import Button from 'components/Button'
import Container from 'components/Container'
import Section from 'components/Section'
import Typography from 'components/Typography'

const ANIMATION_DURATION = 1250
const ANIMATION_DELAY = 200

export const styles = theme => ({
  root: {},
  isReady: {},
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      minHeight: 750,
    },
  },
  background: {
    ...theme.mixins.absolute(),
    zIndex: -1,
  },
  backgroundMedia: {
    height: '100%',
  },
  content: {
    textAlign: 'center',
  },
  heading: {
    margin: 0,
    color: theme.palette.getContrastText(theme.palette.text.primary),
  },
  heading1: theme.mixins.fluidType('sm', 'xl', 45, 132),
  heading2: theme.mixins.fluidType('sm', 'xl', 47, 144),
  button: {
    marginTop: 'calc(20px + 5vw)',
  },
  fadeIn: {
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: ANIMATION_DURATION,
    }),
    '$root:not($isReady) &': {
      transform: 'translate3d(0, 60px, 0)',
      opacity: 0,
    },
  },
})

const Hero = React.forwardRef(function Hero(props, ref) {
  const { backgroundMediaProps, classes, className, cta, heading1, heading2, ...other } = props

  const [isReady, setReady] = React.useState(false)
  const handleReady = React.useCallback(() => {
    setReady(true)
  }, [])

  return (
    <Section
      className={classnames(
        classes.root,
        {
          [classes.isReady]: isReady,
        },
        className,
      )}
      disableSpacing
      ref={ref}
      {...other}
    >
      <Container className={classes.container} maxWidth="xl">
        {backgroundMediaProps && (
          <MediaLoader
            className={classes.background}
            TransitionProps={{ onEnter: handleReady }}
            {...aspectRatios.hero}
          >
            <Media
              className={classnames(classes.backgroundMedia, 'coa-preload')}
              {...(backgroundMediaProps?.component === 'video'
                ? { autoPlay: true, muted: true, loop: true, playsInline: true }
                : {})}
              {...backgroundMediaProps}
            />
          </MediaLoader>
        )}

        <div className={classes.content}>
          <h1 className={classes.heading}>
            <Typography
              className={classnames(classes.heading1, classes.fadeIn)}
              component="span"
              display="block"
              variant="h2"
              style={{ transitionDuration: `${ANIMATION_DELAY * 2}ms` }}
            >
              {heading1}
            </Typography>

            <Typography
              className={classnames(classes.heading2, classes.fadeIn)}
              component="span"
              display="block"
              variant="h1"
              style={{ transitionDuration: `${ANIMATION_DELAY * 3}ms` }}
            >
              {heading2}
            </Typography>
          </h1>

          {cta?.label && (
            <Button
              className={classnames(classes.button, classes.fadeIn)}
              component={RouterLink}
              href={cta.url}
              style={{ transitionDuration: `${ANIMATION_DELAY * 4}ms` }}
            >
              {cta.label}
            </Button>
          )}
        </div>
      </Container>
    </Section>
  )
})

Hero.propTypes = {
  backgroundMediaProps: mediaType,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  cta: linkType,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
}

Hero.uiName = 'Blocks/Hero'

export default withStyles(styles)(Hero)
