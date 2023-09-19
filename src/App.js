import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import TamanhoPizza from './Components/TamanhoPizza/TamanhoPizza';
import SaboresPizza from './Components/SaboresPizza/SaboresPizza';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TamanhoPizza />} />
        <Route path="/sabores" element={<SaboresPizza />} />
      </Routes>
    </Router>
  );
}

export default App;
