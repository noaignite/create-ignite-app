import * as React from 'react'
import PropTypes from 'prop-types'
import actionWithPromise from 'api/utils/actionWithPromise'
import {
  cartSelection,
  countries,
  languages,
  location,
  paymentMethods,
  shippingMethods,
} from 'api/mock'

const CheckoutHandlersContext = React.createContext({})
const CheckoutContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  CheckoutHandlersContext.displayName = 'CheckoutHandlersContext'
  CheckoutContext.displayName = 'CheckoutContext'
}

export function useCheckoutHandlers() {
  return React.useContext(CheckoutHandlersContext)
}

export function useCheckoutSelection() {
  return React.useContext(CheckoutContext).selection
}

export function useCheckout() {
  return React.useContext(CheckoutContext)
}

export function CheckoutProvider(props) {
  const { children } = props

  // Storybook specific local state otherwise coming from @oakwood/accelerator
  const [selection, setSelection] = React.useState({})

  // Basket

  const addItem = React.useCallback(async (...args) => {
    await actionWithPromise('addItem')(...args)
  }, [])

  const decreaseItem = React.useCallback(async (...args) => {
    await actionWithPromise('decreaseItem')(...args)
  }, [])

  const increaseItem = React.useCallback(async (...args) => {
    await actionWithPromise('increaseItem')(...args)
  }, [])

  const removeItem = React.useCallback(async (...args) => {
    await actionWithPromise('removeItem')(...args)
  }, [])

  const updateItemQuantity = React.useCallback(async (...args) => {
    await actionWithPromise('updateItemQuantity')(...args)
  }, [])

  const updateItemSize = React.useCallback(async (...args) => {
    await actionWithPromise('updateItemSize')(...args)
  }, [])

  // Voucher

  const addVoucher = React.useCallback(async (...args) => {
    await actionWithPromise('addVoucher')(...args)
  }, [])

  const removeVoucher = React.useCallback(async (...args) => {
    await actionWithPromise('removeVoucher')(...args)
  }, [])

  // Checkout

  const submitPayment = React.useCallback(async (...args) => {
    await actionWithPromise('submitPayment')(...args)
  }, [])

  const updateCountry = React.useCallback(async (...args) => {
    await actionWithPromise('updateCountry')(...args)
  }, [])

  const updatePaymentMethod = React.useCallback(async (...args) => {
    await actionWithPromise('updatePaymentMethod')(...args)
    setSelection((prev) => ({ ...prev, paymentMethod: args[0] }))
  }, [])

  const updateShippingMethod = React.useCallback(async (...args) => {
    await actionWithPromise('updateShippingMethod')(...args)
    setSelection((prev) => ({ ...prev, shippingMethod: args[0] }))
  }, [])

  // Other

  const addNewsletterSubscription = React.useCallback(async (...args) => {
    await actionWithPromise('addNewsletterSubscription')(...args)
  }, [])

  const updateLanguage = React.useCallback(async (...args) => {
    await actionWithPromise('updateLanguage')(...args)
  }, [])

  // Memoize handlers context separately so that one can subscribe
  // to them without re-rendering on state updates.
  const handlersContextValue = React.useMemo(
    () => ({
      addItem,
      addNewsletterSubscription,
      addVoucher,
      decreaseItem,
      increaseItem,
      removeItem,
      removeVoucher,
      submitPayment,
      updateCountry,
      updateItemQuantity,
      updateItemSize,
      updateLanguage,
      updatePaymentMethod,
      updateShippingMethod,
    }),
    [
      addItem,
      addNewsletterSubscription,
      addVoucher,
      decreaseItem,
      increaseItem,
      removeItem,
      removeVoucher,
      submitPayment,
      updateCountry,
      updateItemQuantity,
      updateItemSize,
      updateLanguage,
      updatePaymentMethod,
      updateShippingMethod,
    ],
  )

  const contextValue = {
    ...handlersContextValue,
    countries,
    languages,
    location,
    paymentMethods,
    selection: {
      ...cartSelection,
      ...selection,
    },
    shippingMethods,
  }

  return (
    <CheckoutHandlersContext.Provider value={handlersContextValue}>
      <CheckoutContext.Provider value={contextValue}>{children}</CheckoutContext.Provider>
    </CheckoutHandlersContext.Provider>
  )
}

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CheckoutContext
