import { TrackInformation } from "./trackInformation/TrackInformation";


//this component loads the and audio arc and displays the track information
export const LoadTrack = (props) => {

  //this function gets the duration of the audio track and sets it to the duration state
  //than it sets the max value of the progress bar to the duration of the track
  const onLoadedMetadata = () => {
    const seconds = props.audioRef.current.duration;
    props.setDuration(seconds);
    props.progressBarRef.current.max = seconds;
  };

  const onAudioEnd = () => {
      props.audioRef.current.currentTime = 0;
      props.audioRef.current.pause();
      props.setIsPlaying(!props.isPlaying);
  };
    return (
            <div>
              <audio src={props.currentTrack.src} 
                ref={props.audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onAudioEnd}
                />
              {/* <TrackInformation currentTrack={props.currentTrack}/> */}
            </div>
    )
  };
