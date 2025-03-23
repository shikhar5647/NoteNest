import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import Notes from './Notes';


export const Home = () => {
  const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <><div>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
        <Notes />
      </>
  );
};