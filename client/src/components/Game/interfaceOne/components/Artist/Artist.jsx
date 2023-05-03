import "./artist.css"
import damso from "../../../../../assets/mp4/damso.mp4"

export function ArtistWindow (props) {
    return (
        <div className="artist-window">
            <div className="artist-window-container">
                Artist 1
            </div>
            <div className="artist-window-container"> 
                Artist 2</div>
            <div className="artist-window-container"> 
            <video src={damso} className="video" autoPlay></video>
                </div>
        </div>
    )
}