import { formatProduct } from '~/api'
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

const baseSizes = Array.from(new Array(6), (_, idx) => ({
  item: `0000000${idx}`,
  name: String(32 + idx),
  stock: idx % 3 !== 2 ? 'yes' : 'no',
}))

const baseProduct = {
  description: '* Regular collar, Short sleeves, Snap-button closure through front, Breast pockets in front\n* Quality: Lamb DD Papery\n* Composition: 100% Lamb Leather\n* Lining Composition: Unlined\n* Filling: Unlined\n* Back Length: 70 cm\n* Professional leather clean only', // prettier-ignore
  descriptionHtml: '<ul>\n\t<li>Regular collar, Short sleeves, Snap-button closure through front, Breast pockets in front</li>\n\t<li>Quality: Lamb DD Papery</li>\n\t<li>Composition: 100% Lamb Leather</li>\n\t<li>Lining Composition: Unlined</li>\n\t<li>Filling: Unlined</li>\n\t<li>Back Length: 70 cm</li>\n\t<li>Professional leather clean only</li>\n</ul>', // prettier-ignore
  discountPercent: 0,
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius id est vel consectetur. Pellentesque quam massa, facilisis nec eleifend ut, aliquet vitae velit.', // prettier-ignore
  excerptHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius id est vel consectetur. Pellentesque quam massa, facilisis nec eleifend ut, aliquet vitae velit.</p>", // prettier-ignore
  items: baseSizes,
  measurementChart,
  name: 'Generic Product',
  price: '999 SEK',
  priceAsNumber: 999,
  priceBeforeDiscount: '',
  priceBeforeDiscountAsNumber: 0,
  relation: 'variant',
  swatchColor: colors[0],
  swatchImage: '',
  swatchName: colors[0],
  uri: 'generic-product',
  variantName: 'Black Ritzy Cotton',
}

function composeImages(idx, size) {
  const images = [...unsplashImageIds].map((id) => ['//source.unsplash.com', id, size].join('/'))
  for (let index = 0; index < idx; index += 1) {
    const firstImage = images.shift()
    images.push(firstImage)
  }
  return images.slice(0, 3)
}

function composeProduct(idx) {
  return {
    ...baseProduct,
    ...(idx % 2 === 0 && {
      discountPercent: 20,
      priceBeforeDiscount: '1 199 SEK',
      priceBeforeDiscountAsNumber: 1199,
    }),
    media: { full: composeImages(idx, '1000x1000'), standard: composeImages(idx, '500x500') },
    name: `Generic Product ${idx + 1}`,
    swatchColor: colors[idx % colors.length],
    swatchName: colors[idx % colors.length],
    uri: `generic-product-${idx}`,
  }
}

const products = Array.from(new Array(16), (_, idx) =>
  formatProduct({
    ...composeProduct(idx),
    relatedProducts: Array.from(new Array(6), (__, idx2) => composeProduct(1 + idx + idx2)),
  }),
)

export default products
