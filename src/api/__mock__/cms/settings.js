const subLinks = Array.from(new Array(12), (_, idx) => ({
  label: `Link ${idx + 1}`,
  url: `/link-${idx + 1}`,
}))

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
    items: subLinks,
    label: 'Clothing',
    url: '/clothing',
  },
  {
    items: subLinks,
    label: 'Accessories',
    url: '/accessories',
  },
  {
    items: subLinks,
    label: 'Shoes',
    url: '/shoes',
  },
  {
    items: subLinks,
    label: 'Homewear',
    url: '/homewear',
  },
  {
    items: subLinks,
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
