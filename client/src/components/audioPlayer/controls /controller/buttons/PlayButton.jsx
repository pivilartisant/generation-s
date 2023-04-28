import "./playButton.css";
import playButton from "../../../../../assets/playBtn.svg"
import pauseButton from "../../../../../assets/pauseBtn.svg";

export const PlayButton = (props) => {


// create a function that will be called when the play button is clicked
// it sets the playing state to the opposite of what it is currently
const play = () => {
    props.setPlaying(!props.playing);
  };
    return (
        <div className="play-button-container" onClick={play}>
            <img src={props.playing ? pauseButton : playButton} className="play-button" alt="Play Button"/>
        </div>
    )
}