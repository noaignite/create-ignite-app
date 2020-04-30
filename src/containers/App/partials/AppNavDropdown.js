import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { menuLinkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import Container from 'components/Container'
import Link from 'components/Link'
import Toolbar from 'components/Toolbar'

export const styles = (theme) => ({
  root: {
    ...theme.mixins.absolute(0, 0, undefined),
    display: 'flex',
    justifyContent: 'center',
    pointerEvents: 'none',
    '& > *': {
      pointerEvents: 'auto',
    },
  },
  subnav: {
    ...theme.mixins.fixed('var(--coa-header-height)', 0, undefined),
    padding: theme.spacing(5, 0),
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['visibility', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
    '$navlistItem:not(:hover):not(:focus-within) &': {
      visibility: 'hidden',
      opacity: 0,
    },
  },
  subnavContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  navlist: {
    position: 'static', // Reset MuiToolbar
    alignItems: 'stretch',
    padding: 0,
    margin: 0,
    '$subnav &': {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(3, 1fr)',
      flex: '0 1 800px',
    },
  },
  navlistItem: {
    // Mimic `Button` hover transition
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover, &:focus-within': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  navlistItemText: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(0, 2),
    '$subnav &': {
      padding: 0,
    },
  },
  mediaContainer: {
    flex: '0 0 300px',
  },
})

const AppNavDropdown = React.forwardRef(function AppNavDropdown(props, ref) {
  const { classes, className, primary, ...other } = props

  return (
    <nav
      className={classnames(classes.root, className)}
      ref={ref}
      aria-label="Main navigation"
      {...other}
    >
      <Toolbar className={classes.navlist} component="ul">
        {primary?.map((menuItem, idx) => {
          const submenu = menuItem.links
          const hasSubmenu = submenu?.length > 0

          return (
            <li key={idx} className={classes.navlistItem}>
              <Link // eslint-disable-line jsx-a11y/anchor-is-valid
                className={classes.navlistItemText}
                component={RouterLink}
                href={menuItem.url}
                underline="none"
                variant="subtitle1"
              >
                {menuItem.label}
              </Link>

              {hasSubmenu && (
                <div className={classes.subnav}>
                  <Container className={classes.subnavContainer}>
                    <ul className={classes.navlist}>
                      {submenu?.map((subMenuItem, idx2) => (
                        <li key={idx2} className={classes.navlistItem}>
                          <Link // eslint-disable-line jsx-a11y/anchor-is-valid
                            className={classes.navlistItemText}
                            component={RouterLink}
                            href={subMenuItem.url}
                            underline="hover"
                            variant="body1"
                          >
                            {subMenuItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className={classes.mediaContainer}>
                      {menuItem.mediaSrc && <img src={menuItem.mediaSrc} alt="" />}
                    </div>
                  </Container>
                </div>
              )}
            </li>
          )
        })}
      </Toolbar>
    </nav>
  )
})

AppNavDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  primary: PropTypes.arrayOf(menuLinkType).isRequired,
}

AppNavDropdown.uiName = 'AppNavDropdown'

export default withStyles(styles)(React.memo(AppNavDropdown))
