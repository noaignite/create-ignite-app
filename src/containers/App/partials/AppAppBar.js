// @inheritedComponent AppBar

import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { debounce, useForkRef } from '@oakwood/oui-utils'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from 'components/AppBar'

export const styles = (theme) => ({
  root: {},
  transitions: {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.shortest, // Match value of `IconButton`
    }),
  },
  transparent: {
    '&:not(:hover):not(:focus-within)': {
      backgroundColor: 'transparent',
      color: 'inherit',
    },
  },
})

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const AppAppBar = React.forwardRef(function AppAppBar(props, ref) {
  const {
    children,
    classes,
    className,
    color: colorProp = 'default',
    disableTransparency: disableTransparencyProp,
    ...other
  } = props

  const rootRef = React.useRef(null)
  const handleRef = useForkRef(rootRef, ref)

  const [height, setHeight] = React.useState(0)
  const syncHeight = React.useCallback(() => {
    setHeight(rootRef.current.clientHeight)
  }, [])

  React.useEffect(() => {
    const handleResize = debounce(() => {
      syncHeight()
    })

    window.addEventListener('resize', handleResize)
    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
    }
  }, [syncHeight])

  useEnhancedEffect(() => {
    syncHeight()
  })

  const [disableTransparency, setDisableTransparency] = React.useState(undefined)
  const syncDisableTransparency = React.useCallback(() => {
    setDisableTransparency(window.pageYOffset > 100)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      syncDisableTransparency()
    }

    if (colorProp === 'auto') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Define `disableTransparency` value on `color` prop change, thereby
    // enabling transitions. Doing so negates flashing of header on page load
    // for pages that don't use `color="default"`.
    return syncDisableTransparency
  }, [colorProp, syncDisableTransparency])

  let color = disableTransparencyProp ? 'default' : colorProp
  if (color === 'auto') {
    color = disableTransparency ? 'default' : 'transparent'
  }

  return (
    <AppBar
      className={classnames(
        classes.root,
        {
          [classes.transitions]: disableTransparency !== undefined, // Enable transitions once defined
          [classes.transparent]: color === 'transparent',
        },
        className,
      )}
      ref={handleRef}
      {...other}
    >
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --coa-header-height: ${height}px;
            --coa-initial-sticky-top: ${colorProp === 'default' ? height : 0}px;
            --coa-sticky-top: ${colorProp !== 'transparent' ? height : 0}px;
          }
        `,
        }}
      />
      {children}
    </AppBar>
  )
})

AppAppBar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'transparent', 'auto']),
  disableTransparency: PropTypes.bool,
}

export default withStyles(styles)(React.memo(AppAppBar))
