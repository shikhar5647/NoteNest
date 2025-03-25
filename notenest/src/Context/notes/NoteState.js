import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState([]);

  // Get all notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers : {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }}
      );
      const json = await response.json();
      console.log(json);


  
  // Add a note
  const addNote = async (title, description, tag) => {
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
  // Edit a note
  const editNote = (id, title, description, tag) => {
    console.log("Editing the note with ID: " + id);
    const newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }}}


  return (
    <NoteContext.Provider value={{notes, addNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
