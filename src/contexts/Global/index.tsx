import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { useRemoteConfig } from '../RemoteConfig'

interface GlobalState {
  /**
   * A `boolean` which indicates whether the cart menu is open or not.
   * The cart menu is the menu that appears when the user clicks on the cart icon.
   * @default false
   */
  isCartMenuOpen: boolean
  /**
   * A `boolean` which indicates whether the cookie bar is open or not.
   * The cookie bar is the bar that appears when the user enters the website
   * for the first time.
   *
   * @note This value is set to `true` after a delay of `COOKIE_BAR_ENTER_DELAY`,
   * provided the user has not previously dismissed the cookie bar.
   * @default false
   */
  isCookieBarOpen: boolean
  /**
   * A `boolean` which indicates whether the market menu is open or not.
   * The market menu contains the list of markets that the user can switch between.
   * @default false
   */
  isMarketMenuOpen: boolean
  /**
   * A `boolean` which indicates whether the navigation menu is open or not.
   * The navigation menu is the menu that appears when the user clicks on the
   * three stacked lines icon, or otherwise known as the _hamburger_ icon.
   * @default false
   */
  isNavMenuOpen: boolean
  /**
   * A `boolean` which indicates whether the search menu is open or not.
   * The search menu is the menu that appears when the user clicks on the search
   * icon.
   * @default false
   */
  isSearchMenuOpen: boolean
  /**
   * A `boolean` which indicates whether the store message is open or not.
   * The store message is usually located above the site header and is used to
   * display important messages to the user.
   * @default false
   */
  isStoreMessageOpen: boolean
  /**
   * A `boolean` which indicates whether any of the following menu's are open:
   * - `isCartMenuOpen`
   * - `isNavMenuOpen`
   * - `isSearchMenuOpen`
   * @default false
   */
  isSomeMenuOpen: boolean
}

type GlobalStateCTX = GlobalState | undefined
export const GlobalStateContext = React.createContext<GlobalStateCTX>(undefined)

interface GlobalHandlers {
  /**
   * A setter function which sets the `isCartMenuOpen` state to `false`.
   */
  onCartMenuClose: () => void
  /**
   * A setter function which toggles the `isCartMenuOpen` state.
   * @note This function also sets the `isNavMenuOpen` and `isSearchMenuOpen`
   * states to `false`.
   */
  onCartMenuToggle: () => void
  /**
   * A setter function which sets the `isCookieBarOpen` state to `false`.
   */
  onCookieBarClose: () => void
  /**
   * A setter function which sets the `isMarketMenuOpen` state to `false`.
   */
  onMarketMenuClose: () => void
  /**
   * A setter function which toggles the `isMarketMenuOpen` `boolean` state.
   */
  onMarketMenuToggle: () => void
  /**
   * A setter function which sets the `isNavMenuOpen` state to `false`.
   */
  onNavMenuClose: () => void
  /**
   * A setter function which toggles the `isNavMenuOpen` state.
   *
   * @note This function also sets the `isCartMenuOpen` and `isSearchMenuOpen`
   * states to `false`.
   */
  onNavMenuToggle: () => void
  /**
   * A setter function which sets the `isSearchMenuOpen` state to `false`.
   *
   * @note This function also sets the `isNavMenuOpen` and `isCartMenuOpen`
   * states to `false`.
   */
  onSearchMenuClose: () => void
  /**
   * A setter function which toggles the `isSearchMenuOpen` state.
   */
  onSearchMenuToggle: () => void
  /**
   * A setter function which sets the `isStoreMessageOpen` state to `false`.
   */
  onStoreMessageClose: () => void
}

type GlobalHandlersCTX = GlobalHandlers | undefined
export const GlobalHandlersContext = React.createContext<GlobalHandlersCTX>(undefined)

if (process.env.NODE_ENV !== 'production') {
  GlobalStateContext.displayName = 'GlobalStateContext'
  GlobalHandlersContext.displayName = 'GlobalHandlersContext'
}

export function useGlobalState() {
  const context = React.useContext(GlobalStateContext)
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider')
  }
  return context
}

export function useGlobalHandlers() {
  const context = React.useContext(GlobalHandlersContext)
  if (!context) {
    throw new Error('useGlobalHandlers must be used within a GlobalProvider')
  }
  return context
}

