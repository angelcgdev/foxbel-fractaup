import { useContext, type ComponentType } from 'react';
import { type TrackMdl } from '../../../../domain/model/track.mdl';
import { type CardTrackProps } from '../../CardTrack/CardTrack';
import {
  FoxbelContext,
  TrackActionType,
  TrackControlType
} from '../../../provider/FoxbelProvider';

interface WithPlayingProps {
  track: TrackMdl;
}

export const withPlaying = <P extends CardTrackProps>(
  WrappedComponent: ComponentType<P & CardTrackProps>
) => {
  function WithPlaying(props: WithPlayingProps) {
    const {
      state: { trackSelected, control },
      dispatch
    } = useContext(FoxbelContext);

    const pushTrack = () => {
      dispatch({
        type: TrackActionType.PUSHTRACK,
        payload: props.track
      });
    };
    const handlePlayPause = () => {
      dispatch({
        type: TrackControlType.PLAYPAUSE,
        payload: {
          ...control,
          play: {
            ...control.play,
            next: !control.play.next,
            loading: true
          }
        }
      });
    };

    const handlePlay = () => {
      if (props.track.id !== trackSelected?.id) {
        pushTrack();
      } else {
        handlePlayPause();
      }
    };

    return (
      <WrappedComponent
        {...(props as P)}
        isSelected={trackSelected?.id === props.track.id}
        isPlaying={
          trackSelected?.id === props.track.id &&
          control.play.state
        }
        onPlay={handlePlay}
        onPause={handlePlay}
      />
    );
  }

  return WithPlaying;
};
