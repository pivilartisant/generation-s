import { Info } from "./Info/Info";
import { Vinyl } from "./Vinyl/Vinyl";
import { PlayButton } from "../Components/Buttons/PlayButton/PlayButton";
import "./turnable.css";

export function Turnable({...props}){

    return (
      <div className="turnable">
        <div>
        <Info {...props}/>
        </div>
        <div className="middle-child">
            {props.vinyl}
        </div>
        <div>
        <PlayButton {...props}/>
        </div>
      </div>
    );
  };
