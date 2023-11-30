import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

const buttonSizes = ['medium', 'small'] as const
const buttonVariants = ['contained', 'outlined', 'ghost'] as const

type ButtonSize = (typeof buttonSizes)[number]
type ButtonVariant = (typeof buttonVariants)[number]

interface TemplateProps {
  children: ReactNode
  className?: string
  disabled: boolean
  size: ButtonSize
  variant: ButtonVariant
}

function Template(props: TemplateProps) {
  const { children, className, disabled, size, variant } = props

  return (
    <button
      className={cn(
        'type-button transition-colors ease-out disabled:text-action-disabled',
        {
          'bg-default text-default-contrast hover:bg-default-light disabled:bg-action-disabledBg':
            variant === 'contained',
          'border border-divider hover:border-default disabled:border-action-disabledBg':
            variant === 'outlined',
          'hover:text-default-light': variant === 'ghost',
          'min-h-8 px-3 py-2': size === 'small',
          'min-h-12 px-4 py-4': size === 'medium',
        },
        className,
      )}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}

const meta = {
  title: 'Examples/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    size: {
      control: 'select',
      options: buttonSizes,
    },
    variant: {
      control: 'select',
      options: buttonVariants,
    },
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click me!',
    disabled: false,
    size: buttonSizes[0],
    variant: buttonVariants[0],
  },
}

export const WithArrow: Story = {
  args: {
    ...Default.args,
    className: 'inline-flex items-center gap-2',
    children: (
      <>
        <span>Click me!</span>

        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
  },
}
