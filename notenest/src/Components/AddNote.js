import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [note, setNote] = useState({title: "", description: "", tag: ""});
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(title, description, tag);
        setTitle('');
        setDescription('');
        setTag('');
    }
    const onChange = (e) => {
        setTitle(e.target.value);
    }
  return (
    <div>
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNote
