import { useEffect, useRef, useState } from 'react';
import { type TrackMdl } from '../../../domain/model/track.mdl';

interface useControllerProps {
  trackSelected?: TrackMdl;
  initialVolume: number;
  onEnded: () => void;
}
export function useControllerBar({
  trackSelected,
  initialVolume,
  onEnded
}: useControllerProps) {
  const player = useRef<HTMLAudioElement>(null);
  const [paused, setPaused] = useState<boolean>(false);
  const prevTrack = useRef<TrackMdl>(null);
  const onChangeVolume = (volume: number) => {
    if (player.current != null) {
      player.current.volume = volume;
    }
  };

  const loadMusic = async () => {
    if (player.current === null) return;
    player.current.currentTime = 0;
    setPaused(!player.current.paused);
    await player.current.play();
    setPaused(!player.current.paused);
  };
  const handlePlay = async () => {
    if (player.current === null) return;
    if (player.current.paused) {
      await player.current?.play();
    } else {
      player.current?.pause();
    }
    setPaused(!(player.current?.paused ?? false));
  };
  const handleEnded = () => {
    onEnded();
    setPaused(false);
  };

  useEffect(() => {
    if (trackSelected === undefined) return;
    if (prevTrack.current?.id === trackSelected?.id) return;
    void loadMusic();
  }, [trackSelected]);

  useEffect(() => {
    onChangeVolume(initialVolume);
  }, []);

  return {
    trackSelected,
    player,
    onChangeVolume,
    handlePlay,
    paused,
    handleEnded
  };
}
