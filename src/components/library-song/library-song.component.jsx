import "./library-song.styles.scss";

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter(song => song.id === id);
    setCurrentSong(selectedSong[0])
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt="cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
