import "./volumeSlider.css";
import { useState, useEffect } from "react";


export const VolumeSlider = (props) => {
    const [volume, setVolume] = useState(50);

    const handleVolumeChange = (event) => {
      setVolume(event.target.value);
    };  

    useEffect(() => {
      if (props.audioRef) {
        props.audioRef.current.volume = volume / 100;
      }
    }, [volume, props.audioRef]);

    return (
    <div className="volume-container">
    <div className="volume-slider-container">
      {/* <label htmlFor="volume-slider">Volume:</label> */}
        <input
          className="volume-slider"
          type="range"
          id="volume-slider"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
    </div>
    <div className="volume-level-container">
            <p className="volume-level">Volume</p>
            <p>{volume}</p>
        </div>
        
  </div>
    )
}