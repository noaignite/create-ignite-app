import createTheme from 'components/styles/createTheme'
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
