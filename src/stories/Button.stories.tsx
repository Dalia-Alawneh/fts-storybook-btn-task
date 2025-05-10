import Button from "../components/Button";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'DesignSystem/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green'],
    },
  },
}
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    color: 'blue',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    color: 'red',
    children: 'Secondary Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    color: 'green',
    children: 'Text Button',
  },
};
