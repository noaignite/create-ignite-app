import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Media from '@oakwood/oui/Media'
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/js/swiper.esm'
import SlideshowSlide from '../SlideshowSlide'
import Slideshow from './Slideshow'

const stories = storiesOf('Components/Slideshow', module)

export const Default = () => (
  <Slideshow
    modules={[A11y, Keyboard, Navigation, Pagination]}
    navigation={{
      prevEl: <div className="swiper-button-prev" />,
      nextEl: <div className="swiper-button-next" />,
    }}
    pagination={{
      el: <div className="swiper-pagination" />,
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
