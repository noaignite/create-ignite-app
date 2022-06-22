function composeLinks(length) {
  return Array.from(new Array(length), (_, idx) => ({
    label: `Link ${idx + 1}`,
    url: `/link-${idx + 1}`,
  }))
}

export const menuPrimary = [
  {
    label: 'Brands',
    url: '/brands',
  },
  {
    label: 'New arrivals',
    url: '/new-arrivals',
  },
]

export const menuSecondary = [
  {
    items: composeLinks(8),
    label: 'Clothing',
    url: '/clothing',
  },
  {
    items: composeLinks(4),
    label: 'Accessories',
    url: '/accessories',
  },
  {
    items: composeLinks(6),
    label: 'Shoes',
    url: '/shoes',
  },
  {
    items: composeLinks(7),
    label: 'Homewear',
    url: '/homewear',
  },
  {
    items: composeLinks(5),
    label: 'Skincare',
    url: '/skincare',
  },
]

export const menuFooter = [
  {
    label: 'Work',
    url: '/work',
  },
  {
    label: 'News',
    url: '/news',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'About',
    url: '/about',
  },
]

export default {
  menus: {
    primary: menuPrimary,
    secondary: menuSecondary,
    footer: menuFooter,
  },
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  pinterestUrl: 'https://www.pinterest.com/',
  storeMessage: 'lorem ipsum dolor sit amet, consectetur',
  termsPageUrl: '/terms-and-conditions',
  twitterUrl: 'https://twitter.com/',
}
