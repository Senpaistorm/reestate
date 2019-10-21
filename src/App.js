import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import Mapview from './components/mapview';
import Main from './components/main';
import Main_options from './components/main_options';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>    
      <div className="App">
        <nav className="navbar">
          <ul id="navbar_ul">
            <li>
              <Link className="link" id="buy_btn" to="/homes">Buy</Link>
            </li>
            <li>
              <Link className="link" to="/homes/for_rent">Rent</Link>
            </li>
            <li>
              <Link className="link" to="/sell">Sell</Link>
            </li>
            <li>
              <Link className="link" to="/users">Home Loans</Link>
            </li>
            <li>
              <Link id="homeTitle" to="/">Reestate</Link>
            </li>
            <li>
              <Link className="link" to="/homes">List your rental</Link>
            </li>
            <li>
              <Link className="link" to="/users">Advertise</Link>
            </li>
            <li>
              <Link className="link" to="/users">Sign in</Link>
            </li>
            <li>
              <Link className="link" to="/users">Join</Link>
            </li>
            <li>
              <Link className="link" to="/users">Help</Link>
            </li>
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default App;
