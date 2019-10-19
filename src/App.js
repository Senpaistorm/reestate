import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import Mapview from './components/mapview';
import Main_options from './components/main_options';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      {/* <Mapview></Mapview> */}
      <Main_options></Main_options>
      <Footer></Footer>
    </div>
  );
}

export default App;
