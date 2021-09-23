import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Collapse, Link } from '@mui/material'
import { menuLinkType } from 'utils'
import { Add as AddIcon, Remove as RemoveIcon } from 'components/icons'
import RouterLink from '../../RouterLink'

const AppNavDrawerListItemItem = styled('li', {
  name: 'AppNavDrawerListItem',
  slot: 'Item',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  paddingLeft: 'calc(32px * var(--level))', // Medium icon size + theme.spacing(1)
}))

const AppNavDrawerListItemLink = styled(Link, {
  name: 'AppNavDrawerListItem',
  slot: 'Link',
})(({ theme }) => ({
  display: 'inherit',
  alignItems: 'inherit',
  'ul &': theme.typography.h4,
  'ul ul &': theme.typography.body2,
}))

const AppNavDrawerListItemList = styled('ul', {
  name: 'AppNavDrawerListItem',
  slot: 'List',
})(({ theme }) => ({
  margin: theme.spacing(1, 0, 2),
}))

function AppNavDrawerListItem(props) {
  const { level = 0, menuLink } = props

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
    </>
  )
}

AppNavDrawerListItem.propTypes = {
  level: PropTypes.number,
  menuLink: menuLinkType.isRequired,
}

export default AppNavDrawerListItem
