import { ProgressBar } from "./Progressbar/ProgressBar";
import { useRef, useState } from "react";

export function Info({ ...props }) {
  const progressBarRef = useRef();

  return (
    <div className="info">
      {/* <p>Track Title</p>
            <p>Track Author</p> */}
      <ProgressBar {...props} progressBarRef={progressBarRef} />
    </div>
  );
}
