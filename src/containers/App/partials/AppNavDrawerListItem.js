import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { Collapse } from '@material-ui/core'
import { menuLinkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import { Add as AddIcon, Remove as RemoveIcon } from 'components/icons'
import { Link } from 'components'

export const styles = {
  list: {},
  listItem: {},
  listItemLink: {},
  listItemIcon: {},
}

function AppNavDrawerListItem(props) {
  const { classes, level = 0, menuLink } = props

  const [expanded, setExpanded] = React.useState(false)
  const handleClick = React.useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const submenu = menuLink.links
  const hasSubmenu = submenu?.length > 0
  const Icon = expanded ? RemoveIcon : AddIcon

  const LinkProps = {}
  if (hasSubmenu) {
    LinkProps.component = 'button'
    LinkProps.type = 'button'
    LinkProps.onClick = handleClick
  } else if (menuLink.url) {
    LinkProps.component = RouterLink
    LinkProps.href = menuLink.url
  }

  return (
    <>
      <li
        className={clsx(classes.listItem, {
          'has-submenu': hasSubmenu,
        })}
        style={{ '--level': level }}
      >
        <Link className={classes.listItemLink} {...LinkProps}>
          {hasSubmenu && <Icon className={classes.listItemIcon} />}
          <span>{menuLink.label}</span>
        </Link>
      </li>

      {hasSubmenu && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <ul className={classes.list}>
            {submenu.map((submenuLink, idx) => (
              <AppNavDrawerListItem
                key={idx}
                classes={classes}
                level={level + 1}
                menuLink={submenuLink}
              />
            ))}
          </ul>
        </Collapse>
      )}
    </>
  )
}

AppNavDrawerListItem.propTypes = {
  classes: PropTypes.object,
  level: PropTypes.number,
  menuLink: menuLinkType.isRequired,
}

export default withStyles(styles)(AppNavDrawerListItem)
