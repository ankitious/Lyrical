import React from 'react'
import './Search.css'
export default function Search({getSuggestions}) {
  
  function onSearch(e) {
        console.log(e.target.value);
        getSuggestions(e.target.value)
    }
    return (
        <div className="search-song-container">
            <input className="search-song" type="text" placeholder="Search artist,song lyrics" onChange={onSearch} />
        </div>
    )
}
