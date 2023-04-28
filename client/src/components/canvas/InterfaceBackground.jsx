import { AudioPlayer } from "../audioPlayer/AudioPlayer"
import "./canvas.css"


//interface background 
export const InterfaceBackground = () => {
return ( 
    <div className="interface-canvas">
        {/* <PlayButton/> */}
        <AudioPlayer/>  
    </div>
 )
}