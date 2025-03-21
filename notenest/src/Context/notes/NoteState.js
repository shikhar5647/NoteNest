import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    "name": "Shikhar",
    "class": "10B"
  }
  return (
    <NoteContext.Provider value={state}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;