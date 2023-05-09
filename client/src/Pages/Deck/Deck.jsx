import { useRef, useState } from "react";
import { Turnable } from "./Turnable/Turnable";
import { Mixer } from "./Mixer/Mixer"
import { Loader, mp3src1, mp3src2 } from "./Loader/Loader"

import "./deck.css"
export function Deck (){
    
const audioRefA = useRef();
const audioRefB = useRef();

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
}

const deckB = {
    audioRef: audioRefB,
    duration: durationB,
    setTimeProgress: setTimeProgressB,
    timeProgress: timeProgressB,
}

    return (
        <div className="deck">
            {/* Loader in middleware for controlling audio */}
            <Loader {...AB} />
            <Turnable mp3src={mp3src1}  {...deckA}/>
            <Mixer/>
            <Turnable mp3src={mp3src2} {...deckB}/>
        </div>
    )
}