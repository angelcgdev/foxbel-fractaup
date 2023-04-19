import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'seconday';
  direction?: 'horizontal' | 'vertical';
  // children?: string | Record<string, any>;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  direction = 'horizontal',
  styleType: type,
  ...rest
}: ButtonProps) => {
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
