export const TrackInformation = (props) => {
    return (
        <div className="audio-info">
            <div className="audio-image">
                {props.currentTrack.thumbnail ? (
                    <img src={props.currentTrack.thumbnail} alt="audio avatar" style={{width:50}}/>
                ) : (
                <div className="icon-wrapper">
                </div>
                )}
            </div>
                <div className="text">
                    <p className="title">{props.currentTrack.title}</p>
                    <p>{props.currentTrack.author}</p>
                </div>
        </div>
    )
}