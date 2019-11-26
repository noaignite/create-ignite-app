/**
 * Extra data used to further extend the `theme` object.
 *
 * Add desired settings below to keep a high project consistency. Think twice
 * before adding unnecessary values.
 */

export const aspectRatios = {
  // Generic ratios
  square: {
    width: 1,
    height: 1,
  },
  video: {
    width: 16,
    height: 9,
  },
  // Project specific ratios
}

export const constants = {
  TOOLBAR_MIN_HEIGHT_DENSE: 50,
  TOOLBAR_MIN_HEIGHT_RESPONSIVE: 64,
  TOOLBAR_MIN_HEIGHT: 56,
}

export default {
  aspectRatios,
  constants,
}
