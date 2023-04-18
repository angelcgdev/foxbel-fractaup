import { usePlayer } from './usePlayer';

export const Player = () => {
  const { handleEnded, paused, player, trackSelected } =
    usePlayer();
  return (
    <audio
      ref={player}
      src={trackSelected?.preview}
      controls
      // eslint-disable-next-line react/no-unknown-property
      playsInline={paused}
      onEnded={handleEnded}
      className='hidden'
    />
  );
};
