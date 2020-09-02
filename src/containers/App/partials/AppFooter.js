import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { menuLinkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import Container from 'components/Container'
import Link from 'components/Link'
import Section from 'components/Section'

export const styles = (theme) => ({
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
})

const AppFooter = React.forwardRef(function AppFooter(props, ref) {
  const { classes, className, menu = [], ...other } = props

  return (
    <Section
      className={classnames(classes.root, className)}
      component="footer"
      ref={ref}
      {...other}
    >
      <Container className={classes.mainDetails}>
        <nav className={classes.nav} aria-label="Main navigation">
          <ul className={classes.navlist}>
            {menu.map((menuItem, idx) => (
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
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  menu: PropTypes.arrayOf(menuLinkType),
}

AppFooter.uiName = 'AppFooter'

export default withStyles(styles)(AppFooter)
