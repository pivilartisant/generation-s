import "./validateButton.css"
import { useStore } from "../../../../../store";
import { shallow } from "zustand/shallow";


export function ValidateButton () {
    const  choice = useStore((store) => store.choice.isValid, shallow);
    const setChoice = useStore((store)=> store.setChoice)

    return (
      <div>
        <div>
      <p> {choice ? "Choice has been made" : "Choice has not been made"} </p>
    </div>
        <button onClick={()=>{setChoice(!choice)}}>
          Validate
        </button>
  
      </div>
    )
}