import React, { useEffect, useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
import NewSongForm from './NewSongForm';

const SongList= () => {
         //Array with Objects(Songs)
    const [songs, setSongs] = useState([
        { title: 'Under Pressure', id: 1},
        { title: 'Slide Away', id: 2},
        { title: 'Your Song', id: 3}
    ]);
    const [age, setAge] =useState(20)
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuidv1()}]);
    }
    //USes a callback function, anytime the data changes, e.g. Database
    useEffect(() => {
        console.log('useEffect Hook Ran', songs);

    }, [songs])

    useEffect(() => {
        console.log('useEffect Hook Ran', age);

    }, [age])
    return (
        <div className="song-list">
            <ul>
              {songs.map(song => {
                  return ( <li key={song.id}>{song.title}</li>)
              })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}> Add 1 to age: {age} </button>
        </div>
    )
}

export default SongList;
