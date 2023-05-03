import { ArtistWindow } from "./components/Artist/Artist";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./interface.css"

export function InterfaceOne (){
    return (
        <div className="interface-one">
            <Header/>
            <ArtistWindow/>
            <Footer/>
        </div>
    )
}