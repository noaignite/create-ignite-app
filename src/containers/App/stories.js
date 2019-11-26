import React from 'react'
import { storiesOf } from '@storybook/react'
import { compose, defaultProps } from 'recompose'
import withApiContext from 'api'
import { withAppContext, withAppProvider } from './AppContext'
import App from './App'

const stories = storiesOf('Containers/App', module)

export const Default = compose(
  withApiContext(),
  defaultProps({
    children: <div>[this.props.children]</div>,
  }),
  withAppProvider(),
  withAppContext(),
)(App)

stories.add('Default', () => <Default />)

export default App
