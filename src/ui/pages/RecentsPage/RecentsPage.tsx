import useRecentsListViewModel from './ViewModel';
import { CardAlbum } from '../../components/CardAlbum';
import { CardTrack } from '../../components/CardTrack';
import { type TrackMdl } from '../../../domain/model/track.mdl';

const List = ({
  tracks,
  query
}: {
  tracks: TrackMdl[];
  query: string;
}) => {
  if (tracks.length === 0) {
    return (
      <section
        aria-label='Seach Result'
        className='flex-1 flex justify-center items-center'
      >
        <p className='text-base'>
          no se encontraron resultados para {query}
        </p>
      </section>
    );
  }
  return (
    <>
      <section aria-label='Recommended Artist'>
        <CardAlbum
          album={tracks[0].album}
          artist={tracks[0].artist}
        />
      </section>
      <section
        aria-label='Song Results'
        className='flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5'
      >
        <h2 className='text-primary'>Resultados</h2>
        <ul
          role='list'
          aria-label='Song list'
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-[22px]'
        >
          {tracks.map((track, i) => (
            <li key={`song_${i}`} role='listitem'>
              <CardTrack track={track} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
const LoadSection = () => {
  const { traks, error, loading, query } =
    useRecentsListViewModel();
  if (loading) {
    return (
      <section
        aria-label='Seach Error'
        className='flex-1 flex justify-center items-center'
      >
        <p className='text-base'>Cargando...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section
        aria-label='Seach Error'
        className='flex-1 flex justify-center items-center'
      >
        <p className='text-base'>{error}</p>
      </section>
    );
  }
  return <List tracks={traks} query={query} />;
};

export const RecentsPage = () => {
  return (
    <main className='flex-1 px-5 sm:px-7 md:px-10 pb-5 sm:pb-7 md:pb-10 pt-[10px] flex flex-col gap-5 sm:gap-7 md:gap-8 lg:gap-10'>
      <LoadSection />
    </main>
  );
};
