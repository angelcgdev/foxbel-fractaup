import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import { FoxbelProvider } from '../provider/FoxbelProvider';
import { ControllBar } from '../components/ControlBar/Controlbar';
import { RecentsPage } from './RecentsPage/RecentsPage';
import { withTrack } from '../components/hoc/withTrack/withTrack';

export function HomePage() {
  const ControlBarWithTrack = withTrack(ControllBar);
  return (
    <FoxbelProvider>
      <div className='w-full h-full flex flex-col relative overflow-auto'>
        <div className='flex-1 flex flex-row items-stretch'>
          <Sidebar />
          <div className='w-full flex-1 flex flex-col items-stretch'>
            <Header />
            <RecentsPage />
          </div>
        </div>
        <ControlBarWithTrack className='sticky bottom-0 z-10' />
      </div>
    </FoxbelProvider>
  );
}
