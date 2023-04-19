import useControllerBarViewModel from './useWithTrack';
import { type ControllBarProps } from '../../ControlBar/Controlbar';
import { forwardRef, type ComponentType } from 'react';

export interface WithTrackProps {
  className: string;
}

export const withTrack = <P extends ControllBarProps>(
  WrappedComponent: ComponentType<P & ControllBarProps>
) => {
  // eslint-disable-next-line react/display-name
  const WithTrack = forwardRef<HTMLElement, WithTrackProps>(
    (props, ref) => {
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
          paused={
            control.play.state && !control.play.loading
          }
          onPause={handlePlayPause}
          onPlay={handlePlayPause}
          onChangeVolume={handleVolume}
          initialVolume={control.volume}
          ref={ref}
        />
      );
    }
  );
  return WithTrack;
};
