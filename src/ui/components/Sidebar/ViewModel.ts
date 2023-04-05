import { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { FoxbelContext, MenuActionType } from '../../provider/FoxbelProvider';

interface Path {
  href: string;
  name: string;
}

interface SectionMenu {
  title: string;
  paths: Path[];
}

const sectionMenu: SectionMenu[] = [
  {
    title: 'Mi Librería',
    paths: [
      { href: '#recientes', name: 'Recientes' },
      { href: '#artistas', name: 'Artistas' },
      { href: '#albums', name: 'Álbums' },
      { href: '#canciones', name: 'Canciones' },
      { href: '#estaciones', name: 'Estaciones' },
    ],
  },
  {
    title: 'Playlist',
    paths: [
      { href: '#metal', name: 'Metal' },
      { href: '#para_bailar', name: 'Para bailar' },
      { href: '#rock90s', name: 'Rock 90s' },
      { href: '#baladas', name: 'Baladas' },
    ],
  },
];
export default function SideBarViewModel() {
  const md = 768;
  const {
    state: { menu },
    dispatch,
  } = useContext(FoxbelContext);
  const [isMobile, setIsMobile] = useState(md - 1 > window.innerWidth);
  const pathSelected = '#recientes';
  const handleMenu = () => {
    dispatch({ type: MenuActionType.HANDLEMENU, payload: !menu });
  };
  const handleResize = useCallback((e: Event) => {
    const { innerWidth } = e.target as Window;
    if (innerWidth > md - 1) {
      if (menu) {
        handleMenu();
      }
      return setIsMobile(false);
    }
    setIsMobile(true);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    sectionMenu,
    isMobile,
    handleMenu,
    pathSelected,
    isMenuOpen: menu,
  };
}
