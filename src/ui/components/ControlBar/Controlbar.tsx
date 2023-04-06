import { VolumeController } from './components/VolumeController';
import useControllerBarViewModel from './ViewModel';
import '../../../index.css';
import { Icon } from '../Icon/Icon';
interface ControllBarProps {
  className?: string;
}
export const ControllBar = ({
  className
}: ControllBarProps) => {
  const {
    trackSelected,
    player,
    prevTrack,
    nextTrack,
    play,
    onChangeVolume,
    handleEnd,
    handlePlay
  } = useControllerBarViewModel();
  return (
    <footer
      className={`w-full h-16 sm:h-20 md:h-24 lg:h-[100px] bg-primary text-white flex justify-between items-center pr-6 sm:pr-9 md:pr-12 ${
        className ?? ''
      }`}
    >
      {trackSelected != null ? (
        <audio
          ref={player}
          src={trackSelected.preview}
          controls
          // eslint-disable-next-line react/no-unknown-property
          playsInline={play}
          onEnded={handleEnd}
          className='hidden'
        />
      ) : (
        <></>
      )}
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
          onClick={prevTrack}
          aria-label='Previous track'
          className='text-white disabled:text-opacity-50'
          disabled={trackSelected === undefined}
        >
          <Icon icon='prev' />
        </button>
        <button
          className='h-full aspect-square bg-white bg-opacity-10 rounded-full text-white disabled:text-opacity-50'
          disabled={trackSelected === undefined}
          onClick={() => {
            void handlePlay();
          }}
          aria-label={play ? 'Pause' : 'Play'}
        >
          {play ? (
            <Icon icon='pause' />
          ) : (
            <Icon icon='play' />
          )}
        </button>
        <button
          onClick={nextTrack}
          aria-label='Next track'
          className='text-white disabled:text-opacity-50'
          disabled={trackSelected === undefined}
        >
          <Icon icon='next' />
        </button>
      </div>
      <VolumeController onChangeVolume={onChangeVolume} />
    </footer>
  );
};
