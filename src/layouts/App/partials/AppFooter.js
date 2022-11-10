import * as React from 'react'
import { Container, Link, styled } from '@mui/material'
import { useRemoteConfig } from '~/contexts'
import { RouterLink } from '~/containers'

const AppFooterRoot = styled('footer')(({ theme }) => ({
  paddingBlock: 'var(--cia-section-spacing)',
  backgroundColor: theme.vars.palette.text.primary,
  color: theme.vars.palette.text.contrastText,
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
