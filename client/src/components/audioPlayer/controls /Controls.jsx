import { useState, useEffect, useRef, useCallback, } from "react";
import { PlayButton } from "./controller/buttons/PlayButton";
import { VolumeSlider } from "./controller/sliders/Volume";
import { ReverbSlider } from "./controller/sliders/Reverb";
import { KnobModule } from "./controller/knobs/KnobModule";
import { ValidateButton } from "./controller/buttons/ValidateButton";

//this component centralizes the audio controllers
export const Controls = (props) => {
  {/* bool that sets bool  */}
  // const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  //this function is used to repeat the animation
  const repeat = useCallback(() => {
    const currentTime = props.audioRef.current.currentTime;
    props.setTimeProgress(currentTime);
    props.progressBarRef.current.value = currentTime;
    
  
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [props.audioRef, props.duration, props.progressBarRef, props.setTimeProgress]);

  {/* bool used in this use effect to set play state */}
  useEffect(() => {
    if (props.isPlaying) {
      props.audioRef.current.play();
    } else {
      props.audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
    {/* if either isPlaying & props.audioRef values changes, the useEffect callback function will run again. */}
  }, [props.isPlaying, props.audioRef, repeat]);


    return (
      <div className="audio-player">
        {/* This is the play button component */}
        <PlayButton playing={props.isPlaying} setPlaying={props.setIsPlaying}/>
        <VolumeSlider audioRef={props.audioRef} />
        {/* <ReverbSlider audioRef={props.audioRef}/> */}
        {/* <KnobModule/> */}
        <ValidateButton  isValid={props.isValid} setIsValid={props.setIsValid}  />
      </div>
    );
  };
