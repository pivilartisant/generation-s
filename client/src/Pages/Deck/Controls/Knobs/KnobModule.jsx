import { Knob } from 'primereact/knob';
import { useState } from 'react';

export function KnobModule (){

    const [value, setValue] = useState(0);

    return (
        
            <Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue(value)} />
 
    )
}