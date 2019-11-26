/**
 * Swiper React Wrapper
 *
 * Github: https://github.com/nolimits4web/swiper/
 * Demos: http://idangero.us/swiper/demos/
 * Docs: http://idangero.us/swiper/api/
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { useForkRef } from '@oakwood/oui-utils'
import { Swiper, A11y, Keyboard, Navigation, Pagination } from 'swiper/js/swiper.esm'
import 'swiper/css/swiper.min.css'
import { isUiElement } from '../utils'

Swiper.use([A11y, Keyboard, Navigation, Pagination])

export const defaultSwiperProps = {
  centerInsufficientSlides: true,
  slidesPerView: 'auto',
  watchOverflow: true,
}

const Slideshow = React.forwardRef(function Slideshow(props, ref) {
  const {
    activeIndex = 0,
    children,
    className,
    onSlideChange,
    onSlideChangeTransitionEnd,
    style,
    ...other
  } = props

  const {
    navigation: navigationProp = {},
    pagination: paginationProp = {},
    scrollbar: scrollbarProp = {},
    ...more
  } = other

  const rootRef = React.useRef(null)
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const paginationRef = React.useRef(null)
  const scrollbarRef = React.useRef(null)
  const swiperRef = React.useRef(null)

  React.useEffect(() => {
    const swiperProps = {
      initialSlide: activeIndex,
      ...defaultSwiperProps,
      ...more,
    }

    let navigationPrev = navigationPrevRef.current || navigationProp.prevEl
    if (navigationPrev != null && typeof navigationPrev === 'function') {
      navigationPrev = navigationPrev()
    }

    let navigationNext = navigationNextRef.current || navigationProp.nextEl
    if (navigationNext != null && typeof navigationNext === 'function') {
      navigationNext = navigationNext()
    }

    let pagination = paginationRef.current || paginationProp.el
    if (pagination != null && typeof pagination === 'function') {
      pagination = pagination()
    }

    let scrollbar = scrollbarRef.current || scrollbarProp.el
    if (scrollbar != null && typeof scrollbar === 'function') {
      scrollbar = pagination()
    }

    if (navigationPrev && navigationNext) {
      swiperProps.navigation = {
        ...swiperProps.navigation,
        ...navigationProp,
        prevEl: navigationPrev,
        nextEl: navigationNext,
      }
    }

    if (pagination) {
      swiperProps.pagination = {
        modifierClass: '', // Empty for lower css specificity.
        ...swiperProps.pagination,
        ...paginationProp,
        el: pagination,
      }
    }

    if (scrollbar) {
      swiperProps.scrollbar = {
        ...swiperProps.scrollbar,
        ...scrollbarProp,
        el: scrollbar,
      }
    }

    const swiper = new Swiper(rootRef.current, swiperProps)

    // Patch Swiper events with associated arguments as it doesn't provide them by default.
    if (onSlideChange) {
      swiper.on('slideChange', () => onSlideChange(swiper.activeIndex))
    }
    if (onSlideChangeTransitionEnd) {
      swiper.on('slideChangeTransitionEnd', () => onSlideChangeTransitionEnd(swiper.activeIndex))
    }

    // Store Swiper instance to allow for a controlled component via the `activeIndex` property.
    swiperRef.current = swiper

    return () => {
      swiperRef.current = null
      swiper.destroy()
    }

    // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSlideChange, onSlideChangeTransitionEnd, JSON.stringify(other)])

  React.useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex)
    }
  }, [activeIndex])

  let navigationPrev = null
  let navigationNext = null
  let pagination = null
  let scrollbar = null

  const slides = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null
    }
    if (isUiElement(child, ['SlideshowNavigation']) && child.props.variant === 'previous') {
      navigationPrev = child
      return null
    }
    if (isUiElement(child, ['SlideshowNavigation']) && child.props.variant === 'next') {
      navigationNext = child
      return null
    }
    if (isUiElement(child, ['SlideshowPagination'])) {
      pagination = child
      return null
    }
    if (isUiElement(child, ['SlideshowScrollbar'])) {
      scrollbar = child
      return null
    }
    return child
  })

  const handleRef = useForkRef(rootRef, ref)

  return (
    <div className={classnames('swiper-container', className)} ref={handleRef} style={style}>
      <div className="swiper-wrapper">{slides}</div>

      {navigationPrev && React.cloneElement(navigationPrev, { ref: navigationPrevRef })}
      {navigationNext && React.cloneElement(navigationNext, { ref: navigationNextRef })}
      {pagination && React.cloneElement(pagination, { ref: paginationRef })}
      {scrollbar && React.cloneElement(scrollbar, { ref: scrollbarRef })}
    </div>
  )
})

Slideshow.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSlideChange: PropTypes.func,
  onSlideChangeTransitionEnd: PropTypes.func,
  style: PropTypes.object,
}

Slideshow.uiName = 'Slideshow'

export default Slideshow
