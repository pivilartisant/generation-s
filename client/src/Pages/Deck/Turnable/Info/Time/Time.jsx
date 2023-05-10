import "./time.css";

export function Time({ ...props }) {
  let { timeProgress, duration } = props;

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <>
      <p className="time-current">
        {" "}
        {formatTime(timeProgress)} / {formatTime(duration)}{" "}
      </p>
    </>
  );
}
