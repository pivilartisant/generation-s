import "./reverbSlider.css";
import { useState } from "react";
export const ReverbSlider = (props) => {
    const [volume, setReverb] = useState(50);

    const handleReverbChange = (event) => {
      setReverb(event.target.value);
    };  
    return (
    <div className="reverb-container">
    <div className="reverb-slider-container">
      {/* <label htmlFor="volume-slider">Volume:</label> */}
        <input
          className="reverb-slider"
          type="range"
          id="reverb-slider"
          min="0"
          max="100"
          value={volume}
          onChange={handleReverbChange}
        />
    </div>
    <div className="reverb-level-container">
            <p className="volume-level">Reverb</p>
            <p>{volume}</p>
        </div>
        
  </div>
    )
}