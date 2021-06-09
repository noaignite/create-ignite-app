import actionWithPromise from 'api/utils/actionWithPromise'
import formitActionWithPromise from 'api/utils/formitActionWithPromise'
import {
  cartSelection,
  countries,
  languages,
  location,
  paymentMethods,
  shippingMethods,
} from 'api/mock'

const mockedCheckoutContext = {}

export function useCheckoutHandlers() {
  return {
    onItemAdd: actionWithPromise('onItemAdd'),
    onItemRemove: actionWithPromise('onItemRemove'),
    onItemIncrease: actionWithPromise('onItemIncrease'),
    onItemDecrease: actionWithPromise('onItemDecrease'),
    onItemSizeChange: actionWithPromise('onItemSizeChange'),
    onItemQuantityChange: actionWithPromise('onItemQuantityChange'),
    onPaymentMethodChange: actionWithPromise('onPaymentMethodChange'),
    onShippingMethodChange: actionWithPromise('onShippingMethodChange'),
    onCountryChange: actionWithPromise('onCountryChange'),
    onLanguageChange: actionWithPromise('onLanguageChange'),
    onVoucherSubmit: formitActionWithPromise('onVoucherSubmit'),
    onCheckoutSubmit: formitActionWithPromise('onCheckoutSubmit'),
  }
}

export function useCheckoutSelection() {
  return cartSelection
}

export function useCheckout() {
  const handlers = useCheckoutHandlers()
  const selection = useCheckoutSelection()

  return {
    ...handlers,
    countries,
    languages,
    location,
    paymentMethods,
    selection,
    shippingMethods,
  }
}

export default mockedCheckoutContext
