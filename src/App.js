import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import Mapview from './components/mapview';
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


        <Switch>
          <Route path="/homes">
            <div>some options</div>
            <div className="homes_main">
              <Mapview className="gmap"></Mapview>
              <p>list view</p>
            </div>
            
          </Route>

          <Route path="/">
            {/* <Header></Header> */}
            <Search></Search>
            <Main_options></Main_options>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
