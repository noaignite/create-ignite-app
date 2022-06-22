import products from './products'

const quantity = 1
const taxPercent = 0.25

export default Array.from(new Array(3), (_, idx) => {
  const product = products[idx]
  const priceEachWithoutTaxAsNumber = Math.round(product.priceAsNumber * (1 - taxPercent))
  const totalPriceAsNumber = product.priceAsNumber * quantity
  const totalPriceBeforeDiscountAsNumber = product.priceBeforeDiscountAsNumber * quantity

  return {
    anyDiscount: false,
    category: null,
    comment: null,
    ean: `732572033496${idx}`,
    item: `2045-5758${idx}`,
    line: `2b292737bdc3a587234b444ed5a1f57${idx}`,
    priceEach: product.price,
    priceEachAsNumber: product.priceAsNumber,
    priceEachBeforeDiscount: product.priceBeforeDiscount,
    priceEachBeforeDiscountAsNumber: product.priceBeforeDiscountAsNumber,
    priceEachReduction: '0 SEK',
    priceEachReductionAsNumber: 0,
    priceEachWithoutTax: `${priceEachWithoutTaxAsNumber.toLocaleString('sv-SE')} SEK`,
    priceEachWithoutTaxAsNumber,
    product,
    productUrl: null,
    quantity,
    size: '34',
    sku: `61382-81608990003${idx}`,
    taxPercent: taxPercent * 100,
    totalPrice: `${totalPriceAsNumber.toLocaleString('sv-SE')} SEK`,
    totalPriceAsNumber,
    totalPriceBeforeDiscount: `${totalPriceBeforeDiscountAsNumber.toLocaleString('sv-SE')} SEK`,
    totalPriceBeforeDiscountAsNumber,
  }
})
