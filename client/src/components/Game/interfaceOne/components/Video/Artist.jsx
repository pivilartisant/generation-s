import "./artist.css"
export function Artists(props) {
    const artists = props.artists.map(artist => {
        return (
            <div className="artist-window-container" key={artist.id}>
                <video  src={artist.src} className="video" autoPlay loop></video>
            </div>
        )
    })
    return (
        <div className="artist-window">
            {artists}
        </div>
    )
}