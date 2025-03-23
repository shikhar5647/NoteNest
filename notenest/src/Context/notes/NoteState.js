import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  
  // Add a note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note");
    const note = {
      _id: Date.now().toString(), // Adding a unique ID for each note
      title: title,
      description: description,
      tag: tag
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting the note with ID: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
      
  return (
    <NoteContext.Provider value={{notes, addNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
