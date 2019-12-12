import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'

const SlideshowSlides = React.forwardRef(function SlideshowSlides(props, ref) {
  const { children, className, component: Component = 'div', ...other } = props

  return (
    <Component className={classnames('swiper-wrapper', className)} ref={ref} {...other}>
      {children}
    </Component>
  )
})

SlideshowSlides.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

SlideshowSlides.uiName = 'SlideshowSlides'

export default SlideshowSlides
