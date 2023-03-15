import * as React from 'react'
import { Radio, RadioGroup, Typography } from '@mui/material'
import FormControlBoxDetails from '../FormControlBoxDetails'
import FormControlBoxSummary from '../FormControlBoxSummary'
import FormControlBox from './FormControlBox'

export default {
  component: FormControlBox,
}

const Template = (args) => {
  const [value, setValue] = React.useState('0')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <RadioGroup onChange={handleChange} value={value} name="group">
      {Array.from(new Array(2), (_, idx) => (
        <FormControlBox key={idx} control={<Radio />} value={idx} {...args}>
          <FormControlBoxSummary
            endAdornment={<img src="//source.unsplash.com/100x34" alt="" />}
            aria-controls={`panel-${idx}-content`}
            id={`panel-${idx}-header`}
          >
            <Typography variant="subtitle2">Option {idx + 1}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </Typography>
          </FormControlBoxSummary>

          <FormControlBoxDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis
              voluptates ad in sed velit iusto aperiam ipsam dicta temporibus.
            </Typography>
          </FormControlBoxDetails>
        </FormControlBox>
      ))}
    </RadioGroup>
  )
}

export const Default = {
  args: {
    disabled: false,
    divider: false,
  },
  render: Template,
}
