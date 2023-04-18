import { useContext, useEffect, useRef } from 'react';
import { type TrackMdl } from '../../../domain/model/track.mdl';
import {
  FoxbelContext,
  TrackActionType,
  TrackControlType
} from '../../provider/FoxbelProvider';

export function usePlayer() {
  const { state, dispatch } = useContext(FoxbelContext);
  const { trackSelected, control, tracks } = state;
  const { play, volume } = control;

  const player = useRef<HTMLAudioElement>(null);
  const prevTrack = useRef<TrackMdl>(null);
  const onChangeVolume = (volume: number) => {
    if (player.current != null) {
      player.current.volume = volume;
    }
  };

  const loadMusic = async () => {
    if (player.current === null) return;
    player.current.currentTime = 0;
    setNextPlayPause(true);
  };

  const setNextPlayPause = (state: boolean) => {
    dispatch({
      type: TrackControlType.PLAYPAUSE,
      payload: {
        ...control,
        play: {
          ...play,
          loading: true,
          next: state
        }
      }
    });
  };
  const setPlayPause = (state: boolean) => {
    dispatch({
      type: TrackControlType.PLAYPAUSE,
      payload: {
        ...control,
        play: {
          ...play,
          loading: false,
          state
        }
      }
    });
  };

  const loadTrack = (track: TrackMdl) => {
    dispatch({
      type: TrackActionType.PUSHTRACK,
      payload: track
    });
  };

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

  const handleEnded = () => {
    const passed = nextTrack();
    if (!passed && tracks.length > 0) {
      loadTrack(tracks[0]);
    }
  };

  useEffect(() => {
    if (trackSelected === undefined) return;
    if (prevTrack.current?.id === trackSelected?.id) return;
    void loadMusic();
  }, [trackSelected]);

  useEffect(() => {
    onChangeVolume(volume);
  }, [volume]);

  useEffect(() => {
    if (play.loading && play.next) {
      console.log();
      void player.current?.play().then(() => {
        setPlayPause(true);
      });
    }
    if (play.loading && !play.next) {
      player.current?.pause();
      setPlayPause(false);
    }
  }, [play.loading]);

  return {
    trackSelected,
    player,
    paused: play.state,
    handleEnded
  };
}
