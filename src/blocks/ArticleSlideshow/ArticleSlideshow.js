import * as React from 'react'
import PropTypes from 'prop-types'
import { useEmblaCarousel } from 'embla-carousel/react'
import { withStyles } from '@material-ui/styles'
// import { Media, MediaReveal } from '@oakwood/oui'
import { useI18n } from 'api'
// import { ASPECT_RATIOS } from 'utils/constants'
import { mediaType } from 'utils'
import { RouterLink } from 'containers'
import { Button, Container, Typography } from 'components'

function getSlideWidth(slidesPerView, spacing) {
  const totalSpacing = spacing * (slidesPerView - 1) // Subtract last slide spacing.
  return `calc(100% / ${slidesPerView} - ${Math.round(totalSpacing / slidesPerView)}px)`
}

export const styles = (theme) => ({
  root: {
    position: 'relative',
    margin: 'var(--coa-section-spacing) 0',
  },
  header: {
    textAlign: 'center',
  },
  main: {
    ...theme.mixins.gutters(4),
    marginTop: 'var(--coa-section-spacing)',
    overflow: 'hidden',
  },
  embla: {
    overflow: 'visible',
  },
  emblaContainer: {
    display: 'flex',
  },
  emblaSlide: {
    position: 'relative',
    flexShrink: 0,
    width: '100%',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
      width: getSlideWidth(2, theme.spacing(2)),
    },
    [theme.breakpoints.up('md')]: {
      width: getSlideWidth(3, theme.spacing(2)),
    },
    [theme.breakpoints.up('lg')]: {
      width: getSlideWidth(4, theme.spacing(2)),
    },
  },
  article: {},
  articleContent: {
    ...theme.mixins.verticalRhythm(1),
    padding: theme.spacing(2, 0),
  },
})

function ArticleSlideshow(props) {
  const { classes, heading, items } = props

  const { t } = useI18n()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <section className={classes.root}>
      {heading && (
        <Container className={classes.header} component="header" maxWidth="sm">
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </Container>
      )}

      <Container className={classes.main} maxWidth={false}>
        <div className={classes.embla} ref={emblaRef}>
          <div className={classes.emblaContainer}>
            {items?.map((item, idx) => (
              <div key={idx} className={classes.emblaSlide}>
                <article className={classes.article}>
                  {item.mediaProps && (
                    <RouterLink href={item.url}>
                      {/* <MediaReveal {...ASPECT_RATIOS.article}>
                        <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                      </MediaReveal> */}
                    </RouterLink>
                  )}

                  <div className={classes.articleContent}>
                    {item.subheading && (
                      <Typography variant="overline">{item.subheading}</Typography>
                    )}

                    <Typography component="h2" variant="h4" paragraph>
                      {item.heading}
                    </Typography>

                    <Typography variant="body1" paragraph>
                      {item.excerpt}
                    </Typography>

                    <Button component={RouterLink} href={item.url} variant="contained">
                      {t(__translationGroup)`Read more`}
                    </Button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

const itemType = PropTypes.shape({
  mediaProps: mediaType,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  excerpt: PropTypes.string,
  url: PropTypes.string,
})

ArticleSlideshow.propTypes = {
  classes: PropTypes.object.isRequired,
  heading: PropTypes.string,
  items: PropTypes.arrayOf(itemType),
}

export default withStyles(styles)(ArticleSlideshow)
