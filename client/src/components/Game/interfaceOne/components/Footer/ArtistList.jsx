

export function ArtistList(props) {
    console.log(props.artists)

    const artists = props.artists
  const artistElements = artists.map(artist => (
    <div key={artist.id} className="artist-list-item">
      <p>{artist.name}</p>
    </div>
  ));
    console.log(artists)
  return (
    <div className="artists">
        {artistElements}
    </div>
  );
}