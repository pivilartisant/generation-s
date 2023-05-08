import React, { useState, useEffect } from 'react';

//this timer is used in the game interface one
//Once it reaches 0, the voting phase is over (needs to be implemented)
export function Timer(props) {
  const [time, setTime] = useState(props.timer);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time === 0) {
      setEnd(true);
    }
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="timer">
      <p>Timer : {time > 0 ? `${time} s` : "Done"}</p>
    </div>
  );
}
