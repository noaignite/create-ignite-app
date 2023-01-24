import { deepmerge } from '@mui/utils'

const caseAllCaps = {
  textTransform: 'uppercase',
}

export default function createTypography(typography) {
  const {
    fontFamilyPrimary = '"Helvetica", "Arial", sans-serif',
    fontFamilySecondary = fontFamilyPrimary,
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightSemibold = 600,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    ...other
  } = typography

  const coef = fontSize / 14
  const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`
  const buildVariant = (typeFace, fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily: typeFace,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    letterSpacing: `${letterSpacing}em`,
    ...casing,
    ...allVariants,
  })

  const variants = {
    h1: buildVariant(fontFamilySecondary, fontWeightRegular, 72, 1, -0.01),
    h2: buildVariant(fontFamilySecondary, fontWeightRegular, 58, 1, 0.01),
    h3: buildVariant(fontFamilySecondary, fontWeightRegular, 40, 1.05, 0.01),
    h4: buildVariant(fontFamilySecondary, fontWeightRegular, 22, 1.2, 0.03),
    h5: buildVariant(fontFamilySecondary, fontWeightRegular, 16, 1.3, 0.03),
    h6: buildVariant(fontFamilySecondary, fontWeightRegular, 12, 1.5, 0.04),
    subtitle1: buildVariant(fontFamilyPrimary, fontWeightRegular, 18, 1.5, 0),
    subtitle2: buildVariant(fontFamilyPrimary, fontWeightMedium, 12, 1.7, 0.02),
    body1: buildVariant(fontFamilyPrimary, fontWeightRegular, 16, 1.7, 0),
    body2: buildVariant(fontFamilyPrimary, fontWeightRegular, 14, 1.7, 0),
    button: buildVariant(fontFamilySecondary, fontWeightMedium, 12, 1.4, 0.04, caseAllCaps),
    caption: buildVariant(fontFamilyPrimary, fontWeightSemibold, 14, 1.3, 0.02),
    overline: buildVariant(fontFamilySecondary, fontWeightRegular, 8, 1.7, 0.12, caseAllCaps),
    // Custom variants
    inputText: buildVariant(fontFamilyPrimary, fontWeightRegular, 16, 1.5, 0),
  }

  const typographyOutput = deepmerge(
    {
      htmlFontSize,
      pxToRem,
      fontFamilyPrimary,
      fontFamilySecondary,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightSemibold,
      fontWeightBold,
      // Mui uses standalone `fontFamily` internally.
      fontFamily: fontFamilyPrimary,
      ...variants,
    },
    other,
  )

  return typographyOutput
}
