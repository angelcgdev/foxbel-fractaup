/* @vite-ignore */
import { type Meta, type StoryObj } from '@storybook/react';
import { ControllBar } from './Controlbar';
import { defaultTrack } from '../../../data/dummy';

const meta: Meta<typeof ControllBar> = {
  title: 'Design System/ControlBar',
  component: ControllBar,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;
export const WithTrack: Story = {
  args: {
    trackSelected: defaultTrack,
    initialVolume: 0
  }
};
export const WithoutTrack: Story = {
  args: {
    trackSelected: undefined
  }
};
