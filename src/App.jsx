import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/About';
import Projects from './components/Projects';
import Play from './components/Play';

// Import individual projects
import Rescue from './components/Rescue';
import Kodify from './components/Kodify';
import Marceline from './components/Marceline';
import MentalHealthML from './components/MentalHealthML';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/play" element={<Play />} />
          <Route path="/projects/rescue" element={<Rescue />} />
          <Route path="/projects/kodify" element={<Kodify />} />
          <Route path="/projects/marceline" element={<Marceline />} /> 
          <Route path="/projects/mentalhealthintech" element={<MentalHealthML />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
