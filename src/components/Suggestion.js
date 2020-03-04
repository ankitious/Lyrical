import React from 'react'
import './Suggestion.css'
export default function Suggestion({preview, album, title, artist, getLyrics}) {
    
    function getInfo() {
        getLyrics(artist.name, title, album.cover_medium)
    }
    return (
                    <li className="flex" onClick={getInfo}>
                        <div className="result">
                            <div className="background-image" style={{ colre : 'green'}}></div>
                            <img src={album.cover_medium} alt="title" className="cover"/>
                            <div className="title">{title}</div>
                            <div className="artist">{artist.name}</div>
                        </div>
                    </li>

    )
}
