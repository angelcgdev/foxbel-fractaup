/* @vite-ignore */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { type: 'string', defaultValue: 'button' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'primary'
  }
};

export const Outline: Story = {
  args: {
    type: 'seconday',
    children: 'outline'
  }
};
export const MenuEllipties: Story = {
  args: {
    type: 'ellipsis'
  }
};
export const MenuElliptiesVertical: Story = {
  args: {
    type: 'ellipsis',
    direction: 'vertical',
    className: 'text-black'
  }
};
