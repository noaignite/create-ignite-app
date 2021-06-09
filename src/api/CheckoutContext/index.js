import * as React from 'react'
import PropTypes from 'prop-types'
import { actionWithPromise } from 'api/utils'
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

function CheckoutProvider(props) {
  const { children } = props

  // Public handlers

  const onItemAdd = React.useCallback((event) => {
    actionWithPromise(event.currentTarget.value)
  }, [])

  const onItemRemove = React.useCallback((event) => {
    actionWithPromise(event.currentTarget.value)
  }, [])

  const onItemIncrease = React.useCallback((event) => {
    actionWithPromise(event.currentTarget.value)
  }, [])

  const onItemDecrease = React.useCallback((event) => {
    actionWithPromise(event.currentTarget.value)
  }, [])

  const onItemSizeChange = React.useCallback((event) => {
    const { value } = event.target
    const { 0: productId, 1: prevCartItemId, 2: prevCartItemQuantity } = value.split('/')
    actionWithPromise(productId, prevCartItemId, prevCartItemQuantity)
  }, [])

  const onItemQuantityChange = React.useCallback((event) => {
    const { value } = event.target
    const { 0: cartItemId, 1: quantity } = value.split('/')
    actionWithPromise(cartItemId, quantity)
  }, [])

  const onPaymentMethodChange = React.useCallback((event) => {
    actionWithPromise(event.target.value)
  }, [])

  const onShippingMethodChange = React.useCallback((event) => {
    actionWithPromise(event.target.value)
  }, [])

  const onCountryChange = React.useCallback((event) => {
    actionWithPromise(event.target.value)
  }, [])

  const onLanguageChange = React.useCallback((event) => {
    actionWithPromise(event.target.value)
  }, [])

  const onVoucherSubmit = React.useCallback(async (values, { setSubmitting }) => {
    setSubmitting(true)

    try {
      await actionWithPromise(values.voucher)
    } catch (err) {
      console.error(err)
    }

    setSubmitting(false)
  }, [])

  const onCheckoutSubmit = React.useCallback(async (values, { setSubmitting }) => {
    setSubmitting(true)

    try {
      await actionWithPromise(values)
    } catch (err) {
      console.error(err)
    }

    setSubmitting(false)
  }, [])

  // Memoize handlers context separately so that one can subscribe
  // to them without re-rendering on state updates.
  const handlersContextValue = React.useMemo(
    () => ({
      onItemAdd,
      onItemRemove,
      onItemIncrease,
      onItemDecrease,
      onItemSizeChange,
      onItemQuantityChange,
      onPaymentMethodChange,
      onShippingMethodChange,
      onCountryChange,
      onLanguageChange,
      onVoucherSubmit,
      onCheckoutSubmit,
    }),
    [
      onItemAdd,
      onItemRemove,
      onItemIncrease,
      onItemDecrease,
      onItemSizeChange,
      onItemQuantityChange,
      onPaymentMethodChange,
      onShippingMethodChange,
      onCountryChange,
      onLanguageChange,
      onVoucherSubmit,
      onCheckoutSubmit,
    ],
  )

  const contextValue = {
    ...handlersContextValue,
    countries,
    languages,
    location,
    paymentMethods,
    selection: cartSelection,
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
