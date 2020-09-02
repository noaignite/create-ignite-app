import * as React from 'react'
import { Keyboard, Navigation, Pagination } from 'swiper/js/swiper.esm'
import Media from '@oakwood/oui/Media'
import SlideshowSlide from '../SlideshowSlide'
import Slideshow from './Slideshow'

export default {
  title: 'Components/Slideshow',
  component: Slideshow,
}

const Template = (args) => (
  <Slideshow {...args}>
    {Array.from(new Array(6), (val, idx) => (
      <SlideshowSlide key={idx}>
        <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
      </SlideshowSlide>
    ))}
  </Slideshow>
)

export const Default = Template.bind({})
Default.args = {
  modules: [Keyboard, Navigation, Pagination],
  navigation: {
    prevEl: <div className="swiper-button-prev" />,
    nextEl: <div className="swiper-button-next" />,
  },
  pagination: {
    el: <div className="swiper-pagination" />,
    clickable: true,
  },
  keyboard: true,
}
