import { useRef } from "react";
import { Turnable } from "./Turnable/Turnable";
import { Mixer } from "./Mixer/Mixer"
import { Loader, mp3src1, mp3src2 } from "./Loader/Loader"

import "./deck.css"
export function Deck (){
const audioRef = useRef()

const args = {
    audioRef: audioRef,
}
    return (
        <div className="deck">
            {/* Loader in middleware for controlling audio */}
            <Loader audioRef={audioRef}/>
            <Turnable mp3src={mp3src1}  {...args}/>
            <Mixer/>
            <Turnable mp3src={mp3src2} {...args}/>
        </div>
    )
}