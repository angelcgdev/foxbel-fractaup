import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import { VolumeController } from "./components/VolumeController"
import useControllerBarViewModel from "./ViewModel"

export const Controlbar = () => {
  const { trackSelected, player, prevTrack, nextTrack, play, onChangeVolume, handleEnd, handlePlay } = useControllerBarViewModel();
  return (
    <footer
      className='w-full h-16 sm:h-20 md:h-24 lg:h-[100px] bg-primary sticky bottom-0 z-10 text-white flex justify-between items-center pr-6 sm:pr-9 md:pr-12'>
        {
          (trackSelected)?
          <audio ref={player} src={trackSelected.preview} controls playsInline={play} onEnded={handleEnd} className="hidden"/>
          :<></>
        }
          <div className="w-full h-16 sm:h-20 md:h-24 lg:h-[100px] flex gap-5 flex-1">
              <figure className={`h-full bg-gray aspect-square ${trackSelected?'':'hidden'}`}>
                  <img src={trackSelected?.album.cover}  alt="Albun cover" className="h-full aspect-square object-fill"/>
              </figure>
              <div className="flex flex-col justify-center gap-0 sm:gap-1 lg:gap-2">
                <h3 className="song-title">{trackSelected?.title}</h3>
                <p className="song-artist">{trackSelected?.artist.name}</p>
              </div>
          </div>
          <div className="p-3 md:p-5 h-full flex items-center justify-end md:justify-center gap-6 md:flex-1">
            <button onClick={prevTrack} aria-label="Previous track">
              <FontAwesomeIcon icon={faStepBackward} className="hidden sm:inline text-sm md:text-base lg:text-lg"/>
            </button>
            <button className="h-full aspect-square bg-white bg-opacity-10 rounded-full" onClick={handlePlay}  aria-label={play ? "Pause" : "Play"}>
              <FontAwesomeIcon icon={play?faPause:faPlay} />
            </button>
            <button onClick={nextTrack} aria-label="Next track">
              <FontAwesomeIcon icon={faStepForward}  className={`inline text-sm md:text-base lg:text-lg ${!trackSelected?'text-softgray':''}`} aria-hidden={"false"} />
            </button>
          </div>
        <VolumeController onChangeVolume={onChangeVolume}/> 
    </footer>
  )
}