const COOKIE_CONSENT_ID = 'cookie-consent'
const COOKIE_BAR_ENTER_DELAY = 2000

interface GlobalProviderProps {
  children: React.ReactNode
}

function GlobalProvider(props: GlobalProviderProps) {
  const { children } = props

  const { storeMessage } = useRemoteConfig()

  const [isCartMenuOpen, setCartMenuOpen] = React.useState(false)
  const [isCookieBarOpen, setCookieBarOpen] = React.useState(false)
  const [isMarketMenuOpen, setMarketMenuOpen] = React.useState(false)
  const [isNavMenuOpen, setNavMenuOpen] = React.useState(false)
  const [isSearchMenuOpen, setSearchMenuOpen] = React.useState(false)
  const [isStoreMessageOpen, setStoreMessageOpen] = React.useState(!!storeMessage)

  // Helpers

  const closeAllMenus = () => {
    setCartMenuOpen(false)
    setNavMenuOpen(false)
    setSearchMenuOpen(false)
  }

  // Mount hook

  React.useEffect(() => {
    const handleRouteChangeStart = () => {
      closeAllMenus()
    }

    if (!localStorage?.getItem(COOKIE_CONSENT_ID)) {
      setTimeout(() => {
        setCookieBarOpen(true)
      }, COOKIE_BAR_ENTER_DELAY)
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [])

  // Public handlers

  const onNavMenuToggle = React.useCallback(() => {
    setNavMenuOpen((prev) => !prev)
    setCartMenuOpen(false)
    setSearchMenuOpen(false)
  }, [])

  const onNavMenuClose = React.useCallback(() => {
    setNavMenuOpen(false)
  }, [])

  const onCartMenuToggle = React.useCallback(() => {
    setCartMenuOpen((prev) => !prev)
    setNavMenuOpen(false)
    setSearchMenuOpen(false)
  }, [])

  const onCartMenuClose = React.useCallback(() => {
    setCartMenuOpen(false)
  }, [])

  const onSearchMenuToggle = React.useCallback(() => {
    setSearchMenuOpen((prev) => !prev)
    setCartMenuOpen(false)
    setNavMenuOpen(false)
  }, [])

  const onSearchMenuClose = React.useCallback(() => {
    setSearchMenuOpen(false)
  }, [])

  const onMarketMenuToggle = React.useCallback(() => {
    setMarketMenuOpen((prev) => !prev)
  }, [])

  const onMarketMenuClose = React.useCallback(() => {
    setMarketMenuOpen(false)
  }, [])

  const onCookieBarClose = React.useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_ID, '1')
    setCookieBarOpen(false)
  }, [])

  const onStoreMessageClose = React.useCallback(() => {
    setStoreMessageOpen(false)
  }, [])

  const stateContextValue = React.useMemo(
    () => ({
      isCartMenuOpen,
      isCookieBarOpen,
      isMarketMenuOpen,
      isNavMenuOpen,
      isSearchMenuOpen,
      isStoreMessageOpen,
      // Computed props
      isSomeMenuOpen: isCartMenuOpen || isNavMenuOpen || isSearchMenuOpen,
    }),
    [
      isCartMenuOpen,
      isCookieBarOpen,
      isMarketMenuOpen,
      isNavMenuOpen,
      isSearchMenuOpen,
      isStoreMessageOpen,
    ],
  )

  const handlersContextValue = React.useMemo(
    () => ({
      onCartMenuClose,
      onCartMenuToggle,
      onCookieBarClose,
      onMarketMenuClose,
      onMarketMenuToggle,
      onNavMenuClose,
      onNavMenuToggle,
      onSearchMenuClose,
      onSearchMenuToggle,
      onStoreMessageClose,
    }),
    [
      onCartMenuClose,
      onCartMenuToggle,
      onCookieBarClose,
      onMarketMenuClose,
      onMarketMenuToggle,
      onNavMenuClose,
      onNavMenuToggle,
      onSearchMenuClose,
      onSearchMenuToggle,
      onStoreMessageClose,
    ],
  )

  return (
    <GlobalStateContext.Provider value={stateContextValue}>
      <GlobalHandlersContext.Provider value={handlersContextValue}>
        {children}
      </GlobalHandlersContext.Provider>
    </GlobalStateContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalProvider
