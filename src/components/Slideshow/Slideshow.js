import * as React from 'react'
import Rwiper from '@oakwood/oui/Rwiper'
import { Swiper } from 'swiper/js/swiper.esm'

const Slideshow = React.forwardRef(function Slideshow(props, ref) {
  return <Rwiper Swiper={Swiper} ref={ref} {...props} />
})

Slideshow.uiName = 'Slideshow'

export default Slideshow
