import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import {Home} from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<h1>Login showAlert={showAlert}</h1>} />
          </Routes>
          <Routes>
            <Route exact path="/signup" element={<h1>Signup showAlert={showAlert}</h1>} />
            </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
