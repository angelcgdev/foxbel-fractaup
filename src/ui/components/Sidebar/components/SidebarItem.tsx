import { type ReactNode } from 'react';

interface SidebarItemProps {
  href: string;
  children: ReactNode;
  active: boolean;
}
export const SidebarItem = ({
  href,
  children,
  active
}: SidebarItemProps) => {
  return (
    <a
      href={href}
      className={`px-10 relative flex ${
        active ? 'text-primary font-bold' : ''
      }`}
    >
      {active
        ? (
        <div className='absolute left-0 w-[5px] h-5 bg-primary' />
          )
        : (
        <></>
          )}
      {children}
    </a>
  );
};
