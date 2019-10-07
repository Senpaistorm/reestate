import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
}

export default App;