import { Hints } from "./Hints";
import { Timer } from "./Timer";
import "./header.css";

export function Header() {

  const props = {
    hints: [
      "🥫",
      "🕶️",
      "🇧🇪",
    ]

  };

  return (
    <div className="header">
       <Hints {...props}/>
       <Timer/>
    </div>
  );
}