import { useRef } from 'react';
import type { AlbumMdl } from '../../../domain/model/album,.mdl';
import type { ArtistMdl } from '../../../domain/model/artist.mdl';
import { Button } from '../Button/Button';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

interface CardAlbumProps {
  album: AlbumMdl;
  artist: ArtistMdl;
  playing: boolean;
  following: boolean;
}

export const CardAlbum = ({
  artist,
  album,
  following,
  playing
}: CardAlbumProps) => {
  const getRandom = (min: number, max: number) =>
    (Math.random() * (max - min) + min).toLocaleString(
      'pe',
      {
        maximumFractionDigits: 2
      }
    );

  const followers = useRef(
    getRandom(4565656, 9999945)
  ).current;
  return (
    <article
      aria-label='Artist card'
      className='flex flex-col lg:flex-row items-stretch relative'
    >
      <figure className='bg-gray w-full h-full absolute -z-10 lg:z-0 lg:static lg:w-[250px] lg:aspect-square'>
        <img
          src={album.coverMedium}
          alt='Photo of recommended album'
          className='h-full w-full object-cover'
        />
      </figure>
      <div className='flex-1 overflow-hidden p-8 flex flex-col gap-3 md:gap-5 text-white bg-center bg-no-repeat bg-cover bg-secondary-variant bg-opacity-80 relative'>
        <img
          src={artist.pictureXl}
          className='w-full h-full top-0 left-0 right-0 bottom-0 object-cover absolute -z-[11]'
          alt='Photo of recommended artist'
        />
        <div className='w-full flex flex-col'>
          <h2>
            {artist.name} {album.title}
          </h2>
          <div className='flex flex-wrap gap-x-4 w-full'>
            <span>Lo mejor de {artist.name}</span>
            <span className='text-secondary'>
              {followers} seguidores
            </span>
          </div>
        </div>
        <p className='h-full w-full line-clamp-3'>
          Adele Laurie Blue Adkins (Tottenham, Londres,
          Inglaterra, 5 de mayo de 1988), conocida
          simplemente como Adele, es una cantante,
          compositora y multinstrumentista británica.8
        </p>
        <div className='flex gap-5'>
          <Button
            styleType='primary'
            className='line-clamp-1'
          >
            {playing ? 'Reproduciendo' : 'Reproducir'}
          </Button>
          <Button
            styleType='seconday'
            className='line-clamp-1'
          >
            {following ? 'Siguiendo' : 'Seguir'}
          </Button>
          <ButtonIcon
            icon='ellipsisH'
            className='text-primary'
          />
        </div>
      </div>
    </article>
  );
};
