// import { useState, useEffect, useRef, useCallback, } from "react";
import "./mixer.css";
// import { PlayButton } from "./buttons/PlayButton";
// import { VolumeSlider } from "./sliders/Volume";
// import { ReverbSlider } from "./sliders/Reverb";
// import { KnobModule } from "./knobs/KnobModule";
// import { ValidateButton } from "./buttons/ValidateButton";

//this component centralizes the audio controllers
export const Mixer = (props) => {
 

    return (
      <div className="mixer">
        {/* This is the play button component */}
        {/* <PlayButton playing={props.isPlaying} setPlaying={props.setIsPlaying}/>
        <VolumeSlider audioRef={props.audioRef} />
        <ValidateButton /> */}
      </div>
    );
  };


   {/* bool that sets bool  */}
  // const [isPlaying, setIsPlaying] = useState(false);

  // const playAnimationRef = useRef();

  //this function is used to repeat the animation
  // const repeat = useCallback(() => {
  //   const currentTime = props.audioRef.current.currentTime;
  //   props.setTimeProgress(currentTime);
  //   props.progressBarRef.current.value = currentTime;
    
  
  //   playAnimationRef.current = requestAnimationFrame(repeat);
  // }, [props.audioRef, props.duration, props.progressBarRef, props.setTimeProgress]);

  // {/* bool used in this use effect to set play state */}
  // // useEffect(() => {
  //   if (props.isPlaying) {
  //     props.audioRef.current.play();
  //   } else {
  //     props.audioRef.current.pause();
  //   }
  //   playAnimationRef.current = requestAnimationFrame(repeat);
    // {/* if either isPlaying & props.audioRef values changes, the useEffect callback function will run again. */}
  // }, [props.isPlaying, props.audioRef, repeat]);
