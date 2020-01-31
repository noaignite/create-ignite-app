import { compose } from 'recompose'
import withApiContext from 'api'
import { withAppProvider } from './AppContext'
import App from './App'

export default compose(withApiContext(), withAppProvider())(App)
