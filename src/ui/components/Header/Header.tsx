import {
  FoxbelContext,
  MenuActionType,
  QueryActionType
} from '../../provider/FoxbelProvider';
import { type ChangeEvent, useContext } from 'react';
import { Icon } from '../Icon/Icon';

export const Header = () => {
  const {
    state: { menu },
    dispatch
  } = useContext(FoxbelContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: QueryActionType.CHANGEQUERY,
      payload: e.target.value
    });
  };
  const handleMenu = () => {
    dispatch({
      type: MenuActionType.HANDLEMENU,
      payload: !menu
    });
  };

  return (
    <header className='bg-white w-full px-5 sm:px-7 md:px-10 py-4 sm:py-6 md:py-[30px] gap-4 flex justify-between sticky top-0 z-10'>
      <div className='relative flex items-center'>
        <input
          type='search'
          id='search-bar'
          placeholder='Buscar'
          className='w-full max-w-[524px] rounded-full outline outline-gray focus:outline-primary outline-1 h-9 pl-4 pr-8'
          onChange={onChange}
        />
        <Icon
          icon='search'
          className='absolute right-3 text-softgray'
        />
      </div>
      <div className='flex gap-3'>
        <div className='flex items-center gap-3'>
          <button
            className='h-9 w-9 text-primary'
            aria-label='User avatar'
          >
            <Icon icon='user' />
          </button>
          <span className='hidden sm:inline text-base whitespace-nowrap'>
            Francisco M.
          </span>
        </div>
        <button
          role='menu'
          className='md:hidden h-9 w-9 outline-black outline-1 outline'
          onClick={handleMenu}
          aria-label='Menu'
        >
          <Icon icon='menu' />
        </button>
      </div>
    </header>
  );
};
