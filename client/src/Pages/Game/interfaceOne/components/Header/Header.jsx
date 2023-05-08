import { Timer } from "./Timer";
import "./header.css";

export function Header({...props}) {

//map of the hints of the hints exists in the object
const hints = props.hints[props.index].hints?.map(obj => {
    return (
          <p key={obj.id} className="hint">{obj.hint}</p>
    )
});
  return (
    <div className="header">
       <div className="hints">
          <p>Hints :</p> {hints}
       </div>
       <Timer timer={60}/>
    </div>
  );
}