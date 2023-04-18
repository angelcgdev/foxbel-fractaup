import { type TrackMdl } from '../../../domain/model/track.mdl';
import { useContext } from 'react';
import '../../../index.css';
import {
  FoxbelContext,
  TrackActionType
} from '../../provider/FoxbelProvider';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface CardTrackProps {
  track: TrackMdl;
  isPlaying: boolean;
}
export const CardTrack = ({
  track,
  isPlaying
}: CardTrackProps) => {
  const { artist, title, album } = track;
  const { dispatch } = useContext(FoxbelContext);
  const handlePlay = () => {
    dispatch({
      type: TrackActionType.PUSHTRACK,
      payload: track
    });
  };
  console.log({ isPlaying });
  return (
    <article
      className=' flex flex-col gap-2 max-w-xs'
      aria-label='Track Card'
    >
      <div className='aspect-square relative'>
        <figure className='aspect-square bg-softgray'>
          <img
            src={album.coverBig}
            className='object-cover w-full'
            alt='Cover of the track'
          />
        </figure>
        <div className='aspect-square w-full absolute z-[1] top-0 flex justify-center items-center text-white hover:bg-black hover:bg-opacity-10 duration-200'>
          <Button
            styleType='ellipsis'
            direction='vertical'
            className='absolute right-0 top-0'
          />
          <button
            className='h-1/3 sm:h-[42px] aspect-square'
            onClick={handlePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <Icon
              icon={isPlaying ? 'pause' : 'play'}
              className='h-full'
            />
          </button>
        </div>
      </div>
      <div className=''>
        <h3
          className={`${
            isPlaying
              ? 'text-primary'
              : 'text-black text-opacity-70'
          } `}
        >
          {title}
        </h3>
        <p className='text-gray'>{artist.name}</p>
      </div>
    </article>
  );
};
