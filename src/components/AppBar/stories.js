import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import BrandIcon from '../icons/Brand'
import BurgerIcon from '../icons/Burger'
import CrossIcon from '../icons/Cross'
import IconButton from '../IconButton'
import Toolbar from '../Toolbar'
import AppBar from './AppBar'

const stories = storiesOf('Components/AppBar', module)

export const Default = () => (
  <div style={{ height: '100vh', background: '#eee' }}>
    <AppBar
      color={select('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
      position={select('position', ['fixed', 'absolute', 'sticky', 'static', 'relative'], 'fixed')}
    >
      <Toolbar variant="dense">
        <IconButton edge="start">
          <BurgerIcon />
        </IconButton>

        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <IconButton>
            <BrandIcon style={{ width: 90 }} />
          </IconButton>
        </div>

        <IconButton edge="end">
          <CrossIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
)

stories.add('Default', Default)

export default AppBar
