import createMuiTypography from '@material-ui/core/styles/createTypography'
import deepmerge from '@oakwood/oui-utils/deepmerge'

const caseNoCaps = {
  textTransform: 'none',
}

export default function createTypography(palette, typography) {
  const {
    fontFamily = '"Helvetica", "Arial", sans-serif',
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightSemibold = 600,
    fontWeightBold = 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography

  const coef = fontSize / 14
  const pxToRem = size => `${(size / htmlFontSize) * coef}rem`
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, extra) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    letterSpacing: `${letterSpacing}em`,
    ...extra,
    ...allVariants,
  })

  const variants = {
    h1: buildVariant(fontWeightSemibold, 72, 1.05, -0.015),
    h2: buildVariant(fontWeightSemibold, 58, 1.1, -0.015),
    h3: buildVariant(fontWeightRegular, 48, 1.25, -0.01),
    h4: buildVariant(fontWeightSemibold, 38, 1.2, -0.015),
    h5: buildVariant(fontWeightRegular, 24, 1.3, 0),
    h6: buildVariant(fontWeightSemibold, 20, 1.5, 0.015),
    subtitle1: buildVariant(fontWeightMedium, 18, 1.65, 0.025),
    subtitle2: buildVariant(fontWeightMedium, 16, 1.65, 0.025),
    body1: buildVariant(fontWeightRegular, 18, 1.6, 0.01),
    body2: buildVariant(fontWeightRegular, 16, 1.6, 0.01),
    button: buildVariant(fontWeightSemibold, 16, 1.25, 0.07, caseNoCaps),
    caption: buildVariant(fontWeightSemibold, 12, 1.35, 0.12),
    overline: buildVariant(fontWeightSemibold, 10, 1.35, 0.15),
  }

  const typographyOutput = deepmerge(
    {
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightSemibold,
      fontWeightBold,
      ...variants,
    },
    other,
    {
      clone: false, // No need to clone deep
    },
  )

  return createMuiTypography(palette, typographyOutput)
}
