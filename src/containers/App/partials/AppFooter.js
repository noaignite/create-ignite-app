import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useGlobal } from 'containers/Global/GlobalContext'
import RouterLink from 'containers/RouterLink'
import Container from 'components/Container'
import Link from 'components/Link'
import Section from 'components/Section'
import { useApp } from '../AppContext'

export const useStyles = makeStyles((theme) => ({
  root: {
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

  const { menus } = useGlobal()

  return (
    <Section
      className={classnames(classes.root, className)}
      component="footer"
      spacingRule="padding"
      {...other}
    >
      <Container className={classes.mainDetails}>
        <nav className={classes.nav} aria-label="Main navigation">
          <ul className={classes.navlist}>
            {menus?.menuFooter.map((menuItem, idx) => (
              <li key={idx} className={classes.navlistItem}>
                <Link
                  className={classes.navlistItemText}
                  component={RouterLink}
                  as={menuItem.url}
                  href="/[...uri]"
                  variant="button"
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Section>
  )
})

AppFooter.propTypes = {
  className: PropTypes.string,
  onMarketMenuToggle: PropTypes.func,
}

function AppFooterContainer(props) {
  const { hideFooter } = useApp()

  if (hideFooter) {
    return null
  }

  return <AppFooter {...props} />
}

export default AppFooterContainer
