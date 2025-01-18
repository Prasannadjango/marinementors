import React from 'react';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services';

function App() {
  return (
    <main>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
      
    </main>
  );
}

export default App;
