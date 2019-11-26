import { withProps } from 'recompose'
import { menuPrimary, menuFooter } from './mock'

const withApiContext = () => {
  return withProps({
    menuPrimary,
    menuFooter,
  })
}

export default withApiContext
