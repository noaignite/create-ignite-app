const RADIUS_STANDARD = 8
const RADIUS_DOT = 4

const overrides = {
  styleOverrides: {
    badge: {
      minWidth: RADIUS_STANDARD * 2,
      height: RADIUS_STANDARD * 2,
      borderRadius: RADIUS_STANDARD,
      fontSize: 9,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    dot: {
      borderRadius: RADIUS_DOT,
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
    },
    anchorOriginTopRightCircle: {
      top: '24%',
      right: '20%',
    },
    anchorOriginBottomRightCircle: {
      bottom: '24%',
      right: '20%',
    },
    anchorOriginTopLeftCircle: {
      top: '24%',
      left: '20%',
    },
    anchorOriginBottomLeftCircle: {
      bottom: '24%',
      left: '20%',
    },
  },
}

export default overrides
