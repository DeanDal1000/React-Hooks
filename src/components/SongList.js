import React, { useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
import NewSongForm from './NewSongForm';

const SongList= () => {
         //Array with Objects(Songs)
    const [songs, setSongs] = useState([
        { title: 'Under Pressure', id: 1},
        { title: 'Slide Away', id: 2},
        { title: 'Your Song', id: 3}
    ]);
    const addSong = () => {
        setSongs([...songs, { title: 'Jailhouse Rock', id: uuidv1()}]);
    }
    return (
        <div className="song-list">
            <ul>
              {songs.map(song => {
                  return ( <li key={song.id}>{song.title}</li>)
              })}
            </ul>
            <NewSongForm />
        </div>
    )
}

export default SongList;
