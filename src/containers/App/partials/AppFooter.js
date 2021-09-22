import * as React from 'react'
import { styled } from '@mui/system'
import { Container, Link } from '@mui/material'
import { useGlobal } from 'api'
import { useApp } from '../AppContext'
import RouterLink from '../../RouterLink'

const AppFooterRoot = styled('footer', {
  name: 'AppFooter',
  slot: 'Root',
})(({ theme }) => ({
  padding: 'var(--coa-section-spacing) 0',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.getContrastText(theme.palette.text.primary),
}))

const AppFooterSalesBanner = styled('div', {
  name: 'AppFooter',
  slot: 'SalesBanner',
})(({ theme }) => ({
  position: 'sticky',
  bottom: 0,
  padding: theme.spacing(0.5, 2),
  backgroundColor: theme.palette.text.secondary,
  color: theme.palette.getContrastText(theme.palette.text.primary),
  textAlign: 'center',
}))

const AppFooterList = styled('ul', {
  name: 'AppFooter',
  slot: 'List',
})({
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
})

const AppFooterListItem = styled('li', {
  name: 'AppFooter',
  slot: 'ListItem',
})(({ theme }) => ({
  marginLeft: theme.spacing(4),
  '&:first-child': {
    marginLeft: 0,
  },
}))

const AppFooter = React.memo(function AppFooter(props) {
  const { menus, settings } = useGlobal()

  return (
    <>
      {settings?.globalSalesBanner && (
        <AppFooterSalesBanner>{settings.globalSalesBanner}</AppFooterSalesBanner>
      )}

      <AppFooterRoot {...props}>
        <Container>
          <nav>
            <AppFooterList>
              {menus.menuFooter?.map((menuItem, idx) => (
                <AppFooterListItem key={idx}>
                  <Link component={RouterLink} href={menuItem.url} variant="button">
                    {menuItem.label}
                  </Link>
                </AppFooterListItem>
              ))}
            </AppFooterList>
          </nav>
        </Container>
      </AppFooterRoot>
    </>
  )
})

function AppFooterContainer(props) {
  const { hideFooter } = useApp()

  if (hideFooter) {
    return null
  }

  return <AppFooter {...props} />
}

export default AppFooterContainer
