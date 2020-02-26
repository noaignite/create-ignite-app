import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { A11y, Navigation, Pagination } from 'swiper/js/swiper.esm'
import Media from '@oakwood/oui/Media'
import SlideshowNavigation from '../SlideshowNavigation'
import SlideshowPagination from '../SlideshowPagination'
import SlideshowSlide from '../SlideshowSlide'
import Slideshow from './Slideshow'

const stories = storiesOf('Components/Slideshow', module)

stories.add('Default', () => (
  <Slideshow
    modules={[A11y, Navigation, Pagination]}
    navigation={{
      prevEl: <SlideshowNavigation variant="prev" aria-label="Previous Slide" />,
      nextEl: <SlideshowNavigation variant="next" aria-label="Next Slide" />,
    }}
    pagination={{
      el: <SlideshowPagination />,
      clickable: true,
    }}
    on={{
      init: action('init'),
      slideChange: action('slideChange'),
      // Register desired swiper event handlers...
    }}
    watchOverflow
    // For more settings visit http://idangero.us/swiper/api/
  >
    {Array.from(new Array(6), (val, idx) => (
      <SlideshowSlide key={idx}>
        <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
      </SlideshowSlide>
    ))}
  </Slideshow>
))

stories.add('External Controls', () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const paginationRef = React.useRef(null)

  return (
    <>
      <Slideshow
        navigation={{
          prevEl: () => navigationPrevRef.current,
          nextEl: () => navigationNextRef.current,
        }}
        pagination={{
          el: () => paginationRef.current,
          clickable: true,
        }}
      >
        {Array.from(new Array(6), (val, idx) => (
          <SlideshowSlide key={idx}>
            <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
          </SlideshowSlide>
        ))}
      </Slideshow>

      <div>
        <button type="button" ref={navigationPrevRef}>
          Prev
        </button>
        <button type="button" ref={navigationNextRef}>
          Next
        </button>
        <div ref={paginationRef} />
      </div>
    </>
  )
})

export default Slideshow
