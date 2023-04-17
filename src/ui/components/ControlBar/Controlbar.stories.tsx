/* @vite-ignore */
import { type Meta, type StoryObj } from '@storybook/react';
import { ControllBar } from './Controlbar';
import { type TrackMdl } from '../../../domain/model/track.mdl';

const meta: Meta<typeof ControllBar> = {
  title: 'Design System/ControllerBar',
  component: ControllBar,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;
const defaultTrack: TrackMdl = {
  id: '1522223672',
  readable: true,
  title: 'Easy On Me',
  titleShort: 'Easy On Me',
  titleVersion: '',
  link: 'https://www.deezer.com/track/1522223672',
  duration: '224',
  rank: '966777',
  explicitLyrics: false,
  explicitContentLyrics: 0,
  explicitContentCover: 2,
  preview:
    'https://cdns-preview-8.dzcdn.net/stream/c-8b175d5fccd6b1c54973c9307f572010-3.mp3',
  md5Image: 'a87ee7c212c7b0f9ae687c378f260324',
  artist: {
    id: '75798',
    name: 'Adele',
    link: 'https://www.deezer.com/artist/75798',
    picture: 'https://api.deezer.com/artist/75798/image',
    pictureSmall:
      'https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/56x56-000000-80-0-0.jpg',
    pictureMedium:
      'https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/250x250-000000-80-0-0.jpg',
    pictureBig:
      'https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/500x500-000000-80-0-0.jpg',
    pictureXl:
      'https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/1000x1000-000000-80-0-0.jpg',
    tracklist:
      'https://api.deezer.com/artist/75798/top?limit=50',
    type: 'artist'
  },
  album: {
    id: '265655342',
    title: 'Easy On Me',
    cover: 'https://api.deezer.com/album/265655342/image',
    coverSmall:
      'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/56x56-000000-80-0-0.jpg',
    coverMedium:
      'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg',
    coverBig:
      'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg',
    coverXl:
      'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/1000x1000-000000-80-0-0.jpg',
    md5Image: 'a87ee7c212c7b0f9ae687c378f260324',
    tracklist:
      'https://api.deezer.com/album/265655342/tracks',
    type: 'album'
  },
  type: 'track'
};
export const WithTrack: Story = {
  args: {
    trackSelected: defaultTrack
  }
};
export const WithoutTrack: Story = {
  args: {
    trackSelected: undefined
  }
};
