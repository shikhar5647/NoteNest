import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Navbar/>
      <Home/>
    </>
  );
}

export default App;
