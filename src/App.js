import React , {useState} from 'react';
import './App.css';
import Search from './components/Search';
import Suggestion from './components/Suggestion';
import { suggest } from './api/suggest';
import { lyrics } from './api/lyrics';
import Lyrics from './components/Lyrics';

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSong, setSelectedSong] = useState({});
  
  function getSuggestions(term) {
    suggest(term)
    .then(res => res.json())
    .then(res => setSuggestions(res.data));
  }
  
  function getLyrics(artist, title, cover) {
    setSelectedSong({});
    setSuggestions([]);
    lyrics(artist,title).then(res => res.json())
    .then(res => { 
      if(!res.error) {
         setSelectedSong({ artist , title, cover, lyrics : res.lyrics}) 
        }
      else {
        setSelectedSong({ error : 'Not Found'})
      }
     })
  }
  return (
    <div className="container">
      <Search getSuggestions={getSuggestions}/>
      <div className="suggestions">
        <div className="results">
            { 
              suggestions.map(s => <Suggestion key={s.id} {...s} getLyrics={getLyrics}/>)
            }
        </div>
       </div>
       
       <div className="lyrics">
         { Object.keys(selectedSong).length > 0 && <Lyrics {...selectedSong}/>}
       </div>
       
       <footer className="footer">
          <div className="title-name">
            <a href="https://ankitious.github.io/Lyrical">Lyrical</a></div>
          <div>
            <a href="https://github.com/ankitious/Lyrical">GitHub</a>
          </div>
       </footer>
       
    </div>
  );
}

export default App;
