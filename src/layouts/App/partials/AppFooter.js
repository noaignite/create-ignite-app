import * as React from 'react'
import { styled } from '@mui/system'
import { Container, Link } from '@mui/material'
import { useRemoteConfig } from '~/contexts'
import { RouterLink } from '~/containers'

const AppFooterRoot = styled('footer')(({ theme }) => ({
  padding: 'var(--cia-section-spacing) 0',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.getContrastText(theme.palette.text.primary),
}))

const AppFooterNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'center',
  margin: 0,
}))

function AppFooter(props) {
  const { menus } = useRemoteConfig()

  return (
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
  )
}

export default AppFooter
