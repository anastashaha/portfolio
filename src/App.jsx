import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/About';
import Projects from './components/Projects';
import Play from './components/Play';

// Import individual projects
import Rescue from './components/Rescue';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
