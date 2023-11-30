import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

const typographyVariants = [
  'type-h1',
  'type-h1-xs',
  'type-h1-sm',
  'type-h1-md',
  'type-h1-lg',
  'type-h1-xl',
  'type-body1',
  'type-button',
] as const

type TypographyVariant = (typeof typographyVariants)[number]

interface TemplateProps {
  children: ReactNode
  className?: string
  variant: TypographyVariant
}

function Template(props: TemplateProps) {
  const { children, className, variant } = props

  return <p className={cn(variant, className)}>{children}</p>
}

const meta = {
  title: 'Examples/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    variant: {
      control: 'select',
      options: typographyVariants,
    },
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Typography',
    variant: typographyVariants[0],
  },
}
