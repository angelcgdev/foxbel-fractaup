import { useContext } from 'react';
import {
  FoxbelContext,
  TrackActionType,
  TrackControlType
} from '../../../provider/FoxbelProvider';
import { type TrackMdl } from '../../../../domain/model/track.mdl';

export default function UseWithTrack() {
  const {
    state: { trackSelected, tracks, control },
    dispatch
  } = useContext(FoxbelContext);
  const nextTrack = () => {
    if (trackSelected == null) return false;
    const trackSelectedIndex =
      tracks.findIndex(
        (track) => track.id === trackSelected?.id
      ) + 1;
    const newTrack: TrackMdl | null =
      tracks[trackSelectedIndex];
    if (newTrack != null) {
      loadTrack(tracks[trackSelectedIndex]);
      return true;
    }
    return false;
  };
  const prevTrack = () => {
    if (trackSelected == null) return;
    const trackSelectedIndex =
      tracks.findIndex(
        (track) => track.id === trackSelected?.id
      ) - 1;
    const newTrack: TrackMdl | null =
      tracks[trackSelectedIndex];
    if (newTrack != null) {
      loadTrack(tracks[trackSelectedIndex]);
    }
  };
  const loadTrack = (track: TrackMdl) => {
    dispatch({
      type: TrackActionType.PUSHTRACK,
      payload: track
    });
  };

  const handlePlayPause = () => {
    if (!control.play.loading) {
      dispatch({
        type: TrackControlType.PLAYPAUSE,
        payload: {
          ...control,
          play: {
            ...control.play,
            loading: true,
            next: !control.play.state
          }
        }
      });
    }
  };

  const handleVolume = (volume: number) => {
    dispatch({
      type: TrackControlType.PLAYPAUSE,
      payload: {
        ...control,
        volume
      }
    });
  };

  return {
    trackSelected,
    prevTrack,
    nextTrack,
    handlePlayPause,
    handleVolume,
    control
  };
}
