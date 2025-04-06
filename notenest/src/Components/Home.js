import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import Notes from './Notes';
import AddNote from './AddNote';


export const Home = () => {
  return (
    <div>
      <AddNote />
      <Notes showAlert={props.showAlert} />
    </div>
  );
};