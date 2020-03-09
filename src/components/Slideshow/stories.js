import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Media from '@oakwood/oui/Media'
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/js/swiper.esm'
import SlideshowNavigation from '../SlideshowNavigation'
import SlideshowPagination from '../SlideshowPagination'
import SlideshowSlide from '../SlideshowSlide'
import Slideshow from './Slideshow'

const stories = storiesOf('Components/Slideshow', module)

export const Default = () => (
  <Slideshow
    modules={[A11y, Keyboard, Navigation, Pagination]}
    navigation={{
      prevEl: <SlideshowNavigation variant="prev" aria-label="Previous slide" />,
      nextEl: <SlideshowNavigation variant="next" aria-label="Next slide" />,
    }}
    pagination={{
      el: <SlideshowPagination />,
      clickable: true,
    }}
    keyboard
  >
    {Array.from(new Array(6), (val, idx) => (
      <SlideshowSlide key={idx}>
        <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
      </SlideshowSlide>
    ))}
  </Slideshow>
)

stories.add('Default', Default)

export default Slideshow
