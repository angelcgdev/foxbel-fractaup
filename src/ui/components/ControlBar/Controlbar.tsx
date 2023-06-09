import { VolumeController } from './components/VolumeController';
import '../../../index.css';
import { Icon } from '../Icon/Icon';
import { type TrackMdl } from '../../../domain/model/track.mdl';
import { forwardRef } from 'react';

export interface ControllBarProps {
  className?: string;
  trackSelected?: TrackMdl;
  onNext: () => void;
  onPrev: () => void;
  onPause: () => void;
  onEnded: () => void;
  onPlay: () => void;
  initialVolume: number;
  paused: boolean;
  onChangeVolume: () => void;
}
// eslint-disable-next-line react/display-name
export const ControllBar = forwardRef<
  HTMLElement,
  ControllBarProps
>(function (
  {
    className,
    onNext,
    onPause,
    onPlay,
    onPrev,
    trackSelected,
    initialVolume,
    onChangeVolume,
    paused
  },
  ref
) {
  return (
    <footer
      ref={ref}
      className={`w-full h-16 sm:h-20 md:h-24 lg:h-[100px] bg-primary text-white flex justify-between items-center pr-6 sm:pr-9 md:pr-12 ${
        className ?? ''
      }`}
    >
      <div className='w-full h-16 sm:h-20 md:h-24 lg:h-[100px] flex gap-2 md:gap-5 flex-1'>
        <figure
          className={`h-full bg-gray aspect-square ${
            trackSelected != null ? '' : 'hidden'
          }`}
        >
          <img
            src={trackSelected?.album.cover}
            alt='Albun cover'
            className='h-full aspect-square object-fill'
          />
        </figure>
        <div className='flex flex-col justify-center gap-0 sm:gap-1 lg:gap-2'>
          <h3 className='song-title text-ellipsis w-full'>
            {trackSelected?.title}
          </h3>
          <p className='song-artist'>
            {trackSelected?.artist.name}
          </p>
        </div>
      </div>
      <div className='p-3 md:p-5 h-full flex items-center justify-end md:justify-center gap-6 md:flex-1'>
        <button
          onClick={onPrev}
          aria-label='Previous track'
          className='text-white disabled:text-opacity-50'
          disabled={trackSelected === undefined}
        >
          <Icon icon='prev' />
        </button>
        <button
          className='h-full aspect-square bg-white bg-opacity-10 rounded-full text-white disabled:text-opacity-50'
          disabled={trackSelected === undefined}
          onClick={paused ? onPlay : onPause}
          aria-label={paused ? 'Pause' : 'Play'}
        >
          {paused ? (
            <Icon icon='pause' />
          ) : (
            <Icon icon='play' />
          )}
        </button>
        <button
          onClick={onNext}
          aria-label='Next track'
          className='text-white disabled:text-opacity-50'
          disabled={trackSelected === undefined}
        >
          <Icon icon='next' />
        </button>
      </div>
      <VolumeController
        onChangeVolume={onChangeVolume}
        initialVolume={initialVolume}
      />
    </footer>
  );
});
