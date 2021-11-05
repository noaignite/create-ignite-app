import * as React from 'react'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { styled } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { useI18n } from 'api'
import { ASPECT_RATIOS } from 'utils/constants'
import { RouterLink } from 'containers'

const ArticleSlideshowRoot = styled('section', {
  name: 'ArticleSlideshow',
  slot: 'Root',
})({
  position: 'relative',
  margin: 'var(--cia-section-spacing) 0',
})

const ArticleSlideshowHeader = styled('header', {
  name: 'ArticleSlideshow',
  slot: 'Header',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  marginBottom: 'var(--cia-section-spacing)',
  textAlign: 'center',
})

const ArticleSlideshowMain = styled('div', {
  name: 'ArticleSlideshow',
  slot: 'Main',
})({
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  overflow: 'hidden',
})

const ArticleSlideshowEmblaContainer = styled('div', {
  name: 'ArticleSlideshow',
  slot: 'EmblaContainer',
})(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(-2),
}))

const ArticleSlideshowEmblaSlide = styled('div', {
  name: 'ArticleSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% / 2)',
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 3)',
  },
}))

const ArticleSlideshowArticleContent = styled('div', {
  name: 'ArticleSlideshow',
  slot: 'EmblaSlide',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(1),
  padding: theme.spacing(2, 0),
}))

function ArticleSlideshow(props) {
  const { heading, items } = props

  const { t } = useI18n()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <ArticleSlideshowRoot>
      {heading && (
        <ArticleSlideshowHeader>
          <Typography component="h1" variant="h4">
            {heading}
          </Typography>
        </ArticleSlideshowHeader>
      )}

      <ArticleSlideshowMain>
        <div ref={emblaRef}>
          <ArticleSlideshowEmblaContainer>
            {items?.map((item, idx) => (
              <ArticleSlideshowEmblaSlide key={idx}>
                <article>
                  {item.mediaProps && (
                    <RouterLink href={item.url}>
                      <MediaReveal {...ASPECT_RATIOS.article}>
                        <Media {...ASPECT_RATIOS.article} {...item.mediaProps} />
                      </MediaReveal>
                    </RouterLink>
                  )}

                  <ArticleSlideshowArticleContent>
                    {item.subheading && (
                      <Typography variant="overline">{item.subheading}</Typography>
                    )}

                    <Typography component="h2" variant="h4" paragraph>
                      {item.heading}
                    </Typography>

                    <Typography variant="body1" paragraph>
                      {item.excerpt}
                    </Typography>

                    <Button
                      component={RouterLink}
                      href={item.url}
                      color="primary"
                      variant="contained"
                    >
                      {t(__translationGroup)`Read more`}
                    </Button>
                  </ArticleSlideshowArticleContent>
                </article>
              </ArticleSlideshowEmblaSlide>
            ))}
          </ArticleSlideshowEmblaContainer>
        </div>
      </ArticleSlideshowMain>
    </ArticleSlideshowRoot>
  )
}

const itemType = PropTypes.shape({
  mediaProps: PropTypes.object,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  excerpt: PropTypes.string,
  url: PropTypes.string,
})

ArticleSlideshow.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.arrayOf(itemType),
}

export default ArticleSlideshow
