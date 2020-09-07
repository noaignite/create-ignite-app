// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Collapse from '@material-ui/core/Collapse'
import { menuLinkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import ExpandMoreIcon from 'components/icons/ExpandMore'
import Link from 'components/Link'
import { useAppHandlers } from '../AppContext'
import AppDrawer from './AppDrawer'

export const styles = (theme) => ({
  nav: {
    padding: theme.spacing(8, 2),
    textAlign: 'center',
  },
  subnav: {},
  navlist: {
    padding: 0,
    margin: 0,
    '$subnav &': {
      padding: theme.spacing(2, 0, 1),
    },
  },
  navlistItem: {
    padding: theme.spacing(1, 0),
  },
  navlistItemText: {
    display: 'block',
    width: '100%',
  },
  navlistItemIcon: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-100%, -50%)',
    marginLeft: theme.spacing(-1),
  },
  navlinks: {
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  navlinksItem: {
    display: 'block',
    padding: theme.spacing(2, 0),
    borderTop: `1px solid ${theme.palette.divider}`,
    '&:first-child': {
      borderTop: 'none',
    },
  },
})

const AppNavDrawer = React.forwardRef(function AppNavDrawer(props, ref) {
  const { classes, defaultExpanded = [], primary, open, ...other } = props

  const { onNavMenuClose } = useAppHandlers()

  const [expanded, setExpanded] = React.useState(defaultExpanded)

  const handleExited = React.useCallback(() => {
    setExpanded(defaultExpanded)
  }, [defaultExpanded])

  const handleClick = React.useCallback((event) => {
    const value = event.currentTarget.value

    setExpanded((prev) => {
      const next = Array.isArray(prev) ? [...prev] : []
      const itemIndex = next.indexOf(value)

      if (itemIndex === -1) {
        next.push(value)
      } else {
        next.splice(itemIndex, 1)
      }

      return next
    })
  }, [])

  return (
    <AppDrawer
      SlideProps={{ onExited: handleExited }}
      onClose={onNavMenuClose}
      open={open}
      anchor="left"
      ref={ref}
      {...other}
    >
      <nav className={classes.nav} aria-label="Main navigation">
        <ul className={classes.navlist}>
          {primary?.map((menuItem, idx) => {
            const submenu = menuItem.links
            const hasSubmenu = submenu?.length > 0
            const value = menuItem.url

            const topLinkProps = {}
            if (!hasSubmenu) {
              topLinkProps.component = RouterLink
              topLinkProps.as = menuItem.url
              topLinkProps.href = '[...uri]'
              topLinkProps.onClick = undefined
              topLinkProps.value = undefined
            }

            return (
              <li key={idx} className={classes.navlistItem}>
                <Link
                  className={classes.navlistItemText}
                  component={ButtonBase}
                  onClick={handleClick}
                  value={value}
                  underline="hover"
                  variant="h3"
                  {...topLinkProps}
                >
                  {hasSubmenu && <ExpandMoreIcon className={classes.navlistItemIcon} />}
                  {menuItem.label}
                </Link>

                {hasSubmenu && (
                  <Collapse className={classes.subnav} in={expanded.includes(value)} unmountOnExit>
                    <ul className={classes.navlist}>
                      {submenu?.map((subMenuItem, idx2) => (
                        <li key={idx2} className={classes.navlistItem}>
                          <Link
                            className={classes.navlistItemText}
                            component={RouterLink}
                            as={subMenuItem.url}
                            href="[...uri]"
                            underline="hover"
                            variant="body1"
                          >
                            {subMenuItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </AppDrawer>
  )
})

AppNavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  defaultExpanded: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
  primary: PropTypes.arrayOf(menuLinkType),
}

export default withStyles(styles)(React.memo(AppNavDrawer))
