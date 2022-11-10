import * as React from 'react'
import PropTypes from 'prop-types'
import { Collapse, Link, styled } from '@mui/material'
import { menuItemType } from '~/api'
import { RouterLink } from '~/containers'
import { AddIcon, RemoveIcon } from '~/components'

const AppNavDrawerListItemItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  paddingLeft: 'calc(32px * var(--level))', // Medium icon size + theme.spacing(1)
}))

const AppNavDrawerListItemLink = styled(Link)(({ theme }) => ({
  display: 'inherit',
  alignItems: 'inherit',
  'ul &': theme.typography.h4,
  'ul ul &': theme.typography.body2,
}))

const AppNavDrawerListItemList = styled('ul')(({ theme }) => ({
  margin: theme.spacing(1, 0, 2),
}))

function AppNavDrawerListItem(props) {
  const { level = 0, menuLink } = props

  const [expanded, setExpanded] = React.useState(false)
  const handleClick = React.useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const submenu = menuLink.items
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
    <React.Fragment>
      <AppNavDrawerListItemItem style={{ '--level': level }}>
        <AppNavDrawerListItemLink {...LinkProps}>
          {hasSubmenu && <Icon sx={{ mr: 1 }} />}
          <span>{menuLink.label}</span>
        </AppNavDrawerListItemLink>
      </AppNavDrawerListItemItem>

      {hasSubmenu && (
        <Collapse in={expanded} component="li" timeout="auto" unmountOnExit>
          <AppNavDrawerListItemList>
            {submenu.map((submenuLink, idx) => (
              <AppNavDrawerListItem key={idx} level={level + 1} menuLink={submenuLink} />
            ))}
          </AppNavDrawerListItemList>
        </Collapse>
      )}
    </React.Fragment>
  )
}

AppNavDrawerListItem.propTypes = {
  level: PropTypes.number,
  menuLink: menuItemType.isRequired,
}

export default AppNavDrawerListItem
