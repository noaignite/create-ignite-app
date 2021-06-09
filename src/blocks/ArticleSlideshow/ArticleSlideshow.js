import * as React from 'react'
import PropTypes from 'prop-types'
import SwiperCore, { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import withStyles from '@material-ui/core/styles/withStyles'
import Media from '@oakwood/oui/Media'
import MediaReveal from '@oakwood/oui/MediaReveal'
import { ASPECT_RATIOS } from 'utils/constants'
import { mediaType } from 'utils'
import RouterLink from 'containers/RouterLink'
import BlockButton from 'components/BlockButton'
import Button from 'components/Button'
import Container from 'components/Container'
import Section from 'components/Section'
import Typography from 'components/Typography'

function getSlideWidth(slidesPerView, spacing) {
  const totalSpacing = spacing * (slidesPerView - 1) // Subtract last slide spacing.
  return `calc(100% / ${slidesPerView} - ${Math.round(totalSpacing / slidesPerView)}px)`
}

export const styles = (theme) => ({
  root: {},
  header: {
    textAlign: 'center',
  },
  main: {
    ...theme.mixins.gutters(4),
    marginTop: 'var(--coa-section-spacing)',
    overflow: 'hidden',
  },
  slideshow: {
    overflow: 'visible',
  },
  slide: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: getSlideWidth(2, theme.spacing(2)),
    },
    [theme.breakpoints.up('md')]: {
      width: getSlideWidth(3, theme.spacing(2)),
    },
  },
  article: {},
  articleContent: {
    ...theme.mixins.verticalRhythm(1),
    padding: theme.spacing(3),
  },
})

function ArticleSlideshow(props) {
  const { classes, heading, items } = props

  SwiperCore.use([A11y])

  return (
    <Section className={classes.root} gutters="margin">
      {heading && (
        <Container className={classes.header} component="header" maxWidth="sm">
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </Container>
      )}

      <Container className={classes.main} maxWidth={false}>
        <Swiper className={classes.slideshow} centerInsufficientSlides slidesPerView="auto">
          {items?.map((item, idx) => (
            <SwiperSlide key={idx} className={classes.slide}>
              <article className={classes.article}>
                {item.mediaProps && (
                  <BlockButton component={RouterLink} href={item.url}>
                    <MediaReveal {...ASPECT_RATIOS.article}>
                      <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                    </MediaReveal>
                  </BlockButton>
                )}

                <div className={classes.articleContent}>
                  {item.subheading && <Typography variant="overline">{item.subheading}</Typography>}

                  <Typography component="h2" variant="h4" paragraph>
                    {item.heading}
                  </Typography>

                  <Typography variant="body1" paragraph>
                    {item.excerpt}
                  </Typography>

                  <Button component={RouterLink} href={item.url} variant="contained">
                    Read more
                  </Button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
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
