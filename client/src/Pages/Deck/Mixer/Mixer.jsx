import { VolumeSlider } from "./VolumeSlider/VolumeSlider";
import { ValidateButton } from "../Components/Buttons/ValidateButton/ValidateButton";
import "./mixer.css";

export function Mixer({ ...props }) {
  return (
    <div className="mixer">
      {/* <VolumeSlider audioRef={props.audioRef} /> */}
      <div className="mixer-slider-container">
        <VolumeSlider />
        <VolumeSlider />
      </div>

      <div>
        <ValidateButton />
      </div>
    </div>
  );
}
