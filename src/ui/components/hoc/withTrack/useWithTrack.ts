import { useContext } from 'react';
import {
  FoxbelContext,
  TrackActionType
} from '../../../provider/FoxbelProvider';
import { type TrackMdl } from '../../../../domain/model/track.mdl';

export default function ControllerBarViewModel() {
  const {
    state: { trackSelected, tracks },
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
  const handleEnd = () => {
    const passed = nextTrack();
    if (!passed && tracks.length > 0) {
      loadTrack(tracks[0]);
    }
  };
  const loadTrack = (track: TrackMdl) => {
    dispatch({
      type: TrackActionType.PUSHTRACK,
      payload: track
    });
  };

  return {
    trackSelected,
    prevTrack,
    nextTrack,
    handleEnd
  };
}
