import useControllerBarViewModel from './useWithTrack';
import { type ControllBarProps } from '../../ControlBar/Controlbar';
import { type ComponentType } from 'react';

interface WithTrackProps {
  className: string;
}

export const withTrack = <P extends ControllBarProps>(
  WrappedComponent: ComponentType<P & ControllBarProps>
) => {
  function WithTrack(props: WithTrackProps) {
    const {
      control,
      nextTrack,
      prevTrack,
      trackSelected,
      handlePlayPause,
      handleVolume
    } = useControllerBarViewModel();

    return (
      <WrappedComponent
        {...(props as P)}
        trackSelected={trackSelected}
        onNext={nextTrack}
        onPrev={prevTrack}
        paused={control.play.state && !control.play.loading}
        onPause={handlePlayPause}
        onPlay={handlePlayPause}
        onChangeVolume={handleVolume}
        initialVolume={control.volume}
      />
    );
  }
  return WithTrack;
};
