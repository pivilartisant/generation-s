import { tracks } from "./tracks"

export const mp3src1 = tracks[1].src
export const mp3src2 = tracks[0].src
//this is my loader where eventually mp3 will be loaded from an API 

export function Loader ({...props}){
let {audioRefA, setDurationA, audioRefB, setDurationB} = props

    const onLoadedMetadataA = () => {
        setDurationA(audioRefA.current.duration);
      };

      const onLoadedMetadataB = () => {
        setDurationB(audioRefB.current.duration);
      };
    return (
        <>
            <audio 
            src={mp3src1}
            ref={audioRefA}

            onLoadedMetadata={onLoadedMetadataA}
            />

            <audio 
            src={mp3src2}
            ref={audioRefB}

            onLoadedMetadata={onLoadedMetadataB}
            />
        </>
    )
     
}
