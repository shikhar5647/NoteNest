import React,{useContext} from 'react';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import noteContext from '../Context/notes/noteContext';

import noteContext from '../Context/notes/noteContext';
const Notes = () => {
  const context = useContext(noteContext);
  const {notes, getNotes} = context;
  return (
    <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />
        })}
      
    </div>
  );
};

export default Notes;