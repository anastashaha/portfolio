import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/About';
import Projects from './components/Projects';
import Play from './components/Play';
// import './index.css';

// Import individual projects
import Rescue from './components/Rescue';
import Kodify from './components/Kodify';
import Marceline from './components/Marceline';
import MentalHealthML from './components/MentalHealthML';
import Seeds from './components/Seeds'
import DataBootcamp from './components/DataBootcamp';

function App() {

  // useEffect(() => {

  //   const handleMouseMove = (event) => {
  //     const cursor = document.querySelector('.cursor');
  //     console.log(cursor);
  //     if (cursor) {
  //       cursor.style.left = `${event.clientX}px`;
  //       cursor.style.top = `${event.clientY}px`;
  //     }
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (

    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/play" element={<Play />} />
          <Route path="/projects/databootcamp" element={<DataBootcamp />} />
          <Route path="/projects/rescue" element={<Rescue />} />
          <Route path="/projects/kodify" element={<Kodify />} />
          <Route path="/projects/marceline" element={<Marceline />} /> 
          <Route path="/projects/mentalhealthintech" element={<MentalHealthML />} />
          <Route path="/projects/seeds" element={<Seeds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
