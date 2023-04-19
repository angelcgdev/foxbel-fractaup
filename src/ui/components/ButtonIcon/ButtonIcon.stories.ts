/* @vite-ignore */
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from './ButtonIcon';
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Design System/Atoms/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    children: { type: 'string', defaultValue: 'button' }
  }
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'ellipsisH'
  }
};
