import { type TrackMdl } from '../../../domain/model/track.mdl';
import '../../../index.css';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { Icon } from '../Icon/Icon';

export interface CardTrackProps {
  track: TrackMdl;
  isSelected: boolean;
  isPlaying: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}
export const CardTrack = ({
  track,
  isPlaying,
  isSelected,
  onPause,
  onPlay
}: CardTrackProps) => {
  const { artist, title, album } = track;
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
          <ButtonIcon
            icon='ellipsisV'
            className='absolute right-0 top-0 text-white  translate-x-1'
          />
          <button
            className='h-1/3 sm:h-[42px] aspect-square'
            onClick={isPlaying ? onPause : onPlay}
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
            isSelected
              ? 'text-primary'
              : 'text-black text-opacity-70'
          } `}
        >
          {title}
        </h3>
        <p
          className={
            isSelected ? 'text-black' : 'text-gray'
          }
        >
          {artist.name}
        </p>
      </div>
    </article>
  );
};
