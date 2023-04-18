import type { StoryObj, Meta } from '@storybook/react';
import { CardTrack } from './CardTrack';
import { defaultTrack } from '../../../data/dummy';

const meta: Meta<typeof CardTrack> = {
  title: 'Design System/CardTrack',
  component: CardTrack,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    track: defaultTrack,
    isPlaying: false
  }
};
