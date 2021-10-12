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
    label: 'Clothing',
    links: subLinks,
    url: '/clothing',
  },
  {
    label: 'Accessories',
    links: subLinks,
    url: '/accessories',
  },
  {
    label: 'Shoes',
    links: subLinks,
    url: '/shoes',
  },
  {
    label: 'Homewear',
    links: subLinks,
    url: '/homewear',
  },
  {
    label: 'Skincare',
    links: subLinks,
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
