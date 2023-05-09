import { Time } from "../Time/Time";
import "./progressBar.css";
export function ProgressBar ({...props}) {

let { audioRef, progressBarRef, duration, timeProgress } = props;

const handleProgressChange = () => {
  if (audioRef && progressBarRef) {
    audioRef.current.currentTime = progressBarRef.current.value;
  }
};

const timeArgs ={
  timeProgress: timeProgress,
  duration: duration,
}

  return (
    <div className="progress">
      <Time {...timeArgs}/>

      <input 
        type="range" 
        className="progress-range" 
        ref={progressBarRef}
        defaultValue="0"
        max={duration}
        onChange={handleProgressChange}
        />
    </div>
  );
};