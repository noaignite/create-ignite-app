const genericImages = [
  '//source.unsplash.com/VW5VjskNXZ8/720x1080',
  '//source.unsplash.com/5gkYsrH_ebY/720x1080',
  '//source.unsplash.com/O6EhbndNhpA/720x1080',
  '//source.unsplash.com/Itbk3pUYhpY/720x1080',
  '//source.unsplash.com/p8Drpg_duLw/720x1080',
  '//source.unsplash.com/9ShY-Tq70Mc/720x1080',
  '//source.unsplash.com/cLO4SZHgYAg/720x1080',
  '//source.unsplash.com/YhgXfs80RJo/720x1080',
]

function getImagesByIndex(idx) {
  const images = [...genericImages]
  for (let index = 0; index < idx; index += 1) {
    const firstImage = images.shift()
    images.push(firstImage)
  }
  return images.slice(0, 3)
}

const genericSwatches = ['black', 'hotpink', 'rebeccapurple', 'cadetblue'].map((color, idx) => ({
  color,
  href: '/products/generic-product',
  item: `0000000${idx}`,
  name: color[0].toUpperCase() + color.substring(1),
  uri: 'generic-product',
}))

const genericSizes = Array.from(new Array(6), (_, idx) => ({
  item: `0000000${idx}`,
  name: String(32 + idx),
  stock: idx % 3 !== 2 ? 'yes' : 'no',
}))

const genericProduct = {
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius id est vel consectetur. Pellentesque quam massa, facilisis nec eleifend ut, aliquet vitae velit. Morbi dolor turpis, maximus ornare massa eu, dictum auctor leo. Nullam dignissim varius massa.',
  href: '/products/generic-product',
  inStock: genericSizes.some((size) => size.stock === 'yes'),
  items: genericSizes,
  media: {
    full: genericImages,
    standard: genericImages,
    thumb: genericImages,
  },
  name: 'Generic Product',
  price: '3 900.00 SEK',
  priceBeforeDiscount: null,
  swatches: genericSwatches,
  uri: 'generic-product',
}

const products = Array.from(new Array(16), (_, idx) => ({
  ...genericProduct,
  media: {
    full: getImagesByIndex(idx),
    standard: getImagesByIndex(idx),
    thumb: getImagesByIndex(idx),
  },
  name: `Generic Product ${idx + 1}`,
  priceBeforeDiscount: idx % 2 === 0 ? '4 900.00 SEK' : null,
  tags: idx % 4 === 0 ? ['Recycled'] : undefined,
}))

export default products
