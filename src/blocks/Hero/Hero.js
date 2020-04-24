import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import BackgroundMedia from '@oakwood/oui/BackgroundMedia'
import Media from '@oakwood/oui/Media'
import MediaLoader from '@oakwood/oui/MediaLoader'
import { linkType, mediaType } from 'utils'
import RouterLink from 'containers/RouterLink'
import Button from 'components/Button'
import Container from 'components/Container'
import Section from 'components/Section'
import Typography from 'components/Typography'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '75vh',
    color: theme.palette.getContrastText(theme.palette.text.primary),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 650,
    },
  },
  content: {},
  backgroundContainer: {
    zIndex: -1,
  },
  backgroundWrapperSticky: {
    top: 'var(--coa-header-height)',
  },
  backgroundLoader: {
    height: '100%',
  },
  backgroundMedia: {
    height: '100%',
  },
  heading: {
    margin: 0,
  },
  heading1: theme.mixins.fluidType('sm', 'xl', 45, 132),
  heading2: theme.mixins.fluidType('sm', 'xl', 47, 144),
  cta: {
    position: 'static',
    marginTop: 'calc(20px + 5vw)',
    // Make entire component clicable
    '&::before': {
      ...theme.mixins.absolute(),
      content: '""',
    },
  },
})

const Hero = React.forwardRef(function Hero(props, ref) {
  const {
    backgroundAttachment = 'static',
    backgroundMediaProps,
    classes,
    className,
    cta,
    heading1,
    heading2,
    ...other
  } = props

  return (
    <Section className={classnames(classes.root, className)} disableSpacing ref={ref} {...other}>
      {backgroundMediaProps && (
        <BackgroundMedia
          classes={{
            root: classes.backgroundContainer,
            wrapperSticky: classes.backgroundWrapperSticky,
          }}
          attachment={backgroundAttachment}
        >
          <MediaLoader className={classes.backgroundLoader}>
            <Media
              className={classnames(classes.backgroundMedia, 'coa-preload')}
              {...(backgroundMediaProps?.component === 'video'
                ? { autoPlay: true, muted: true, loop: true, playsInline: true }
                : {})}
              {...backgroundMediaProps}
            />
          </MediaLoader>
        </BackgroundMedia>
      )}

      <Container className={classes.content} maxWidth="xl">
        <h1 className={classes.heading}>
          <Typography className={classes.heading1} component="span" display="block" variant="h2">
            {heading1}
          </Typography>

          <Typography className={classes.heading2} component="span" display="block" variant="h1">
            {heading2}
          </Typography>
        </h1>

        {cta?.url && (
          <Button className={classes.cta} component={RouterLink} href={cta.url} color="inherit">
            {cta?.label}
          </Button>
        )}
      </Container>
    </Section>
  )
})

Hero.propTypes = {
  backgroundAttachment: PropTypes.oneOf(['static', 'fixed', 'sticky']),
  backgroundMediaProps: mediaType,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  cta: linkType,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
}

Hero.uiName = 'Blocks/Hero'

export default withStyles(styles)(Hero)
