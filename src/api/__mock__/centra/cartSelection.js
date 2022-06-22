import cartItems from './cartItems'
import paymentMethods from './paymentMethods'
import shippingMethods from './shippingMethods'

const itemsTotalPriceAsNumber = cartItems.reduce((sum, i) => sum + i.priceEachWithoutTaxAsNumber * i.quantity, 0) // prettier-ignore
const grandTotalPriceAsNumber = cartItems.reduce((sum, i) => sum + i.totalPriceAsNumber, 0)
const grandTotalPriceTaxAsNumber = grandTotalPriceAsNumber - itemsTotalPriceAsNumber
const totalDiscountPriceAsNumber = cartItems.reduce((sum, i) => sum + (i.totalPriceBeforeDiscountAsNumber - i.totalPriceAsNumber), 0) // prettier-ignore
const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0)

export default {
  language: null,
  currency: 'SEK',
  paymentMethod: paymentMethods[0].paymentMethod,
  paymentMethodName: paymentMethods[0].name,
  shippingMethod: shippingMethods[0].shippingMethod,
  shippingMethodName: shippingMethods[0].name,
  items: cartItems,
  discounts: {
    anyDiscount: true,
    discount: '100 SEK',
    discountAsNumber: 100,
    vouchers: [
      {
        description: 'test 10%',
        priceOff: '-1 810 SEK',
        priceOffAsNumber: -1810,
        type: 'code',
        voucher: 'familyandfriends',
      },
    ],
    automaticDiscounts: [],
  },
  totals: {
    itemsTotalPrice: `${itemsTotalPriceAsNumber.toLocaleString('sv-SE')} SEK`,
    itemsTotalPriceAsNumber,
    totalDiscountPrice: `${totalDiscountPriceAsNumber.toLocaleString('sv-SE')} SEK`,
    totalDiscountPriceAsNumber,
    shippingPrice: '0 SEK',
    shippingPriceAsNumber: 0,
    handlingCostPrice: '0 SEK',
    handlingCostPriceAsNumber: 0,
    totalQuantity,
    taxDeducted: false,
    taxDeductedAsNumber: false,
    taxAdded: false,
    taxAddedAsNumber: false,
    taxPercent: 25,
    grandTotalPrice: `${grandTotalPriceAsNumber.toLocaleString('sv-SE')} SEK`,
    grandTotalPriceAsNumber,
    grandTotalPriceTax: `${grandTotalPriceTaxAsNumber.toLocaleString('sv-SE')} SEK`,
    grandTotalPriceTaxAsNumber,
  },
  vatExempt: false,
  address: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    vatNumber: '',
  },
  shippingAddress: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
  },
  additionalNotes: '',
  currencyFormat: {
    currency: 'SEK',
    name: 'SEK',
    prefix: '',
    suffix: ' SEK',
    decimalPoint: '.',
    decimalDigits: '2',
    thousandsSeparator: ' ',
    denominator: 100,
    uri: 'sek',
  },
}
