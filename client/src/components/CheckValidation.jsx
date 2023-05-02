import { useStore } from "../store";
import { shallow } from "zustand/shallow";

export function CheckValidation() {
  const isValid = useStore((store) => store.choice.isValid, shallow);
  // const setChoice = useStore((store)=> store.setChoice)
  // const test = useStore((store) => store.choice.isValid, shallow);
  console.log(isValid)
  return (
    <div>
      <div>
        <p> {isValid.toString()} </p>
      </div>
    </div>
  )
}
