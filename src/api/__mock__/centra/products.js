import { capitalize } from '@mui/material'
import formatProduct from '~/api/centra/utils/formatProduct'
import categories from './categories'
import measurementChart from './measurementChart'

const unsplashImageIds = [
  'p0OlRAAYXLY',
  '1-nx1QR5dTE',
  '0CZwuZhiC84',
  'xFXRUmHhR_w',
  '7bw3REiKLI0',
  'HcqA34-uWo4',
  'FNOYT3NDdE0',
  'ukjjDC6InOE',
  'lYa0zIJndkg',
  'LcTnGQ8SbHA',
  'a-ASSsc5H5A',
  'v_a3DWpOFc0',
  '5BWOQ2ySdwk',
  'qoHXSZSBFC8',
]

const colors = ['black', 'white', 'tomato', 'hotpink', 'gold', 'rebeccapurple', 'coral']

const priceAsNumber = 3_200
const priceBeforeDiscountAsNumber = 4_200
const discountPercent = Math.round((1 - priceAsNumber / priceBeforeDiscountAsNumber) * 100)

function formatPrice(price) {
  return `${price.toLocaleString('sv-SE')} SEK`
}

function composeItems(idx) {
  return Array.from(new Array(6), (_, idx2) => ({
    item: `0000000${idx + idx2}`,
    name: String(32 + idx),
    stock: idx % 3 !== 2 ? 'yes' : 'no',
  }))
}

function composeImages(idx, size) {
  const images = [...unsplashImageIds].map((id) => ['//source.unsplash.com', id, size].join('/'))
  for (let index = 0; index < idx; index += 1) {
    const firstImage = images.shift()
    images.push(firstImage)
  }
  return images.slice(0, 5 - (idx % 3))
}

function composeMedia(idx) {
  return {
    standard: composeImages(idx, '500x500'),
    full: composeImages(idx, '2000x2000'),
    // Project specific below...
  }
}

function composeSwatch(idx) {
  return {
    color: colors[idx % colors.length],
    image: `//source.unsplash.com/${unsplashImageIds[idx % unsplashImageIds.length]}`,
    name: capitalize(colors[idx % colors.length]),
  }
}

function composeProduct(idx, other) {
  return {
    categories: categories.slice(0, 2),
    category: categories[0].category,
    categoryName: categories[0].name,
    categoryUri: categories[0].uri,
    description: '* Regular collar, Short sleeves, Snap-button closure through front, Breast pockets in front\n* Quality: Lamb DD Papery\n* Composition: 100% Lamb Leather\n* Lining Composition: Unlined\n* Filling: Unlined\n* Back Length: 70 cm\n* Professional leather clean only', // prettier-ignore
    descriptionHtml: '<ul>\n\t<li>Regular collar, Short sleeves, Snap-button closure through front, Breast pockets in front</li>\n\t<li>Quality: Lamb DD Papery</li>\n\t<li>Composition: 100% Lamb Leather</li>\n\t<li>Lining Composition: Unlined</li>\n\t<li>Filling: Unlined</li>\n\t<li>Back Length: 70 cm</li>\n\t<li>Professional leather clean only</li>\n</ul>', // prettier-ignore
    discountPercent: idx % 2 === 0 ? discountPercent : 0,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius id est vel consectetur. Pellentesque quam massa, facilisis nec eleifend ut, aliquet vitae velit.', // prettier-ignore
    excerptHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius id est vel consectetur. Pellentesque quam massa, facilisis nec eleifend ut, aliquet vitae velit.</p>", // prettier-ignore
    items: composeItems(idx),
    measurementChart,
    media: composeMedia(idx),
    name: `Generic Product ${idx + 1}`,
    price: idx % 2 === 0 ? formatPrice(priceAsNumber) : formatPrice(priceBeforeDiscountAsNumber), // prettier-ignore
    priceAsNumber: idx % 2 === 0 ? priceAsNumber : priceBeforeDiscountAsNumber,
    priceBeforeDiscount: formatPrice(priceBeforeDiscountAsNumber),
    priceBeforeDiscountAsNumber,
    product: String(idx),
    showAsNew: false,
    showAsOnSale: false,
    sku: String(idx),
    uri: `generic-product-${idx}`,
    variant_swatch: composeSwatch(idx),
    variantName: 'Black Ritzy Cotton',
    // Project specific below...
    ...other,
  }
}

const products = Array.from(new Array(20), (_, idx) => composeProduct(idx))

const enhancedProducts = products.map((product, idx) => {
  const relatedProducts = [...products].filter((p, idx2) => idx2 !== idx)

  return formatProduct({
    ...product,
    relatedProducts: [
      ...relatedProducts.slice(0, colors.length - 1).map((p) => ({ ...p, relation: 'variant' })),
      ...relatedProducts.slice(0, 12).map((p) => ({ ...p, relation: 'standard' })),
    ],
  })
})

export default enhancedProducts
