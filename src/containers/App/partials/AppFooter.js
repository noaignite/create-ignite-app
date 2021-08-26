import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { useGlobal } from 'api'
import { Container, Link } from 'components'
import { useApp } from '../AppContext'
import RouterLink from '../../RouterLink'

export const useStyles = makeStyles((theme) => ({
  salesToolbar: {
    position: 'sticky',
    bottom: 0,
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),
    textAlign: 'center',
  },
  root: {
    padding: 'var(--coa-section-spacing) 0',
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),
  },
  nav: {},
  navlist: {
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
  },
  navlistItem: {
    marginLeft: theme.spacing(4),
    '&:first-child': {
      marginLeft: 0,
    },
  },
  navlistItemText: {},
}))

const AppFooter = React.memo(function AppFooter(props) {
  const { className, ...other } = props
  const classes = useStyles(props)

  const { menus, settings } = useGlobal()

  return (
    <>
      {settings?.globalSalesBanner && (
        <div className={classes.salesToolbar}>{settings.globalSalesBanner}</div>
      )}

      <footer className={clsx(classes.root, className)} {...other}>
        <Container className={classes.mainDetails}>
          <nav className={classes.nav}>
            <ul className={classes.navlist}>
              {menus.menuFooter?.map((menuItem, idx) => (
                <li key={idx} className={classes.navlistItem}>
                  <Link
                    className={classes.navlistItemText}
                    component={RouterLink}
                    href={menuItem.url}
                    variant="button"
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  )
})

AppFooter.propTypes = {
  className: PropTypes.string,
}

function AppFooterContainer(props) {
  const { hideFooter } = useApp()

  if (hideFooter) {
    return null
  }

  return <AppFooter {...props} />
}

export default AppFooterContainer
