import { createTheme } from 'components/styles'
import generatePreload from './generatePreload'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  props: {
    OuiMedia: { generatePreload },
  },
})

export default theme
