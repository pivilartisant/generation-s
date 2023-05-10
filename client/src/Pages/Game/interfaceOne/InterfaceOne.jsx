import { Artists } from "./components/Video/Artist";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import damso from "../../../assets/mp4/damso.mp4"
import hamza from "../../../assets/mp4/hamza.mp4"
import sch from "../../../assets/mp4/sch.mp4"
import "./interface.css"

export function InterfaceOne ({...props}) {

  const artistRoster = [
    {
      id: 1,
      name: "Hamza",
      src: hamza, 
      hints: [
        {
          id: 1,
          hint: "🥫"
        },
        {
          id: 2,
          hint:"🕶️"
        },
        {
          id: 3,
          hint:  "🇧🇪",
        }
      ],
    },
    {
      id: 2,
      name: "Sch",
      src: sch
    },
    {
      id: 3,
      name: "Damso",
      src: damso
    }
  ]
  return (
    <div className="interface-one">
      <Header hints={artistRoster} index={0}/>
      <Artists artists={artistRoster}/>
      <Footer artists={artistRoster} />
    </div>
  )
}
