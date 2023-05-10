import { useRef, useState } from "react";
import { Turnable } from "./Turnable/Turnable";
import { Mixer } from "./Mixer/Mixer"
import { Loader, mp3src1, mp3src2 } from "./Loader/Loader"
import { Vinyl } from "./Turnable/Vinyl/Vinyl";
import hamza from "./Turnable/Vinyl/hamza.png"
import shinibi from "./Turnable/Vinyl/shinibi.png"

import "./deck.css"
export function Deck (){
    
const audioRefA = useRef();
const audioRefB = useRef();

const [rotationA, setRotationA] = useState(false);
const [rotationB, setRotationB] = useState(false);

const [timeProgressA, setTimeProgressA] = useState(0);
const [durationA, setDurationA] = useState(0);

const [timeProgressB, setTimeProgressB] = useState(0);
const [durationB, setDurationB] = useState(0);

const AB = {
    audioRefA: audioRefA,
    audioRefB: audioRefB,
    setDurationA: setDurationA,
    setDurationB: setDurationB,
}

const deckA = {
    audioRef: audioRefA,
    duration: durationA,
    setTimeProgress: setTimeProgressA,
    timeProgress: timeProgressA,
    vinyl: <Vinyl size={480} src={shinibi} rotation={rotationA}/>,
    setRotation: setRotationA,
    rotation: rotationA,
    
}

const deckB = {
    audioRef: audioRefB,
    duration: durationB,
    setTimeProgress: setTimeProgressB,
    timeProgress: timeProgressB,
    vinyl: <Vinyl size={480} src={hamza} rotation={rotationB} />,
    setRotation: setRotationB,
    rotation: rotationB,
}

    return (
        <div className="deck">
            {/* Loader in middleware for controlling audio */}
            <Loader {...AB} />
            <Turnable mp3src={mp3src1} {...deckA}/>
            <Mixer/>
            <Turnable mp3src={mp3src2} {...deckB}/>
        </div>
    )
}