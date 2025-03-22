import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  return (
    <NoteContext.Provider value={{}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;