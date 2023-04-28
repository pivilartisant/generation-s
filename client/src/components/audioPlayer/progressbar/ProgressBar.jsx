import "./progressBar.css";
export const ProgressBar = (props) => {


  //this component centralizes the progress bar and the time display
  //this function sets the time of the audio track to the value of the progress bar
  const handleProgressChange = () => {
    props.audioRef.current.currentTime = props.progressBarRef.current.value;
  };

  //this function formats the time to minutes and seconds
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };


  return (
    <div className="progress">
      {/* Shows time progression */}
      <span className="time current">{formatTime(props.timeProgress)}</span>
      {/* This input calls the handleProgressChange */}
      <input 
        type="range" 
        className="progress-range" 
        ref={props.progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        />
        {/* Shows time max duration of track */}
      <span className="time">{formatTime(props.duration)}</span>
    </div>
  );
};

