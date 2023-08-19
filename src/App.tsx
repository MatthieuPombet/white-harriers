import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeClub from './Components/LeClub/LeClub';
import Inscriptions from './Components/Inscriptions/Inscriptions';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";
import Actus from './Components/Actus/Actus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leclub/" element={<LeClub />} />
          <Route path="/inscriptions/" element={<Inscriptions />} />
          <Route path="/actus/" element={<Actus />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );

}

export default App;
