export const productMedia = [
  '//source.unsplash.com/380x560',
  '//source.unsplash.com/380x560',
  '//source.unsplash.com/380x560',
]

const product = {
  media: {
    full: productMedia,
    standard: productMedia,
    thumb: productMedia,
  },
  name: 'Generic Product',
  price: '19 EUR',
  priceBeforeDiscount: null,
  stock: 10,
  uri: 'generic-product',
}

const products = Array.from(new Array(7), (_, idx) => ({
  ...product,
  name: `Generic Product ${idx + 1}`,
  priceBeforeDiscount: idx % 2 === 0 ? '29 EUR' : null,
  stock: 9 - idx,
}))

export default products
