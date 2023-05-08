import "./footer.css"

export function Footer (props){

  const artists = props.artists.map(artist => {
    return(
      <div key={artist.id} className="artist-container">
        <p className="artist-name">{artist.name}</p>
    </div>
    ) 
})
    
    return (
        <div className="footer">
            {artists}
        </div>
    )
}