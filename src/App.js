import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';
import Hero from './Components/Hero/Index';
import SchoolInfo from './Components/SchoolInfo/Index';
import PrincipalMessage from './Components/Principle/Index';
import Facilities from './Components/Facilities/Index';
import SchoolGallery from './Components/SchoolGallery/Index';
import Err from './Components/Error/Index'; // for handling 404 pages

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero />
          <SchoolInfo />
          <PrincipalMessage />
          <Facilities />
          <SchoolGallery />
        </>} />
        <Route path="/school-info" element={<SchoolInfo />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<SchoolGallery />} />
        <Route path="*" element={<Err />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
