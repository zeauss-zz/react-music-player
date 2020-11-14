import './library.styles.scss'

import LibrarySong from '../library-song/library-song.component'

const Library = ({songs, setCurrentSong}) => (
    <div className="library">
        <h2>Library</h2>
        <div className="library-songs">
        {
            songs.map(song => <LibrarySong key={song.id} id={song.id} songs={songs} setCurrentSong={setCurrentSong} song={song} />)
        }
            
        </div>
    </div>
)

export default Library;