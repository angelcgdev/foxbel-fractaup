import {
  faVolumeDown,
  faVolumeHigh,
  faVolumeOff
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ChangeEvent, useState } from 'react';

interface VolumeControllerProps {
  onChangeVolume: (vol: number) => void;
}

export const VolumeController = ({
  onChangeVolume
}: VolumeControllerProps) => {
  const [volume, setVolume] = useState('.5');
  const minValue = 0;
  const maxValue = 1.0;

  const handleVolume = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const normalizedValue = Math.max(
      Math.min(+value, maxValue),
      minValue
    );
    onChangeVolume(normalizedValue);
    setVolume(normalizedValue.toString());
  };

  const icon = () => {
    if (+volume === 0) {
      return faVolumeOff;
    }
    if (+volume < maxValue / 2) {
      return faVolumeDown;
    }
    return faVolumeHigh;
  };

  return (
    <div className='hidden sm:flex items-center justify-end gap-5 h-full flex-1'>
      <input
        type='range'
        className='w-[100px]'
        onChange={handleVolume}
        step={0.01}
        value={volume}
        min={minValue}
        max={maxValue}
        aria-label='Volume Control'
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-valuenow={+volume}
      />
      <div className='h-7 md:h-9 aspect-square flex items-center'>
        <FontAwesomeIcon icon={icon()} className='h-full' />
      </div>
    </div>
  );
};
