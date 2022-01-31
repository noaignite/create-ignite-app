import * as React from 'react'
import PropTypes from 'prop-types'
import actionWithPromise from 'api/utils/actionWithPromise'
import {
  cartSelection,
  countries,
  languages,
  location,
  orders,
  paymentMethods,
  shippingMethods,
} from 'api/__mock__'

export const CheckoutHandlersContext = React.createContext({})
export const CheckoutSelectionContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  CheckoutHandlersContext.displayName = 'CheckoutHandlersContext'
  CheckoutSelectionContext.displayName = 'CheckoutSelectionContext'
}

export function useCheckoutHandlers() {
  return React.useContext(CheckoutHandlersContext)
}

export function useCheckoutSelection() {
  return React.useContext(CheckoutSelectionContext)
}

export function useCheckoutOrders() {
  return { orders }
}

export function useCheckoutReceipt() {
  return { order: orders[0] }
}

const handlersInterface = [
  'addItem',
  'addNewsletterSubscription',
  'addVoucher',
  'decreaseItem',
  'increaseItem',
  'loginCustomer',
  'logoutCustomer',
  'registerCustomer',
  'removeItem',
  'removeVoucher',
  'resetCustomerPassword',
  'resetCustomerPasswordEmail',
  'submitPayment',
  'updateCountry',
  'updateCustomerAddress',
  'updateCustomerEmail',
  'updateCustomerPassword',
  'updateItemQuantity',
  'updateItemSize',
  'updateLanguage',
  'updatePaymentMethod',
  'updateShippingMethod',
]

const handlersContextValue = handlersInterface.reduce((acc, methodName) => {
  acc[methodName] = async (...args) => {
    await actionWithPromise(methodName)(...args)
  }
  return acc
}, {})

export function CheckoutProvider(props) {
  const { children } = props

  const [selection, setSelection] = React.useState(cartSelection)

  // Override handler with state setter for a more complete Storybook UI flow.
  handlersContextValue.updatePaymentMethod = React.useCallback(async (paymentMethod) => {
    await actionWithPromise('updatePaymentMethod')(paymentMethod)
    setSelection((prev) => ({ ...prev, paymentMethod }))
  }, [])

  // Override handler with state setter for a more complete Storybook UI flow.
  handlersContextValue.updateShippingMethod = React.useCallback(async (shippingMethod) => {
    await actionWithPromise('updateShippingMethod')(shippingMethod)
    setSelection((prev) => ({ ...prev, shippingMethod }))
  }, [])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const selectionContextValue = {
    countries,
    languages,
    location,
    paymentMethods,
    selection,
    shippingMethods,
  }

  return (
    <CheckoutHandlersContext.Provider value={handlersContextValue}>
      <CheckoutSelectionContext.Provider value={selectionContextValue}>
        {children}
      </CheckoutSelectionContext.Provider>
    </CheckoutHandlersContext.Provider>
  )
}

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
