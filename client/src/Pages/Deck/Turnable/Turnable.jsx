// import { useEffect, useRef, useState } from 'react';
import { Info } from "./Info/Info";
import { PlayButton } from "../Components/Buttons/PlayButton/PlayButton";
import "./turnable.css";

export function Turnable({...props}){
    return (
      <div className="turnable">
        <Info {...props}/>
        <PlayButton {...props}/>
      </div>
    );
  };
