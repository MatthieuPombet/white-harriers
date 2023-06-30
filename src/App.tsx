import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
