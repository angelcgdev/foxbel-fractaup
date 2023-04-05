import { type ReactNode } from 'react';

interface ButtonProps { children: ReactNode }

export const Button = ({ children }: ButtonProps) => {
  return (
    <Button>{children}</Button>
  )
}
