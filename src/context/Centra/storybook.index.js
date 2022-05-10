import * as React from 'react'
import PropTypes from 'prop-types'
import actionWithPromise from '~/utils/actionWithPromise'
import {
  cartSelection,
  countries,
  languages,
  location as cartLocation,
  orders,
  paymentMethods,
  shippingMethods,
} from '~/api/__mock__'

export const CentraHandlersContext = React.createContext({})
export const CentraSelectionContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  CentraHandlersContext.displayName = 'CentraHandlersContext'
  CentraSelectionContext.displayName = 'CentraSelectionContext'
}

export function useCentraHandlers() {
  return React.useContext(CentraHandlersContext)
}

export function useCentraSelection() {
  return React.useContext(CentraSelectionContext)
}

export function useCentraOrders() {
  return { orders }
}

export function useCentraReceipt() {
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
  'updateCountryState',
  'updateCustomerAddress',
  'updateCustomerEmail',
  'updateCustomerPassword',
  'updateItemQuantity',
  'updateItemSize',
  'updateLanguage',
  'updatePaymentFields',
  'updatePaymentMethod',
  'updateShippingMethod',
]

const handlersContextValue = handlersInterface.reduce((acc, methodName) => {
  acc[methodName] = async (...args) => {
    await actionWithPromise(methodName)(...args)
  }
  return acc
}, {})

export function CentraProvider(props) {
  const { children } = props

  const [location, setLocation] = React.useState(cartLocation)
  const [selection, setSelection] = React.useState(cartSelection)

  // Override handler with state setter for a more complete Storybook UI flow.
  handlersContextValue.updateCountry = React.useCallback(async (country) => {
    await actionWithPromise('updateCountry')(country)
    setLocation((prev) => ({ ...prev, country }))
  }, [])

  // Override handler with state setter for a more complete Storybook UI flow.
  handlersContextValue.updateCountryState = React.useCallback(async (country, state) => {
    await actionWithPromise('updateCountryState')(country, state)
    setLocation((prev) => ({ ...prev, country, state }))
  }, [])

  // Override handler with state setter for a more complete Storybook UI flow.
  handlersContextValue.updatePaymentFields = React.useCallback(async (values) => {
    await actionWithPromise('updatePaymentFields')(values)
    setSelection((prev) => ({ ...prev, ...values }))
  }, [])

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
    <CentraHandlersContext.Provider value={handlersContextValue}>
      <CentraSelectionContext.Provider value={selectionContextValue}>
        {children}
      </CentraSelectionContext.Provider>
    </CentraHandlersContext.Provider>
  )
}

CentraProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
