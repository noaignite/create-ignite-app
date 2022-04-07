import dynamic from 'next/dynamic'

export const AppCookieBar = dynamic(
  () => import(/* webpackChunkName: "AppCookieBar" */ './AppCookieBar'),
  { ssr: false },
)

export { default as AppCartDrawer } from './AppCartDrawer'
export { default as AppFooter } from './AppFooter'
export { default as AppHeader } from './AppHeader'
export { default as AppLoader } from './AppLoader'
export { default as AppMarketDialog } from './AppMarketDialog'
export { default as AppNavDrawer } from './AppNavDrawer'
export { default as AppSearchDrawer } from './AppSearchDrawer'
export { default as AppSkipLink } from './AppSkipLink'
