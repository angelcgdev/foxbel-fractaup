import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from './constants';

export interface IconProps {
  icon: keyof typeof icons;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
export const Icon = ({
  icon,
  className,
  size = 'md'
}: IconProps) => {
  const classSize = () => {
    if (size === 'lg') {
      return 'text-base md:text-lg lg:text-xl';
    }
    if (size === 'md') {
      return 'text-sm md:text-base lg:text-lg';
    }
    return 'text-xs md:text-sm lg:text-base';
  };
  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      className={`${classSize()} ${className ?? ''}`}
    />
  );
};
