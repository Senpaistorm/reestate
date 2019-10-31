import React from 'react';
import './App.css';

import Main from './components/Main';
import axios from 'axios';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import Nav from './components/Nav';
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  
  let getData = () =>{
    fetch('http://localhost:3001/api/getData')
    .then((data) => data.json())
    .then((res) => (res));
  }
  console.log(getData());
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Nav />

        <Main />
      </div>
    </Router>
  );
}



export default App;
