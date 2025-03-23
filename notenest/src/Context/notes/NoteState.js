import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  // Add a note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note");
    const note = {
      title: title,
      description : description,
      tag : tag
      setNotes(notes.concat(note));
      
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;