import type { StoryObj, Meta } from '@storybook/react';
import { CardAlbum } from './CardAlbum';
import { defaultTrack } from '../../../data/dummy';

const meta: Meta<typeof CardAlbum> = {
  title: 'Design System/CardAlbum',
  component: CardAlbum,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    album: defaultTrack.album,
    artist: defaultTrack.artist
  }
};
