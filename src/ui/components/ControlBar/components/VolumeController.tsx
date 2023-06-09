import { type ChangeEvent, useState } from 'react';
import { Icon, type IconProps } from '../../Icon/Icon';

interface VolumeControllerProps {
  onChangeVolume: (vol: number) => void;
  initialVolume: number;
}

export const VolumeController = ({
  onChangeVolume,
  initialVolume
}: VolumeControllerProps) => {
  const [volume, setVolume] = useState(
    initialVolume.toString()
  );
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

  const icon = (): IconProps['icon'] => {
    if (+volume === 0) {
      return 'volumeOff';
    }
    if (+volume < maxValue / 2) {
      return 'volumeDown';
    }
    return 'volumeUp';
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
        <Icon icon={icon()} className='h-full' />
      </div>
    </div>
  );
};
