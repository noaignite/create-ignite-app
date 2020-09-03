import * as React from 'react'
import KeyboardArrowRightIcon from '../icons/KeyboardArrowRight'
import FacebookIcon from '../icons/Facebook'
import ListItem from '../ListItem'
import ListItemAvatar from '../ListItemAvatar'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import List from './List'

export default {
  title: 'Components/List',
  component: List,
}

const Template = (args) => (
  <List {...args}>
    <ListItem component="div" button divider>
      <ListItemAvatar>
        <img src="//source.unsplash.com/40x60" alt="" />
      </ListItemAvatar>

      <ListItemText primary="Primary text" secondary="Secondary text" />

      <KeyboardArrowRightIcon />
    </ListItem>

    <ListItem component="div" button divider>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>

      <ListItemText primary="Primary text" secondary="Secondary text" />

      <KeyboardArrowRightIcon />
    </ListItem>

    <ListItem component="div" button divider>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>

      <ListItemText primary="Primary text" />

      <KeyboardArrowRightIcon />
    </ListItem>

    <ListItem component="div" button divider>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>

      <ListItemText secondary="Secondary text" />

      <KeyboardArrowRightIcon />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>

      <ListItemText primary="Primary text" secondary="Secondary text" />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>

      <ListItemText primary="Primary text" />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>

      <ListItemText secondary="Secondary text" />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemText primary="Primary text" secondary="Secondary text" inset />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemText primary="Primary text" inset />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemText secondary="Secondary text" inset />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemText primary="Primary text" secondary="Secondary text" />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemText primary="Primary text" />
    </ListItem>

    <ListItem component="div" divider>
      <ListItemText secondary="Secondary text" />
    </ListItem>
  </List>
)

export const Default = Template.bind({})
Default.args = {
  component: 'div',
  dense: false,
  disablePadding: false,
}
