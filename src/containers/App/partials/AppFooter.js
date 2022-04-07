import * as React from 'react'
import { styled } from '@mui/system'
import { Container, Link } from '@mui/material'
import { useRemoteConfig } from '~/context'
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

const AppFooterNav = styled('nav', {
  name: 'AppFooter',
  slot: 'List',
})(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'center',
  margin: 0,
}))

const AppFooter = React.memo(function AppFooter(props) {
  const { menus, storeMessage } = useRemoteConfig()

  return (
    <React.Fragment>
      {storeMessage && <AppFooterSalesBanner>{storeMessage}</AppFooterSalesBanner>}

      <AppFooterRoot {...props}>
        <Container>
          <AppFooterNav>
            {menus?.footer?.map((menuItem, idx) => (
              <div key={idx}>
                <Link component={RouterLink} href={menuItem.url} variant="button">
                  {menuItem.label}
                </Link>
              </div>
            ))}
          </AppFooterNav>
        </Container>
      </AppFooterRoot>
    </React.Fragment>
  )
})

export default AppFooter
