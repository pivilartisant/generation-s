import { useEffect } from "react";

export function Game(props) {
  useEffect(() => {
    console.log("Game component mounted");
  }, []);

  return props.isValid ? <p>Valid</p> : <p>Not Valid</p>;
}
