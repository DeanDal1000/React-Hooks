import React, { useState } from 'react'

const NewSongForm = () =>{
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        //Prevents refreshing page when click submit
        e.preventDefault();
        console.log(title)
    }
    return(
    <form onSubmit={handleSubmit}>
        <label>Song Name:</label>
        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="add song" required />
    </form>
        );
}

export default NewSongForm;