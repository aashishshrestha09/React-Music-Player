import React from 'react';
// import {playAudio} from '../util'

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {

    const songSelectHandler = async() => {
        await setCurrentSong(song);
        // Add Active State
        const newSongs = songs.map(s => {
            if(s.id === song.id) {
                return {
                    ...s,
                    active: true,    
                };
            } else {
                return {
                    ...s,
                    active: false,
                };
            }
        })
        setSongs(newSongs)
        // check if song is playing
        // playAudio(isPlaying, audioRef);
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong