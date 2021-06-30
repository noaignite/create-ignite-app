import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Backdrop } from 'components'

export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.appBar - 1,
  },
}))

const AppLoader = React.memo(function AppLoader(props) {
  const { className, ...other } = props
  const classes = useStyles(props)

  const [loading, setLoading] = React.useState(false)

  const handleRouteChangeStart = React.useCallback(() => {
    setLoading(true)
  }, [])

  const handleRouteChangeComplete = React.useCallback(() => {
    setLoading(false)
  }, [])

  React.useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleRouteChangeStart, handleRouteChangeComplete])

  return (
    <Backdrop className={clsx(classes.root, className)} open={loading} unmountOnExit {...other}>
      <CircularProgress />
    </Backdrop>
  )
})

AppLoader.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
}

export default AppLoader
