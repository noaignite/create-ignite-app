import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Media from '@oakwood/oui/Media'
import SlideshowNavigation from '../SlideshowNavigation'
import SlideshowPagination from '../SlideshowPagination'
import SlideshowSlide from '../SlideshowSlide'
import SlideshowSlides from '../SlideshowSlides'
import Slideshow from './Slideshow'

const stories = storiesOf('Components/Slideshow', module)

const SlideshowStory = () => (
  <Slideshow
    activeIndex={number('activeIndex', 0)}
    autoHeight={boolean('autoHeight', false)}
    loop={boolean('loop', false)}
    on={{
      // Register desired swiper event handlers...
      slideChange: action('slideChange'),
    }}
    // For more settings se http://idangero.us/swiper/api/
  >
    <SlideshowSlides>
      {Array.from(new Array(6), (val, idx) => (
        <SlideshowSlide key={idx}>
          <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
        </SlideshowSlide>
      ))}
    </SlideshowSlides>

    <SlideshowNavigation variant="previous" />
    <SlideshowNavigation variant="next" />
    <SlideshowPagination />
  </Slideshow>
)

const SlideshowCustomStory = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const paginationRef = React.useRef(null)

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 50%' }}>
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
          <SlideshowSlides>
            {Array.from(new Array(6), (val, idx) => (
              <SlideshowSlide key={idx}>
                <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
              </SlideshowSlide>
            ))}
          </SlideshowSlides>
        </Slideshow>
      </div>

      <div>
        <div>
          <button type="button" ref={navigationPrevRef}>
            Prev
          </button>
          <button type="button" ref={navigationNextRef}>
            Next
          </button>
        </div>
        <div ref={paginationRef} />
      </div>
    </div>
  )
}

stories.add('Default', SlideshowStory)
stories.add('Custom Controls', () => <SlideshowCustomStory />)

export default Slideshow
