import { compose } from 'recompose'
import { withCmsContext } from 'api'
import { withAppProvider } from './AppContext'
import App from './App'

export default compose(withCmsContext(), withAppProvider())(App)
