import * as React from 'react'
import SwiperCore, { A11y, Keyboard, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Media from '@oakwood/oui/Media'

export default {
  title: 'Components/Swiper',
  component: Swiper,
}

SwiperCore.use([A11y, Keyboard, Navigation, Pagination])

const Template = (args) => (
  <Swiper {...args}>
    {Array.from(new Array(6), (val, idx) => (
      <SwiperSlide key={idx}>
        <Media component="img" src={`//placekitten.com/800/${400 - idx}`} />
      </SwiperSlide>
    ))}
    <div className="swiper-button-prev" />
    <div className="swiper-button-next" />
    <div className="swiper-pagination" />
  </Swiper>
)

export const Default = Template.bind({})
Default.args = {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
}
