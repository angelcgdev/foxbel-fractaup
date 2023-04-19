import { type ButtonHTMLAttributes } from 'react';
import { Icon, type IconProps } from '../Icon/Icon';

interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconProps['icon'];
}
export const ButtonIcon = ({
  icon,
  className,
  ...rest
}: ButtonIconProps) => {
  return (
    <button className={`icon ${className ?? ''}`} {...rest}>
      <Icon icon={icon} />
    </button>
  );
};
