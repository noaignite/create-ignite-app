function generateSubMenu(amount) {
  return Array.from(new Array(amount), (_, idx) => ({
    label: `Sub link ${idx + 1}`,
    url: `/sub-link-${idx + 1}`,
  }))
}

export const menuPrimary = [
  {
    label: 'Work',
    links: generateSubMenu(7),
    mediaSrc: '//source.unsplash.com/300x200',
    url: '/work',
  },
  {
    label: 'News',
    links: generateSubMenu(8),
    mediaSrc: '//source.unsplash.com/300x201',
    url: '/news',
  },
  {
    label: 'Press',
    links: generateSubMenu(4),
    mediaSrc: '//source.unsplash.com/300x202',
    url: '/press',
  },
  {
    label: 'About',
    links: generateSubMenu(5),
    url: '/about',
  },
]

export const menuFooter = menuPrimary

export const productMedia = [
  '//source.unsplash.com/380x560',
  '//source.unsplash.com/380x560',
  '//source.unsplash.com/380x560',
]

export const product = {
  media: {
    full: productMedia,
    standard: productMedia,
    thumb: productMedia,
  },
  name: 'Generic Product',
  price: '20 EUR',
  priceBeforeDiscount: '30 EUR',
  stock: 10,
  uri: 'generic-product',
}

export const cartItem = {
  id: '36ed7cefb0068420969c872f188dc500',
  totalPrice: '40 EUR',
  priceEach: '20 EUR',
  quantity: 2,
  product,
}
