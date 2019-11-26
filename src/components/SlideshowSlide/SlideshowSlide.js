import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'

const SlideshowSlide = React.forwardRef(function SlideshowSlide(props, ref) {
  const { children, className, component: Component = 'div', ...other } = props

  return (
    <Component className={classnames('swiper-slide', className)} ref={ref} {...other}>
      {children}
    </Component>
  )
})

SlideshowSlide.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

SlideshowSlide.uiName = 'SlideshowSlide'

export default SlideshowSlide
