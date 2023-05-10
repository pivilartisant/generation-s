import { useState, useEffect,useRef, useCallback } from 'react';
import playButton from "../../../../../assets/playBtn.svg"
import pauseButton from "../../../../../assets/pauseBtn.svg"
import "./playButton.css";

export function PlayButton ({...props}) {

    let { audioRef, setTimeProgress, setRotation, rotation } = props;

    const [playing, setPlaying] = useState(false)
    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, []);

    useEffect(() => {
      if (playing) {
        audioRef.current.play();
        console.log(props.gameState)
        playAnimationRef.current = requestAnimationFrame(repeat);
      } else {
        console.log(props.gameState)
        audioRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }, [playing, audioRef, repeat]);

    const play = () => {
        setPlaying(!playing)
        setRotation(!rotation)
        props.toggleGameState();
      };
        return (
            <div className="play-button-container" onClick={play}>
                <img src={playing ? pauseButton : playButton} className="play-button" alt="Play Button"/>
            </div>
        )
};

