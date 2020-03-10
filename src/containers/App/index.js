import { compose } from 'recompose'
import { withCmsContext } from 'api'
import { withAppContextProvider } from './AppContext'
import App from './App'

export default compose(withCmsContext(), withAppContextProvider())(App)
