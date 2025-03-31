import React, { useContext, useEffect } from 'react';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useRef } from 'react';

import noteContext from '../Context/notes/noteContext';
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(note._id, note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    ref.current.click();
  };
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });

  };
  const ref = useRef(null);
  return (
    <>
      <AddNote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.title} aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription"  value={note.description} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag"  value={note.tag} />
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleSubmit} className="btn btn-primary">Update Note </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />
        })}

      </div>
    </>
  );
};

export default Notes;
