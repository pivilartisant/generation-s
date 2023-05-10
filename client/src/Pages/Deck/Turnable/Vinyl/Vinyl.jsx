import { useState, useEffect } from 'react';

export function Vinyl ({...props}){
    let { size, src } = props;   
    const [rotation, setRotation] = useState(props.rotation);
    const [vinylRotation, setVinylRotation] = useState(0);

    const radius = 280; // radius of the circle
    const diameter = radius * 2; // diameter of the circle
    const imageSize = radius * 0.4; // size of the image (20% of the circumference)
    const imageX = radius - (imageSize / 2); // X position of the image to center it
    const imageY = radius - (imageSize / 2); // Y position of the image to center it

    useEffect(() => {
        setRotation(props.rotation);
    }, [props.rotation]);

    useEffect(() => {
        let intervalId = null;
        if (rotation) {
            intervalId = setInterval(() => {
                setVinylRotation(vinylRotation => vinylRotation + 1);
            }, 10);
        } else if (!rotation ) {
            setVinylRotation(vinylRotation => vinylRotation);
        }
        return () => clearInterval(intervalId);
    }, [rotation]);

    return (
        <div className="vinyl"> 
        <svg width={size} height={size} viewBox="0 0 570 570" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={radius} cy={radius} r={radius} stroke="white" strokeWidth="2" fill="none" />
         <image 
            className="album-cover"
            xlinkHref={src} 
            x={imageX} 
            y={imageY} 
            width={imageSize} 
            height={imageSize}
            transform={`rotate(${vinylRotation} ${radius} ${radius})`}
            />
        </svg>
        </div>
    )
}
