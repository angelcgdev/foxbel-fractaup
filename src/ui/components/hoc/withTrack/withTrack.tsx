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
      handleEnd,
      nextTrack,
      prevTrack,
      trackSelected
    } = useControllerBarViewModel();

    return (
      <WrappedComponent
        {...(props as P)}
        trackSelected={trackSelected}
        onEnded={handleEnd}
        onNext={nextTrack}
        onPrev={prevTrack}
        initialVolume={0.1}
      />
    );
  }
  return WithTrack;
};
