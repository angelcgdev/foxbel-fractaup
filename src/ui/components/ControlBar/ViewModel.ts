import { useContext, useEffect, useRef, useState } from 'react';
import { FoxbelContext, TrackActionType } from '../../provider/FoxbelProvider';
import { type TrackMdl } from '../../../domain/model/track.mdl';

export default function ControllerBarViewModel() {
  const player = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
  const {
    state: { trackSelected, tracks },
    dispatch
  } = useContext(FoxbelContext);
  const onChangeVolume = (volume: number) => {
    if (player.current != null) {
      player.current.volume = volume;
    }
  };
  const loadMusic = async () => {
    if (player.current === null) return
    player.current.currentTime = 0;
    setPlay(!player.current.paused);
    await player.current.play();
    console.log(player.current.paused);
    setPlay(!player.current.paused);
  };
  const handlePlay = async () => {
    if (player.current === null) return
    if (player.current.paused) {
      await player.current?.play();
    } else {
      player.current?.pause();
    }
    setPlay(!((player.current?.paused) ?? false));
  };
  const nextTrack = () => {
    if (trackSelected == null) return false;
    const trackSelectedIndex =
      tracks.findIndex((track) => track.id === trackSelected?.id) + 1;
    const newTrack: TrackMdl | null = tracks[trackSelectedIndex];
    if (newTrack != null) {
      setPlay(false);
      loadTrack(tracks[trackSelectedIndex]);
      return true;
    }
    return false;
  };
  const prevTrack = () => {
    if (trackSelected == null) return;
    const trackSelectedIndex =
      tracks.findIndex((track) => track.id === trackSelected?.id) - 1;
    const newTrack: TrackMdl | null = tracks[trackSelectedIndex];
    if (newTrack != null) {
      setPlay(false);
      loadTrack(tracks[trackSelectedIndex]);
    }
  };
  const handleEnd = () => {
    setPlay(false);
    const passed = nextTrack();
    if (!passed && tracks.length > 0) {
      loadTrack(tracks[0]);
    }
  };
  const loadTrack = (track: TrackMdl) => {
    dispatch({ type: TrackActionType.PUSHTRACK, payload: track });
  };
  useEffect(() => {
    if (trackSelected != null) {
      void loadMusic();
    }
  }, [trackSelected]);

  return {
    trackSelected,
    player,
    prevTrack,
    nextTrack,
    play,
    onChangeVolume,
    handleEnd,
    handlePlay
  };
}
