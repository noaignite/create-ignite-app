// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/createEmotionCache.js
import createCache from '@emotion/cache'

/**
 * It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
 * @param {boolean} prepend - Moves MUI styles to the top of the <head> so they're loaded first.
 */
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true })
}
