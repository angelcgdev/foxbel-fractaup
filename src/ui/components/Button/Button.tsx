import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'primary' | 'seconday' | 'ellipsis';
  direction?: 'horizontal' | 'vertical';
  // children?: string | Record<string, any>;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  direction = 'horizontal',
  type,
  ...rest
}: ButtonProps) => {
  if (type === 'ellipsis') {
    return (
      <button
        className={`${className ?? ''} ${
          direction === 'horizontal'
            ? 'icon'
            : 'icon_vertical'
        }`}
        aria-label='Menu'
        {...rest}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
    );
  }
  return (
    <button
      className={`${
        type === 'primary' ? 'primary' : 'secondary'
      } flex justify-center items-center ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
