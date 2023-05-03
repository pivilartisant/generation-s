import { ArtistList } from "./ArtistList"
import "./footer.css"

export function Footer (props){

    const args = {
        artists: [
          { id: 1, name: "HAMZA" },
          { id: 2, name: "SCH" },
          { id: 3, name: "DAMSO" },
        ],
      };
      

    return (
        <div className="footer">
            <ArtistList {...args}/>
        </div>
    )
}