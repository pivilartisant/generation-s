import { tracks } from "./tracks"

export const mp3src1 = tracks[1].src
export const mp3src2 = ""
//this is my loader where eventually mp3 will be loaded from an API 

export function Loader ({...props}){
    return (
        <>
            <audio 
            src={mp3src1}
            ref={props.audioRef}
            />
        </>
    )
     
}
