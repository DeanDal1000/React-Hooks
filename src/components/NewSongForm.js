import React, { useState, useEffect } from 'react'

const NewSongForm = ({ addSong }) =>{
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        //Prevents refreshing page when click submit
        e.preventDefault();
        addSong(title)
        setTitle(''
        )}
    return(
    <form onSubmit={handleSubmit}>
        <label>Song Name:</label>
        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="add song" required />
    </form>
        );
}

export default NewSongForm;