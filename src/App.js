import React from 'react';
import './App.css';

import Main from './components/Main';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import Nav from './components/Nav';
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

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
