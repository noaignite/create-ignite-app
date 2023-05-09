type AspectRatio = { height: number; width: number }

type AspectRatios = {
  [key in string]: AspectRatio
}

/**
 * Get the width and height of different media on the site.
 * Set your own aspect ratios here when a pattern emerges to adhere
 * to the DRY-principle.
 */
export const ASPECT_RATIOS: AspectRatios = {
  video: {
    width: 16,
    height: 9,
  },
  // Add project specific ratios below
  article: {
    width: 320,
    height: 420,
  },
  product: {
    width: 4,
    height: 5,
  },
}

/**
 * The name of the project. This value is used in the `<title />` of the page
 * as the suffix.
 * @default 'Create Ignite App'
 */
export const SITE_NAME = 'Create Ignite App'
/**
 * The `id` attribute of the site root element.
 * The root element in NEXT.js and React is an element where the app
 * is mounted onto.
 * @default 'site-root'
 */
export const SITE_ROOT_ID = 'site-root'
/**
 * The `id` attribute of the site's primary `<header />` element
 * in the layout.
 * @default 'site-header'
 */
export const SITE_HEADER_ID = 'site-header'
/**
 * The `id` attribute of the site's `<main />` content element
 * in the layout.
 * @default 'main-content'
 */
export const SITE_MAIN_ID = 'main-content'
/**
 * The `id` attribute of the site's `<footer />` element
 * in the layout.
 * @default 'site-footer'
 */
export const SITE_FOOTER_ID = 'site-footer'
