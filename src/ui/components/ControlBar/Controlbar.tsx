import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import { VolumeController } from "./components/VolumeController"
import { useContext, useEffect, useRef, useState } from "react"
import { FoxbelContext, TrackActionType } from "../../provider/FoxbelProvider"
import { TrackMdl } from "../../../domain/model/track.mdl"

export const Controlbar = () => {
  const player = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
  const { state: { trackSelected, tracks }, dispatch } = useContext(FoxbelContext);
  const onChangeVolume = (volume: number) =>{
    if(player.current){
      console.log(volume);
      player.current.volume = volume;
    }
  }
  const loadMusic = async()=>{
    player.current!.currentTime = 0;
    setPlay(!player.current?.paused)
    await player.current?.play();
    console.log(player.current?.paused)
    setPlay(!player.current?.paused)
  }
  const handlePlay = async()=> {
    if(player.current?.paused){
      await player.current?.play();
    }else{
      await player.current?.pause();
    }
    setPlay(!player.current?.paused);
  }
  const nextTrack = ()=> {
    if(!trackSelected)return
    const trackSelectedIndex = tracks.findIndex(track =>track.id === trackSelected?.id)+1;
    const newTrack = tracks[trackSelectedIndex];
    if(newTrack){
      setPlay(false);
      loadTrack(tracks[trackSelectedIndex])
    }
  }
  const prevTrack = ()=> {
    if(!trackSelected)return
    const trackSelectedIndex = tracks.findIndex(track =>track.id === trackSelected?.id)-1;
    const newTrack = tracks[trackSelectedIndex];
    if(newTrack){
      setPlay(false);
      loadTrack(tracks[trackSelectedIndex])
    }
  }
  const loadTrack = (track: TrackMdl)=> {
    dispatch({type: TrackActionType.PUSHTRACK, payload: track});
  }
  useEffect(() => {
    if(trackSelected){
      loadMusic();
    }
  }, [trackSelected])
  return (
    <footer
      className='w-full h-16 sm:h-20 md:h-24 lg:h-[100px] bg-primary sticky bottom-0 z-10 text-white flex justify-between items-center pr-6 sm:pr-9 md:pr-12'>
        {
          (trackSelected)?
          <audio ref={player} src={trackSelected.link} controls playsInline={play} className="hidden"/>
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
          <div className="p-3 md:p-5 h-full flex items-center justify-end md:justify-center gap-6 flex-1">
            <button onClick={prevTrack}>
              <FontAwesomeIcon icon={faStepBackward} className="hidden sm:inline text-sm md:text-base lg:text-lg"/>
            </button>
            <button className="h-full aspect-square bg-white bg-opacity-10 rounded-full" onClick={handlePlay}>
              <FontAwesomeIcon icon={play?faPause:faPlay} />
            </button>
            <button onClick={nextTrack}>
              <FontAwesomeIcon icon={faStepForward}  className={`inline text-sm md:text-base lg:text-lg ${!trackSelected?'text-softgray':''}`} aria-hidden={"false"} />
            </button>
          </div>
        <VolumeController onChangeVolume={onChangeVolume}/> 
    </footer>
  )
}
