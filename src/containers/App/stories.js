import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { compose, defaultProps } from 'recompose'
import { withCmsContext } from 'api'
// import { withAppContextProvider } from './AppContext'
import App from './App'

const stories = storiesOf('Containers/App', module)

export const Default = compose(
  defaultProps({
    children: <div>[this.props.children]</div>,
  }),
  withCmsContext,
  // withAppContextProvider,
)(App)

stories.add('Default', Default)

export default App
