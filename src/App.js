import "./app.scss";
import Song from './components/song/song.component';
import Player from './components/player/player.component'

import data from './data'
import { useState } from "react";

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, SetCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
