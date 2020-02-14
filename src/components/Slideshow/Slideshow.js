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
import { isUiElement } from '../utils'

Swiper.use([A11y, Keyboard, Navigation, Pagination])

const Slideshow = React.forwardRef(function Slideshow(props, ref) {
  const {
    activeIndex = 0,
    children: childrenProp,
    className,
    component: Component = 'div',
    disableTouchMove,
    init = true,
    style,
    ...other
  } = props

  const {
    navigation: navigationProp = {},
    pagination: paginationProp = {},
    scrollbar: scrollbarProp = {},
    on = {},
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
      init: false,
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
      scrollbar = scrollbar()
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
    swiperRef.current = swiper

    // Patch Swiper events with no arguments with Swiper instance.
    Object.entries(on).forEach(([eventName, callback]) => {
      swiper.on(eventName, (...args) => (args.length ? callback(...args) : callback(swiper)))
    })

    return () => {
      swiperRef.current = null
      if (swiper.initialized) {
        swiper.destroy()
      }
    }

    // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(other)])

  React.useEffect(() => {
    const swiper = swiperRef.current
    if (swiper && !swiper.initialized && init) {
      swiper.init()
    }
  }, [init])

  React.useEffect(() => {
    const swiper = swiperRef.current
    if (swiper && swiper.initialized) {
      swiper.slideTo(activeIndex)
    }
  }, [activeIndex])

  React.useEffect(() => {
    const swiper = swiperRef.current
    if (swiper && swiper.allowTouchMove && disableTouchMove) {
      swiper.allowTouchMove = false
    } else if (swiper && !swiper.allowTouchMove && !disableTouchMove) {
      swiper.allowTouchMove = true
    }
  }, [disableTouchMove])

  let navigationPrev = null
  let navigationNext = null
  let pagination = null
  let scrollbar = null

  const children = React.Children.map(childrenProp, child => {
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
    <Component className={classnames('swiper-container', className)} ref={handleRef} style={style}>
      {children}

      {navigationPrev && React.cloneElement(navigationPrev, { ref: navigationPrevRef })}
      {navigationNext && React.cloneElement(navigationNext, { ref: navigationNextRef })}
      {pagination && React.cloneElement(pagination, { ref: paginationRef })}
      {scrollbar && React.cloneElement(scrollbar, { ref: scrollbarRef })}
    </Component>
  )
})

Slideshow.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disableTouchMove: PropTypes.bool,
  init: PropTypes.bool,
  style: PropTypes.object,
}

Slideshow.uiName = 'Slideshow'

export default Slideshow
