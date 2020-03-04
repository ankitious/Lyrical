import React from 'react'
import './lyrics.css'
export default function Lyrics({lyrics, cover, artist, title, error}) {
    return (
        <div className="lyrics"> 
         {
             error ?
             <div>{error}</div> :
             <>
             <img src={cover} alt={title} className="cover-large"/>
            
             <h3 className="lyrics-title">{artist} - {title}</h3>
             
             <div className="lyrics-container">
                 <pre>{lyrics}</pre>
             </div>
             </>
         }   
        </div>
    )
}
