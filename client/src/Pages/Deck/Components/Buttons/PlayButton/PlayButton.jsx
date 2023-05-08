import { useState, useEffect } from 'react';
import playButton from "../../../../../assets/playBtn.svg"
import pauseButton from "../../../../../assets/pauseBtn.svg"
import "./playButton.css";

export function PlayButton ({...props}) {

    console.log(props.mp3src)
    console.log(props.audioRef)
    const [playing, setPlaying] = useState(true)

      useEffect(() => {
    if (playing) {
      props.audioRef.current.play();
    } else {
      props.audioRef.current.pause();
    }
    
    }, [playing, props.audioRef]);

    const play = () => {
        setPlaying(!playing)
        console.log(playing)
        console.log(props.mp3src)
      };
    
        return (
            <div className="play-button-container" onClick={play}>
                <img src={!playing ? pauseButton : playButton} className="play-button" alt="Play Button"/>
            </div>
        )
}

    // const audio = props.audioRef.current;

