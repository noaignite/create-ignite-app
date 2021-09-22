export default [
  {
    description: 'Credit Card / Invoice (pay in 14 days) / Part Payment / Bank Transfer',
    handlingCost: '0.00 SEK',
    handlingCostAsNumber: 0,
    name: 'Klarna Checkout',
    paymentMethod: 'klarna-checkout',
    paymentMethodType: 'klarna_checkout',
    providesCustomerAddressAfterPayment: true,
    supportsInitiateOnly: false,
  },
  {
    description: 'You will be redirected to a secure payment page provided by Adyen.',
    handlingCost: '0.00 SEK',
    handlingCostAsNumber: 0,
    name: 'Swish',
    paymentMethod: 'swish-checkout',
    paymentMethodType: 'swish_checkout',
    providesCustomerAddressAfterPayment: true,
    supportsInitiateOnly: false,
  },
]
