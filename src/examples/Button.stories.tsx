import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  myProp?: string
}

function Button(props: ButtonProps): JSX.Element {
  const { children, className, disabled, ...rest } = props

  return (
    <button
      className={['disabled:opacity-30', className].join(' ')}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

const meta = {
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click me!',
    disabled: false,
  },
}
