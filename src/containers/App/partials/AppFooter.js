import * as React from 'react'
import { styled } from '@mui/system'
import { Container, Link } from '@mui/material'
import { useSettings } from 'api'
import RouterLink from '../../RouterLink'

const AppFooterRoot = styled('footer', {
  name: 'AppFooter',
  slot: 'Root',
})(({ theme }) => ({
  padding: 'var(--cia-section-spacing) 0',
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
})(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'center',
  margin: 0,
}))

const AppFooter = React.memo(function AppFooter(props) {
  const { menus, storeMessage } = useSettings()

  return (
    <>
      {storeMessage && <AppFooterSalesBanner>{storeMessage}</AppFooterSalesBanner>}

      <AppFooterRoot {...props}>
        <Container>
          <nav>
            <AppFooterList>
              {menus?.footer?.map((menuItem, idx) => (
                <Link key={idx} component={RouterLink} href={menuItem.url} variant="button">
                  {menuItem.label}
                </Link>
              ))}
            </AppFooterList>
          </nav>
        </Container>
      </AppFooterRoot>
    </>
  )
})

export default AppFooter
