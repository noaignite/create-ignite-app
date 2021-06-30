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

  // API calls

  const addNewsletterSubscriber = React.useCallback(async (...args) => {
    await actionWithPromise('addNewsletterSubscriber')(...args)
  }, [])

  const itemAdd = React.useCallback(async (...args) => {
    await actionWithPromise('itemAdd')(...args)
  }, [])

  const itemRemove = React.useCallback(async (...args) => {
    await actionWithPromise('itemRemove')(...args)
  }, [])

  const itemDecrease = React.useCallback(async (...args) => {
    await actionWithPromise('itemDecrease')(...args)
  }, [])

  const itemIncrease = React.useCallback(async (...args) => {
    await actionWithPromise('itemIncrease')(...args)
  }, [])

  const voucherAdd = React.useCallback(async (...args) => {
    await actionWithPromise('voucherAdd')(...args)
  }, [])

  const voucherRemove = React.useCallback(async (...args) => {
    await actionWithPromise('voucherRemove')(...args)
  }, [])

  const setCountry = React.useCallback(async (...args) => {
    await actionWithPromise('setCountry')(...args)
  }, [])

  const setPaymentMethod = React.useCallback(async (...args) => {
    await actionWithPromise('setPaymentMethod')(...args)
    setSelection((prev) => ({ ...prev, paymentMethod: args[0] }))
  }, [])

  const setShippingMethod = React.useCallback(async (...args) => {
    await actionWithPromise('setShippingMethod')(...args)
    setSelection((prev) => ({ ...prev, shippingMethod: args[0] }))
  }, [])

  const paymentSubmit = React.useCallback(async (...args) => {
    await actionWithPromise('paymentSubmit')(...args)
  }, [])

  // Memoize handlers context separately so that one can subscribe
  // to them without re-rendering on state updates.
  const handlersContextValue = React.useMemo(
    () => ({
      addNewsletterSubscriber,
      itemAdd,
      itemDecrease,
      itemIncrease,
      itemRemove,
      paymentSubmit,
      setCountry,
      setPaymentMethod,
      setShippingMethod,
      voucherAdd,
      voucherRemove,
    }),
    [
      addNewsletterSubscriber,
      itemAdd,
      itemDecrease,
      itemIncrease,
      itemRemove,
      paymentSubmit,
      setCountry,
      setPaymentMethod,
      setShippingMethod,
      voucherAdd,
      voucherRemove,
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
