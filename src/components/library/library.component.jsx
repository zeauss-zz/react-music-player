import './library.styles.scss'

import LibrarySong from '../library-song/library-song.component'

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => (
    <div className={`library ${libraryStatus ? 'active-library' : null}`} >
        <h2>Library</h2>
        <div className="library-songs">
        {
            songs.map(song => <LibrarySong key={song.id} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} id={song.id} songs={songs} setCurrentSong={setCurrentSong} song={song} />)
        }
            
        </div>
    </div>
)

export default Library;