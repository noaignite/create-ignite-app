const overrides = {
  defaultProps: {
    color: 'default',
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    sizeSmall: ({ theme }) => ({
      padding: '13px 18px',
      fontSize: theme.typography.pxToRem(11),
    }),
    sizeMedium: {
      padding: '16px 24px',
    },
    sizeLarge: {
      padding: '19px 30px',
    },
    outlinedSizeSmall: {
      padding: '12px 17px', // Remove 1px in padding due to borders.
    },
    outlinedSizeMedium: {
      padding: '15px 23px', // Remove 1px in padding due to borders.
    },
    outlinedSizeLarge: {
      padding: '18px 29px', // Remove 1px in padding due to borders.
    },
  },
}

export default overrides
